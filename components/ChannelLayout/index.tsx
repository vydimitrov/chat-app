import { Layout, Aside, Header, Main, Title, Footer } from './styles'
import { MessageForm } from '../MessageForm'
import { ChannelList } from '../ChannelList'
import { MessageList } from '../MessageList'

type Props = {
  channel: string
}

export const ChannelLayout: React.FC<Props> = ({ channel }) => {
  return (
    <Layout>
      <Aside>
        <ChannelList />
      </Aside>
      <Header>
        <Title>#{channel}</Title>
      </Header>
      <Main>
        <MessageList />
      </Main>
      <Footer>
        <MessageForm />
      </Footer>
    </Layout>
  )
}
