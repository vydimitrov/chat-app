import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import io, { Socket } from 'socket.io-client'

export const useSocket = (namespace: string) => {
  const router = useRouter()
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const socketRef = io(`/${namespace}`)

    // Handle errors from the web socket here
    socketRef.on('error', () => {
      router.push('/error')
    })

    setSocket(socketRef)
    return () => {
      socketRef.disconnect()
    }
  }, [namespace, router])

  return socket
}

export type { Socket }
