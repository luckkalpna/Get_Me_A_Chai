import React from 'react'

const username = ({params}) => {
  return (
    <>
    <div className='cover w-full relative'>
      <img className='object-cover w-full h-[350]' src="profile_bg.gif" alt="banner-img" />
      <div className='absolute -bottom-15 right-[44%] border-2 border-white rounded-full'>
        <img className='rounded-full' width={200} height={200} src="profile.gif" alt="profile-img" />
      </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-20">
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400 capitalize'>created animated art for KALPANA's</div>
        <div className='text-slate-400'>9,719 members . 82 posts  . $15,450/release</div>

        <div className='payment flex gap-3 w-[80%] my-5'>
          <div className='supporters w-1/2 bg-slate-900 p-10 text-white'>
          {/* show list of all the supporters as a leaderboard  */}
          <h2 className='text-lg font-bold my-4'>Supporters</h2>
          <ul className='mx-5'>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
            <li className='my-2'>Neha donated $20 with a message ""</li>
          </ul>
          </div>
          <div className='makePayment w-1/2 bg-slate-900 p-10 text-white'>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default username