import Link from "next/link"
import Image from "next/image"
import { Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  coverImage: string
  readTime: number
  date: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg flex flex-col bg-[#173a52]/80 border-[#3a7ca0]/30 backdrop-blur-sm">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="mb-2 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-[#3a7ca0]/20 text-slate-200 border-[#3a7ca0]/40">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-white">{post.title}</h3>
          <p className="line-clamp-2 text-sm text-slate-300 flex-grow">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-[#3a7ca0]/30 p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback className="bg-[#3a7ca0]/50 text-white">{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-slate-300">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
