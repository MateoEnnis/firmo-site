import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Work — Firmo",
  description:
    "Real projects, real results. Automation workflows, QA audits, and web development case studies by Firmo.",
};

const projects = [
  {
    id: "ai-chatbot",
    category: "Automation",
    badge: "Featured",
    title: "AI-powered restaurant assistant on Telegram",
    client: "The Brew House",
    problem:
      "A restaurant needed to handle customer inquiries 24/7 — questions about the menu, parking, hours, and reservations. Staff was overwhelmed answering the same questions repeatedly via WhatsApp and phone.",
    solution:
      "Built an AI chatbot on Telegram using n8n + OpenAI that answers customer questions naturally, handles reservations automatically, and creates contacts in HubSpot CRM — all without human intervention.",
    results: [
      { value: "24/7", label: "availability" },
      { value: "0", label: "manual replies needed" },
      { value: "<5s", label: "response time" },
    ],
    tags: ["n8n", "OpenAI", "Telegram Bot", "HubSpot CRM", "AI Agent"],
    images: [
      {
        src: "/work/ai-chatbot-telegram.png",
        alt: "Telegram conversation showing the AI chatbot answering questions about menu, parking, and handling a reservation",
        caption: "Real conversation: the bot answers menu questions, parking info, and books a table — automatically",
      },
      {
        src: "/work/ai-chatbot-workflow.png",
        alt: "n8n workflow canvas showing Telegram trigger, AI Agent, and HubSpot integration nodes",
        caption: "The n8n workflow: Telegram trigger → AI Agent → CRM contact creation → confirmation message",
      },
      {
        src: "/work/ai-chatbot-hubspot.png",
        alt: "HubSpot CRM showing the contact created automatically from the chatbot reservation",
        caption: "Contact created in HubSpot automatically from the chatbot reservation",
      },
    ],
  },
  {
    id: "lead-notifier",
    category: "Automation",
    title: "Real-time lead capture & notification system",
    client: "SaaS Landing Page",
    problem:
      "Leads submitted through a landing page went to an email inbox that nobody checked in time. Response times averaged 6+ hours — by then, the lead had already contacted a competitor.",
    solution:
      "Built an n8n workflow that captures every form submission via webhook, logs it automatically in Google Sheets with timestamp and source tracking, and sends an instant Telegram notification to the sales team.",
    results: [
      { value: "<3s", label: "notification speed" },
      { value: "0", label: "lost leads" },
      { value: "$0", label: "/month running cost" },
    ],
    tags: ["n8n", "Webhooks", "Google Sheets", "Telegram", "Lead Capture"],
    images: [
      {
        src: "/work/lead-notifier-landing.png",
        alt: "Landing page with lead capture form and automation features listed",
        caption: "The client-facing landing page with the automated lead capture form",
      },
      {
        src: "/work/lead-notifier-sheets.png",
        alt: "Google Sheets showing leads automatically logged with date, name, email, phone, message, and source",
        caption: "Every lead logged automatically in Google Sheets — date, contact info, message, and source",
      },
      {
        src: "/work/lead-notifier-telegram.png",
        alt: "Telegram showing instant notifications for each new lead with full contact details",
        caption: "Instant Telegram alerts for every new lead — the team responds in minutes, not hours",
      },
    ],
  },
  {
    id: "crm-sync",
    category: "Automation",
    title: "Automatic CRM sync with zero duplicates",
    client: "B2B Sales Team",
    problem:
      "A sales team was manually copying lead data from multiple sources into HubSpot. Duplicates everywhere, inconsistent data, and hours wasted on data entry instead of selling.",
    solution:
      "Built an n8n workflow with smart upsert logic: if the email already exists in HubSpot, update the contact. If it's new, create it. Same lead from different sources? One clean record, always up to date.",
    results: [
      { value: "0", label: "duplicate contacts" },
      { value: "100%", label: "data accuracy" },
      { value: "3h", label: "saved per week" },
    ],
    tags: ["n8n", "HubSpot API", "Webhooks", "Upsert Logic", "Data Sync"],
    images: [
      {
        src: "/work/crm-sync-workflow.png",
        alt: "n8n workflow showing Webhook to HTTP Request to HubSpot API with success indicators",
        caption: "The n8n workflow: Webhook receives lead data → HubSpot API creates or updates the contact",
      },
      {
        src: "/work/crm-sync-hubspot.png",
        alt: "n8n HTTP Request node showing successful POST to HubSpot API with contact data",
        caption: "Under the hood: the HTTP Request node posting to HubSpot's contact upsert endpoint",
      },
    ],
  },
  {
    id: "ecommerce-qa",
    category: "QA & Testing",
    title: "11 broken flows nobody knew about",
    client: "E-commerce Platform",
    problem:
      "An e-commerce founder asked to \"just check if checkout works.\" A full QA audit revealed 11 broken user flows in production — from signup accepting empty fields to payments breaking on mobile Safari.",
    solution:
      "Ran a comprehensive QA audit covering every user-facing flow: signup, login, product browsing, cart, checkout, payment, and post-purchase. Documented every bug with steps to reproduce, severity classification, and screenshots. All issues resolved in one sprint.",
    results: [
      { value: "11", label: "bugs caught" },
      { value: "3", label: "critical severity" },
      { value: "1", label: "sprint to fix all" },
    ],
    tags: ["Manual QA", "Cross-browser Testing", "Mobile Safari", "Bug Reports", "E2E Flows"],
    images: [],
  },
  {
    id: "dashboard-rebuild",
    category: "Web Development",
    title: "Dashboard load time: 8s → 1.2s",
    client: "Internal Operations Tool",
    problem:
      "A client's internal dashboard had 8-second load times and no mobile support. The team avoided using it, defaulting to manual spreadsheets. The tool existed but wasn't being used.",
    solution:
      "Rebuilt with Next.js using server-side rendering, optimized API calls, and client-side caching. Same data, same features, completely new architecture. Mobile-responsive from day one.",
    results: [
      { value: "85%", label: "faster load" },
      { value: "1.2s", label: "new load time" },
      { value: "↑", label: "team adoption" },
    ],
    tags: ["Next.js", "React", "SSR", "API Optimization", "Responsive Design"],
    images: [],
  },
];

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-32">
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <p className="mb-3 font-mono text-sm tracking-widest text-accent-dim uppercase">
                Portfolio
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Real projects.{" "}
                <span className="gradient-text">Real results.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                No mock-ups. No hypotheticals. Every project below was built,
                deployed, and delivered to a real client. Screenshots are from
                live systems.
              </p>
            </FadeIn>
          </div>
        </section>

        <StaggerContainer className="space-y-16 px-6 pb-28" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article
                id={project.id}
                className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="p-8 sm:p-10">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-background">
                        {project.badge}
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted-soft">
                      {project.client}
                    </span>
                  </div>

                  <h2 className="mb-6 text-2xl font-bold leading-snug sm:text-3xl">
                    {project.title}
                  </h2>

                  <div className="mb-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 font-mono text-xs tracking-wider text-accent-dim uppercase">
                        Problem
                      </p>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-mono text-xs tracking-wider text-accent-dim uppercase">
                        Solution
                      </p>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 grid grid-cols-3 gap-4 rounded-2xl border border-border/50 bg-background/50 p-5">
                    {project.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                          {r.value}
                        </p>
                        <p className="mt-1 text-xs text-muted-soft">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.images.length > 0 && (
                  <div className="border-t border-border bg-background/30 p-6 sm:p-8">
                    <p className="mb-4 font-mono text-xs tracking-wider text-accent-dim uppercase">
                      Screenshots from the live project
                    </p>
                    <div className="grid gap-6">
                      {project.images.map((img) => (
                        <figure key={img.src}>
                          <div className="overflow-hidden rounded-xl border border-border">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="mt-2 text-xs text-muted-soft italic">
                            {img.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <section className="glow-seam border-t border-border px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-10 text-lg text-muted">
                Tell me what you&apos;re building. I&apos;ll get back with a
                clear, no-BS proposal within 24 hours.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a
                href="/#contact"
                className="cta-pulse inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]"
              >
                Start a project
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <a href="/" className="font-mono text-lg font-bold tracking-tight">
              <span className="text-accent">F</span>IRMO
            </a>
            <p className="text-xs text-muted">
              Automation &middot; QA &middot; Web Development
            </p>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted">
            <a href="/#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="/#process" className="transition-colors hover:text-foreground">Process</a>
            <a href="/work" className="text-foreground">Work</a>
            <a href="/#about" className="transition-colors hover:text-foreground">About</a>
            <a href="/#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p className="text-xs text-muted">Based in Uruguay &middot; Serving clients worldwide</p>
            <p className="font-mono text-xs text-muted-soft">
              &copy; {new Date().getFullYear()} Firmo
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
