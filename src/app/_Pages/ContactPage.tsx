"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin, Loader } from "lucide-react";
import { contactInfo } from "@/utils/Utilities";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await axios.post("https://formspree.io/f/xjkyvplb", {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                // Show success message and reset form
                alert("Thank you for your feedback!");
                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (err) {
            alert("Something went wrong")
            console.log(err);

        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='Contact' className=' bg-[#DCF2F1]  dark:bg-[rgb(21,52,72)] w-screen  h-fit xl:-translate-y-[125px] relative font-[Inter] flex justify-center lg:justify-end px-3 sm:px-8 lg:px-16 xl:px-32 2xl:px-56 py-20'>
            <div className='translate-y-[50px] w-[90%] h-[80%] bg-[#8EDBD7] dark:bg-[#255676] rounded-md relative flex-col md:flex-row flex justify-between lg:justify-end lg:px-20 shadow-[18px_18px_24px_-17px_rgba(0,_0,_0,_0.8)]'>
                <div className='overflow-hidden flex lg:min-w-[350px] min-w-[280px] w-full md:w-[40%] lg:h-[80%] dark:bg-[#0E1A21] bg-[#3AA6A6] lg:absolute top-1/2 lg:-translate-y-1/2 -left-1/2 lg:translate-x-full rounded-md border md:shadow-[18px_18px_24px_-17px_rgba(0,_0,_0,_0.8)] px-4 lg:px-10 py-10 flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold place-self-start'>CONTACT ME</h2>
                    {/* <ContactIllustration/> */}
                    <div className="h-full w-full p-4 flex flex-col gap-5">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex gap-4 items-center">
                                <div className="grid place-items-center h-12 aspect-square bg-white/30 dark:bg-cyan-500/30 rounded-lg dark:text-cyan-500"><info.icon /></div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-cyan-900 dark:text-gray-400">{info.label}</p>
                                    <p className="cursor-pointer transition-colors dark:hover:text-cyan-400 hover:text-emerald-900 text-wrap"><Link href={info.href}>{info.value}</Link></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-[Inter]">Follow Me</h3>
                    <ul className='flex w-full mt-1 gap-4 justify-center'>
                        <li className="border bg-primary/10 border-primary/25 hover:scale-105 transition-all duration-300 hover:bg-white/20 dark:hover:bg-cyan-500/30 rounded-full p-2"><Link target='_blank' href="https://www.linkedin.com/in/prabin-acharya-9345b32b5/"><Linkedin /></Link></li>
                        <li className="border bg-primary/10 border-primary/25 hover:scale-105 transition-all duration-300 hover:bg-white/20 dark:hover:bg-cyan-500/30 rounded-full p-2"><Link target='_blank' href="https://www.facebook.com/prabin.acharya.1025"><Facebook /></Link></li>
                        <li className="border bg-primary/10 border-primary/25 hover:scale-105 transition-all duration-300 hover:bg-white/20 dark:hover:bg-cyan-500/30 rounded-full p-2"><Link target='_blank' href="https://github.com/Prabin1025y/"><Github /></Link></li>
                        <li className="border bg-primary/10 border-primary/25 hover:scale-105 transition-all duration-300 hover:bg-white/20 dark:hover:bg-cyan-500/30 rounded-full p-2"><Link target='_blank' href="https://www.instagram.com/prabin_acharya__/"><Instagram /></Link></li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className='w-full md:w-2/3 flex flex-col justify-center px-3 sm:px-10 lg:px-0 py-10  gap-5'>
                    {/* <div className='flex gap-4'> */}
                    <h2 className='text-3xl font-semibold'>Get In Touch</h2>
                    <p>I’d love to hear from you! Feel free to reach out with any questions, feedback, or inquiries. Just drop your message below, and I’ll get back to you as soon as possible!</p>
                    <input
                        className='rounded-md border border-slate-500 w-full h-10 bg-[#226b6b] dark:bg-[#1A252B] focus:outline px-4 text-white'
                        placeholder='Full Name'
                        type="text"
                        name='fullname'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className='rounded-md border border-slate-500 w-full h-10 bg-[#226b6b] dark:bg-[#1A252B] focus:outline px-4'
                        placeholder='Email'
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {/* </div> */}
                    <textarea
                        className='w-full rounded-md block border border-slate-500 bg-[#226b6b] dark:bg-[#1A252B] focus:outline p-4'
                        placeholder='Type your message here.'
                        name="message"
                        id="message"
                        rows={10}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button disabled={loading} type='submit' className='w-48 h-10 rounded-md flex items-center justify-center bg-[#F5A800] text-black font-semibold hover:scale-105 transition-all duration-300'>{loading ? <Loader className='animate-spin' /> : "Submit"}</button>
                    {/* <ul className='md:hidden flex justify-between w-full mt-5 gap-4'>
                        <li><Link target='_blank' href="https://www.linkedin.com/in/prabin-acharya-9345b32b5/"><FaLinkedin size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://www.facebook.com/prabin.acharya.1025"><FaFacebook size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://github.com/Prabin1025y/"><FaGithub size={30} className='cursor-pointer' /></Link></li>
                        <li><Link target='_blank' href="https://www.instagram.com/prabin_acharya__/"><FaInstagram size={30} className='cursor-pointer' /></Link></li>
                    </ul> */}
                </form>
            </div>
        </section>
    )
}

export default ContactPage