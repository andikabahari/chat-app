import express from 'express'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 5000

const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

server.listen(port, () => console.log(`Server running on port ${port}`))
