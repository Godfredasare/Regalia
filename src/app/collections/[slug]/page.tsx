import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { collections } from '@/data'
import CollectionCategory from './CollectionCategory'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = collections.find((c) => c.slug === slug)

  if (!collection) {
    return { title: 'Collection Not Found' }
  }

  return {
    title: collection.name,
    description: collection.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  if (!collections.some((c) => c.slug === slug)) {
    notFound()
  }

  return <CollectionCategory slug={slug} />
}
