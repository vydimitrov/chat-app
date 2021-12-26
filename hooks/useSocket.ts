import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import io, { Socket } from 'socket.io-client'

type NamespaceType = 'channel' | 'thread'
type Namespace = `${NamespaceType}/${string}`

export const useSocket = (namespace: Namespace) => {
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
