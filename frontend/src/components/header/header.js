import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [searchButton, setSearchButton] = useState(false)

  return (
    <nav className='relative'>
      <div className='h-[80px] md:h-[100px]'></div> {/*Just a placeholer for fixed position*/}
      <div className='w-full h-[80px] md:h-[100px] border-b p-5 flex fixed top-0 z-10 bg-white '>
        <Link to='/home' className='float-right'>
          <img src='' alt='logo' />
        </Link>


        <div className='flex border absolute right-5'>

          <div className='nav-button p-0'><button className='w-full px-5 py-2' onClick={() => setSearchButton(current => !current)}><i className='fi fi-rr-search text-dark-gray p-3 text-2xl' /></button></div>
          <div className='nav-button'><Link to='/videos'  className=''>Videos</Link ></div>
          <div className='nav-button'><Link to='/blogs'  className=''>Blog</Link ></div>
          <div className='nav-button'><Link to='/signup'  className=''>signup</Link ></div>
          <div className='nav-button'><Link to='/login'  className=''>login</Link ></div>
          {/* <div className='nav-button'><Link to='/' className=''>Profile</Link ></div> */}

        </div>

      </div>

      <div className={`search fixed w-full  border z-10 ${!searchButton ? 'hidden' : ''}`}>
        <button className='p-3 absolute right-0'><i className='fi fi-rr-search text-gray-300  text-xl' /></button>
        <input
          placeholder='Search '
          autoFocus
          className='border py-3 px-10 w-full'>
        </input>

      </div>
    </nav>
  )
}

export default Navbar