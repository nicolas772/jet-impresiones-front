import React, { createContext, useState } from 'react'
import { PAY_METHODS } from '../constants/payMethods'
// import { useNavigate } from 'react-router-dom'
import { validateRut, formatRut } from '@fdograph/rut-utilities'
import { useCart } from '../hooks/useCart'
import { SHIP_PRICE, TRANSFER_DISCOUNT_PERCENTAGE } from '../constants/ship'
import OrderService from '../services/orders.service'

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

export const FormCheckoutContext = createContext()

export function FormCheckoutProvider ({ children }) {
  const [payMethod, setPayMethod] = useState(PAY_METHODS.KHIPU)
  const [errors, setErrors] = useState({})
  const { cart } = useCart()
  // const navigate = useNavigate()

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
    orderNotes: ''
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
    const items = cart.map(({ id, title, selectedColor, quantity, price, discountPercentage }) => {
      const subtotal = (price * quantity) * (1 - (discountPercentage / 100))
      subtotalArr.push(subtotal)
      return {
        id, title, selectedColor: selectedColor.name, quantity, price, discountPercentage, subtotal
      }
    })
    const totalAmount = subtotalArr.reduce((prev, curr) => (prev + curr), 0)
    const transferDiscount = (payMethod === PAY_METHODS.TRANSFER) ? totalAmount * TRANSFER_DISCOUNT_PERCENTAGE / 100 : 0
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
      comuna: formData.comuna,
      postalCode: formData.postalCode,
      orderNotes: formData.orderNotes
    }
    const newOC = {
      items,
      totalAmount,
      transferDiscount,
      ShippingPrice: SHIP_PRICE,
      shippingAddress,
      customerData,
      payMethod
    }
    return newOC
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleValidation()) {
      const newOC = createOCFormat()
      if (payMethod === PAY_METHODS.TRANSFER) {
        // navigate('/transfer-confirmation')
        OrderService.createOrder(newOC).then(
          (response) => {
            console.log(response)
          },
          (error) => {
            console.log(error)
          }
        )
      } else {
        // navigate('/order-confirmation')
        OrderService.createOrder(newOC).then(
          (response) => {
            console.log(response.data)
          },
          (error) => {
            console.log(error)
          }
        )
      }
    } else {
      console.log('Formulario invalido, mostrar errores', errors)
    }
  }

  return (
    <FormCheckoutContext.Provider
      value={{
        payMethod,
        setPayMethod,
        isTransferencia: payMethod === PAY_METHODS.TRANSFER,
        handleInputChange,
        handleValidation,
        handleSubmit,
        handleBlur,
        errors,
        formData
      }}
    >
      {children}
    </FormCheckoutContext.Provider>
  )
}
