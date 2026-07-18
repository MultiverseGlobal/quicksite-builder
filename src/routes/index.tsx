import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Landmark, LineChart, Users, BookOpenCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAnimated } from "@/components/site/HeroAnimated";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Learning Hub — Building Capacity. Driving Excellence." },
      { name: "description", content: "Training, research, and management consulting for the public and private sectors across Nigeria and Africa." },
      { property: "og:title", content: "Nexus Learning Hub" },
      { property: "og:description", content: "Training, research, and management consulting for the public and private sectors across Africa." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nexus Learning Hub Limited",
          url: "/",
          description:
            "Training, research, and management consulting firm bridging policy, practice, and professional development.",
          email: "nexuslearninghublimited@gmail.com",
          telephone: ["+234-803-492-8531", "+234-806-421-3392"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 7 Valentino Echesi Street, Lugbe",
            addressLocality: "Abuja",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroAnimated />

      <section className="border-b border-border bg-secondary/60">
        <RevealStagger className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-4" stagger={0.08}>
          {[
            { k: "BPP", v: "Bureau of Public Procurement" },
            { k: "NUC", v: "National Universities Commission" },
            { k: "AfCFTA", v: "Trade Facilitation" },
            { k: "World Bank", v: "SPESSE objectives" },
          ].map((i) => (
            <RevealItem key={i.k}>
              <div className="font-display text-lg font-semibold text-foreground">{i.k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.v}</div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-accent">What we do</span>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
              High-impact capacity building, research, and advisory
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent">
            View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3" stagger={0.06}>
          {[
            { icon: GraduationCap, title: "Capacity Building & Training", body: "Certificate, Diploma and Executive courses in procurement, supply chain, project management, governance, and leadership." },
            { icon: Landmark, title: "Technical Consultancy", body: "Event management, documentation, research, policy drafting, and Technical Secretariat services." },
            { icon: Handshake, title: "Institutional Partnerships", body: "Facilitating MoUs between universities, BPP, NUC, and international agencies to establish Centres of Excellence." },
            { icon: LineChart, title: "Research & Data Services", body: "Policy research, baseline studies, and data analytics to support evidence-based decision making." },
            { icon: BookOpenCheck, title: "E-Learning & Content", body: "Design and deployment of digital learning platforms and courseware for institutions." },
            { icon: Users, title: "Expert Associate Network", body: "Former BPP directors, university professors, and certified procurement and project management professionals." },
          ].map((s) => (
            <RevealItem key={s.title} className="group relative bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/50">
              <s.icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span aria-hidden className="absolute left-0 top-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Let&apos;s build capacity together.</h2>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/70">
              From concept note to event delivery to final report — end-to-end service backed by proven government linkages.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-sm bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}