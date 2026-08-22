import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { collections } from '@/data'
import CollectionCategory from './CollectionCategory'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  // '/collections/petite' has its own dedicated page — exclude it here so the
  // dynamic route never double-generates a conflicting static path.
  return collections
    .filter((collection) => collection.slug !== 'petite')
    .map((collection) => ({ slug: collection.slug }))
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
