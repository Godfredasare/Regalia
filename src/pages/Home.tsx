import { useRef } from "react";
import { Link } from "react-router-dom";
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

export default function Home() {
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
            // poster="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=85"
            className="w-full h-full object-cover"
          >
            <source
              // src="https://www.pexels.com/download/video/6192901/"
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
            <Link to="/collections">
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

      {/* <section className="relative min-h-screen flex items-center overflow-hidden"> */}
      {/* Background video
        <video
          autoPlay
          muted
          loop
          playsInline
          // poster="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
        >
          <source
            src="https://www.pexels.com/download/video/5337312/"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-28 md:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80 mb-8">
                The House of June
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(1.8rem,4.5vw,3.8rem)] font-light leading-[1.15] text-white italic max-w-3xl mb-10"
            >
              &ldquo;True elegance is not worn &mdash; it is commanded.&rdquo;
            </motion.h2>

            <motion.div
              variants={revealLine}
              className="w-16 h-px bg-gold/60 origin-left mb-8"
            />

            <motion.p
              variants={fadeUp}
              className="text-[13px] font-light text-white/50 tracking-wide max-w-lg"
            >
              Every REGALIA creation is a dialogue between heritage and vision — a
testament to the belief that African luxury is a timeless standard.
            </motion.p>
          </motion.div>
        </div> */}
      {/* </section> */}

      <section className="relative my-12 md:my-16">
        <div className="flex items-center justify-center flex-col text-center mb-8 md:mb-2">
          <AnimatedQuote text="Crafted with Purpose. Worn with Presence."/>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <Link
            to="/collections"
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
              src="https://images.pexels.com/photos/13856979/pexels-photo-13856979.jpeg"
              alt="Menswear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.025]"
              loading="eager"
            />
            {/* Overlay — lightens on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10 transition-all duration-700 ease-out group-hover:from-black/55 group-hover:via-black/20 group-hover:to-black/5" />

            {/* Bottom-left content */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
              <motion.div variants={stagger}>
                <motion.h3
                  variants={fadeUp}
                  className="font-accent text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.1] text-white mb-6 tracking-wide"
                >
                  Menswear
                </motion.h3>
                <motion.div variants={fadeUp}>
                  <Link to="/collections/menswear">
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
              src="https://images.pexels.com/photos/37439164/pexels-photo-37439164.jpeg"
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
                  <Link to="/collections/womenswear">
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
        poster="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=85"
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
              className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80 mb-6"
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
          {/* Content - left on desktop */}
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
                className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold mb-8"
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
                We source the world’s finest fabrics from Italian mills and
                Japanese ateliers, uniting them with techniques passed through
                generations of West African master tailors.
              </motion.p>
            </motion.div>
          </div>

          {/* Image - right on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="relative h-[55vh] lg:h-auto overflow-hidden order-1 lg:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=85"
              alt="REGALIA craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      <section className="bg-white my-12 md:my-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Large image — left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="md:col-span-7 relative aspect-[4/5] md:aspect-auto md:h-screen overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85"
              alt="Editorial 1"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
          </motion.div>

          {/* Right column — two stacked images */}
          <div className="md:col-span-5 flex flex-col gap-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="relative flex-1 min-h-[50vh] md:min-h-0 overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=85"
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
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=85"
                alt="Editorial 3"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden my-8 md:my-16">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=85"
          alt="Bespoke tailoring"
          className="absolute inset-0"
          speed={0.06}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80 mb-8"
          >
            The Bespoke Experience
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] text-white mb-8"
          >
            Crafted for You
            <br />
            Alone
          </motion.h2>

          <motion.div
            variants={revealLine}
            className="w-16 h-px bg-gold/50 origin-center mx-auto mb-10"
          />

          <motion.p
            variants={fadeUp}
            className="text-[14px] font-light text-white/55 leading-[1.8] max-w-lg mx-auto mb-14"
          >
            From the first measurement to the final stitch, every bespoke
            garment is a deeply personal journey of collaboration and craft.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link to="/bespoke">
              <span className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 border border-white/25 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-700">
                Begin Your Journey
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section> */}
{/* 
      <section className="bg-ivory-light py-32 md:py-40 my-8 md:my-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20 md:mb-28"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold mb-6"
            >
              Curated Pieces
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(1.6rem,3vw,2.8rem)] font-light leading-[1.15] text-obsidian"
            >
              Selected for the Season
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                name: "The Sovereign Suit",
                category: "Menswear",
                image:
                  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=85",
                slug: "the-sovereign-suit",
              },
              {
                name: "The Heritage Agbada",
                category: "Native Wear",
                image:
                  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
                slug: "the-heritage-agbada",
              },
              {
                name: "The Midnight Gown",
                category: "Womenswear",
                image:
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85",
                slug: "the-midnight-gown",
              },
            ].map((piece, i) => (
              <motion.div
                key={piece.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link to={`/product/${piece.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-6">
                    <img
                      src={piece.image}
                      alt={piece.name}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold mb-2">
                    {piece.category}
                  </p>
                  <h3 className="font-heading text-xl font-light text-obsidian tracking-wide">
                    {piece.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-20"
          >
            <Link to="/shop">
              <span className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian border-b border-obsidian/15 pb-1 hover:border-gold hover:text-gold transition-all duration-700">
                View All Pieces
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section> */}

     
      {/* <section className="bg-white py-28 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="flex items-end justify-between mb-16 md:mb-20"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold mb-3">
                @regaliajune
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-light text-obsidian">
                From Our World
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian border-b border-obsidian/15 pb-1 hover:border-gold hover:text-gold transition-all duration-700"
              >
                Follow
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {instagramPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden group ${
                  i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeIn}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
              </motion.a>
            ))}
          </div>
        </div>
      </section> */}

    
      <Newsletter />
    </PageTransition>
  );
}
