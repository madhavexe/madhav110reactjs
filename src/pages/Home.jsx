import React from 'react'
import { data } from '../data'
import { Link } from 'react-router-dom'

const Home = () => {
    const { name, role, bio, tags } = data
    return (
        <div className='flex flex-col gap-10 items-center justify-center md:h-screen bg-red-100'>
            <h1 className='text-xl md:text-3xl font-semibold'>Welcome to my Portfolio</h1>
            <div className='flex flex-col gap-6 text-center items-center justify-center md:w-[70%] shadow-sm bg-amber-100 rounded-xl p-5 md:py-15 md:px-6'>
                <img src="https://cdn-icons-png.flaticon.com/512/6714/6714029.png" className='w-[150px] hover:scale-105 transition' alt="" />
                <p>Hello, I'm <span className='text-xl'>{name}</span>, a <span className='text-xl'>{role}</span>.</p>
                <p>{bio}</p>
                <small>Tags : {tags}</small>
                <Link to='/about'><button className='btn'>Know More</button></Link>
            </div>
        </div>
    )
}

export default Home