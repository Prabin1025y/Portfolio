import { projects } from "@/utils/Utilities";
import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {

  return (
    <section
      id="Projects"
      className="projectBG bg-[#8EDBD7]  dark:bg-[#255676] w-screen h-fit pt-32 sm:pt-60 px-2 sm:px-8 pb-10 md:px-16 lg:px-32 xl:px-56 2xl:px-72  flex flex-col gap-5"
    >
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-center tracking">PROJECTS</h2>
      </div>
      <div className="py-12 px-4 md:px-6 lg:px-8 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} title={project.title} description={project.description} image={project.imageUrl} techStack={project.techStack} githubUrl={project.repositoryUrl} liveUrl={project.websiteUrl} featured={project.featured} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
