import React, { createContext, useState } from 'react'
import { PAY_METHODS } from '../constants/payMethods'

export const PayMethodContext = createContext()

export function PayMethodProvider ({ children }) {
  const [payMethod, setPayMethod] = useState(PAY_METHODS.KHIPU)

  return (
    <PayMethodContext.Provider
      value={{
        payMethod,
        setPayMethod,
        isTransferencia: payMethod === PAY_METHODS.TRANSFER
      }}
    >
      {children}
    </PayMethodContext.Provider>
  )
}
