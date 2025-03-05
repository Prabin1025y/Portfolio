"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, Database, Layout, Palette, Layers, BrainCircuit, Server } from "lucide-react"

// Define skill types and levels
type SkillLevel = "beginner" | "intermediate" | "advanced"
type SkillCategory = "frontend" | "backend" | "database" | "state-management" | "design" | "framework"

interface Skill {
  name: string
  level: SkillLevel
  category: SkillCategory
  logo: string
}

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills: Skill[] = [
    // Frontend
    { name: "HTML", level: "beginner", category: "frontend", logo: "/SkillIcons/html.svg" },
    { name: "CSS", level: "beginner", category: "frontend", logo: "/SkillIcons/css.svg" },
    { name: "JavaScript", level: "intermediate", category: "frontend", logo: "/SkillIcons/js.svg" },
    { name: "React", level: "intermediate", category: "frontend", logo: "/SkillIcons/react.svg" },
    { name: "TypeScript", level: "advanced", category: "frontend", logo: "/SkillIcons/ts.svg" },

    // Backend
    { name: "Node.js", level: "intermediate", category: "backend", logo: "/SkillIcons/nodejs.svg" },
    { name: "Express.js", level: "intermediate", category: "backend", logo: "/SkillIcons/express.svg" },

    // Database
    { name: "MongoDB", level: "intermediate", category: "database", logo: "/SkillIcons/mongodb.svg" },
    { name: "Mongoose", level: "intermediate", category: "database", logo: "/SkillIcons/mongoose.svg" },
    { name: "PostgreSQL", level: "advanced", category: "database", logo: "/SkillIcons/postgress.svg" },

    // State Management
    { name: "Zustand", level: "advanced", category: "state-management", logo: "/SkillIcons/zustand.ico" },

    // Design
    { name: "Figma", level: "intermediate", category: "design", logo: "/SkillIcons/figma.svg" },
    { name: "Photoshop", level: "beginner", category: "design", logo: "/SkillIcons/photoshop.svg" },

    // Frameworks
    { name: "Next.js", level: "advanced", category: "framework", logo: "/SkillIcons/nextjs.svg" },
  ]

  const getLevelColor = (level: SkillLevel) => {
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


  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case "frontend":
        return <Layout className="h-5 w-5" />
      case "backend":
        return <Server className="h-5 w-5" />
      case "database":
        return <Database className="h-5 w-5" />
      case "state-management":
        return <BrainCircuit className="h-5 w-5" />
      case "design":
        return <Palette className="h-5 w-5" />
      case "framework":
        return <Layers className="h-5 w-5" />
      default:
        return <Code2 className="h-5 w-5" />
    }
  }

  const getCategoryLabel = (category: SkillCategory) => {
    switch (category) {
      case "frontend":
        return "Frontend"
      case "backend":
        return "Backend"
      case "database":
        return "Database"
      case "state-management":
        return "State Management"
      case "design":
        return "Design"
      case "framework":
        return "Frameworks"
      default:
        return "Other"
    }
  }


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  if (!mounted) return null

  return (
    <section className=" font-[Inter]">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-center py-6 tracking">SKILLS</h2>
      </div>

      {/* Legend - Compact horizontal version */}
      <div className="flex justify-center mb-4 text-xs">
        <div className="flex items-center gap-4 bg-[#8EDBD7]  dark:bg-[#255676] px-3 py-1 rounded-full shadow-sm">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span>Beginner</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>Advanced</span>
          </div>
        </div>
      </div>
        <motion.div
          key="category-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Categories in a grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {Array.from(new Set(skills.map((skill) => skill.category))).map((category) => (
              <motion.div
                key={category}
                className={` bg-[#3AA6A6]  dark:bg-[#255676]  rounded-lg shadow-sm overflow-hidden border`}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="p-3">
                  <h3 className="text-base font-bold text-blue-950 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b">
                    <div className="p-1.5 rounded-md bg-[#8EDBD7]  dark:bg-[#153448] shadow-sm">
                      {getCategoryIcon(category as SkillCategory)}
                    </div>
                    <span>{getCategoryLabel(category as SkillCategory)}</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill: Skill) => (
                        <SquareSkillInCategory key={skill.name} skill={skill} levelColor={getLevelColor(skill.level)} />
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
    </section>
  )
}

interface SkillCardProps {
  skill: Skill
  levelColor: string
  categoryIcon: React.ReactNode
  categoryLabel: string
}


interface SkillInCategoryProps {
    skill: Skill
    levelColor: string
  }
  
  function SquareSkillInCategory({ skill, levelColor }: SkillInCategoryProps) {
    return (
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className={`relative flex flex-col items-center justify-center gap-3 p-2 bg-[#aee0dd] dark:bg-[#153448]  rounded-md shadow-sm transition-all aspect-square`}
      >
        <div className={`absolute top-0 left-0 w-full h-1 ${levelColor}`}></div>
        <img src={skill.logo || "/placeholder.svg"} alt={`${skill.name} logo`} className="w-10 h-10 " />
        <span className="text-xs font-medium text-center">{skill.name}</span>
      </motion.div>
    )
  }
