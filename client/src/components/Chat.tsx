import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

interface ChatProps {
  nickname: string
  roomId: string
}

export const Chat: React.FC<ChatProps> = ({ nickname, roomId }) => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [lastPong, setLastPong] = useState<string | null>(null)

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    socket.on('pong', () => {
      const date = new Date().toISOString()
      setLastPong(date)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('pong')
    }
  }, [])

  const sendPing = () => {
    socket.emit('ping')
  }

  return (
    <div className='bg-gray-50'>
      <div className='container max-w-screen-lg mx-auto'>
        <div className='flex flex-col h-100vh'>
          <div className='bg-white h-full px-3 overflow-y-auto'>
            <div className='mb-5'>
              <p>Connected: {'' + isConnected}</p>
              <p>Last pong: {lastPong || '-'}</p>
              <button
                className='bg-teal-500 hover:bg-teal-400 text-sm px-2 py-1 block rounded-lg focus:ring-4 focus:ring-teal-400'
                onClick={sendPing}
              >
                Send ping
              </button>
            </div>
            <div>
              <span className='font-bold'>andikabahari</span>
              <span className='ml-5'>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div className='bg-gray-200 p-4'>
            <div className='flex'>
              <input
                className='py-2 px-2 rounded-xl w-full'
                type='text'
                name='message'
                placeholder='Your message'
              />
              <button className='bg-gray-500 text-white px-4 py-2 ml-3 rounded-xl focus:ring-4 focus:ring-gray-400'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
