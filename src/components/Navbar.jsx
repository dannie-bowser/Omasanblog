import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
       <nav>
        <div className='logoArea'><img className="logo" src={logo} /><h2>omaBlogs</h2></div>
        <div>
          <Link to="/" className='navlink'>Home</Link>
          <Link to="/AddBlog" className='navlink'>Add Blog</Link>
        </div>
      </nav> 
      
    </>
  )
}

export default Navbar