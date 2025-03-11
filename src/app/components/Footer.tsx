import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="dark:bg-[#0E1A21] bg-[#8EDBD7]  pt-8 lg:pb-8 pb-24 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Prabin Acharya</h2>
            <p className="text-sm mb-2">Full Stack Developer & Designer</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Prabin1025y" className="dark:dark:hover:text-white  hover:text-slate-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/prabin-acharya-9345b32b5" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/prabin_acharya__" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
            <p className="text-sm mb-2">Email: acharyaprabin1025y@gmail.com</p>
            <p className="text-sm mb-2">Phone: +977 9741778031</p>
            <p className="text-sm">Location: Dharan, Nepal</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Prabin Acharya. All rights reserved.</p>
          {/* <p>Made with ❤️ using Next.js and Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  )
}

