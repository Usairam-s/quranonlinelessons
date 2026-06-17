import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { client } from "../../sanity/lib/client"
import { urlFor } from "../../sanity/lib/image"
import { allPostsQuery } from "../../sanity/lib/queries"
import DarkSection from "../components/DarkSection"
import LightSection from "../components/LightSection"

export const metadata: Metadata = {
  title: "Blog | Quran Online Lessons",
  description: "Articles and guides for Muslim families on Quran education, online learning, and raising children connected to their faith.",
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <>
      <DarkSection>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Blog
          </h1>
          <p className="text-brand-off-white-body text-lg sm:text-xl leading-relaxed">
            Guides, advice and resources for Muslim families on
            Quran education and online learning.
          </p>
        </div>
      </DarkSection>

      <LightSection>
        {posts.length === 0 ? (
          <div className="text-center max-w-xl mx-auto">
            <p className="text-brand-body-cream text-lg">
              No posts yet — check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block border border-brand-gold/20 rounded-2xl overflow-hidden hover:border-brand-gold transition-colors"
              >
                {post.coverImage && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={urlFor(post.coverImage).width(600).height(338).url()}
                      alt={post.title}
                      fill
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
                  <h2 className="font-display text-xl font-bold text-brand-dark-green-text mb-3 group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-brand-body-cream text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </LightSection>

      <footer className="bg-brand-dark-green text-brand-off-white-body py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-display text-2xl text-brand-gold mb-2">
            Quran Online Lessons
          </h3>
          <p className="text-sm mb-4">
            Online Quran Academy — Live 1-on-1 Classes
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-4">
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">About</a>
            <span className="text-brand-gold/50">·</span>
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Courses</a>
            <span className="text-brand-gold/50">·</span>
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Free Trial</a>
            <span className="text-brand-gold/50">·</span>
            <a href="#" className="text-brand-gold hover:text-brand-gold-bright transition-colors">Contact</a>
          </div>

          <p className="text-xs">
            © 2025 Quran Online Lessons. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
