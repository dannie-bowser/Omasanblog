import React from 'react'

const Bloglistings = ({ blogs, title, handleDelete }) => {
  return (
    <>
       <h3 className='blogtitle'>Latest Feeds:</h3>
       {blogs.map(blog =>(
        <div className='blog-preview' key={ blog.id }>
            <h3> { blog.title }</h3>
            <h5>written by: { blog.author }</h5>
            <button onClick={() => handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </>
  )
}

export default Bloglistings