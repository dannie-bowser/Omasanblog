import React from 'react'
import { useState, useEffect } from 'react'
import Bloglistings from './Bloglistings';

const Homepage = () => {

    const [blogs, setBLogs] = useState(null);
    const [loading, setLoading] = useState(true);
        
        const handleDelete = (id) => {

          const newBlogs = blogs.filter(blog => blog.id != id);

          setBLogs(newBlogs);

        }

        useEffect(() => {

          setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {

              return res.json()
            }
            )
            .then(data => {
              setBLogs(data);
              setLoading(false);
            })
          }, 800)
          
        }, [])


  return (
    <>
      {blogs && <Bloglistings blogs={blogs} title="Latest Feeds:" handleDelete={handleDelete} />} 
      {loading && <p className='loading'>Loading...</p>}
    </>
  )
}

export default Homepage