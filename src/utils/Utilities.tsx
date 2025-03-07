import { Code2, Database, Layout, Palette, Layers, BrainCircuit, Server, Code, MonitorCog, LibraryBig, DatabaseBackup, DatabaseIcon, Wrench } from "lucide-react"


interface Project {
    id: string
    title: string
    description: string
    techStack: string[]
    imageUrl: string
    websiteUrl: string
    repositoryUrl: string
}

export type SkillLevel = "beginner" | "intermediate" | "advanced"
export type SkillCategory = "languages" | "technologies" | "libraries" | "tools" | "database" | "designing"
// export type SkillCategory = "frontend" | "backend" | "database" | "state-management" | "design" | "framework"

export interface Skill {
    name: string
    level: SkillLevel
    category: SkillCategory
    logo: string
}

export const projects: Project[] = [
    {
        id: "1",
        title: "E-commerce Platform",
        description:
            "A full-featured online store with product listings, cart functionality, and secure checkout process.",
        techStack: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
        imageUrl: "/1.jpg",
        websiteUrl: "https://example.com/project1",
        repositoryUrl: "https://github.com/yourusername/project1",
    },
    {
        id: "2",
        title: "Task Management App",
        description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
        techStack: ["TypeScript", "React", "Redux", "Firebase", "Material UI"],
        imageUrl: "/1.jpg",
        websiteUrl: "https://example.com/project2",
        repositoryUrl: "https://github.com/yourusername/project2",
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Real-time weather information with interactive maps, forecasts, and location-based services.",
        techStack: ["JavaScript", "React", "Chart.js", "OpenWeather API", "Leaflet"],
        imageUrl: "/1.jpg",
        websiteUrl: "https://example.com/project3",
        repositoryUrl: "https://github.com/yourusername/project3",
    },
    {
        id: "4",
        title: "E-commerce Platform",
        description:
            "A full-featured online store with product listings, cart functionality, and secure checkout process.",
        techStack: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
        imageUrl: "/1.jpg",
        websiteUrl: "https://example.com/project1",
        repositoryUrl: "https://github.com/yourusername/project1",
    },
    {
        id: "5",
        title: "Task Management App",
        description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
        techStack: ["TypeScript", "React", "Redux", "Firebase", "Material UI"],
        imageUrl: "/1.jpg",
        websiteUrl: "https://example.com/project2",
        repositoryUrl: "https://github.com/yourusername/project2",
    },
    {
        id: "6",
        title: "Weather Dashboard",
        description: "Real-time weather information with interactive maps, forecasts, and location-based services.",
        techStack: ["JavaScript", "React", "Chart.js", "OpenWeather API", "Leaflet"],
        imageUrl: "/1.jpg",
        websiteUrl: "https://example.com/project3",
        repositoryUrl: "https://github.com/yourusername/project3",
    },
]


export const getLevelColor = (level: SkillLevel) => {
    switch (level) {
        case "beginner":
            return "bg-emerald-500"
        case "intermediate":
            return "bg-blue-500"
        case "advanced":
            return "bg-purple-500"
        default:
            return "bg-gray-500"
    }
}


export const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
        case "languages":
            return <Code className="h-5 w-5" />
        case "technologies":
            return <MonitorCog className="h-5 w-5" />
        case "libraries":
            return <LibraryBig className="h-5 w-5" />
        case "database":
            return <DatabaseIcon className="h-5 w-5" />
        case "designing":
            return <Palette className="h-5 w-5" />
        case "tools":
            return <Wrench className="h-5 w-5" />
        default:
            return <Code2 className="h-5 w-5" />
        //     case "frontend":
        //         return <Layout className="h-5 w-5" />
        //   case "backend":
        //         return <Server className="h-5 w-5" />
        //   case "database":
        //         return <Database className="h-5 w-5" />
        //   case "state-management":
        //         return <BrainCircuit className="h-5 w-5" />
        //   case "design":
        //         return <Palette className="h-5 w-5" />
        //   case "framework":
        //         return <Layers className="h-5 w-5" />
        //   default:
        //         return <Code2 className="h-5 w-5" />
    }
}

export const getCategoryLabel = (category: SkillCategory) => {
    switch (category) {
        case "languages":
            return "Languages"
        case "technologies":
            return "Technologies"
        case "libraries":
            return "Libraries"
        case "database":
            return "Database & ORMs"
        case "designing":
            return "Designing"
        case "tools":
            return "Tools"
        default:
            return "Other"
        // case "frontend":
        //     return "Frontend"
        // case "backend":
        //     return "Backend"
        // case "database":
        //     return "Database"
        // case "state-management":
        //     return "State Management"
        // case "design":
        //     return "Design"
        // case "framework":
        //     return "Frameworks"
        // default:
        //     return "Other"
    }
}

export const skills: Skill[] = [
    // Languages
    { name: "JavaScript", level: "intermediate", category: "languages", logo: "/SkillIcons/js.svg" },
    { name: "TypeScript", level: "intermediate", category: "languages", logo: "/SkillIcons/ts.svg" },
    { name: "Python", level: "intermediate", category: "languages", logo: "/SkillIcons/ts.svg" },
    { name: "C", level: "beginner", category: "languages", logo: "/SkillIcons/ts.svg" },
    { name: "C++", level: "intermediate", category: "languages", logo: "/SkillIcons/ts.svg" },
    
    // Technologies
    { name: "React", level: "intermediate", category: "technologies", logo: "/SkillIcons/react.svg" },
    { name: "HTML", level: "advanced", category: "technologies", logo: "/SkillIcons/html.svg" },
    { name: "CSS", level: "intermediate", category: "technologies", logo: "/SkillIcons/css.svg" },
    { name: "Node.js", level: "intermediate", category: "technologies", logo: "/SkillIcons/nodejs.svg" },
    { name: "Express.js", level: "intermediate", category: "technologies", logo: "/SkillIcons/express.svg" },
    { name: "Next.js", level: "intermediate", category: "technologies", logo: "/SkillIcons/nextjs.svg" },
    { name: "ShadCN", level: "intermediate", category: "technologies", logo: "/SkillIcons/nextjs.svg" },
    { name: "Socket.io", level: "beginner", category: "technologies", logo: "/SkillIcons/nextjs.svg" },

    // Libraries
    { name: "Zustand", level: "intermediate", category: "libraries", logo: "/SkillIcons/zustand.ico" },
    { name: "bcrypt.js", level: "beginner", category: "libraries", logo: "/SkillIcons/zustand.ico" },
    { name: "JWT", level: "beginner", category: "libraries", logo: "/SkillIcons/zustand.ico" },

    //Tools
    
    //Design
    { name: "Figma", level: "intermediate", category: "designing", logo: "/SkillIcons/figma.svg" },
    { name: "Photoshop", level: "intermediate", category: "designing", logo: "/SkillIcons/photoshop.svg" },
    
    // Database
    { name: "MongoDB", level: "intermediate", category: "database", logo: "/SkillIcons/mongodb.svg" },
    { name: "Mongoose", level: "intermediate", category: "database", logo: "/SkillIcons/mongoose.svg" },
    { name: "PostgreSQL", level: "intermediate", category: "database", logo: "/SkillIcons/postgress.svg" },
    { name: "Convex", level: "beginner", category: "database", logo: "/SkillIcons/postgress.svg" },

]