import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


const Github = () => {
const data = useLoaderData();

// const [data , setData] = useState([]);

    // useEffect(() => {
    //    fetch("https://api.github.com/users/Pratik4230")
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data)
    //     setData(data)
      
    //    })
    // }, [])

  return (
    <div className='text-center bg-slate-600 mx-80 text-white text-xl p-6'>
        <p>Github : {data.login}</p>
        <p>{data.url}</p>
    </div>

  )
}

export default Github

export   const   githubInfoLoader = async () => {
     const response = await fetch("https://api.github.com/users/Pratik4230")
     return response.json()
}