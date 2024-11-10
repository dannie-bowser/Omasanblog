import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {

        setTimeout(() => {
          fetch(url)
          .then(res => {
            if(!res.ok){
               throw Error('Resource could not be found!');
             } 
            return res.json()
          }
          )
          .then(data => {
            setError(null);
            setData(data);
            setLoading(false);
          })
          .catch(err => {
             setLoading(false);
             setError(err.message);
            })
        }, 700)
      }, [])

 
 
    return { data, loading, error }
}

export default useFetch;