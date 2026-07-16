import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import dipoAsset from "@/assets/dipo-abgoola.jpg.asset.json";
import kaspaAsset from "@/assets/kaspa-abah.jpg.asset.json";
import musabAsset from "@/assets/musab-ibrahim.jpg.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Nexus Learning Hub" },
      { name: "description", content: "Meet the directors and lead consultants behind Nexus Learning Hub, plus our network of associate consultants and resource persons." },
      { property: "og:title", content: "Our Team — Nexus Learning Hub" },
      { property: "og:description", content: "A pool of former BPP directors, university professors, and certified procurement and project management professionals." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Mr Dipo Abgoola", role: "Director, Programme", img: dipoAsset.url },
  { name: "Kaspa Abah, Ph.D", role: "Lead Consultant", img: kaspaAsset.url },
  { name: "Mus'ab Ibrahim", role: "Director, Policy and Strategy", img: musabAsset.url },
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="group overflow-hidden rounded-sm border border-border bg-background transition-shadow hover:shadow-lg">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-border p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Associate consultants</span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">A network of specialist resource persons</h2>
            </div>
            <ul className="space-y-0 divide-y divide-border border-y border-border">
              {associates.map((a, i) => (
                <li key={a} className="flex items-baseline gap-4 py-5">
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <span className="text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}