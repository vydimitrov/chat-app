export const isSSR = typeof window === 'undefined'

export const modifyChannelName = (name: string) => name.replace(' ', '-')

export const scrollToElement = (element?: Element | null) => {
  element?.scrollIntoView({
    block: 'end',
    inline: 'nearest',
    behavior: 'smooth',
  })
}
