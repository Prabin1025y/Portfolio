import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

interface PostData {
  title: string
  date: string
  author?: string
  readingTime: string
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

async function getPost(slug: string) {
  try {
    console.log('Attempting to read post:', slug)
    const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      console.log('File does not exist:', filePath)
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    if (!data.title || !data.date) {
      console.error('Missing required frontmatter fields:', { title: data.title, date: data.date })
      return null
    }
    
    return {
      data: {
        ...data,
        readingTime: getReadingTime(content)
      } as PostData,
      content
    }
  } catch (error) {
    console.error('Error in getPost:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts')
    
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(postsDirectory)
    
    return filenames
      .filter(filename => filename.endsWith('.mdx'))
      .map(filename => ({
        slug: filename.replace(/\.mdx$/, '')
      }))
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    return []
  }
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const resolvedParams = await params
    
    if (!resolvedParams || !resolvedParams.slug) {
      notFound()
    }
    
    const { slug } = resolvedParams
    const post = await getPost(slug)
    
    if (!post) {
      notFound()
    }

    console.log('Successfully rendering post page')

    return (
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
          >
            ← Back to posts
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.data.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time>{new Date(post.data.date).toLocaleDateString()}</time>
            <span className="mx-2">•</span>
            <span>{post.data.readingTime}</span>
            {post.data.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {post.data.author}</span>
              </>
            )}
          </div>
        </header>

        {/* Temporarily display raw content instead of using MDXRemote */}
        <div className="prose prose-lg max-w-none">
          <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded">
            {post.content}
          </pre>
        </div>
      </article>
    )
  } catch (error) {
    console.error('Error in PostPage component:', error)
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Post</h1>
          <p className="text-gray-600">There was an error loading this post.</p>
        </div>
      </div>
    )
  }
}