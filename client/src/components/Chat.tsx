import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

interface ChatProps {
  nickname: string
  roomId: string
}

interface ChatPayload {
  nickname: string
  roomId: string
  message: string
}

export const Chat: React.FC<ChatProps> = ({ nickname, roomId }) => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [lastPong, setLastPong] = useState<string | null>(null)
  const [chat, setChat] = useState<ChatPayload[]>([])
  const [message, setMessage] = useState<string | null>(null)

  const initialRender = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('disconnect', () => setIsConnected(false))
    socket.on('pong', () => setLastPong(new Date().toISOString()))
    socket.on('chat', (payload) => setChat((chat) => [...chat, payload]))

    if (!initialRender.current) {
      console.log(roomId)
      socket.emit('join', roomId)
    }

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('pong')
      socket.off('chat')

      initialRender.current = true
    }
  }, [])

  return (
    <div className='bg-gray-50'>
      <div className='container max-w-screen-lg mx-auto'>
        <div className='flex flex-col h-100vh'>
          <div className='bg-white h-full px-3 overflow-y-auto'>
            <div className='mb-5'>
              <div className='text-sm'>
                <b>Nickname:</b> {nickname}
              </div>
              <div className='text-sm'>
                <b>Room ID:</b> {roomId}
              </div>
              <div className='text-sm'>
                <b>Connected:</b> {'' + isConnected}
              </div>
              <div className='text-sm'>
                <b>Last pong:</b> {lastPong || '-'}
              </div>
              <button
                className='bg-teal-500 hover:bg-teal-400 text-sm px-2 py-1 block rounded-lg focus:ring-4 focus:ring-teal-400'
                onClick={() => socket.emit('ping')}
              >
                Send ping
              </button>
            </div>
            {chat.map((payload, index) => (
              <div key={index}>
                <span className='font-bold'>{payload.nickname}</span>
                <span className='ml-5'>{payload.message}</span>
              </div>
            ))}
          </div>
          <div className='bg-gray-200 p-4'>
            <div className='flex'>
              <input
                className='py-2 px-2 rounded-xl w-full'
                type='text'
                name='message'
                placeholder='Your message'
                onChange={(e) => setMessage(e.target.value)}
                ref={inputRef}
              />
              <button
                className='bg-gray-500 text-white px-4 py-2 ml-3 rounded-xl focus:ring-4 focus:ring-gray-400'
                onClick={() => {
                  if (!message) return

                  const payload = {
                    nickname,
                    roomId,
                    message,
                  }
                  socket.emit('chat', payload)

                  setMessage(null)
                  if (inputRef.current) {
                    inputRef.current.value = ''
                  }
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
