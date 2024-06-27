import React, { createContext, useState } from 'react'

export const PayMethodContext = createContext()

export const PayMethodProvider = ({ children }) => {
  const [payMethod, setPayMethod] = useState('')

  return (
    <PayMethodContext.Provider
      value={{
        payMethod,
        setPayMethod
      }}
    >
      {children}
    </PayMethodContext.Provider>
  )
}
