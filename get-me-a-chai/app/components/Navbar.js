import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-gray-900 text-white flex justify-between items-center px-10 h-16'>
      <Link href={"/"}>
      <div className='font-bold text-xl flex justify-center items-center'>
        <img src="source.gif" alt="nav-chai-img" width={50} />
        <span className='mt-2'>GetMeaChai!</span>
      </div>
      </Link>
    {/* <ul className='flex justify-between gap-4'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Sign Up</li>
      <li>Login</li>
    </ul> */}
    <div>
      <Link href={"/login"}>
      <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer'>Login</button>
      </Link>
    </div>
    </nav>
    </>
  )
}

export default Navbar