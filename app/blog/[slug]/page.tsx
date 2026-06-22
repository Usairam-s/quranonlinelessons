import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { client } from "../../../sanity/lib/client"
import { urlFor } from "../../../sanity/lib/image"
import { allPostsQuery, postBySlugQuery } from "../../../sanity/lib/queries"
import DarkSection from "../../components/DarkSection"
import LightSection from "../../components/LightSection"
import { ShareButton } from "./ShareButton"

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(allPostsQuery)
    return posts.map((post: any) => ({ slug: post.slug.current }))
  } catch (error) {
    console.error('Failed to fetch posts for static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await client.fetch(postBySlugQuery, { slug })
    return {
      title: `${post?.title || 'Blog Post'} | Quran Online Lessons`,
      description: post?.excerpt || "Read our latest articles on Quran education",
    }
  } catch (error) {
    return {
      title: 'Blog Post | Quran Online Lessons',
      description: 'Read our latest articles on Quran education',
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  let post
  try {
    post = await client.fetch(postBySlugQuery, { slug })
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return (
      <LightSection>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl font-bold text-brand-dark-green-text mb-4">Unable to load post</h1>
          <p className="text-brand-body-cream mb-6">There was an error loading this blog post.</p>
          <Link href="/blog" className="text-brand-gold hover:text-brand-gold-bright">
            ← Back to Blog
          </Link>
        </div>
      </LightSection>
    )
  }

  if (!post) return (
    <LightSection>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl font-bold text-brand-dark-green-text mb-4">Post not found</h1>
        <Link href="/blog" className="text-brand-gold hover:text-brand-gold-bright">
          ← Back to Blog
        </Link>
      </div>
    </LightSection>
  )

  return (
    <>
      <DarkSection>
        <div className="max-w-3xl mx-auto text-center">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-brand-gold hover:text-brand-gold-bright transition-colors">
              Home
            </Link>
            <span className="text-brand-off-white-body mx-2">/</span>
            <Link href="/blog" className="text-brand-gold hover:text-brand-gold-bright transition-colors">
              Blog
            </Link>
            <span className="text-brand-off-white-body mx-2">/</span>
            <span className="text-brand-off-white-body">{post.title}</span>
          </nav>
          <p className="text-brand-gold text-sm mb-4">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-brand-off-white-body text-lg leading-relaxed mt-6">
              {post.excerpt}
            </p>
          )}
        </div>
      </DarkSection>

      {post.coverImage && (
        <div className="relative w-full aspect-video max-h-[500px] overflow-hidden">
          <Image
            src={urlFor(post.coverImage).width(1200).height(600).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <LightSection>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <PortableText value={post.body} />
        </div>
      </LightSection>

      <LightSection>
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-brand-gold/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <p className="text-brand-body-cream text-sm">
                Found this helpful?
              </p>
              <p className="text-brand-dark-green-text font-semibold text-sm">
                Share it with other Muslim parents
              </p>
            </div>
            <ShareButton />
          </div>
          <div className="mt-8 pt-8 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-bright transition-colors text-sm font-medium"
            >
              ← Back to Blog
            </Link>
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark-green text-brand-gold border border-brand-gold/30 rounded-full text-sm font-medium hover:border-brand-gold transition-colors"
            >
              Book a Free Trial Class
            </Link>
          </div>
        </div>
      </LightSection>

      <DarkSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-gold mb-4">
            Have a Question About This?
          </h2>
          <p className="text-brand-off-white-body mb-8 leading-relaxed">
            Message us directly on WhatsApp — we reply personally
            and would love to help.
          </p>
          <a
            href="https://wa.me/923021771373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-brand-gold-bright transition-colors min-h-[44px]"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </DarkSection>

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
