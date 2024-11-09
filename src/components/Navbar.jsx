import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
       <nav>
        <div className='logoArea'><img className="logo" src={logo} /><h2>OMA Blogs</h2></div>
        <div>
          <a href="/" className='navlink'>Home</a>
          <a href="/AddBlog" className='navlink'>Add Blog</a>
        </div>
      </nav> 
      
    </>
  )
}

export default Navbar