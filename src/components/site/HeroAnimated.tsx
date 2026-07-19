import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/nexus-logo.png";
import bgUrl from "@/assets/bg-abuja.jpg";

const words = ["Building", "Capacity."];
const words2 = ["Driving", "Excellence."];

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

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center md:py-32">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Training · Research · Consulting
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
            <span className="block">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block pr-3"
                  initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block text-accent">
              {words2.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block pr-3"
                  initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Nexus Learning Hub is a leading training, research, and management consulting firm bridging the gap between policy, practice, and professional development across the public and private sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
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

        {/* Logo mark card */}
        <div className="relative hidden md:block">
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
            className="grid place-items-center px-8"
          >
            <motion.img
              src={logoUrl}
              alt="Nexus Learning Hub logo mark"
              className="h-72 w-auto drop-shadow-sm"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              width={400}
              height={400}
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}