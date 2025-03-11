import Image from "next/image"
import Link from "next/link"
import { CircleAlert, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { projects } from "@/utils/Utilities"


export default function ProjectPage() {
  // Sample projects data - replace with your actual projects

  const warningProjects = ["GuffGaff", "Raag"]
  const unavailableProjects = ["LightCode", "StoreHub"]

  return (
        <section id='Projects' className='projectBG bg-[#8EDBD7]  dark:bg-[#255676] w-screen h-fit pt-32 sm:pt-60 px-2 sm:px-8 pb-10 md:px-16 lg:px-32 xl:px-56 2xl:px-72  flex flex-col gap-5'>
          <div className=" text-center">
            <h2 className="text-3xl font-bold text-center tracking">PROJECTS</h2>
          </div>
          <div className="py-12 px-4 md:px-6 lg:px-8 ">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-[#3AA6A6]  dark:bg-[#153448] overflow-hidden flex flex-col h-full transition-all duration-300 group relative hover:shadow-xl  border-none">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.imageUrl || "/1.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="bg-[#3AA6A6]  dark:bg-[#153448]">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-normal bg-emerald-200 dark:bg-cyan-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow bg-[#3AA6A6]  dark:bg-[#153448]">
                      <p className="text-cyan-950 dark:text-cyan-200">{project.description}</p>
                    </CardContent>
                    <CardFooter className="flex gap-3 bg-[#3AA6A6]  dark:bg-[#153448]">
                      <Button disabled={unavailableProjects.includes(project.title)} asChild className={`flex-1 transition-transform duration-300 group-hover:translate-y-[-2px] ${unavailableProjects.includes(project.title) && "cursor-not-allowed text-gray-400"}`}>
                        <Link href={project.websiteUrl} target={unavailableProjects.includes(project.title) ? "_self" : "_blank"} rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {project.title === "Better Together" ? "Download Link" : "Visit Site"}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 transition-all duration-300 group-hover:translate-y-[-2px] dark:bg-transparent hover:dark:bg-cyan-800 dark:border-white"
                      >
                        <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    </CardFooter>
                    {warningProjects.includes(project.title) && <div className="pl-4 pr-2 items-center py-2 mx-6 mb-2 -mt-3 rounded-md bg-[#ff11114d] dark:bg-[#cd3b3b2a] text-[#980000] dark:text-[#ff4c4c] border dark:border-[#ff4c4c] border-[#980000] text-sm flex gap-2"><CircleAlert size={16} /> Site might take about 1 min to load the first time.</div> }                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}



// import React from 'react'
// import ProjectCard from '../components/ProjectCard'

// const ProjectsPage = () => {
  
//   return (
//     <div id='Projects' className='projectBG bg-[#8EDBD7]  dark:bg-[#255676] w-screen h-fit pt-60 px-8 pb-10 md:px-16 lg:px-32 xl:px-56 2xl:px-72  flex flex-col gap-5'>
//       <ProjectCard/>
//       <ProjectCard/>
//       <ProjectCard/>
//     </div>
//   )
// }

// export default ProjectsPage