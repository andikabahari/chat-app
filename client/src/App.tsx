import { createContext, useState } from 'react'
import { Chat } from './components/Chat'
import { Home } from './components/Home'
import { Nickname } from './components/Nickname'

interface UserState {
  nickname?: string
  roomId?: string
}

export default function App() {
  const [user, setUser] = useState<UserState>({
    nickname: undefined,
    roomId: undefined,
  })

  const setRoomId = (roomId: string) => {
    setUser((user) => {
      return {
        nickname: user.nickname,
        roomId,
      }
    })
  }

  if (user.roomId) {
    return <Nickname />
  }

  if (user.roomId && user.nickname) {
    return <Chat />
  }

  return <Home setRoomId={setRoomId} />
}
