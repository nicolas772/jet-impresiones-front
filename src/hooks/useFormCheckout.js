import { useContext } from 'react'
import { FormCheckoutContext } from '../context/form'

export const useFormCheckout = () => {
  const context = useContext(FormCheckoutContext)

  if (context === undefined) {
    throw new Error('useFormCheckout debe ser usado con el FormCheckoutProvider')
  }

  return context
}
