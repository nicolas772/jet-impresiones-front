import { useContext } from 'react'
import { NotificationContext } from '../context/notification'

export const useNotification = () => {
  const context = useContext(NotificationContext)

  if (context === undefined) {
    throw new Error('useNotification debe ser usado con el NotificationProvider')
  }

  return context
}
