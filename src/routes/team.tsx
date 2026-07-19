import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import dipoUrl from "@/assets/dipo-abgoola.jpg";
import kaspaUrl from "@/assets/kaspa-abah.jpg";
import musabUrl from "@/assets/musab-ibrahim.jpg";
import greenwillUrl from "@/assets/greenwill-kanu.jpg";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Nexus Learning Hub" },
      { name: "description", content: "Meet the directors and lead consultants behind Nexus Learning Hub, plus our network of associate consultants and resource persons." },
      { property: "og:title", content: "Our Team — Nexus Learning Hub" },
      { property: "og:description", content: "A pool of former BPP directors, university professors, and certified procurement and project management professionals." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const team = [
  { name: "Mr Dipo Abgoola", role: "Director, Projects", img: dipoUrl },
  { name: "Kaspa Abah, Ph.D", role: "Lead Technical Consultant", img: kaspaUrl },
  { name: "Mus'ab Ibrahim", role: "Director, Research and Strategy", img: musabUrl },
  { name: "Barr. Greenwill Chinedum Kanu", role: "Chief Legal Adviser", img: greenwillUrl },
];

const associates = [
  "Former Directors in BPP and MDAs",
  "University Professors in Procurement and Supply Chain",
  "Certified Procurement and Project Management Professionals",
  "Governance and Policy Experts",
];

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Leadership rooted in policy and practice."
        description="Our directors and lead consultants are supported by a deep pool of associate consultants and resource persons across government, academia, and industry."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {team.map((m) => (
            <RevealItem key={m.name} as="article" className="group overflow-hidden rounded-sm border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="border-t border-border p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">{m.role}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Associate consultants</span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">A network of specialist resource persons</h2>
            </div>
            <RevealStagger as="ul" className="space-y-0 divide-y divide-border border-y border-border" stagger={0.06}>
              {associates.map((a, i) => (
                <RevealItem as="li" key={a} className="group flex items-baseline gap-4 py-5">
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <span className="text-foreground transition-transform duration-300 group-hover:translate-x-1">{a}</span>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
        </div>
      </section>
    </>
  );
}