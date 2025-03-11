import React from 'react'
import AboutBg from '../components/AboutBg'
import SkillsSection from '../components/SkillSection'
import EducationCards from '../components/Education'

const AboutMePage = () => {
    return (
        <section id='AboutMe' className='AboutBG bg-[#DCF2F1]  dark:bg-[#153448] w-screen min-h-screen pb-20 xl:-translate-y-[125px] relative font-[Inter]'>
            <AboutBg />
            <div className='w-full  h-full px-8 md:px-[8vw] lg:px-[15vw]'>
                <SkillsSection />
                <EducationCards />
            </div>
        </section>
    )
}

export default AboutMePage