import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logoImg from "@/assets/bonanza-logo.png";

export const PHONE_DISPLAY = "775-470-0835";
export const PHONE_TEL = "+17754700835";
export const EMAIL = "info@bonanza-handyman.com";

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur bg-background/90 border-b"
      style={{ borderColor: "var(--brand-gold)" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Bonanza Handyman Services home"
        >
          <img
            src={logoImg}
            alt="Bonanza Handyman Services logo"
            className="h-11 sm:h-14 w-auto"
          />
        </Link>
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

export function Footer() {
  return (
    <footer
      className="py-10 px-4 text-sm"
      style={{ background: "var(--bg-dark)", color: "var(--text-light)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 items-center">
        <p style={{ color: "var(--brand-cream)" }}>
          © {new Date().getFullYear()} Bonanza Handyman Services · Licensed,
          Insured & Bonded · Reno, NV
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/privacy"
            className="hover:underline"
            style={{ color: "var(--brand-cream)" }}
          >
            Privacy Policy
          </Link>
          <span style={{ color: "var(--brand-cream)", opacity: 0.4 }}>|</span>
          <Link
            to="/terms"
            className="hover:underline"
            style={{ color: "var(--brand-cream)" }}
          >
            Terms of Service
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-bold hover:underline"
            style={{ color: "var(--brand-gold)" }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
