import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const BlogDetails = () => {

    const { id } = useParams();

  return (
    <div className='content'>
        <div>BlogDetails - { id }</div>
    </div>
  )
}

export default BlogDetails