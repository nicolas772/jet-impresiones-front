import { createContext, useReducer } from 'react'
import { notificationReducer, notificationInitialState } from '../reducers/notification'

function useNotificationReducer () {
  const [state, dispatch] = useReducer(notificationReducer, notificationInitialState)

  const addNotification = () => dispatch({ type: 'ADD_NOTIFICATION' })

  const clearNotification = () => dispatch({ type: 'CLEAR_NOTIFICATION' })

  return { state, addNotification, clearNotification }
}

// 1. crear contexto
export const NotificationContext = createContext()

// 2. crear provider
export function NotificationProvider ({ children }) {
  const { state, addNotification, clearNotification } = useNotificationReducer()

  return (
    <NotificationContext.Provider value={{
      notification: state,
      addNotification,
      clearNotification
    }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
