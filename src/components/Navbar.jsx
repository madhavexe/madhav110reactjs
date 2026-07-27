import React from 'react'
import {data} from '../data'

const Navbar = () => {
    const {name, role} = data
    return (
        <nav className='flex justify-between items-center px-5 py-3'>
            <span className='text-2xl font-semibold'>{name}</span>
            <ul>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <span className='text-2xl font-semibold'>{role}</span>
        </nav>
    )
}

export default Navbar