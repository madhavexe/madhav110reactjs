import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'

import {data} from '../data'
const About = () => {

const {skills, projects} = data

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-20 bg-red-100 py-10'>
        <Hero />
        <SkillSection skills={skills}/>
        <ProjectSection projects={projects} />
      </div>
    </div>
  )
}

export default About