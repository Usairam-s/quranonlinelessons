import Link from "next/link"
import Image from "next/image"
import { client } from "../../sanity/lib/client"
import { urlFor } from "../../sanity/lib/image"
import { ArrowRight } from "lucide-react"

const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt
}`

export default async function RecentBlogs() {
  let posts = []
  
  try {
    posts = await client.fetch(recentPostsQuery)
  } catch (error) {
    console.error('Failed to fetch recent posts:', error)
  }

  if (posts.length === 0) return null

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-green-text mb-4">
          Recent Blog Posts
        </h2>
        <p className="text-brand-body-cream text-lg">
          Practical guidance for Muslim families on Quran education
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group block bg-white shadow-md hover:shadow-xl border border-brand-gold/10 rounded-2xl overflow-hidden hover:border-brand-gold transition-all"
          >
            {post.coverImage && (
              <div className="relative aspect-video w-full overflow-hidden bg-brand-cream">
                <Image
                  src={urlFor(post.coverImage).width(600).height(338).url()}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <p className="text-brand-gold text-sm mb-2">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="font-display text-xl font-bold text-brand-dark-green-text mb-3 group-hover:text-brand-gold transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-brand-body-cream text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors"
        >
          View All Posts
          <ArrowRight className="w-5 h-5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  )
}
