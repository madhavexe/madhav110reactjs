import React from 'react'
import {data} from '../data'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const {name, role} = data
    return (
        <nav className='flex justify-between items-center px-7 py-4 border-b border-b-1'>
            <Link to='/'>
            <span className='text-2xl font-semibold'>{name}</span>
            </Link>
            <ul className='flex gap-5 items-center'>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <span className='text-xl '>{role}</span>
        </nav>
    )
}

export default Navbar