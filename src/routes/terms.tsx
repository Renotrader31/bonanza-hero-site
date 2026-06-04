import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PHONE_TEL, EMAIL } from "@/components/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Bonanza Handyman Services" },
      {
        name: "description",
        content:
          "Read the Terms of Service for using Bonanza Handyman Services' website and booking handyman work in Northern Nevada.",
      },
      {
        property: "og:title",
        content: "Terms of Service — Bonanza Handyman Services",
      },
      {
        property: "og:description",
        content:
          "Read the Terms of Service for using Bonanza Handyman Services' website and booking handyman work in Northern Nevada.",
      },
      { property: "og:url", content: "https://www.bonanza-handyman.com/terms" },
    ],
    links: [
      { rel: "canonical", href: "https://www.bonanza-handyman.com/terms" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
            Terms of Service
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Effective date: May 26, 2026</p>

            <p>
              These Terms of Service govern your use of www.bonanza-handyman.com
              and any services provided by Bonanza Handyman Services.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Services
            </h2>
            <p>
              Bonanza Handyman Services provides handyman work including but not
              limited to TV mounting, drywall repair, door and lock service, light
              electrical and plumbing repair, furniture assembly, and general home
              maintenance, primarily in Reno, Sparks, Carson City, and surrounding
              Northern Nevada communities. We reserve the right to decline any
              project at our discretion. Service availability and pricing may change
              without notice.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Estimates and pricing
            </h2>
            <p>
              Estimates provided on this website or by phone are starting ranges.
              Final pricing is provided after we assess the specific job. Prices on
              the website are subject to change. A written quote, when provided, is
              valid for 30 days unless otherwise stated.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Booking, deposits, and payment
            </h2>
            <p>
              Some projects require a deposit to schedule. Deposits are applied to
              your final invoice and are non-refundable if you cancel within 48 hours
              of the scheduled work. Final payment is due on completion of work
              unless otherwise agreed in writing. We accept payment by cash,
              credit/debit card, ACH bank transfer, and any other methods explicitly
              offered at the time of invoicing.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Workmanship and warranty
            </h2>
            <p>
              We stand behind our work. Labor on completed projects is warranted for
              30 days from completion. Materials are covered under their original
              manufacturer warranties. Warranty does not cover damage caused by
              misuse, weather events, normal wear, alterations made after
              completion, or work performed by another party. To request warranty
              service, call 775-470-0835 within the warranty period.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by Nevada law, Bonanza Handyman
              Services' liability for any claim related to services or this website
              is limited to the amount actually paid for the specific service at
              issue. We are not liable for indirect, incidental, or consequential
              damages.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Cancellation and rescheduling
            </h2>
            <p>
              We ask for at least 24 hours notice if you need to cancel or
              reschedule. Cancellations with less than 24 hours notice may forfeit
              any deposit paid. We will do the same for you — if we need to
              reschedule, we'll give you as much notice as possible.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Property access and conditions
            </h2>
            <p>
              You agree to provide safe and reasonable access to the work area. If
              unsafe conditions are present (active leaks, electrical hazards,
              structural concerns, pests, etc.) we may pause work, advise you of the
              condition, and require remediation before continuing. Time spent on
              diagnosis or remediation guidance is billable at our standard hourly
              rate.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of the State of Nevada. Any
              dispute will first attempt to be resolved through informal discussion.
              If that fails, jurisdiction is in Washoe County, Nevada.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Contact us
            </h2>
            <p>
              Questions about these terms? Call{" "}
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
