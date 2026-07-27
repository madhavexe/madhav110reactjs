import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SkillSection from '../components/SkillSection'
import {data} from '../data'
const About = () => {

const {skills} = data

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-15 md:h-[90%] bg-red-100'>
        <Hero />
        <SkillSection skills={skills}/>
      </div>
    </div>
  )
}

export default About