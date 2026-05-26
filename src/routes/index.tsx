import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Hammer,
  PaintBucket,
  Droplets,
  Trees,
  Wrench,
  Sparkles,
  Leaf,
  Clock,
  ShieldCheck,
  MapPin,
  DollarSign,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  Mail,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-handyman.jpg";
import logoImg from "@/assets/bonanza-logo.png";

const PHONE_DISPLAY = "(775) 555-0123";
const PHONE_TEL = "+17755550123";
const EMAIL = "hello@bonanza-handyman.com";

const services = [
  { icon: Wrench, title: "General Handyman", desc: "Honey-do lists, mounting, repairs, and odd jobs done right the first time." },
  { icon: Hammer, title: "Carpentry & Drywall", desc: "Trim work, framing fixes, drywall patches and texture matching." },
  { icon: PaintBucket, title: "Small Painting & Touchups", desc: "Interior touchups, accent walls, doors and trim refreshed." },
  { icon: Droplets, title: "Power Washing", desc: "Driveways, decks, siding and patios blasted back to new." },
  { icon: Trees, title: "Deck Building & Repair", desc: "Board replacement, railings, staining and full deck builds." },
  { icon: Sparkles, title: "Property Cleanup", desc: "Hauling, debris removal and full yard or garage cleanouts." },
  { icon: Leaf, title: "Landscaping", desc: "Trimming, gravel, mulch, planting and seasonal yard prep." },
];

