import { promises as fs } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from 'next';

/** @type {import('rehype-pretty-code').Options} */
const options = {
    theme: {
        dark: "one-dark-pro",
        light: "one-light"
    },
    keepBackground: false,
};

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronLeft, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BackgroundPattern } from "@/app/components/BackgroundPattern"
import { Post } from '@/types'
import { mdxComponents } from '@/lib/markdown-components';
import { getReadingTime } from '@/utils/Utilities';

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "src/contents/posts")
    const posts = await fs.readdir(postsDirectory);
    return posts
        .filter(post => post.endsWith(".mdx"))
        .map(post => ({ slug: post.split(".")[0] }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params

    const fileContent = await fs.readFile(path.join(process.cwd(), "src/contents/posts", `${slug}.mdx`), 'utf-8')
    const { frontmatter } = await compileMDX<Post>({
        source: fileContent,
        options: {
            parseFrontmatter: true
        }
    })

    return {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        generator: 'Next.js',
        applicationName: 'Prabin Acharya Portfolio',
        referrer: 'origin-when-cross-origin',
        keywords: frontmatter.tags.split(",").map(tag => tag.trim()),
        authors: [{ name: 'Prabin ACharya' }],
        creator: 'Prabin Acharya',
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.excerpt,
            type: "article",
            publishedTime: '2025-04-06T00:00:00.000Z',
            authors: ['Prabin']
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}


export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {

    try {
        const resolvedParams = await params

        if (!resolvedParams || !resolvedParams.slug) {
            notFound()
        }
        const { slug } = resolvedParams

        const fileContent = await fs.readFile(path.join(process.cwd(), "src/contents/posts", `${slug}.mdx`), 'utf-8')
        const { content, frontmatter } = await compileMDX<Post>({
            source: fileContent,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [[rehypePrettyCode, options]],
                }
            },
            components: mdxComponents
        })


        if (!fileContent) {
            notFound()
        }

        console.log('Successfully rendering post page')

        return (
            <div className="relative min-h-screen">
                <BackgroundPattern />

                {/* Content */}
                <div className="container relative mx-auto px-4 py-12" style={{ zIndex: 1 }}>
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center text-sm font-medium hover:underline"
                    >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back to all posts
                    </Link>
                    {/* Content container with blurred background */}
                    <div className="mx-auto max-w-3xl 
                     backdrop-blur-lg rounded-2xl p-8  ">
                        <div className="mb-6 flex flex-wrap gap-2">
                            {frontmatter.tags.split(",").map((tag, index) => (
                                <Badge key={tag + index} variant="outline" className="dark:bg-[#3a7ca0]/20 border-[#3a7ca0]/40">
                                    {tag.trim()}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{frontmatter.title}</h1>

                        <div className="mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={frontmatter.authorAvatar || "/placeholder.svg"} alt={frontmatter.authorName} />
                                    <AvatarFallback className="bg-[#3a7ca0]/50">{frontmatter.authorName.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{frontmatter.authorName}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>{frontmatter.date}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>{getReadingTime(fileContent)} read</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
                            <Image src={`/BlogThumbnails/${frontmatter.thumbnail}` || "/placeholder.svg"} alt={frontmatter.title} fill className="object-cover" />
                        </div>

                        <div className="prose dark:prose-invert mx-auto max-w-none">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
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
