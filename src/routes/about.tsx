import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexus Learning Hub" },
      { name: "description", content: "Nexus Learning Hub is a Nigerian training, research, and management consulting firm serving government, academia, and the private sector." },
      { property: "og:title", content: "About Nexus Learning Hub" },
      { property: "og:description", content: "Our vision, mission, and the N.E.X.U.S values that guide our work with institutions across Africa." },
    ],
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
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-sm border-l-2 border-accent bg-secondary/40 p-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent">Our Vision</h2>
            <p className="mt-4 font-display text-2xl leading-snug text-foreground">
              To be the preferred hub for professional learning and institutional capacity development in Africa.
            </p>
          </div>
          <div className="rounded-sm border-l-2 border-accent bg-secondary/40 p-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent">Our Mission</h2>
            <p className="mt-4 font-display text-2xl leading-snug text-foreground">
              To deliver high-impact training, research, and consultancy services that enhance transparency, efficiency, and productivity in institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Core values</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">The N.E.X.U.S standard</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {values.map((v) => (
              <div key={v.l} className="rounded-sm border border-border bg-background p-6">
                <div className="font-display text-4xl font-bold text-accent">{v.l}</div>
                <div className="mt-2 font-display text-base font-semibold text-foreground">{v.w}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">The Nexus Model</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">We don&apos;t just train — we connect.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Nexus = Government + Academia + Private Sector + Development Partners. This model allows us to design programs that are practical, policy-aligned, and sustainable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Government", "Academia", "Private Sector", "Development Partners"].map((p, i) => (
              <div key={p} className={`rounded-sm border border-border p-6 ${i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-background"}`}>
                <div className="text-xs uppercase tracking-[0.18em] opacity-70">Pillar {i + 1}</div>
                <div className="mt-2 font-display text-lg font-semibold">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Why partner with Nexus Learning Hub</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {why.map((w) => (
              <li key={w} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span className="text-primary-foreground/85">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}