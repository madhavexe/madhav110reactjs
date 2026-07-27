import React from 'react'
import {data} from '../data'

const Hero = () => {
    const {bio} = data
  return (
    <>
<p className='text-xl'>{bio}</p>
    </>
  )
}

export default Hero