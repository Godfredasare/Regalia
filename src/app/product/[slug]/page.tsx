import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/data'
import ProductDetail from './ProductDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  if (!products.some((p) => p.slug === slug)) {
    notFound()
  }

  return <ProductDetail slug={slug} />
}
