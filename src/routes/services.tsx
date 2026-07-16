import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GraduationCap, Landmark, Handshake, LineChart, BookOpenCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexus Learning Hub" },
      { name: "description", content: "Capacity building, technical consultancy, institutional partnerships, research, and e-learning services for the public and private sectors." },
      { property: "og:title", content: "Services — Nexus Learning Hub" },
      { property: "og:description", content: "Explore our five core services and key expertise areas, aligned with BPP, NUC, AfCFTA, and World Bank SPESSE objectives." },
    ],
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
        <div className="space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="group grid gap-6 rounded-sm border border-border bg-background p-8 transition-colors hover:border-accent md:grid-cols-[minmax(220px,auto)_1fr] md:items-start md:gap-10">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-accent/40 bg-accent/10 text-accent">
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
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Key expertise</span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">Where we go deep</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Our associate network combines former regulators, academics, and certified practitioners.
              </p>
            </div>
            <ul className="space-y-0 divide-y divide-border border-y border-border">
              {expertise.map((e, i) => (
                <li key={e} className="flex items-baseline gap-4 py-5">
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <span className="text-foreground">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}