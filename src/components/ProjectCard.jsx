import React from 'react'

const ProjectCard = ({title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 border rounded-xl shadow-sm bg-blue-100 py-3 px-5 w-[50%]'>
<h3 className='text-xl font-semibold'>{title}</h3>
<p className='text-gray-600 text-center'>{description}</p>
    </div>
  )
}

export default ProjectCard