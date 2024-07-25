/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'
import { PAY_METHODS } from '../constants/payMethods'
import { useNavigate } from 'react-router-dom'
import { validateRut, formatRut } from '@fdograph/rut-utilities'
import { useCart } from '../hooks/useCart'
import { SHIP_PRICE, TRANSFER_DISCOUNT_PERCENTAGE, KHIPU_MAX_PRICE } from '../constants/ship'
import OrderService from '../services/orders.service'
import KhipuService from '../services/khipu.service'
import { MAIN_URL } from '../constants/url'
import { transferData } from '../constants/transferData'

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'rut',
  'streetAdress',
  'numberAdress',
  'region',
  'comuna',
  'postalCode'
]

const savePaymentId = (orderId, paymentId) => {
  const payments = JSON.parse(localStorage.getItem('payments')) || {}
  payments[orderId] = paymentId
  localStorage.setItem('payments', JSON.stringify(payments))
}

export const FormCheckoutContext = createContext()

export function FormCheckoutProvider ({ children }) {
  const [payMethod, setPayMethod] = useState(PAY_METHODS.TRANSFER)
  const [khipuDisabled, setKhipuDisabled] = useState(true)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})
  const { cart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const subtotal = cart.reduce((prev, curr) => {
      const subtotalProduct = (curr.price * curr.quantity) * (1 - (curr.discountPercentage / 100))
      return prev + subtotalProduct
    }, 0)
    const totalWithShip = subtotal + SHIP_PRICE
    if (totalWithShip > KHIPU_MAX_PRICE) {
      setKhipuDisabled(true)
      setPayMethod(PAY_METHODS.TRANSFER)
    } else {
      (
        setKhipuDisabled(false)
      )
    }
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rut: '',
    streetAdress: '',
    numberAdress: '',
    apartment: '',
    region: '',
    comuna: '',
    postalCode: '',
    orderNotes: '',
    country: 'Chile'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newData = {
      ...formData,
      [name]: value
    }
    if (name === 'region') {
      newData.comuna = ''
    }
    setFormData(newData)
  }
  const validateField = (name, value) => {
    let error = ''
    if (!value && REQUIRED_FIELDS.includes(name)) {
      error = 'Este campo es requerido'
    }
    if (name === 'email' && value) {
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'El email no es válido'
      }
    }
    if (name === 'rut' && value) {
      if (!validateRut(value)) {
        error = 'El rut no es válido.'
      } else {
        const newData = {
          ...formData,
          [name]: formatRut(value)
        }
        setFormData(newData)
      }
    }
    return error
  }
  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors({
      ...errors,
      [name]: error
    })
  }
  const handleValidation = () => {
    const newErrors = {}

    REQUIRED_FIELDS.forEach(field => {
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const createOCFormat = () => {
    const subtotalArr = []
    const subtotalNoDctoArr = []
    const items = cart.map(({ id, title, selectedColor, quantity, price, discountPercentage, thumbnail }) => {
      const subtotalNoDcto = price * quantity
      const subtotal = subtotalNoDcto * (1 - (discountPercentage / 100))
      subtotalArr.push(subtotal)
      subtotalNoDctoArr.push(subtotalNoDcto)
      return {
        id, title, selectedColor: selectedColor.name, quantity, price, discountPercentage, subtotal, thumbnail
      }
    })
    let totalAmount = subtotalArr.reduce((prev, curr) => (prev + curr), 0)
    const totalAmountNoDcto = subtotalNoDctoArr.reduce((prev, curr) => (prev + curr), 0)
    const transferDiscount = (payMethod === PAY_METHODS.TRANSFER) ? totalAmount * TRANSFER_DISCOUNT_PERCENTAGE / 100 : 0
    totalAmount -= transferDiscount
    const status = (payMethod === PAY_METHODS.TRANSFER) ? 'En espera transferencia' : 'Recibida'
    const mailSended = false
    const customerData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      rut: formData.rut
    }
    const shippingAddress = {
      streetAdress: formData.streetAdress,
      numberAdress: formData.numberAdress,
      apartment: formData.apartment,
      region: formData.region,
      country: formData.country,
      comuna: formData.comuna,
      postalCode: formData.postalCode,
      orderNotes: formData.orderNotes
    }
    const newOC = {
      items,
      totalAmount,
      totalAmountNoDcto,
      transferDiscount,
      ShippingPrice: SHIP_PRICE,
      shippingAddress,
      customerData,
      transferData,
      payMethod,
      status,
      mailSended,
      bank: '',
      bankAccountNumber: '',
      fundsSource: ''
    }
    return newOC
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (handleValidation()) {
      const newOC = createOCFormat()
      try {
        const response = await OrderService.createOrder(newOC)
        const newOCwithID = response.data // es lo mismo que newOC, pero con el id de OC
        if (payMethod === PAY_METHODS.TRANSFER) {
          await OrderService.sendEmailTransfer(newOCwithID)
          navigate(`/transfer-confirmation/${newOCwithID.id}`)
        } else if (payMethod === PAY_METHODS.KHIPU) {
          const monto = newOCwithID.totalAmount + newOCwithID.ShippingPrice
          const currency = 'CLP'
          const subject = `Pago Orden n° ${newOCwithID.id}`
          const returnUrl = MAIN_URL + `/payment-verification/${newOCwithID.id}`
          const errorUrl = MAIN_URL + '/order-confirmation/error'
          const khipuResponse = await KhipuService.createPayment(
            monto,
            currency,
            subject,
            newOCwithID.id,
            returnUrl,
            errorUrl
          )
          // eslint-disable-next-line camelcase
          const { payment_id, payment_url } = khipuResponse.data
          savePaymentId(newOCwithID.id, payment_id)
          // eslint-disable-next-line camelcase
          window.location.href = payment_url
        }
      } catch (error) {
        console.error(error)
        if (payMethod === PAY_METHODS.TRANSFER) {
          navigate('/transfer-confirmation/error')
        } else {
          navigate('/order-confirmation/error')
        }
      }
    } else {
      console.log('Formulario inválido, mostrar errores', errors)
      setSending(false)
    }
  }

  return (
    <FormCheckoutContext.Provider
      value={{
        payMethod,
        setPayMethod,
        sending,
        setSending,
        isTransferencia: payMethod === PAY_METHODS.TRANSFER,
        handleInputChange,
        handleValidation,
        handleSubmit,
        handleBlur,
        errors,
        formData,
        khipuDisabled
      }}
    >
      {children}
    </FormCheckoutContext.Provider>
  )
}
