import React from 'react'
import { useState, useEffect } from 'react'
import Bloglistings from './Bloglistings';
import useFetch from '../UseFetch';

const Homepage = () => {

    const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs');



        
        const handleDelete = (id) => {

          const newBlogs = blogs.filter(blog => blog.id != id);

          setBLogs(newBlogs);

        }

       

  return (
    <>
       {error && <div className='loading'>{ error }</div>}
      {blogs && <Bloglistings blogs={blogs} title="Latest Feeds:" handleDelete={handleDelete} />} 
      {loading && <p className='loading'>Loading resources...</p>}
    </>
  )
}

export default Homepage