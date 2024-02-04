import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div name='burger'></div>
        <div name='logo'></div>
        <div className='navbar'>
          <Link to='/videos'>Videos</Link>
          <Link to='/blog'>Blogs</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/Profile'>Profile</Link>
        </div>
    </div>
    
  )
}

export default Header