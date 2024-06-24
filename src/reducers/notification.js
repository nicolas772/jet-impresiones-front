export const notificationInitialState = JSON.parse(window.localStorage.getItem('cartNotifications')) || {
  notifications: 0,
  showNotifications: false
}

export const NOTIFICATION_ACTION_TYPES = {
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION'
}

export const updateNotificationLocalStorage = (state) => {
  window.localStorage.setItem('cartNotifications', JSON.stringify(state))
}

const UPDATE_NOTIFICATION_BY_ACTION = {
  [NOTIFICATION_ACTION_TYPES.ADD_NOTIFICATION]: (state, action) => {
    const newState = {
      ...state,
      notifications: state.notifications + 1,
      showNotifications: true
    }
    updateNotificationLocalStorage(newState)
    return newState
  },
  [NOTIFICATION_ACTION_TYPES.CLEAR_NOTIFICATION]: (state) => {
    const newState = {
      ...state,
      notifications: 0,
      showNotifications: false
    }
    updateNotificationLocalStorage(newState)
    return newState
  }
}

export const notificationReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_NOTIFICATION_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
