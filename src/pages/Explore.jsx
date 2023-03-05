import React from 'react'
import axios from 'axios' 

export default function Explore() {
     function getApi() {
        let main = axios.get("api/v1/jobs").then((res) => console.log(res))
     }

     getApi()
  return (
    <div>Explore</div>
  )
}
