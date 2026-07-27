import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div>
        <p className='p-7 shadow-sm w-fit text-xl bg-amber-200 rounded-xl hover:scale-105 transition cursor-pointer'>{skill}</p>
    </div>
  )
}

export default SkillCard