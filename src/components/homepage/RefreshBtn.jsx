const RefreshBtn = ({setRefresh}) => {
  return (
    <div className='w-full h-full bg-linear-to-br  from-cyan-600/70 to-blue-400 flex justify-between px-5 pt-5  '>
      <div>
        <p className='text-2xl font-semibold text-white'>Post</p>
      </div>
      <button
        onClick={() => {
          setRefresh((prevState) => !prevState);
        }}
        className="shadow-md mb-3 hover:bg-green-600 ease-in-out duration-150 hover:-translate-y-1 active:translate-0 hover:shadow-green-500 bg-green-500 px-5 py-2 rounded-xl text-white font-semibold"
      >
        Refresh
      </button>
    </div>
  )
}

export default RefreshBtn