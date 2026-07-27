import React from 'react'
import { data } from '../data'

const Home = () => {
    const {name, role, bio, tags} = data
  return (
    <div className='flex flex-col gap-10 items-center justify-center md:h-screen'>
        <h1 className='text-xl md:text-2xl'>Welcome to my Portfolio</h1>
       <div className='flex flex-col gap-6 items-center justify-center w-[70%]'>
         <p>Hello, I'm <span className='text-xl'>{role}</span>, a {role}.</p>
        <p>{bio}</p>
        <small>Tags : {tags}</small>
       </div>
    </div>
  )
}

export default Home