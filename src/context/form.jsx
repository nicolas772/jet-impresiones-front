import React, { createContext, useState } from 'react'
import { PAY_METHODS } from '../constants/payMethods'

export const FormCheckoutContext = createContext()

export function FormCheckoutProvider ({ children }) {
  const [payMethod, setPayMethod] = useState(PAY_METHODS.KHIPU)
  const [errors, setErrors] = useState({})

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
    setFormData(newData)
  }

  const handleValidation = () => {
    const newErrors = {}
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'streetAdress',
      'numberAdress',
      'region',
      'comuna',
      'postalCode'
    ]

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field} es requerido`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleValidation()) {
      console.log('Formulario válido', formData)
    } else {
      (
        console.log('Formulario invalido, mostrar errores', errors)
      )
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
        errors,
        formData
      }}
    >
      {children}
    </FormCheckoutContext.Provider>
  )
}
