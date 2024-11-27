import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/bradtraversy').then(res => res.json()).then(data => setData(data))
    // }, [])
  return (
    <div>Github Followers : {data.followers} </div>
  )
}

export default Github