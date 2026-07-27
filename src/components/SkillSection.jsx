import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = ({skills}) => {

  return (
    <div className='flex flex-col items-center gap-4 justify-center'>
        <h2 className='text-2xl font-bold mb-4'>My Skills</h2>
        <div className='flex gap-6 flex-wrap items-center justify-center'>
        {skills.map((elem) => {
            return <SkillCard skill={elem} />
        })}
        </div>
    </div>
  )
}

export default SkillSection