import React from 'react'
import {data} from '../data'

const Hero = () => {
    const {bio} = data
  return (
    <>
<p className='text-xl text-center md:w-[60%]'>{bio}</p>
    </>
  )
}

export default Hero