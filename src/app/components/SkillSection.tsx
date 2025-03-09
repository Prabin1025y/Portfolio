import type React from "react"
import { getCategoryIcon, getCategoryLabel, getLevelColor, Skill, SkillCategory, skills } from "@/utils/Utilities"

export default function SkillsSection() {

  return (
    <section className="font-[Inter]">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-center py-6 tracking">SKILLS</h2>
      </div>

      {/* Legend - Compact horizontal version */}
      <div className="flex justify-center mb-4 text-xs">
        <div className="flex items-center gap-4 bg-[#8EDBD7] dark:bg-[#255676] px-3 py-1 rounded-full shadow-sm">
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
      
      <div 
        key="category-view"
        className="animate-fade-in"
      >
        {/* Categories in a grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-stagger-children"
        >
          {Array.from(new Set(skills.map((skill) => skill.category))).map((category, index) => (
            <div
              key={category}
              className="bg-[#3AA6A6] dark:bg-[#255676] rounded-lg shadow-sm overflow-hidden border animate-fade-in-up hover:scale-102 transition-transform duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-3">
                <h3 className="text-base font-bold text-blue-950 dark:text-white flex items-center gap-2 mb-3 pb-2 border-b">
                  <div className="p-1.5 rounded-md bg-[#8EDBD7] dark:bg-[#153448] shadow-sm">
                    {getCategoryIcon(category as SkillCategory)}
                  </div>
                  <span>{getCategoryLabel(category as SkillCategory)}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill: Skill, skillIndex) => (
                      <SquareSkillInCategory 
                        key={skill.name} 
                        skill={skill} 
                        levelColor={getLevelColor(skill.level)} 
                        index={skillIndex}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface SkillInCategoryProps {
  skill: Skill
  levelColor: string
  index?: number
}

const darkImageSkills = ["ShadCN","NextJS","Socket.io", "Express.js","Bcrypt.js"];

function SquareSkillInCategory({ skill, levelColor, index = 0 }: SkillInCategoryProps) {
  return (
    <div
      className="relative flex md:flex-col items-center justify-start md:justify-center gap-3 p-2 bg-[#aee0dd] dark:bg-[#153448] rounded-md shadow-sm transition-all md:aspect-square hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms`, transitionDuration: '0.2s' }}
    >
      <div className={`absolute top-[5%] rounded-md left-0 h-[90%] w-1 md:w-full md:h-1 ${levelColor}`}></div>
      <img src={skill.logo || "/placeholder.svg"} alt={`${skill.name} logo`} className={`size-5 md:size-10 ${darkImageSkills.includes(skill.name) && "dark:invert" }`} />
      <span className="text-xs md:text-xs font-medium text-center">{skill.name}</span>
    </div>
  )
}