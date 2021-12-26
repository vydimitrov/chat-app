const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const CHAT_MESSAGE = 'chat-message'
const THREAD_MESSAGE = 'thread-message'

// Handle IDs
let id = 0
const getId = () => {
  id += 1
  return id.toString()
}

// fake DB
const messages = []
const threadMessages = []

// Handle messages from channels
const channelsWorkspace = io.of(/^\/channel\/[\w.\-]+$/)

channelsWorkspace.on('connection', (socket) => {
  const workspace = socket.nsp
  const channel = workspace.name.replace('/channel/', '')
  const chanelMessages = messages
    .filter((msg) => msg.channel === channel)
    .reverse()

  workspace.emit('initial-messages', chanelMessages)

  socket.on(CHAT_MESSAGE, (message) => {
    const date = new Date().toISOString()
    const data = { ...message, id: getId(), date, channel, replays: 0 }
    messages.push(data)

    workspace.emit(CHAT_MESSAGE, data)
  })
})

// Handle thread messages
const threadsWorkspace = io.of(/^\/thread\/[\d]+$/)

threadsWorkspace.on('connection', (socket) => {
  const workspace = socket.nsp
  const messageId = workspace.name.replace('/thread/', '')
  const message = messages.find((msg) => msg.id === messageId)
  const threads = threadMessages.filter((msg) => msg.parentId === messageId)

  workspace.emit('initial-thread-messages', [message, ...threads])

  socket.on(THREAD_MESSAGE, (newMessage) => {
    const messageIndex = messages.findIndex((msg) => msg.id === messageId)
    const replays = messages[messageIndex].replays + 1

    // Here we update the messages DB with the new count of replays
    // and read the updated message
    messages[messageIndex].replays = replays
    const message = messages[messageIndex]
    channelsWorkspace.emit('chat-message-updated', message)

    id += 1
    const data = {
      ...newMessage,
      id: getId(),
      date: new Date().toISOString(),
      parentId: messageId,
    }

    // Save thread message in DB
    threadMessages.push(data)

    workspace.emit(THREAD_MESSAGE, data)
  })
})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
