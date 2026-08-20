import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { PageTransition } from '@/components/ui/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
            Not Found
          </p>
          <h1 className="heading-lg text-obsidian mb-6">Page Not Found</h1>
          <div className="gold-line mx-auto mb-8" />
          <p className="body-md text-warm-gray max-w-md mx-auto mb-10">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Link href="/">
            <Button variant="outline" size="md">
              Return Home
            </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
