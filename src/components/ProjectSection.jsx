import React from 'react'
import ProjectCard from './ProjectCard' 

const ProjectSection = ({projects}) => {
   return (
     <div className='flex flex-col items-center gap-4 justify-center'>
         <h2 className='text-2xl font-bold mb-4'>My Projects</h2>
         <div className='flex gap-6 flex-wrap items-center justify-center'>
         {projects.map((elem, idx) => {
             return <ProjectCard title={elem.title} description={elem.description} key={idx} />
         })}
         </div>
     </div>
   )
 }

export default ProjectSection