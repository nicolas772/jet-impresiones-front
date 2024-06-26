import React, { createContext, useState } from 'react'
import { PAY_METHODS } from '../constants/payMethods'
import { useNavigate } from 'react-router-dom'

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'email',
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
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleValidation()) {
      navigate('/order-confirmation')
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
