import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="dark:bg-[#0E1A21] bg-[#8EDBD7]  py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Prabin Acharya</h2>
            <p className="text-sm mb-2">Full Stack Developer & Designer</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/yourusername" className="dark:dark:hover:text-white hover:text-slate-500 hover:text-slate-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com/yourusername" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <nav>
            <h2 className="text-lg font-semibold mb-4">Important Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="dark:hover:text-white hover:text-slate-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
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

