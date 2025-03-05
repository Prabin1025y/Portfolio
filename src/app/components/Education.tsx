"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

// Sample education data
const sampleEducationData = [
    {
        id: 1,
        level: "Bachelor's Degree",
        institution: "Institute of Engineering, Purwanchl Campus (IOE ERC)",
        field: "Computer Engineering",
        startYear:2023,
        graduationYear: 'present',
        grade: "-",
        achievements: ["Research Assistant", "Dean's List", "Best Thesis Award"],
    },
    {
        id: 2,
        level: "High School's Degree",
        institution: "Janata Secondary School",
        field: "Technical Stream, Computer Engineering",
        startYear: 2018,
        graduationYear: "2023",
        grade: "3.81 GPA",
        achievements: ["Honor Roll", "Programming Club President", "Hackathon Winner"],
    },
]

interface EducationEntry {
    id: number
    level: string
    institution: string
    field: string
    startYear: number
    graduationYear: string
    grade: string
    achievements: string[]
}

interface EducationCardsProps {
    educationData?: EducationEntry[]
}

export default function EducationCards({ educationData = sampleEducationData }: EducationCardsProps) {
    // Sort education data by start year (most recent first)
    const sortedEducationData = [...educationData].sort((a, b) => b.startYear - a.startYear)

    return (
        <div className="border rounded-lg shadow-sm w-full my-10">
            <div className="mb-4 text-center">
                <h2 className="text-3xl font-bold text-center py-6 tracking">EDUCATION</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {sortedEducationData.map((education) => (
                    <Card
                        key={education.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/20 "
                    >
                        <div className="h-2 bg-primary" />
                        <CardHeader className="pb-2 bg-[#3AA6A6] dark:bg-[#255676]">
                            <div className="flex items-center gap-2 mb-1">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                <Badge variant="secondary">{education.level}</Badge>
                            </div>
                            <CardTitle className="text-xl">{education.institution}</CardTitle>
                            <p className="text-indigo-950 dark:text-gray-200 text-sm">{education.field}</p>
                        </CardHeader>
                        <CardContent className="bg-[#3AA6A6] dark:bg-[#255676]">
                            <div className="flex items-center gap-2 mb-3">
                                <Calendar className="h-4 w-4 text-indigo-950 dark:text-gray-200" />
                                <span className="text-sm">
                                    {education.startYear} - {education.graduationYear}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="h-4 w-4 text-indigo-950 dark:text-gray-200" />
                                <span className="text-sm font-medium">{education.grade}</span>
                            </div>
                            {/* <div className="mt-3">
                                <p className="text-sm font-medium mb-1">Achievements:</p>
                                <ul className="text-sm text-gray-200 list-disc list-inside">
                                    {education.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div> */}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

