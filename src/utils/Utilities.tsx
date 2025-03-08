import { Code2, Palette, Code, MonitorCog, LibraryBig, DatabaseIcon, Wrench } from "lucide-react"


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

export interface Skill {
    name: string
    level: SkillLevel
    category: SkillCategory
    logo: string
}

export const projects: Project[] = [
    {
        id: "1",
        title: "GuffGaff",
        description:
            "A real-time chat application built using the MERN stack. It supports real-time messaging, user authentication, active status and has a pleasing simple user interface.",
        techStack: ["React", "Node.js", "Express.js", "TailwindCSS", "Socket.io", "MongoDB", "Mongoose"],
        imageUrl: "/ProjectsImage/guffgaff.png",
        websiteUrl: "https://guffgaff-kpsd.onrender.com",
        repositoryUrl: "https://github.com/Prabin1025y/GuffGaff",
    },
    {
        id: "2",
        title: "Raag",
        description: "A beautifully designed music player with an admin panel for managing songs, albums, and users—featuring personalized recommendations and advanced state management.",
        techStack: ["TypeScript", "React", "Node.js", "MongoDB", "ShadCN", "TailwindCSS"],
        imageUrl: "/ProjectsImage/raag.png",
        websiteUrl: "https://raag.onrender.com",
        repositoryUrl: "https://github.com/Prabin1025y/Raag",
    },
    {
        id: "3",
        title: "StoreHub",
        description: "A sleek e-commerce app with cart functionality, secure authentication, and responsive design—built with MongoDB, React hooks, and JWT.",
        techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        imageUrl: "/ProjectsImage/storehub.png",
        websiteUrl: "#Projects",
        repositoryUrl: "https://github.com/Prabin1025y/StoreHub",
    },
    {
        id: "4",
        title: "Better Together",
        description:
            "Two player level based, platformer, pixel game where two players have to work together to complete the levels",
        techStack: ["C++", "SFML"],
        imageUrl: "/ProjectsImage/bettertogether.png",
        websiteUrl: "#Projects",
        repositoryUrl: "https://github.com/Prabin1025y/Better-Together",
    },
    {
        id: "5",
        title: "LightCode",
        description: "An online code editor supporting multiple programming languages and customizable themes—offering a smooth coding experience.",
        techStack: ["TypeScript", "NextJs", "Zustand", "Convex", "ShadCN"],
        imageUrl: "/ProjectsImage/lightcode.png",
        websiteUrl: "#Projects",
        repositoryUrl: "https://github.com/Prabin1025y/LightCode",
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
    { name: "Python", level: "intermediate", category: "languages", logo: "/SkillIcons/python.svg" },
    { name: "C", level: "beginner", category: "languages", logo: "/SkillIcons/c.svg" },
    { name: "C++", level: "intermediate", category: "languages", logo: "/SkillIcons/cpp.svg" },

    // Technologies
    { name: "React", level: "intermediate", category: "technologies", logo: "/SkillIcons/react.svg" },
    { name: "HTML", level: "advanced", category: "technologies", logo: "/SkillIcons/html.svg" },
    { name: "CSS", level: "intermediate", category: "technologies", logo: "/SkillIcons/css.svg" },
    { name: "Node.js", level: "intermediate", category: "technologies", logo: "/SkillIcons/nodejs.svg" },
    { name: "Express.js", level: "intermediate", category: "technologies", logo: "/SkillIcons/express.svg" },
    { name: "NextJS", level: "intermediate", category: "technologies", logo: "/SkillIcons/nextjs.svg" },
    { name: "ShadCN", level: "intermediate", category: "technologies", logo: "/SkillIcons/shadcn.svg" },
    { name: "Socket.io", level: "beginner", category: "technologies", logo: "/SkillIcons/socketio.svg" },

    // Libraries
    { name: "Zustand", level: "intermediate", category: "libraries", logo: "/SkillIcons/zustand.ico" },
    { name: "Bcrypt.js", level: "beginner", category: "libraries", logo: "/SkillIcons/bcrypt.png" },
    { name: "JWT", level: "beginner", category: "libraries", logo: "/SkillIcons/jwt.svg" },

    //Tools

    //Design
    { name: "Figma", level: "intermediate", category: "designing", logo: "/SkillIcons/figma.svg" },
    { name: "Photoshop", level: "intermediate", category: "designing", logo: "/SkillIcons/photoshop.svg" },

    // Database
    { name: "MongoDB", level: "intermediate", category: "database", logo: "/SkillIcons/mongodb.svg" },
    { name: "Mongoose", level: "intermediate", category: "database", logo: "/SkillIcons/mongoose.svg" },
    { name: "PostgreSQL", level: "intermediate", category: "database", logo: "/SkillIcons/postgress.svg" },
    { name: "Convex", level: "beginner", category: "database", logo: "/SkillIcons/convex.ico" },

]