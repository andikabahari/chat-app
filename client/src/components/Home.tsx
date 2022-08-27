export const Home: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container max-w-screen-sm mx-auto'>
        <div className='h-100vh text-center py-14 px-5'>
          <h3 className='text-xl mb-14'>Welcome to Chat App</h3>
          <button className='bg-teal-500 hover:bg-teal-400 px-4 py-2 block w-full rounded-lg focus:ring-4 focus:ring-teal-400'>
            Create a room
          </button>
          <div className='my-3'>or</div>
          <input
            className='py-2 px-2 mb-2 rounded-xl w-full border'
            type='text'
            name='room_id'
            placeholder='Room ID'
          />
          <button className='bg-sky-500 hover:bg-sky-400 px-4 py-2 block w-full rounded-lg focus:ring-4 focus:ring-sky-400'>
            Join
          </button>
        </div>
      </div>
    </div>
  )
}
