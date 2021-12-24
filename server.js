const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const CHAT_MESSAGE = 'chat-message'
let id = 0
// fake DB
const messages = {}

// socket.io server
const workspaces = io.of(/^\/[\w.\-]+$/)

workspaces.on('connection', (socket) => {
  const workspace = socket.nsp
  const namespace = workspace.name

  workspace.emit('initial-messages', messages[namespace] || [])

  socket.on(CHAT_MESSAGE, (message) => {
    id += 1
    const date = new Date().toISOString()
    const data = { ...message, id, date }
    messages[namespace] = [data, ...(messages[namespace] || [])]

    workspace.emit(CHAT_MESSAGE, data)
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
