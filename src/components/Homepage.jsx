import React from 'react'
import { useState, useEffect } from 'react'
import Bloglistings from './Bloglistings';

const Homepage = () => {

    const [blogs, setBLogs] = useState(
        [
        {
            title: "Child Education(Essence).",
            body: "When we talk about education, we often think of classrooms, textbooks, and exams. But the most critical phase of learning begins long before children step into school. Early childhood education (ECE) is the foundation upon which future academic and personal success is built. Research has shown that the first few years of a child’s life are crucial for brain development, social skills, and emotional well-being.",
            author: "Albert thorn",
            id: 1,
        },
        {
            title: "Health Benefits.",
            body: "We’ve all heard the saying, You are what you eat, but have you ever stopped to consider just how true that really is? The food we consume doesn't just fuel our bodies—it directly impacts our overall health, mood, energy levels, and even our ability to think clearly. The benefits of eating nutritious, whole foods extend far beyond just satisfying hunger. A balanced diet plays a critical role in maintaining good health, preventing disease, and supporting a happy, active lifestyle.",
            author: "Beneke johnson",
            id: 2,
        },
        {
            title: "Train your Body!",
            body: "We’ve all heard the saying, You are what you eat, but have you ever stopped to consider just how true that really is? The food we consume doesn't just fuel our bodies—it directly impacts our overall health, mood, energy levels, and even our ability to think clearly. The benefits of eating nutritious, whole foods extend far beyond just satisfying hunger. A balanced diet plays a critical role in maintaining good health, preventing disease, and supporting a happy, active lifestyle.",
            author: "Beneke johnson",
            id: 3,
          }
        ]
        
        );

        const handleDelete = (id) => {

          const newBlogs = blogs.filter(blog => blog.id != id);

          setBLogs(newBlogs);

        }


  return (
    <>
     <Bloglistings blogs={blogs} title="Latest Feeds:" handleDelete={handleDelete}/>
    </>
  )
}

export default Homepage