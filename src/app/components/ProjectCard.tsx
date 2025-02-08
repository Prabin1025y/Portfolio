import Image from 'next/image'
import React from 'react'
import { FaReact } from "react-icons/fa";
import GithubButton from './uiverse/GithubButton';
import VisitSiteButton from './uiverse/VisitSiteButton';

const ProjectCard = () => {
    return (
        <div className='flex px-4 py-4 gap-4 bg-[#153448] rounded-2xl fotn-[Inter] cursor-pointer group hover:-translate-x-3 hover:-translate-y-3 transition-all duration-300 hover:shadow-[19px_17px_27px_-5px_#153448]'>
            <div className='px-4 grid place-items-center text-3xl font-[Roboto] font-bold'>1</div>
            <Image className='rounded-xl border border-white group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:shadow-[19px_17px_27px_-5px_rgba(0,_0,_0,_0.7)] transition-all duration-300 ' src="/1.jpg" width={300} height={150} alt='picture' />
            <div className='flex flex-col justify-between py-2'>
                <div className='text-2xl font-semibold'>RAAG - Feel The Music</div>
                <div className='flex gap-2'>
                    <div className='bg-green-300 text-blue-950 rounded-md px-2 py-1 text-xs font-bold flex gap-1 items-center'><FaReact size="1.2em" color='navy' /> REACT</div>
                    <div className='bg-green-300 text-blue-950 rounded-md px-2 py-1 text-xs font-bold flex gap-1 items-center'><FaReact size="1.2em" color='navy' /> REACT</div>
                </div>
                <p className='text-[#81CDFF] font-semibold line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex suscipit possimus perspiciatis ut, cupiditate tempore est nemo maiores laudantium, a ullam nesciunt corrupti quisquam ipsa quod itaque animi, consequuntur voluptatibus commodi omnis voluptatem magni modi officia! Sequi beatae incidunt cumque recusandae sit sapiente vel, mollitia alias, eum, ipsum facere inventore provident. Eos laborum inventore est delectus?</p>
                <div className='flex justify-end px-10 gap-4 items-center'>
                    <GithubButton />
                    <VisitSiteButton/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard