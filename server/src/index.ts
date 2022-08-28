import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 5000

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

app.get('/', (req, res) => res.json({ message: 'Welcome' }))

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => console.log('user disconnected'))
  socket.on('ping', () => io.emit('pong'))
  socket.on('chat', (payload) => io.in(payload.roomId).emit('chat', payload))
  socket.on('join', (roomId) => socket.join(roomId))
})

server.listen(port, () => console.log(`Server running on port ${port}`))
