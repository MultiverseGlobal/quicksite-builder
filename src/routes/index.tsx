import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Landmark, LineChart, Users, BookOpenCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 82) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.78 0.14 82) 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.15fr_1fr] md:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Training · Research · Consulting
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Building Capacity.<br />
              <span className="text-accent">Driving Excellence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              Nexus Learning Hub is a leading training, research, and management consulting firm bridging the gap between policy, practice, and professional development across the public and private sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-sm bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">Partner with us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -right-6 top-6 h-full w-full rounded-sm border border-accent/40" />
            <div className="relative rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur">
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-accent">The Nexus Model</h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                We don&apos;t just train — we connect. Our model unites four essential actors to create programs that are practical, policy-aligned, and sustainable.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {["Government", "Academia", "Private Sector", "Development Partners"].map((p) => (
                  <li key={p} className="rounded-sm border border-primary-foreground/15 bg-background/5 px-3 py-3 text-primary-foreground/90">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-4">
          {[
            { k: "BPP", v: "Bureau of Public Procurement" },
            { k: "NUC", v: "National Universities Commission" },
            { k: "AfCFTA", v: "African Continental Free Trade Area" },
            { k: "World Bank", v: "SPESSE objectives" },
          ].map((i) => (
            <div key={i.k}>
              <div className="font-display text-lg font-semibold text-primary">{i.k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-accent">What we do</span>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
              High-impact capacity building, research, and advisory
            </h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-primary hover:text-accent">
            View all services →
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { icon: GraduationCap, title: "Capacity Building & Training", body: "Certificate, Diploma and Executive courses in procurement, supply chain, project management, governance, and leadership." },
            { icon: Landmark, title: "Technical Consultancy", body: "Event management, documentation, research, policy drafting, and Technical Secretariat services." },
            { icon: Handshake, title: "Institutional Partnerships", body: "Facilitating MoUs between universities, BPP, NUC, and international agencies to establish Centres of Excellence." },
            { icon: LineChart, title: "Research & Data Services", body: "Policy research, baseline studies, and data analytics to support evidence-based decision making." },
            { icon: BookOpenCheck, title: "E-Learning & Content", body: "Design and deployment of digital learning platforms and courseware for institutions." },
            { icon: Users, title: "Expert Associate Network", body: "Former BPP directors, university professors, and certified procurement and project management professionals." },
          ].map((s) => (
            <div key={s.title} className="group bg-background p-8 transition-colors hover:bg-secondary/40">
              <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">Let&apos;s build capacity together.</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              From concept note to event delivery to final report — end-to-end service backed by proven government linkages.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-sm">
            <Link to="/contact">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}