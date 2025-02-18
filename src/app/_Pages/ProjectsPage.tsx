import React from 'react'
import ProjectCard from '../components/ProjectCard'

const ProjectsPage = () => {
  
  return (
    <div id='Projects' className='projectBG bg-[#8EDBD7]  dark:bg-[#255676] w-screen h-fit pt-60 px-8 md:px-16 lg:px-32 xl:px-56 2xl:px-72  flex flex-col gap-5'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}

export default ProjectsPage