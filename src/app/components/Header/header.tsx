import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 '>

      <div className='flex flex-col pt-[40px] pl-[60px]  w-[148px] h-[44px] text-[#3563E9]   '>
        <h1 className='morent'>MORENT</h1>
      </div>

      <div className=' pt-[40px] pl-[272px] flex flex-col ' >
        <button className=' button rounded-[70px] border-[1px] border-[#C3D4E966] text-[#596780] w-[492px] h-[44px] '>Search something here</button>
      </div>

    


    </div>
  )
}

export default header
