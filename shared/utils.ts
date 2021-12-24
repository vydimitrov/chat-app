export const isSSR = typeof window === 'undefined'

export const modifyChannelName = (name: string) => name.replace(' ', '-')
