import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GraduationCap, Landmark, Handshake, LineChart, BookOpenCheck } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexus Learning Hub" },
      { name: "description", content: "Capacity building, technical consultancy, institutional partnerships, research, and e-learning services for the public and private sectors." },
      { property: "og:title", content: "Services — Nexus Learning Hub" },
      { property: "og:description", content: "Explore our five core services and key expertise areas, aligned with BPP, NUC, AfCFTA, and World Bank SPESSE objectives." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: GraduationCap, title: "Capacity Building & Training", body: "Certificate, Diploma and Executive courses in Public Procurement, Supply Chain, Project Management, Governance, and Leadership — aligned with BPP, NUC, and professional bodies." },
  { icon: Landmark, title: "Technical Consultancy & Secretariat Services", body: "Event management, documentation, research, policy drafting, and Technical Secretariat services for government and institutional projects (e.g. BPP, AfCFTA engagements)." },
  { icon: Handshake, title: "Institutional Partnership & Linkages", body: "Facilitating MoUs and partnerships between universities, BPP, NUC, and international agencies to establish Centres of Excellence." },
  { icon: LineChart, title: "Research & Data Services", body: "Policy research, baseline studies, and data analytics to support evidence-based decision making." },
  { icon: BookOpenCheck, title: "E-Learning & Content Development", body: "Design and deployment of digital learning platforms and courseware for institutions." },
];

const expertise = [
  "Public Procurement & Public Finance Management (aligned with the Public Procurement Act 2007)",
  "Supply Chain & Logistics Management",
  "Governance, Anti-Corruption & Transparency",
  "AfCFTA, Trade Facilitation & Regional Integration",
  "University–Industry–Government Partnerships",
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Cutting-edge capacity building and advisory."
        description="Five core service areas — designed to be practical, policy-aligned, and sustainable — delivered to government agencies, universities, and development organisations."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealStagger className="space-y-5" stagger={0.06}>
          {services.map((s, i) => (
            <RevealItem key={s.title} as="article" className="group relative grid gap-6 overflow-hidden rounded-sm border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md md:grid-cols-[minmax(220px,auto)_1fr] md:items-start md:gap-10">
              <span aria-hidden className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-accent/40 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    0{i + 1} / 0{services.length}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                </div>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Key expertise</span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">Where we go deep</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Our associate network combines former regulators, academics, and certified practitioners.
              </p>
            </div>
            <RevealStagger as="ul" className="space-y-0 divide-y divide-border border-y border-border" stagger={0.06}>
              {expertise.map((e, i) => (
                <RevealItem as="li" key={e} className="group flex items-baseline gap-4 py-5 transition-colors hover:bg-background/60">
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <span className="text-foreground transition-transform duration-300 group-hover:translate-x-1">{e}</span>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
        </div>
      </section>
    </>
  );
}