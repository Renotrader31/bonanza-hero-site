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
      { title: "Bonanza Handyman Services — Reno, Sparks & Carson City Handyman | Licensed & Insured" },
      {
        name: "description",
        content:
          "Reno's trusted handyman for TV mounting, drywall, doors, plumbing, electrical, and more. Licensed and insured. Call 775-470-0835.",
      },
      { name: "author", content: "Bonanza Handyman Services" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Bonanza Handyman Services — Reno, Sparks & Carson City Handyman | Licensed & Insured" },
      {
        property: "og:description",
        content:
          "Reno's trusted handyman for TV mounting, drywall, doors, plumbing, electrical, and more. Licensed and insured. Call 775-470-0835.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://www.bonanza-handyman.com/" },
      { property: "og:site_name", content: "Bonanza Handyman Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bonanza Handyman Services — Reno, Sparks & Carson City Handyman | Licensed & Insured" },
      { name: "twitter:description", content: "Bonanza Hero Site is a single-page marketing application for Bonanza Handyman Services." },
      { name: "theme-color", content: "#111111" },
      { name: "description", content: "Bonanza Hero Site is a single-page marketing application for Bonanza Handyman Services." },
      { property: "og:description", content: "Bonanza Hero Site is a single-page marketing application for Bonanza Handyman Services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/50e71d0f-e1d8-4d3a-acb2-5cca8e1d2c25/id-preview-a3004135--48774d6e-a87d-4393-8844-17b15174504c.lovable.app-1779834999139.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/50e71d0f-e1d8-4d3a-acb2-5cca8e1d2c25/id-preview-a3004135--48774d6e-a87d-4393-8844-17b15174504c.lovable.app-1779834999139.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q76ET413EF"></script>
        <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Q76ET413EF');`}</script>
        <HeadContent />
      </head>
      <body>
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
