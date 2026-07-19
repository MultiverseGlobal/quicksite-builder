import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/nexus-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Nexus Learning Hub"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            width={80}
            height={80}
            decoding="async"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold text-foreground">Nexus Learning Hub</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Building capacity · Driving excellence</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground [&>span]:scale-x-100" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span aria-hidden className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300" />
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-sm">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-menu"
            className="overflow-hidden border-t border-border md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}