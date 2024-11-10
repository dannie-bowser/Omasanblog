import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from '../UseFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id);

    console.log(blog);

  return (
    <div className='content'>
        {loading && <p className='loading'>Loading resources...</p>}
        {error && <div className='loading'>{ error }</div>}
        {blog && (
          <article className='blog-details'>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.author }</p>
            <div>{ blog.body }</div>
          </article>

        )}
    </div>
  )
}

export default BlogDetails