import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <footer className='bg-[#3295552e] '>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-28 p-20 px-5 '>
        <div className='flex flex-col pl-[60px] w-hug-[292px] h-hug-[108px] gap-5 ' >
          <h2 className='morent'>MORENT</h2>
          <p>Our vision is to provide convenience 
            and help increase your sales business.
            </p>
        </div>

        <div className='flex flex-col gap-5'>

        </div>

        <div className='flex flex-col gap-5 w-[152px] h-[244px]' >         
          <ul>
              <li className='text-[20px] list-none font-semibold text-[#1A202C] '>About</li>
              <li className='my-4 list-none text-[#13131399]'>How it works</li>
              <li className='my-4 list-none text-[#13131399]'>Featured</li>
              <li className='my-4 list-none text-[#13131399]'>Partnership</li>
              <li className='my-4 list-none text-[#13131399]'>Bussiness Relation</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5 w-[152px] h-[244px]' >
          <ul>
              <li className='text-[20px] list-none font-semibold text-[#1A202C]'>Community</li>
              <li className='my-4 list-none text-[#13131399]'>Events</li>
              <li className='my-4 list-none text-[#13131399]'>Blog</li>
              <li className='my-4 list-none text-[#13131399]'>Podcast</li>
              <li className='my-4 list-none text-[#13131399]'>Invite a friend</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5 w-[152px] h-[244px]' >        
          <ul>
            <li className='text-[20px] list-none font-semibold text-[#1A202C]'>Socials</li>
            <li className='my-4 list-none text-[#13131399]'>Discord</li>
            <li className='my-4 list-none text-[#13131399]'>Instagram</li>
            <li className='my-4 list-none text-[#13131399]'>Twitter</li>
            <li className='my-4 list-none text-[#13131399]'>Facebook</li>
          </ul>
        </div>



      </div>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 font-semibold ' >

        <div className='flex flex-col pl-[60px]  '>
          <h1 className='my-4'>©2022 MORENT. All rights reserved</h1>
         </div>

         <div className='flex flex-col pl-[60px]'>
          <h1 className='my-4' >Privacy & Policy</h1>        
         </div>

         <div  className='flex flex-col pl-[60px]' >
          <h1 className='my-4 ml-[0px,400px]' >Terms & Condition</h1>
         </div>


        </div>

    </footer>









 










    // <div className=' w-[1440] h-[480]  grid grid-cols-4 grid-rows-1 '>
    //   <div>
    //   <h1 className='morent pt-[80px] pl-[60px] w-hug-[292px] h-hug-[108px] gap-[16px] text-[#3563E9]'>MORENT</h1>
    //   <h1 className='pl-[60px] w-[292px] h-[48px] text-[#13131399]'>Our vision is to provide convenience and help increase your sales business.</h1>
    //   </div>
    //   <div >
      
    //   <li className=' pt-[80px] pl-[804px] w-[152px] h-[244px] text-[#1A202C] '>about</li>
    //   <li>How it works </li>
    //   <li>Featured</li>
    //   <li>Partnership</li>
    //   <li>Bussiness Relation</li>





      

      
      
    //   <h1 className='pt-[80px] pl-[1016px] w-[152px] h-[244px] text-[#1A202C] ' >Community</h1>
    //   </div>










    // </div>




    // <div className=' w-[1440] h-[480]'>

    //   <div>  
    //   <div className='morent pt-[80px] pl-[60px] w-hug-[292px] h-hug-[108px] gap-[16px] text-[#3563E9]'>MORENT</div>
    //   <div className='pl-[60px] w-[292px] h-[48px] text-[#13131399]'>Our vision is to provide convenience and help increase your sales business.</div>
    //   </div>
    //   <div className=''>
    //   <div className='pt-[80px] pl-[804px] w-[152px] h-[244px]'>about</div>
    //   <div className='pt-[80px] pl-[804px] w-[152px] h-[244px]'>contct</div>
    //   <div className='pt-[80px] pl-[804px] w-[152px] h-[244px]'>service</div>
    //   </div>
    //   </div>
  )
}

export default footer