const pillars = [
  { icon: Clock, title: "Same-Day Response", desc: "Most calls answered live. Most jobs scheduled within 24 hours." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", desc: "Fully credentialed in Nevada. Your home and wallet are protected." },
  { icon: MapPin, title: "Reno-Local & Accountable", desc: "We live here. We answer the phone. You know exactly who's coming." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "Clear quotes before we start. No mystery fees, no surprise add-ons." },
];

const cities = ["Reno", "Sparks", "Carson City", "North Lake Tahoe", "Incline Village", "Truckee"];

const faqs = [
  { q: "How fast can a handyman come to my home?", a: "For most of Reno, Sparks, and Carson City we offer same-day or next-day service. Call before noon and we'll usually have someone out the same afternoon." },
  { q: "Are you licensed and insured?", a: "Yes. Bonanza Handyman Services is fully licensed in Nevada, carries general liability insurance, and is bonded. We can provide proof of insurance on request before any work starts." },
  { q: "Do you charge by the hour or by the job?", a: "Both. Small repairs are typically billed hourly with a one-hour minimum. Larger projects (decks, painting, cleanup) get a flat-rate quote upfront so you know the price before we lift a tool." },
  { q: "What's the minimum job size?", a: "Our minimum service call is one hour. If you have a list of small tasks, we'll knock them out together to make the most of the visit." },
  { q: "Do you work in Tahoe and Carson City?", a: "Absolutely. We regularly serve Carson City, Incline Village, North Lake Tahoe, and Truckee in addition to Reno and Sparks. A small travel fee may apply for Tahoe-area calls." },
  { q: "Can you give me a free quote?", a: "Yes. Free quotes are standard. Submit the form on this page or call us and we'll either price it over the phone or schedule a quick on-site walkthrough at no charge." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://bonanza-handyman.com/og-image.jpg" },
      { property: "twitter:image", content: "https://bonanza-handyman.com/og-image.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://bonanza-handyman.com/#business",
              name: "Bonanza Handyman Services",
              description:
                "Same-day handyman and home services in Reno, Sparks, Carson City and the Lake Tahoe area. Licensed, insured and bonded.",
              url: "https://bonanza-handyman.com/",
              telephone: PHONE_TEL,
              email: EMAIL,
              priceRange: "$$",
              image: "https://bonanza-handyman.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Reno",
                addressRegion: "NV",
                postalCode: "89501",
                addressCountry: "US",
              },
              geo: { "@type": "GeoCoordinates", latitude: 39.5296, longitude: -119.8138 },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              areaServed: cities.map((c) => ({
                "@type": "City",
                name: c,
                ...(c === "Truckee"
                  ? { containedInPlace: { "@type": "State", name: "California" } }
                  : { containedInPlace: { "@type": "State", name: "Nevada" } }),
              })),
            },
            {
              "@type": "Service",
              serviceType: "Handyman Services",
              provider: { "@id": "https://bonanza-handyman.com/#business" },
              areaServed: cities,
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Home Services",
                itemListElement: services.map((s) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: s.title, description: s.desc },
                })),
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <ServiceArea />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/90 border-b" style={{ borderColor: "var(--brand-gold)" }}>
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Bonanza Handyman Services home">
          <img
            src={logoImg}
            alt="Bonanza Handyman Services logo"
            className="h-11 sm:h-14 w-auto"
          />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-glow transition-colors tracking-wide"
        >
          <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--bg-dark)", color: "var(--text-light)" }}
    >
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <img
            src={logoImg}
            alt="Bonanza Handyman Services"
            className="mx-auto md:mx-0 h-[140px] md:h-[200px] w-auto mb-8"
          />
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5" style={{ background: "color-mix(in oklab, var(--brand-gold) 25%, transparent)", color: "var(--brand-cream)" }}>
            <Star className="w-3.5 h-3.5 fill-current" /> Northern Nevada's same-day handyman
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-5" style={{ color: "var(--brand-cream)" }}>
            Same-day handyman & home services in <span style={{ color: "var(--brand-gold)" }}>Reno.</span>
          </h1>
          <p className="text-lg mb-6 max-w-lg mx-auto md:mx-0" style={{ color: "var(--text-light)", opacity: 0.85 }}>
            Most handymen take days to call back. We answer the phone, show up on time, and finish the job. Licensed, insured, and bonded — no guesswork.
          </p>

          <a
            href={`tel:${PHONE_TEL}`}
            className="block sm:inline-block mb-6 group"
            aria-label={`Call Bonanza Handyman at ${PHONE_DISPLAY}`}
          >
            <div className="flex items-center gap-3 rounded px-5 py-4 transition-transform group-hover:scale-[1.02]" style={{ background: "var(--brand-gold)", color: "var(--bg-dark)", boxShadow: "var(--shadow-bold)" }}>
              <Phone className="w-7 h-7 md:w-8 md:h-8" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest opacity-80">Tap to call now</div>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl leading-none font-extrabold">{PHONE_DISPLAY}</div>
              </div>
            </div>
          </a>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-sm font-semibold mb-6">
            <Badge>Licensed</Badge>
            <Badge>Insured</Badge>
            <Badge>Bonded</Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button asChild size="lg" className="font-semibold uppercase tracking-wider" style={{ background: "var(--brand-gold)", color: "var(--bg-dark)" }}>
              <a href="#contact">Get a free quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold border-2" style={{ borderColor: "var(--brand-cream)", color: "var(--brand-cream)", background: "transparent" }}>
              <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4" /> Call now</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Bonanza Handyman Services technician with tool belt in front of a Reno Nevada home"
            width={1536}
            height={1024}
            className="relative rounded object-cover w-full h-[420px] md:h-[520px] border"
            style={{ boxShadow: "var(--shadow-bold)", borderColor: "var(--brand-gold)" }}
          />
          <div className="absolute -bottom-4 -left-4 rounded px-4 py-3 border" style={{ background: "var(--bg-cream)", borderColor: "var(--brand-gold)", boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" style={{ fill: "var(--brand-gold)", color: "var(--brand-gold)" }} />)}
              </div>
              <span className="text-xs font-semibold" style={{ color: "var(--brand-brown)" }}>Reno-local & rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border-2 border-secondary/20 bg-card px-3 py-1">
      <ShieldCheck className="w-4 h-4 text-primary" /> {children}
    </span>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="What we do" title="Services we knock out daily" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-primary transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded flex items-center justify-center mb-4" style={{ background: "var(--brand-gold)", color: "var(--bg-dark)" }}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Why Bonanza" title="Why Reno calls us first" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 p-6">
              <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg mb-2 text-secondary-foreground">{p.title}</h3>
              <p className="text-sm opacity-80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--bg-cream)" }}>

      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Where we work" title="Proudly serving Northern Nevada" />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {cities.map((c) => (
            <div key={c} className="rounded-xl border border-border bg-card px-5 py-4 flex items-center gap-3 hover:border-primary transition-colors">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span className="font-semibold">{c}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          Don't see your city?{" "}
          <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold hover:underline">
            Call us at {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: PhoneCall, title: "Call or request a quote", desc: "Tell us what's going on. Most quotes happen in one short call." },
    { icon: CalendarCheck, title: "We schedule — often same day", desc: "Pick a window that works. We confirm and show up on time." },
    { icon: CheckCircle2, title: "Job done right", desc: "Clean work, clean site, fair invoice. Backed by our workmanship." },
  ];
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="How it works" title="Three steps. Zero runaround." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-card border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full font-display flex items-center justify-center text-lg" style={{ background: "var(--brand-gold)", color: "var(--bg-dark)" }}>
                {i + 1}
              </div>
              <s.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 px-4" style={{ background: "var(--bg-cream)" }}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="FAQ" title="Real answers, no fluff" />
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-bold text-base hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Quote request sent! We'll call you back shortly.");
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent font-bold mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl mb-5">Ready when you are.</h2>
          <p className="opacity-85 mb-8 max-w-md">
            Free quotes. Honest pricing. Most jobs scheduled within 24 hours of your call.
          </p>
          <ul className="space-y-4">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center"><Phone className="w-5 h-5" /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest opacity-70">Phone</span>
                  <span className="font-display text-2xl group-hover:text-accent transition-colors">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center"><Mail className="w-5 h-5" /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest opacity-70">Email</span>
                  <span className="font-semibold group-hover:text-accent transition-colors">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center"><Clock className="w-5 h-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-widest opacity-70">Hours</span>
                <span className="font-semibold">Mon–Fri 7a–7p · Sat 8a–5p · Sun by appt</span>
              </span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl bg-card text-foreground p-6 md:p-8 border border-border" style={{ boxShadow: "var(--shadow-bold)" }}>
          <h3 className="text-2xl mb-5">Get a free quote</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(775) 555-1234" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" required placeholder="Reno" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">What do you need done?</Label>
              <Textarea id="message" name="message" rows={4} required placeholder="Replace 3 deck boards, hang a TV, and patch some drywall..." />
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="w-full font-bold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
              {submitting ? "Sending..." : "Request my free quote"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Or call <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold">{PHONE_DISPLAY}</a> for the fastest response.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10 px-4 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 items-center">
        <p>© {new Date().getFullYear()} Bonanza Handyman Services · Licensed, Insured & Bonded · Reno, NV</p>
        <a href={`tel:${PHONE_TEL}`} className="font-bold text-primary hover:underline">{PHONE_DISPLAY}</a>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className={`text-xs uppercase tracking-widest font-bold mb-3 ${light ? "text-accent" : "text-primary"}`}>{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
