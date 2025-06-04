export type projectCardProps = {
    title: string
    description: string
    image: string
    techStack: string[]
    githubUrl: string
    liveUrl: string
    featured: boolean
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  authorName: string
  authorAvatar: string
  readingTime: string
  thumbnail: string
  tags: string
}