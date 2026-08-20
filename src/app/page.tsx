'use client'

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";
import { Newsletter } from "@/components/ui/Newsletter";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeOut },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const revealLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: easeOut, delay: 0.3 },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const wordVariant: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeOut,
      delay: i * 0.18,
    },
  }),
};

function AnimatedQuote({ text }: { text: string }) {
  const words = text.split(" ").map((word, i) => ({ word, i }));

  return (
    <motion.blockquote
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="font-heading text-[clamp(1.5rem,3.5vw,2.2rem)] font-light leading-[1.35] text-obsidian max-w-2xl tracking-wide px-4 sm:px-0"
    >
      {words.map(({ word, i }) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariant}
          className="inline-block mr-[0.28em] last:mr-0"
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
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      >
        <source
          src="https://www.pexels.com/download/video/8779555/"
          type="video/mp4"
        />
      </video>
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      )}
      {overlay === "subtle" && <div className="absolute inset-0 bg-black/30" />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  return (
    <PageTransition>
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.pexels.com/download/video/5337312/"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: easeOut }}
            className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.5em] text-gold/90 mb-8"
          >
            REGALIA by June &amp; Co.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: easeOut }}
            className="font-heading text-[clamp(2.8rem,7vw,6.5rem)] font-light leading-[0.95] text-white tracking-tight max-w-5xl"
          >
            Presence is
            <br />
            Power.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: easeOut }}
            className="mt-8 text-[13px] md:text-sm font-light text-white/60 tracking-wide max-w-md"
          >
            Where African heritage meets contemporary luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: easeOut }}
            className="mt-14"
          >
            <Link href="/collections">
              <span className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 border border-white/25 px-8 md:px-10 py-3.5 md:py-4 hover:border-gold hover:text-gold transition-all duration-700">
                Enter the House
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </section>

      <section className="relative my-12 md:my-16">
        <div className="flex items-center justify-center flex-col text-center mb-8 md:mb-2">
          <AnimatedQuote text="Every Stitch Tells a Story of Excellence." />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian/70 border-b border-obsidian/20 pb-0.5 hover:border-gold hover:text-gold transition-all duration-700"
          >
            Discover
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-5 gap-[7px] md:gap-px h-[80vh] md:h-screen">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="relative overflow-hidden group"
          >
            <img
              src="/men/94a74682ebf1c052463f93f89d858fdf.jpg"
              alt="Menswear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.025]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10 transition-all duration-700 ease-out group-hover:from-black/55 group-hover:via-black/20 group-hover:to-black/5" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
              <motion.div variants={stagger}>
                <motion.h3
                  variants={fadeUp}
                  className="font-accent text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.1] text-white mb-6 tracking-wide"
                >
                  Menswear
                </motion.h3>
                <motion.div variants={fadeUp}>
                  <Link href="/collections/menswear">
                    <span className="group/link inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 font-body border-b border-white/30 pb-0.5 hover:border-gold hover:text-gold transition-all duration-700">
                      Explore Collection
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover/link:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="relative overflow-hidden group"
          >
            <img
              src="https://i.pinimg.com/736x/ec/eb/cf/ecebcf84219b93c9cbc8337358c7278f.jpg"
              alt="Womenswear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.025]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10 transition-all duration-700 ease-out group-hover:from-black/55 group-hover:via-black/20 group-hover:to-black/5" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
              <motion.div variants={stagger}>
                <motion.h3
                  variants={fadeUp}
                  className="font-accent text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.1] text-white mb-6 tracking-wide"
                >
                  Womenswear
                </motion.h3>
                <motion.div variants={fadeUp}>
                  <Link href="/collections/womenswear">
                    <span className="group/link inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 font-body border-b border-white/30 pb-0.5 hover:border-gold hover:text-gold transition-all duration-700">
                      Explore Collection
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover/link:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <CinematicVideo
        poster="https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg"
        className="h-[70vh] md:h-screen w-full my-12 md:my-16"
        overlay="dark"
      >
        <div className="h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/70 mb-6"
            >
              Fashion Film
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] text-white mb-8"
            >
              The Art of Presence
            </motion.h2>

            <motion.div
              variants={revealLine}
              className="w-16 h-px bg-gold/50 origin-center mx-auto mb-8"
            />

            <motion.p
              variants={fadeUp}
              className="text-[12px] font-light text-white/40 tracking-wide uppercase"
            >
              A visual journey through craft, culture, and conviction
            </motion.p>
          </motion.div>
        </div>
      </CinematicVideo>

      <section className="relative min-h-screen mx-4 md:mx-5 bg-ivory-light flex items-center my-12 md:my-16">
        <div className="w-full grid grid-cols-1  lg:grid-cols-2 min-h-screen">
          <div className="flex items-center order-2 lg:order-1 px-6 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
              className="max-w-md"
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-medium uppercase tracking-[0.4em] text-obsidian/70 mb-8"
              >
                Our Philosophy
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.15] text-obsidian mb-8"
              >
                Where Heritage
                <br />
                Meets Haute Couture
              </motion.h2>

              <motion.div
                variants={revealLine}
                className="w-12 h-px bg-gold/50 origin-left mb-8"
              />

              <motion.p
                variants={fadeUp}
                className="text-[14px] font-light text-warm-gray leading-[1.85] mb-6"
              >
                Born from the rich tapestry of African sartorial tradition and
                refined through the lens of global haute couture, REGALIA exists
                at the intersection of ancestral pride and contemporary vision.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-[14px] font-light text-warm-gray leading-[1.85]"
              >
                We source the finest fabrics from Nigeria’s great textile
                markets and heritage mills abroad, uniting them with techniques passed through
                generations of West African master tailors.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="relative h-[55vh] lg:h-auto overflow-hidden order-1 lg:order-2"
          >
            <img
              src="https://i.pinimg.com/736x/89/ec/32/89ec328d75b43508d7bcb85b4e2bbc6d.jpg"
              alt="REGALIA craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      <section className="bg-ivory my-12 md:my-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="md:col-span-7 relative aspect-[4/5] md:aspect-auto md:h-screen overflow-hidden group"
          >
            <img
              src="https://i.pinimg.com/736x/02/89/04/02890490e4ebe20924823aaa4bbecb35.jpg"
              alt="Editorial 1"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="relative flex-1 min-h-[50vh] md:min-h-0 overflow-hidden group"
            >
              <img
                src="https://i.pinimg.com/736x/f7/41/36/f741369c602d24a0490ebecf68b7bfeb.jpg"
                alt="Editorial 2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="relative flex-1 min-h-[50vh] md:min-h-0 overflow-hidden group"
            >
              <img
                src="https://i.pinimg.com/736x/34/a6/0f/34a60f7723d5d21f2c14964a3c3b70c0.jpg"
                alt="Editorial 3"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  );
}
