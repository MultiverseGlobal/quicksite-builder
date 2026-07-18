import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/motion/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexus Learning Hub" },
      { name: "description", content: "Get in touch with Nexus Learning Hub in Abuja, Nigeria. Call, email, or send us a message to discuss training and consultancy engagements." },
      { property: "og:title", content: "Contact Nexus Learning Hub" },
      { property: "og:description", content: "No. 7 Valentino Echesi Street, Lugbe, Abuja. +234 803 492 8531." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please write a short message").max(4000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      organization: parsed.data.organization || null,
      subject: parsed.data.subject || null,
      message: parsed.data.message,
    };
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }
    toast.success("Thank you — your message has been received.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let&rsquo;s build capacity together."
        description="Tell us about your programme, engagement, or research need. Our team responds within two business days."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal as="section" className="space-y-8">
            <aside className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Reach us</span>
              <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">Nexus Learning Hub</h2>
            </div>

            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Head office</div>
                  <a href="https://maps.google.com/?q=No.+7+Valentino+Echesi+Street,+Lugbe,+Abuja" target="_blank" rel="noopener noreferrer" className="mt-1 block text-foreground hover:text-accent">
                    No. 7 Valentino Echesi Street,<br />Lugbe, Abuja, Nigeria
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Phone</div>
                  <a href="tel:+2348034928531" className="mt-1 block text-foreground hover:text-accent">+234 803 492 8531</a>
                  <a href="tel:+2348064213392" className="mt-0.5 block text-foreground hover:text-accent">+234 806 421 3392</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</div>
                  <a href="mailto:nexuslearninghublimited@gmail.com" className="mt-1 block break-all text-foreground hover:text-accent">nexuslearninghublimited@gmail.com</a>
                </div>
              </li>
            </ul>

            <div className="rounded-sm border-l-2 border-accent bg-secondary/50 p-6">
              <p className="font-display italic text-foreground">&ldquo;Building Capacity. Driving Excellence.&rdquo;</p>
            </div>
            </aside>
          </Reveal>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={onSubmit}
            className="rounded-sm border border-border bg-background p-8 shadow-sm md:p-10"
          >
            <h2 className="font-display text-2xl font-semibold text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" name="name" required maxLength={120} autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={254} autoComplete="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" maxLength={40} autoComplete="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organisation</Label>
                <Input id="organization" name="organization" maxLength={200} autoComplete="organization" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" maxLength={200} placeholder="e.g. Training partnership enquiry" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" required maxLength={4000} rows={6} />
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-8 rounded-sm bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-70" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending…
                </>
              ) : (
                <>Send message <Send className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}