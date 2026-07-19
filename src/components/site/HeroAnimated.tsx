import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/nexus-logo.png";
import bgUrl from "@/assets/bg-abuja.jpg";

const brandWords = ["NEXUS", "Learning", "Hub"];
const taglineWords = ["Building", "Capacity.", "Driving", "Excellence."];

export function HeroAnimated() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Editorial background photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.10]"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      {/* Soft orange radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(60% 55% at 78% 30%, oklch(0.72 0.17 47 / 0.18) 0%, transparent 65%), radial-gradient(50% 45% at 10% 90%, oklch(0.72 0.17 47 / 0.10) 0%, transparent 65%)",
        }}
      />
      {/* Grid hairlines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-center md:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Training · Research · Consulting
          </motion.span>

          <h1 className="mt-8 font-display text-6xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            {brandWords.map((word, i) => (
              <span key={word} className="block">
                {word.split("").map((letter, j) => (
                  <motion.span
                    key={`${word}-${j}`}
                    className={`inline-block ${word === "Hub" ? "text-accent" : ""}`}
                    initial={{ opacity: 0, y: reduce ? 0 : 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + i * 0.12 + j * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <h2 className="mt-6 font-display text-2xl font-medium leading-tight text-muted-foreground sm:text-3xl md:text-4xl">
            {[
              ["Building", "Capacity."],
              ["Driving", "Excellence."],
            ].map((pair, pairIndex) => (
              <span key={pairIndex} className="block">
                {pair.map((word, wordIndex) => (
                  <motion.span
                    key={word}
                    className={`inline-block pr-3 ${wordIndex === 1 ? "text-accent" : ""}`}
                    initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.9 + pairIndex * 0.15 + wordIndex * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A leading training, research, and management consulting firm bridging the gap between policy, practice, and professional development across the public and private sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-sm bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Partner with us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm">
              <Link to="/services">Explore services</Link>
            </Button>
          </motion.div>
        </div>

        {/* Logo mark — decorative, smaller */}
        <div className="relative hidden items-center justify-center md:flex">
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle at center, oklch(0.72 0.17 47 / 0.18) 0%, transparent 70%)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid place-items-center px-6"
          >
            <motion.img
              src={logoUrl}
              alt="Nexus Learning Hub logo mark"
              className="h-48 w-auto opacity-90 drop-shadow-sm md:h-56 lg:h-64"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              width={300}
              height={300}
              decoding="async"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
