import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
        ) : null}
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}