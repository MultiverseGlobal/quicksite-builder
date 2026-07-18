import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/nexus-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Nexus Learning Hub" className="h-12 w-auto" width={80} height={80} loading="lazy" decoding="async" style={{ filter: "drop-shadow(0 0 8px oklch(0.72 0.17 47 / 0.25))" }} />
            <span className="font-display text-lg font-semibold">Nexus Learning Hub Ltd</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            A training, research, and management consulting firm bridging policy, practice, and professional development across the public and private sectors.
          </p>
          <p className="mt-6 font-display italic text-accent">
            &ldquo;Building Capacity. Driving Excellence.&rdquo;
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/team" className="hover:text-accent">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>No. 7 Valentino Echesi Street, Lugbe, Abuja</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><div className="flex flex-col"><a href="tel:+2348034928531" className="hover:text-accent">+234 803 492 8531</a><a href="tel:+2348064213392" className="hover:text-accent">+234 806 421 3392</a></div></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="mailto:nexuslearninghublimited@gmail.com" className="hover:text-accent break-all">nexuslearninghublimited@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Nexus Learning Hub. All rights reserved.</p>
          <p>Abuja, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}