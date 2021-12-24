import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { isSSR } from '../../shared/utils'
import { ChannelLayout } from '../../components/ChannelLayout'
import { useCurrentUser } from '../../hooks/useCurrentUser'

const Channel: NextPage = () => {
  const router = useRouter()
  const { user } = useCurrentUser()
  const { channel } = router.query

  if (typeof channel !== 'string') {
    return null
  }

  if (!isSSR && !user) {
    router.push('/')
  }

  return <ChannelLayout channel={channel} />
}

export default Channel
