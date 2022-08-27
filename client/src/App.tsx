import { useState } from 'react'
import { Home } from './components/Home'
import { Nickname } from './components/Nickname'

export default function App() {
  const [nickname, setNickname] = useState<string>()
  const [roomId, setRoomId] = useState<string>()

  if (roomId) {
    return <Nickname setNickname={setNickname} />
  }

  return <Home setRoomId={setRoomId} />
}
