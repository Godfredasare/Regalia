import type { Metadata } from 'next'
import PetiteCollection from './PetiteCollection'

// Dedicated static route for REGALIA Petite — deliberately NOT served by the
// generic /collections/[slug] template (static segments take precedence over
// dynamic ones in the App Router; [slug] also excludes 'petite' from its
// generateStaticParams so the path is never double-generated).
export const metadata: Metadata = {
  // absolute — bypasses the root layout's `%s | REGALIA by June & Co.`
  // template so the title matches the SEO spec exactly.
  title: {
    absolute: "REGALIA Petite | Children's Occasion Wear, Accra",
  },
  description:
    "REGALIA Petite dresses children for life's big moments — kaftans, agbada, wedding, church and family looks, made to measure in Accra with soft, child-safe finishing.",
}

export default function Page() {
  return <PetiteCollection />
}
