import { BlogCard } from "./_component/BlogCard";
import { BackgroundPattern } from "../components/BackgroundPattern";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from "@/types";
import { getReadingTime } from "@/utils/Utilities";

function getPosts(): Post[] {
  //get directory of blogs
  const postsDirectory = path.join(process.cwd(), 'src/contents/posts')

  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  //get all filenames inside content/posts
  const filenames = fs.readdirSync(postsDirectory)

  //if filename ends with .mdx, get its path, content and extract data and content using graymatter
  const posts: Post[] = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      //return data of post
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        excerpt: data.excerpt || content.slice(0, 150) + '...',
        readingTime: getReadingTime(content),
        thumbnail: data.thumbnail || "placeholder_thumbnail.jpg",
        tags: data.tags || "",
        authorName: data.authorName || "Prabin Acharya",
        authorAvatar: data.authorAvatar || "todo:"
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export default function Home() {
  return (
    <div className="relative">
      <BackgroundPattern />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-12" style={{ zIndex: 1 }}>
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">My Blog</h1>
          <p className="mx-auto max-w-2xl text-lg ">
            Discover the latest insights, tutorials, and stories.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {getPosts().map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
