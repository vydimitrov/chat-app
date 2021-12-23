import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import type { User } from '../types'

const userKey = 'chat-app-user'

const isSSR = typeof window === 'undefined'

// The user data should came from an API call to pull it from the server
// For this prototype we save it just in localStorage and use it from there
export const useCurrentUser = () => {
  const router = useRouter()
  const [user, setUser] = useState<User>(() => {
    if (isSSR) {
      return
    }

    const userString = localStorage.getItem(userKey)
    try {
      return userString !== null ? JSON.parse(userString) : undefined
    } catch (error) {
      // Here we can show also an Error message to the user before/after redirecting to login page
      localStorage.remove(userKey)
      router.push('/')
    }
  })

  const saveUser = useCallback((user: User) => {
    localStorage.setItem(userKey, JSON.stringify(user))
    setUser(user)
  }, [])

  return [user, saveUser] as const
}
