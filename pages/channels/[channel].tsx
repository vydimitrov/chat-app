import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { ChannelLayout } from '../../components/ChannelLayout'
import { useCurrentUser } from '../../hooks/useCurrentUser'

const Channel: NextPage = () => {
  const router = useRouter()
  const { user } = useCurrentUser()
  const { channel } = router.query

  // Wait until the channel is set
  if (typeof channel !== 'string') {
    return null
  }

  // Redirect to login page is no user
  if (!user) {
    router.push('/')
    return null
  }

  return <ChannelLayout channel={channel} />
}

export default Channel
