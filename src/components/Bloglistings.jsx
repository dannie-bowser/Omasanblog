import React from 'react'
import { Link } from 'react-router-dom'

const Bloglistings = ({ blogs, title }) => {



  return (
    <>
         <h3 className='blogtitle'>Latest Feeds:</h3>
         {blogs.map(blog =>(
           <div className='blog-preview' key={ blog.id }>
                <Link to={`/blogs/${blog.id}`}>
                    <h3> { blog.title }</h3>
                    <h5>written by: { blog.author }</h5>
                 </Link>
           </div>
      ))}
    </>
  )
}

export default Bloglistings