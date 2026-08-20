import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { journalPosts } from '@/data'
import JournalPost from './JournalPost'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = journalPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Story Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  if (!journalPosts.some((p) => p.slug === slug)) {
    notFound()
  }

  return <JournalPost slug={slug} />
}
