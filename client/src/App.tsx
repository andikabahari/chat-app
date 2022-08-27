import { useState } from 'react'
import { Home } from './components/Home'
import { Nickname } from './components/Nickname'

export default function App() {
  const [roomId, setRoomId] = useState<string>()

  if (roomId) {
    return <Nickname roomId={roomId} />
  }

  return <Home setRoomId={setRoomId} />
}
