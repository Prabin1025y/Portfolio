import { Button } from '@/components/ui/button'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import ContactIllustration from '../components/ContactIllustration';

const ContactPage = () => {
    return (
        <div id='Contact' className=' bg-[#DCF2F1]  dark:bg-[rgb(21,52,72)] w-screen  h-fit xl:-translate-y-[125px] relative font-[Inter] flex justify-center lg:justify-end px-3 sm:px-8 lg:px-16 xl:px-32 2xl:px-56 py-20'>
            <div className='translate-y-[50px] w-[90%] h-[80%] bg-[#8EDBD7] dark:bg-[#255676] rounded-md relative flex justify-between lg:justify-end lg:px-20 shadow-[18px_18px_24px_-17px_rgba(0,_0,_0,_0.8)]'>
                <div className='hidden overflow-hidden md:flex lg:min-w-[350px] min-w-[280px] w-[40%] lg:h-[80%] dark:bg-[#0E1A21] bg-[#3AA6A6] lg:absolute top-1/2 lg:-translate-y-1/2 -left-1/2 lg:translate-x-full rounded-md border shadow-[18px_18px_24px_-17px_rgba(0,_0,_0,_0.8)] p-10 flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold place-self-start'>CONTACT ME</h2>
                    {/* <Image className='' src="/social-media.svg" alt='Illustration' aria-hidden width={400} height={400} /> */}
                    <ContactIllustration/>
                    <ul className='flex justify-between w-full mt-5 gap-4'>
                        <li><Link target='_blank' href="https://www.linkedin.com/in/prabin-acharya-9345b32b5/"><FaLinkedin size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://www.facebook.com/prabin.acharya.1025"><FaFacebook size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://github.com/Prabin1025y/"><FaGithub size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://www.instagram.com/prabin_acharya__/"><FaInstagram size={30} className='cursor-pointer' /></Link></li>
                    </ul>
                </div>
                <form className='w-full md:w-2/3 flex flex-col justify-center px-3 sm:px-10 lg:px-0 py-10  gap-5'>
                    {/* <div className='flex gap-4'> */}
                    <h2 className='text-3xl font-semibold'>Get In Touch</h2>
                    <p>I’d love to hear from you! Feel free to reach out with any questions, feedback, or inquiries. Just drop your message below, and I’ll get back to you as soon as possible!</p>
                    <input className='rounded-md border border-slate-500 w-full h-10 bg-[#226b6b] dark:bg-[#1A252B] focus:outline px-4 text-white' placeholder='Full Name' type="text" name='fullname' required />
                    <input className='rounded-md border border-slate-500 w-full h-10 bg-[#226b6b] dark:bg-[#1A252B] focus:outline px-4' placeholder='Email' type="email" name='email' required />
                    {/* </div> */}
                    <textarea className='w-full rounded-md block border border-slate-500 bg-[#226b6b] dark:bg-[#1A252B] focus:outline p-4' placeholder='Type your message here.' name="message" id="message" rows={10} required></textarea>
                    <button type='submit' className='w-48 h-10 rounded-md flex items-center justify-center bg-[#F5A800] text-black font-semibold hover:scale-105 transition-all duration-300'>Submit</button>
                    <ul className='md:hidden flex justify-between w-full mt-5 gap-4'>
                        <li><Link target='_blank' href="https://www.linkedin.com/in/prabin-acharya-9345b32b5/"><FaLinkedin size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://www.facebook.com/prabin.acharya.1025"><FaFacebook size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://github.com/Prabin1025y/"><FaGithub size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://www.instagram.com/prabin_acharya__/"><FaInstagram size={30} className='cursor-pointer' /></Link></li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default ContactPage