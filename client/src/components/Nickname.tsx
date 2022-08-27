interface NicknameProps {
  setNickname: (nickname: string) => void
}

export const Nickname: React.FC<NicknameProps> = ({ setNickname }) => {
  return (
    <div className='bg-gray-50'>
      <div className='container max-w-screen-sm mx-auto'>
        <div className='h-100vh text-center py-14 px-5'>
          <h3 className='text-xl mb-14'>Set your nickname</h3>
          <input
            className='py-2 px-2 mb-2 rounded-xl w-full border'
            type='text'
            name='nickname'
            placeholder='Your nickname'
            onChange={(e) => setNickname(e.target.value)}
          />
          <button className='bg-sky-500 hover:bg-sky-400 px-4 py-2 block w-full rounded-lg focus:ring-4 focus:ring-sky-400'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
