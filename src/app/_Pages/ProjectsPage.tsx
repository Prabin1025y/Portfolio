import React from 'react'
import ProjectCard from '../components/ProjectCard'

const ProjectsPage = () => {
  
  return (
    <div className='projectBG bg-[#8EDBD7]  dark:bg-[#255676] w-screen h-fit pt-60 px-72 flex flex-col gap-5'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}

export default ProjectsPage