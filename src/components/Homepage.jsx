import React from 'react'
import { useState, useEffect } from 'react'

const Homepage = () => {

    const [blogs, setBLogs] = useState(
        [
        {
            title: "Child Education(Essence).",
            body: "When we talk about education, we often think of classrooms, textbooks, and exams. But the most critical phase of learning begins long before children step into school. Early childhood education (ECE) is the foundation upon which future academic and personal success is built. Research has shown that the first few years of a child’s life are crucial for brain development, social skills, and emotional well-being.",
            author: "Albert thorn"
          },
          {
            title: "Health Benefits.",
            body: "We’ve all heard the saying, You are what you eat, but have you ever stopped to consider just how true that really is? The food we consume doesn't just fuel our bodies—it directly impacts our overall health, mood, energy levels, and even our ability to think clearly. The benefits of eating nutritious, whole foods extend far beyond just satisfying hunger. A balanced diet plays a critical role in maintaining good health, preventing disease, and supporting a happy, active lifestyle.",
            author: "Beneke johnson",
          },
          {
            title: "Train your Body!",
            body: "We’ve all heard the saying, You are what you eat, but have you ever stopped to consider just how true that really is? The food we consume doesn't just fuel our bodies—it directly impacts our overall health, mood, energy levels, and even our ability to think clearly. The benefits of eating nutritious, whole foods extend far beyond just satisfying hunger. A balanced diet plays a critical role in maintaining good health, preventing disease, and supporting a happy, active lifestyle.",
            author: "Beneke johnson"
          }
        ]
        
        );

  return (
    <>
      <h3 className='blogtitle'>Latest Feeds:</h3>
      {blogs.map(blog =>(
        <div className='blog-preview'>
            <h3> { blog.title }</h3>
            <p>{ blog.body }</p>
            <h5>written by: { blog.author }</h5>
        </div>
      ))}
    </>
  )
}

export default Homepage