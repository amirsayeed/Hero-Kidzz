import Logo from '@/components/layouts/Logo'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
        <h2 className='text-5xl animate-pulse font-bold'>Loading</h2>
        <div className="animate-ping">
            <Logo /> 
        </div>
    </div>
  )
}

export default Loading;
