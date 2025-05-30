import { Code2, Palette, Code, MonitorCog, LibraryBig, DatabaseIcon, Wrench, Mail, Phone, MapPin, MessageCircleMore, Music4, ShoppingCart, Gamepad2 } from "lucide-react"



interface Project {
    id: string
    title: string
    description: string
    techStack: string[]
    imageUrl: string
    websiteUrl: string
    repositoryUrl: string
    featured: boolean
}

interface ContactInfo {
    icon: React.ComponentType
    label: string
    value: string
    href: string
}

export type SkillLevel = "beginner" | "intermediate" | "advanced"
export type SkillCategory = "languages" | "technologies" | "libraries" | "tools" | "database" | "designing"

export interface Skill {
    name: string
    level: SkillLevel
    category: SkillCategory
    logo: string
}

interface Testimonial {
    userName: string
    stars: number
    imageUrl: string
    content: string
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
        featured: false,
    },
    {
        id: "2",
        title: "Raag",
        description: "A beautifully designed music player with an admin panel for managing songs, albums, and users—featuring personalized recommendations and advanced state management.",
        techStack: ["TypeScript", "React", "Node.js", "MongoDB", "ShadCN", "TailwindCSS"],
        imageUrl: "/ProjectsImage/raag.png",
        websiteUrl: "https://raag.onrender.com",
        repositoryUrl: "https://github.com/Prabin1025y/Raag",
        featured: true,
    },
    {
        id: "3",
        title: "StoreHub",
        description: "A sleek e-commerce app with cart functionality, secure authentication, and responsive design—built with MongoDB, React hooks, and JWT.",
        techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        imageUrl: "/ProjectsImage/storehub.png",
        websiteUrl: "#Projects",
        repositoryUrl: "https://github.com/Prabin1025y/StoreHub",
        featured: false,
    },
    {
        id: "4",
        title: "Better Together",
        description:
            "Two player level based, platformer, pixel game where two players have to work together to complete the levels",
        techStack: ["C++", "SFML"],
        imageUrl: "/ProjectsImage/bettertogether.png",
        websiteUrl: "https://prabinacharya.itch.io/better-together",
        repositoryUrl: "https://github.com/Prabin1025y/Better-Together",
        featured: true,
    },
    {
        id: "5",
        title: "LightCode",
        description: "An online code editor supporting multiple programming languages and customizable themes—offering a smooth coding experience.",
        techStack: ["TypeScript", "NextJs", "Zustand", "Convex", "ShadCN"],
        imageUrl: "/ProjectsImage/lightcode.png",
        websiteUrl: "https://lightcodedev.vercel.app",
        repositoryUrl: "https://github.com/Prabin1025y/LightCode",
        featured: false,
    },
]

export const getProjectIcon = (projectName: string) => {
    switch (projectName) {
        case "GuffGaff":
            return <MessageCircleMore className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
        case "Raag":
            return <Music4 className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
        case "StoreHub":
            return <ShoppingCart className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
        case "Better Together":
            return <Gamepad2 className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
        case "LightCode":
            return <Code2 className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
        default:
            return <Code2 className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
    }
}

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

export const darkImageSkills = ["ShadCN", "NextJS", "Socket.io", "Express.js", "Bcrypt.js", "Prisma"];

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
    { name: "Prisma", level: "beginner", category: "database", logo:"/SkillIcons/prisma.svg"}

]


export const Testimonials: Testimonial[] = [
    {
        userName: "Kaushal Rijal",
        stars: 4,
        imageUrl: "/Images/Kaushal_Rijal.jpg",
        content: "I have had the privilege of working with Prabin, and his full-stack developer skills are simply amazing. He possess an eye for detail, a problem-solving attitude, and a great capability to transform ideas into clean and effective code. His professionalism and commitment make his a precious addition to any team."
    },
    {
        userName: "Joy Boy",
        stars: 4.5,
        imageUrl: "/Images/1.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel architecto modi maiores voluptatum laborum. Enim non possimus placeat in? Adipisci minima error unde! Culpa recusandae minus in necessitatibus est ipsum blanditiis placeat voluptates ratione odit, ex fugit, similique dolor natus ut harum architecto cum corrupti sequi at qui reiciendis."
    },
    {
        userName: "Albert Rodrigue",
        stars: 4,
        imageUrl: "/Images/2.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel architecto modi maiores voluptatum laborum. Enim non possimus placeat in? Adipisci minima error unde! Culpa recusandae minus in necessitatibus est ipsum blanditiis placeat voluptates ratione odit, ex fugit, similique dolor natus ut harum architecto cum corrupti sequi at qui reiciendis."
    },
    {
        userName: "Jane Doe",
        stars: 3.5,
        imageUrl: "/Images/3.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel architecto modi maiores voluptatum laborum. Enim non possimus placeat in? Adipisci minima error unde! Culpa recusandae minus in necessitatibus est ipsum blanditiis placeat voluptates ratione odit, ex fugit, similique dolor natus ut harum architecto cum corrupti sequi at qui reiciendis."
    }
]

export const contactInfo: ContactInfo[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'acharyaprabin1025y@gmail.com',
        href: 'mailto:acharyaprabin1025y@gmail.com'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+977 9741778031',
        href: 'tel:+9779741778031'
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Dharan-8, Sunsari, Nepal',
        href: '#Contact'
    }
];

export const warningProjects = ["GuffGaff", "Raag"];
export const unavailableProjects = ["StoreHub"];
export const notAWebsite = ["Better Together"];