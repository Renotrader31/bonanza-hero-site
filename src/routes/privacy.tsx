import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PHONE_TEL, EMAIL } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bonanza Handyman Services" },
      {
        name: "description",
        content:
          "Learn how Bonanza Handyman Services collects, uses, and protects your personal information.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Bonanza Handyman Services",
      },
      {
        property: "og:description",
        content:
          "Learn how Bonanza Handyman Services collects, uses, and protects your personal information.",
      },
      { property: "og:url", content: "https://www.bonanza-handyman.com/privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://www.bonanza-handyman.com/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest font-bold mb-3"
            style={{ color: "var(--brand-gold)" }}
          >
            Legal
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl mb-8"
            style={{ color: "var(--brand-cream)" }}
          >
            Privacy Policy
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Effective date: May 26, 2026</p>

            <p>
              Bonanza Handyman Services ("we," "us," "our") respects your privacy.
              This policy explains what information we collect from visitors to
              www.bonanza-handyman.com and how we use it.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Information we collect
            </h2>
            <p>
              When you submit a quote request through our contact form, we collect:
              your full name, phone number, email address, service address, the
              type of service you're requesting, and any project details you
              provide. We use these only to respond to your inquiry, schedule and
              complete service, send invoices and receipts, and follow up about
              completed work.
            </p>
            <p>
              We also automatically collect basic visit data through Google Analytics
              4 (pages viewed, browser type, approximate location). This data is
              anonymized and used only to understand which parts of our site are
              useful.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Service providers we work with
            </h2>
            <p>
              To run our business we share limited information with these vendors,
              who are contractually required to protect it: Resend (form submission
              email delivery), Google Analytics (anonymized site analytics), Stripe
              (payment processing — only when you choose to pay online), Wave
              (invoicing and bookkeeping — only for customers who become clients),
              and our hosting provider, Lovable.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              How long we keep your information
            </h2>
            <p>
              Quote requests that don't become projects are deleted within 90
              days. Customer records for completed projects are retained for 7 years
              to comply with tax and warranty requirements, then deleted.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Your rights (Nevada residents)
            </h2>
            <p>
              Under Nevada law (NRS 603A and related), you have the right to:
              request a copy of the personal information we hold about you; request
              that we correct or delete that information; and direct us not to sell
              your personal information. We do not sell personal information to third
              parties under any circumstances. To exercise any of these rights,
              email us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary font-bold hover:underline">
                {EMAIL}
              </a>{" "}
              with the subject "Privacy Request."
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Cookies</h2>
            <p>
              We use essential cookies to make the site work and analytics cookies
              (via Google Analytics) to understand usage. You can disable cookies in
              your browser settings; the site will still function.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Children</h2>
            <p>
              Our services are for homeowners and we do not knowingly collect
              information from anyone under 18.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Changes to this policy
            </h2>
            <p>
              If we update this policy, we'll post the new version here with a new
              effective date. Material changes will be announced in our email
              newsletter if you've subscribed.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Contact us
            </h2>
            <p>
              Questions about privacy? Call{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold hover:underline">
                775-470-0835
              </a>{" "}
              or email{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary font-bold hover:underline">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
