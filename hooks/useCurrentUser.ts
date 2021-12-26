import { useCallback } from 'react'
import type { User } from 'shared/types'
import { useLocalStorage } from './useLocalStorage'

const userKey = 'chat-app-user'

// The user data should came from an API call to pull it from the server
// For this prototype we save it just in localStorage and use it from there
export const useCurrentUser = () => {
  const [user, setCurrentUser] = useLocalStorage<User>(userKey)

  const addChannel = useCallback(
    (channel: string) => {
      // remove duplicates
      const channels = [...new Set([channel, ...user.channels])]
      setCurrentUser({ ...user, channels })
    },
    [user, setCurrentUser]
  )

  return { user, setCurrentUser, addChannel }
}
