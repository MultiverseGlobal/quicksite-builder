import type { ReactNode } from "react";
import { motion } from "framer-motion";
import bgUrl from "@/assets/bg-abuja.jpg";

export function PageHeader({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 60% at 85% 20%, oklch(0.72 0.17 47 / 0.22) 0%, transparent 65%)" }} />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {eyebrow ? (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs uppercase tracking-[0.22em] text-accent"
          >
            {eyebrow}
          </motion.span>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display text-4xl font-semibold leading-[1.1] md:text-5xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
        {children}
      </div>
    </section>
  );
}