import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const AddBlog = () => {

   const [title, setTitle] = useState(null);
   const [body, setBody] = useState(null);
   const [author, setAuthor] = useState('Albert thorn');
   const [loading, setLoading] = useState(false)
   const history = useHistory();

  const handleSubmit = (e) => {
     e.preventDefault();

     const blog = { title, body, author };

     setLoading(true);
    
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      })
      .then(() => {
        setLoading(false);
        history.push('/');
      })
  }




  return (
    <div  className='content'>
        <h3 className='formhead'>Add a new blog</h3>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
           type="text"
           required
           value={title}
           onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
           required
           value={body}
           onChange={(e) => setBody(e.target.value)}
          />
          <label>Blog title:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Albert thorn">Albert thorn</option>
            <option value="Beneke johnson">Beneke johnson</option>
            <option value="Josephine O'reily">Josephine O'reily</option>
          </select>
          {!loading && <button>Publish blog</button>}
          {loading && <button disabled>Publishing blog...</button>}
        </form>
    </div>
  )
}

export default AddBlog