import { useRouter } from 'next/router'
import { ChannelLayout } from '../../components/ChannelLayout'

const Channel = () => {
  const router = useRouter()
  const { channel } = router.query

  if (typeof channel !== 'string') {
   return null;
  }

  return <ChannelLayout  channel={channel}/>
}

export default Channel