import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundpage = () => {
  return (
    <div className='loading'>
        <h3>Oops! 404</h3>
        <p>page not found</p>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default NotFoundpage