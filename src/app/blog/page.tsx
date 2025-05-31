import { blogPosts } from "@/utils/blogs";
import { BlogCard } from "./_component/BlogCard";
import { BackgroundPattern } from "../components/BackgroundPattern";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0d2230]">
      <BackgroundPattern />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-12" style={{ zIndex: 1 }}>
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Our Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-200">
            Discover the latest insights, tutorials, and stories from our team of experts
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
