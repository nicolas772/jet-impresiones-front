import { useContext } from 'react'
import { PayMethodContext } from '../context/payMethod'

export const usePayMethod = () => {
  const context = useContext(PayMethodContext)

  if (context === undefined) {
    throw new Error('usePayMethodContext debe ser usado con el payMethodProvider')
  }

  return context
}
