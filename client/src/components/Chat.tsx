export const Chat: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container max-w-screen-lg mx-auto'>
        <div className='flex flex-col h-100vh'>
          <div className='bg-white h-full px-3 overflow-y-auto'>
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
