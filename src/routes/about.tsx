import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexus Learning Hub" },
      { name: "description", content: "Nexus Learning Hub is a Nigerian training, research, and management consulting firm serving government, academia, and the private sector." },
      { property: "og:title", content: "About Nexus Learning Hub" },
      { property: "og:description", content: "Our vision, mission, and the N.E.X.U.S values that guide our work with institutions across Africa." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { l: "N", w: "National Impact", d: "Solutions that support Nigeria's development agenda." },
  { l: "E", w: "Excellence", d: "World-class delivery standards in every engagement." },
  { l: "X", w: "Expertise", d: "Knowledge-driven and evidence-based approaches." },
  { l: "U", w: "Unity in Partnership", d: "Collaboration with government, academia, and the private sector." },
  { l: "S", w: "Service", d: "Client-focused and result-oriented delivery." },
];

const why = [
  "Proven government linkages — deep understanding of how to engage BPP, NUC, and other regulatory bodies.",
  "End-to-end service — from concept note to event delivery to final report.",
  "Quality assurance — all programs designed to meet national and international standards.",
  "Results focused — measurable impact for institutions and participants.",
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Bridging policy, practice, and professional development."
        description="Nexus Learning Hub is a leading training, research, and management consulting firm in Nigeria. Our mandate is to provide cutting-edge capacity building, technical advisory, and learning solutions aligned with national development goals and global best practices."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealStagger className="grid gap-8 md:grid-cols-2" stagger={0.12}>
          <RevealItem className="rounded-sm border-l-2 border-accent bg-secondary/60 p-8 transition-shadow hover:shadow-md">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent">Our Vision</h2>
            <p className="mt-4 font-display text-2xl leading-snug text-foreground">
              To be the preferred hub for professional learning and institutional capacity development in Africa.
            </p>
          </RevealItem>
          <RevealItem className="rounded-sm border-l-2 border-accent bg-secondary/60 p-8 transition-shadow hover:shadow-md">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent">Our Mission</h2>
            <p className="mt-4 font-display text-2xl leading-snug text-foreground">
              To deliver high-impact training, research, and consultancy services that enhance transparency, efficiency, and productivity in institutions.
            </p>
          </RevealItem>
        </RevealStagger>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Core values</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">The N.E.X.U.S standard</h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-4 md:grid-cols-5" stagger={0.08}>
            {values.map((v) => (
              <RevealItem key={v.l} className="group rounded-sm border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md">
                <div className="font-display text-4xl font-bold text-accent transition-transform group-hover:scale-110">{v.l}</div>
                <div className="mt-2 font-display text-base font-semibold text-foreground">{v.w}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.d}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">The Nexus Model</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">We don&apos;t just train — we connect.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Nexus = Government + Academia + Private Sector + Development Partners. This model allows us to design programs that are practical, policy-aligned, and sustainable.
            </p>
          </div>
          <RevealStagger className="grid grid-cols-2 gap-3" stagger={0.08}>
            {["Government", "Academia", "Private Sector", "Development Partners"].map((p, i) => (
              <RevealItem key={p} className={`group rounded-sm border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${i % 2 === 0 ? "border-transparent bg-primary text-primary-foreground" : "border-border bg-background"}`}>
                <div className="text-xs uppercase tracking-[0.18em] opacity-70">Pillar {i + 1}</div>
                <div className="mt-2 font-display text-lg font-semibold">{p}</div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Why partner with Nexus Learning Hub</h2>
          <RevealStagger as="ul" className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.08}>
            {why.map((w) => (
              <RevealItem as="li" key={w} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span className="text-primary-foreground/85">{w}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </section>
    </>
  );
}