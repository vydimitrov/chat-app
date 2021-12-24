import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { isSSR } from 'shared/utils'

type KeyValuePair<TKey, TValue> = { key: TKey; value: TValue }

const getLocalStorageChangeEvent = () => {
  if (isSSR) {
    return null
  }

  return class LocalStorageChangeEvent<TValue> extends CustomEvent<
    KeyValuePair<string, TValue>
  > {
    static eventName = 'onLocalStorageChange'

    constructor(detail: KeyValuePair<string, TValue>) {
      super(LocalStorageChangeEvent.eventName, { detail })
    }

    static is<T>(event: any): event is LocalStorageChangeEvent<T> {
      return (
        !!event &&
        (event instanceof LocalStorageChangeEvent ||
          (event.detail && event.type === LocalStorageChangeEvent.eventName))
      )
    }
  }
}

const LocalStorageChangeEvent = getLocalStorageChangeEvent()

const writeStorage = <TValue>(key: string, value: TValue) => {
  if (LocalStorageChangeEvent === null) {
    return
  }

  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : `${value}`
  )

  window.dispatchEvent(new LocalStorageChangeEvent({ key, value }))
}

export const useLocalStorage = <TValue = string>(key: string) => {
  const router = useRouter()
  const [value, setValue] = useState<TValue>(() => {
    if (isSSR) {
      return
    }

    const userString = localStorage.getItem(key)
    try {
      return userString !== null ? JSON.parse(userString) : undefined
    } catch (error) {
      // Here we can show also an Error message to the user before/after redirecting to login page
      localStorage.remove(key)
      router.push('/')
    }
  })
  const state: TValue = value
  const setState = useCallback((val: TValue) => writeStorage(key, val), [key])

  useEffect(() => {
    if (LocalStorageChangeEvent === null) {
      return
    }

    const onChange = (e: Event) => {
      if (LocalStorageChangeEvent.is<TValue>(e) && e.detail.key === key) {
        setValue(e.detail.value)
      }
    }

    window.addEventListener(LocalStorageChangeEvent.eventName, onChange)

    return () => {
      window.removeEventListener(LocalStorageChangeEvent.eventName, onChange)
    }
  }, [key, setState])

  return [state, setState] as const
}
