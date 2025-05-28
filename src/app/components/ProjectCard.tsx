import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  AlertTriangle,
  Code,
  Sparkles,
} from "lucide-react";
import { projectCardProps } from "@/types";
import {  getProjectIcon, warningProjects } from "@/utils/Utilities";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
  featured,
}: projectCardProps) => {
  return (
    <div className="p-2 h-full group">
      <Card
        className={`relative overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl border-0 bg-gradient-to-br from-slate-50 to-white dark:from-[#1a2b3c] dark:to-[#0f1a24] flex flex-col h-full group-hover:shadow-xl shadow-lg`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 animate-pulse">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        <CardHeader className="p-6 relative flex-none">
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-[#1a2b3c] dark:to-[#0f1a24]">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 scale-100`}
            />
            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-0`}
            />
          </div>

          {/* Title and description */}
          <div className="py-6 px-0 pb-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
              {/* <Code className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> */}
              {getProjectIcon(title)}
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-4 flex-grow flex flex-col">
          {/* Tech Stack Badges */}
          <div className="flex flex-1 grow-0 flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`text-xs px-2 py-1 font-medium transition-all duration-300 hover:scale-110 cursor-default bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 text-cyan-700 dark:text-cyan-300 hover:from-cyan-200 hover:to-blue-200 dark:hover:from-cyan-800/50 dark:hover:to-blue-800/50`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Warning Alert */}
          {warningProjects.includes(title) && (
            <div className="mt-auto border border-red-500/50 bg-red-50/50 dark:bg-red-950/30 dark:border-red-500/30 flex items-center gap-2 p-2 rounded-md">
              <AlertTriangle size={16} className="text-red-500 dark:text-red-400" />
              <p className="text-xs text-red-700 dark:text-red-300">
                Site may render slower on first load
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0 flex-none">
          {/* Action Buttons */}
          <div className="flex gap-3 w-full">
            <Link className="flex-1" href={githubUrl} target="_blank">
              <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-500 dark:hover:to-gray-600 !text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Github className="w-4 h-4 mr-2 !text-white" />
                GitHub
              </Button>
            </Link>

            <Link className="flex-1" href={liveUrl} target="_blank">
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 hover:from-cyan-700 hover:to-blue-700 dark:hover:from-cyan-400 dark:hover:to-blue-400 !text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <ExternalLink className="w-4 h-4 mr-2 !text-white" />
                Live Demo
              </Button>
            </Link>
          </div>
        </CardFooter>

        {/* Animated border on hover */}
        <div
          className={`absolute inset-0 rounded-lg transition-all duration-500 group-hover:ring-2 group-hover:ring-cyan-400/50 dark:group-hover:ring-cyan-500/50 group-hover:ring-offset-2 group-hover:ring-offset-white dark:group-hover:ring-offset-[#1a2b3c]`}
        />
      </Card>
    </div>
  );
};

export default ProjectCard;
