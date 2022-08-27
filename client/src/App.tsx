import { createContext, useState } from 'react'
import { Chat } from './components/Chat'
import { Home } from './components/Home'
import { Nickname } from './components/Nickname'

export default function App() {
  const [nickname, setNickname] = useState<string>()
  const [roomId, setRoomId] = useState<string>()

  if (roomId) {
    return <Nickname />
  }

  if (roomId && nickname) {
    return <Chat />
  }

  return <Home setRoomId={setRoomId} />
}
