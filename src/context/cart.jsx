import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  return { state, addToCart }
}

// 1. crear contexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider ({ children }) {
  const { state, addToCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
