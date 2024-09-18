import React from 'react'

const Background = () => {
  return (
    <div className='fixed w-full h-screen'>
        <div className='absolute w-full py-10 text-xl flex justify-center text-zinc-300 font-light'>Documents.</div>
        <h1 className='absolute text-[11vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-zinc-900'>
        Docs.
        </h1>
    </div>
  )
}

export default Background