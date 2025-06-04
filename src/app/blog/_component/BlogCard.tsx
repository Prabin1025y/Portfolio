import Link from "next/link"
import Image from "next/image"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Post } from "@/types"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const tags = post.tags.split(",").map((tag: string) => tag.trim())

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 flex flex-col bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-[#1a2332]/95 dark:to-[#173a52]/95 border border-gray-200/60 dark:border-[#3a7ca0]/20 backdrop-blur-xl hover:border-blue-300/60 dark:hover:border-[#3a7ca0]/40 hover:-translate-y-2 relative">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900">
          <Image
            src={`/BlogThumbnails/${post.thumbnail}` || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/30" />

          {/* clock icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/90 dark:bg-muted backdrop-blur-md rounded-full p-2 border border-gray-200/60 dark:border-white/20 transition-colors flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-700 dark:text-white" />
              <p className="text-xs text-gray-700 dark:text-white">{post.readingTime}</p>
            </div>
          </div>

          {/* Read more button */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <div className="bg-blue-600/90 dark:bg-[#3a7ca0]/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-700 dark:hover:bg-[#3a7ca0] transition-colors">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        <CardContent className="p-6 flex-grow flex flex-col">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={tag + index}
                variant="outline"
                className="bg-blue-50 dark:bg-[#3a7ca0]/15 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-[#3a7ca0]/30 hover:bg-blue-100 dark:hover:bg-[#3a7ca0]/25 transition-all duration-200 text-xs font-medium px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge
                variant="outline"
                className="bg-gray-100 dark:bg-slate-800/50 text-gray-600 dark:text-slate-400 border-gray-300 dark:border-slate-600/50 text-xs px-3 py-1"
              >
                +{tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-800 dark:group-hover:text-blue-100 transition-colors duration-200">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-slate-300 flex-grow leading-relaxed mb-4 group-hover:text-gray-700 dark:group-hover:text-slate-200 transition-colors duration-200">
            {post.excerpt}
          </p>

          {/* Author section */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-9 w-9 ring-2 ring-blue-200/60 dark:ring-[#3a7ca0]/30 transition-all duration-200 group-hover:ring-blue-300/80 dark:group-hover:ring-[#3a7ca0]/50">
              <AvatarImage
                src={post.authorAvatar || "/placeholder.svg"}
                alt={post.authorName}
                className="transition-all duration-200 group-hover:brightness-110"
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-500/70 to-blue-600/70 dark:from-[#3a7ca0]/70 dark:to-[#4a9cc8]/70 text-white text-sm font-semibold">
                {post.authorName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800 dark:text-slate-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                {post.authorName}
              </span>
              <span className="text-xs text-gray-500 dark:text-slate-400 group-hover:text-gray-600 dark:group-hover:text-slate-300 transition-colors duration-200">
                Author
              </span>
            </div>
          </div>

          {/* Bottom metadata - single line layout */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-[#3a7ca0]/20">
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span className="font-medium">{post.date}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-slate-500" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span className="font-medium">{post.readingTime} read</span>
              </div>
            </div>

            {/* Reading progress indicator */}
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-400/60 dark:bg-[#3a7ca0]/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-300/40 dark:bg-[#3a7ca0]/25"></div>
              <div className="w-2 h-2 rounded-full bg-blue-200/30 dark:bg-[#3a7ca0]/15"></div>
            </div>
          </div>
        </CardContent>

        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-400/20 dark:from-[#3a7ca0]/20 dark:via-blue-400/20 dark:to-[#3a7ca0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/3 h-0.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-[#3a7ca0] to-transparent transition-all duration-700" />
      </Card>
    </Link>
  )
}
