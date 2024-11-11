import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../UseFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {

      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
    }

  return (
    <div className='content'>
        {loading && <p className='loading'>Loading resources...</p>}
        {error && <div className='loading'>{ error }</div>}
        {blog && (
          <article className='blog-details'>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>delete</button>
          </article>

        )}
    </div>
  )
}

export default BlogDetails