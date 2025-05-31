import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronLeft, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogPosts } from "@/utils/blogs"
import { BackgroundPattern } from "@/app/components/BackgroundPattern"

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="relative min-h-screen bg-[#0d2230]">
      <BackgroundPattern />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-12" style={{ zIndex: 1 }}>
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-slate-200 hover:text-white hover:underline"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to all posts
        </Link>

        {/* Content container with blurred background */}
        <div className="mx-auto max-w-3xl backdrop-blur-sm rounded-2xl p-8 border border-[#3a7ca0]/20">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-[#3a7ca0]/20 text-slate-200 border-[#3a7ca0]/40">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">{post.title}</h1>

          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback className="bg-[#3a7ca0]/50 text-white">{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-slate-300">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-300">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
            <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose prose-invert mx-auto max-w-none text-slate-200">
            <p>
              This is a sample blog post content. In a real application, this would be the full content of the blog
              post. The content would be much longer and might include headings, paragraphs, images, code blocks, and
              other elements.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <h2>Section Heading</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
