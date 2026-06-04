import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-dark)", color: "var(--text-light)" }}>
      <div className="max-w-lg text-center">
        <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: "var(--brand-gold)" }}>404</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-4" style={{ color: "var(--brand-cream)" }}>
          Looks like that page wandered off.
        </h1>
        <p className="text-lg mb-8 opacity-85">
          But we can probably fix it. Like everything else.
        </p>
        <Link
          to="/"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded px-6 py-3 text-base font-semibold uppercase tracking-wider transition-transform hover:scale-[1.02]"
          style={{ background: "var(--brand-gold)", color: "var(--bg-dark)", boxShadow: "var(--shadow-bold)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bonanza Handyman Services — Reno & Sparks Handyman" },
      {
        name: "description",
        content:
          "Reno's trusted handyman for TV mounting, drywall, doors, plumbing, electrical, and more. Licensed and insured. Call 775-470-0835.",
      },
      { name: "author", content: "Bonanza Handyman Services" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Bonanza Handyman Services — Reno & Sparks Handyman" },
      {
        property: "og:description",
        content:
          "Reno's trusted handyman for TV mounting, drywall, doors, plumbing, electrical, and more. Licensed and insured. Call 775-470-0835.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Bonanza Handyman Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bonanza Handyman Services — Reno & Sparks Handyman" },
      {
        name: "twitter:description",
        content:
          "Reno's trusted handyman for TV mounting, drywall, doors, plumbing, electrical, and more. Licensed and insured. Call 775-470-0835.",
      },
      { name: "theme-color", content: "#111111" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TSJMX9GJ');`}</script>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSJMX9GJ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
