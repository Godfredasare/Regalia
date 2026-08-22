'use client'

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";
import { Newsletter } from "@/components/ui/Newsletter";
import { useIsMobile } from "@/hooks/useIsMobile";

const EASE_LUX: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_LUX },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const revealLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: EASE_LUX, delay: 0.25 },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

function AnimatedQuote({ text }: { text: string }) {
  const words = text.split(" ").map((word, i) => ({ word, i }));

  return (
    <motion.blockquote
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="font-heading px-4 text-[clamp(1.5rem,3.5vw,2.2rem)] font-light leading-[1.35] tracking-wide text-obsidian sm:px-0"
    >
      {words.map(({ word, i }) => (
        <motion.span
          key={i}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.7,
            ease: EASE_LUX,
            delay: i * 0.05,
          }}
          className="mr-[0.28em] inline-block last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.blockquote>
  );
}

function CinematicVideo({
  poster,
  className,
  overlay = "dark",
  children,
}: {
  poster: string;
  className?: string;
  overlay?: "dark" | "subtle" | "none";
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/8779555/"
          type="video/mp4"
        />
      </video>
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/45 to-navy-dark/75" />
      )}
      {overlay === "subtle" && (
        <div className="absolute inset-0 bg-navy-dark/35" />
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

// Marquee — endless craft strip between hero and content

const marqueeItems = [
  "Bespoke Tailoring",
  "Editorial Fashion",
  "Premium Fabrics",
  "Native Wear",
  "Weddings & Occasions",
  "Accra · Lagos",
];

function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-border-subtle bg-ivory py-5"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {marqueeItems.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 text-[10px] font-medium uppercase tracking-[0.4em] text-obsidian/60 md:text-[11px]">
                  {item}
                </span>
                <span className="h-1 w-1 rotate-45 bg-gold/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Hero parallax — softened on phones, off for reduced motion
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0]);
  const heroScale = useTransform(
    heroProgress,
    [0, 1],
    [1, reduceMotion ? 1 : isMobile ? 1.06 : 1.12]
  );

  // Philosophy image drift
  const { scrollYProgress: philProgress } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"],
  });
  const philY = useTransform(
    philProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-6%", "6%"]
  );

  return (
    <PageTransition>
      {/* HERO                                                             */}
      <section ref={heroRef} className="relative h-svh w-full overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="../../public/hero.png"
            className="h-full w-full object-cover"
          >
            <source
              src="https://www.pexels.com/download/video/5337312/"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-navy-dark/30 to-navy-dark/70" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE_LUX }}
            className="mb-7 text-[10px] font-medium uppercase tracking-[0.5em] text-gold/90 md:text-[11px]"
          >
            REGALIA by June &amp; Co.
          </motion.p>

          <h1 className="max-w-5xl font-heading text-[clamp(2.8rem,9vw,6.5rem)] font-light leading-[0.95] tracking-tight text-white">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="inline-block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: EASE_LUX }}
              >
                Presence is
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="inline-block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.68, ease: EASE_LUX }}
              >
                Power.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: EASE_LUX }}
            className="mt-7 max-w-md text-[13px] font-light tracking-wide text-white/65 md:text-sm"
          >
            Where African heritage meets contemporary luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: EASE_LUX }}
            className="mt-11"
          >
            <Link href="/collections" aria-label="Enter the House — view collections">
              <span className="group relative inline-flex items-center gap-3 overflow-hidden border border-white/30 px-8 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/90 transition-colors duration-700 hover:border-gold active:scale-[0.97] md:px-10">
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gold/15 transition-transform duration-1000 ease-lux group-hover:translate-x-0"
                />
                <span className="relative">Enter the House</span>
                <ArrowRight className="relative h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* CRAFT MARQUEE                                                    */}
      <Marquee />

      {/* QUOTE + SPLIT TILES                                              */}
      <section className="mx-4 my-12 md:my-16 md:mx-5">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <AnimatedQuote text="Every Stitch Tells a Story of Excellence." />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealLine}
            className="gold-line mt-8 origin-center"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/collections"
              className="link-underline inline-flex items-center gap-3 border-b border-obsidian/20 pb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian/70 transition-colors duration-700 hover:border-gold hover:text-gold"
            >
              Discover
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid h-[75svh] grid-cols-1 gap-[7px] md:h-screen md:grid-cols-2 md:gap-px">
          {[
            {
              label: "01",
              title: "Menswear",
              href: "/collections/menswear",
              image: "/men/94a74682ebf1c052463f93f89d858fdf.jpg",
              eager: true,
            },
            {
              label: "02",
              title: "Womenswear",
              href: "/collections/womenswear",
              image:
                "https://i.pinimg.com/736x/ec/eb/cf/ecebcf84219b93c9cbc8337358c7278f.jpg",
              eager: true,
            },
          ].map((tile) => (
            <motion.div
              key={tile.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="group relative overflow-hidden"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2500ms] ease-lux group-hover:scale-[1.04]"
                loading={tile.eager ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-navy-dark/5 transition-opacity duration-700 group-hover:from-navy-dark/70" />

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
                <motion.div variants={stagger}>
                  <motion.p
                    variants={fadeUp}
                    className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-white/50"
                  >
                    {tile.label}
                  </motion.p>
                  <motion.h3
                    variants={fadeUp}
                    className="mb-6 font-accent text-[clamp(1.75rem,2.5vw,2.4rem)] font-light leading-[1.1] tracking-wide text-white"
                  >
                    {tile.title}
                  </motion.h3>
                  <motion.div
                    variants={fadeUp}
                    className="mb-6 h-px w-10 origin-left bg-gold/70 transition-all duration-1000 ease-lux group-hover:w-20"
                  />
                  <motion.div variants={fadeUp}>
                    <Link href={tile.href}>
                      <span className="inline-flex items-center gap-3 border-b border-white/30 pb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-700 hover:border-gold hover:text-gold">
                        Explore Collection
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FASHION FILM                                                     */}
      <CinematicVideo
        poster="https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg"
        className="my-12 h-[60svh] w-full md:my-16 md:h-screen"
        overlay="dark"
      >
        <div className="flex h-full items-center justify-center px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-white/70"
            >
              Fashion Film
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mb-8 font-heading text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] text-white"
            >
              The Art of Presence
            </motion.h2>

            <motion.div
              variants={revealLine}
              className="mx-auto mb-8 h-px w-16 origin-center bg-gold/60"
            />

            <motion.p
              variants={fadeUp}
              className="text-[12px] font-light uppercase tracking-wide text-white/45"
            >
              A visual journey through craft, culture, and conviction
            </motion.p>
          </motion.div>
        </div>
      </CinematicVideo>

      {/* PHILOSOPHY                                                       */}
      <section className="relative mx-4 my-12 bg-ivory-light md:my-16 md:mx-5">
        <div className="grid w-full grid-cols-1 lg:min-h-screen lg:grid-cols-2">
          <div className="order-2 flex items-center px-6 py-16 md:px-16 lg:order-1 lg:py-24 lg:pl-20 xl:pl-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={stagger}
              className="max-w-md"
            >
              <motion.p
                variants={fadeUp}
                className="mb-8 text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
              >
                Our Philosophy
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mb-8 font-heading text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.15] text-obsidian"
              >
                Where Heritage
                <br />
                Meets Haute Couture
              </motion.h2>

              <motion.div
                variants={revealLine}
                className="mb-8 h-px w-12 origin-left bg-gold/60"
              />

              <motion.p
                variants={fadeUp}
                className="mb-6 text-[14px] font-light leading-[1.85] text-warm-gray"
              >
                Born from the rich tapestry of African sartorial tradition and
                refined through the lens of global haute couture, REGALIA
                exists at the intersection of ancestral pride and contemporary
                vision.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-[14px] font-light leading-[1.85] text-warm-gray"
              >
                We source the finest fabrics from Nigeria&rsquo;s great textile
                markets and heritage mills abroad, uniting them with techniques
                passed through generations of West African master tailors.
              </motion.p>
            </motion.div>
          </div>

          <div
            ref={philosophyRef}
            className="relative order-1 h-[55svh] overflow-hidden lg:order-2 lg:h-auto"
          >
            <motion.img
              src="https://i.pinimg.com/736x/89/ec/32/89ec328d75b43508d7bcb85b4e2bbc6d.jpg"
              alt="REGALIA craftsmanship"
              style={{ y: philY }}
              className="absolute inset-0 h-[112%] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-navy-dark/10" />
          </div>
        </div>
      </section>

      {/* FEATURED PIECES                                                 
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="mb-12 text-center md:mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
            >
              The Collections
            </motion.p>
            <motion.h2 variants={fadeUp} className="heading-lg mb-6 text-obsidian">
              Featured Pieces
            </motion.h2>
            <motion.div
              variants={revealLine}
              className="gold-line mx-auto origin-center"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-8 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                hoverImage={product.images[1]}
                fabric={product.fabric}
                slug={product.slug}
                isNewArrival={product.newArrival}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-14 text-center"
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 border border-obsidian/40 px-9 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-obsidian transition-all duration-700 ease-lux hover:border-obsidian hover:bg-obsidian hover:text-white active:scale-[0.97]"
            >
              View All Pieces
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* EDITORIAL GRID                                                   */}
      <section className="my-12 bg-ivory md:my-16">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn}
            className="group relative aspect-[4/5] overflow-hidden md:col-span-7 md:aspect-auto md:h-screen"
          >
            <img
              src="https://i.pinimg.com/736x/02/89/04/02890490e4ebe20924823aaa4bbecb35.jpg"
              alt="Editorial — bridal"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2500ms] ease-lux group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <p className="absolute bottom-6 left-6 max-md:hidden translate-y-3 font-accent text-sm italic tracking-wide text-white opacity-0 transition-all duration-700 ease-lux group-hover:translate-y-0 group-hover:opacity-100">
              The Wedding Files — bespoke bridal in silk Mikado
            </p>
          </motion.div>

          <div className="flex flex-col gap-1 md:col-span-5">
            {[
              {
                src: "https://i.pinimg.com/736x/f7/41/36/f741369c602d24a0490ebecf68b7bfeb.jpg",
                alt: "Editorial — shirting",
                caption: "The Shirting — Egyptian cotton, cut clean",
              },
              {
                src: "https://i.pinimg.com/736x/34/a6/0f/34a60f7723d5d21f2c14964a3c3b70c0.jpg",
                alt: "Editorial — resort",
                caption: "Resort Notes — linen for the long weekend",
              },
            ].map((item) => (
              <motion.div
                key={item.src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn}
                className="group relative min-h-[50svh] flex-1 overflow-hidden md:min-h-0"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2500ms] ease-lux group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <p className="absolute bottom-6 left-6 max-md:hidden translate-y-3 font-accent text-sm italic tracking-wide text-white opacity-0 transition-all duration-700 ease-lux group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT VOICE                                                    
      <section className="border-t border-border-subtle bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE_LUX }}
          >
            <div className="mb-7 flex justify-center gap-1">
              {Array.from({ length: quote.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-gold text-gold"
                  strokeWidth={1}
                />
              ))}
            </div>
            <blockquote className="font-accent text-[clamp(1.25rem,2.5vw,1.75rem)] font-light italic leading-relaxed text-obsidian">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <div className="gold-line mx-auto my-7" />
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-obsidian">
              {quote.name}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-warm-gray">
              {quote.title}
            </p>
          </motion.div>
        </div>
      </section> */}

      <Newsletter />
    </PageTransition>
  );
}
