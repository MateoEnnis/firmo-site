import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "5 Business Processes You Can Automate Today with n8n — Firmo",
  description:
    "Lead capture, CRM sync, invoice follow-ups, reporting, and customer onboarding — all automated with n8n for $0/month. Real examples from production workflows.",
  openGraph: {
    title: "5 Business Processes You Can Automate Today with n8n",
    description:
      "Stop paying per-task fees. These 5 automations save 10-20 hours per week and cost $0/month to run.",
    type: "article",
    publishedTime: "2026-06-28",
    authors: ["Mateo Ennis"],
  },
};

export default function Article() {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-32">
        <article className="px-6 pb-28">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="mb-8">
                <a
                  href="/blog"
                  className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted-soft transition-colors hover:text-accent"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                  Back to blog
                </a>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                    Automation
                  </span>
                  <span className="font-mono text-xs text-muted-soft">
                    June 28, 2026
                  </span>
                  <span className="text-border">·</span>
                  <span className="font-mono text-xs text-muted-soft">
                    7 min read
                  </span>
                </div>
                <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  5 Business Processes You Can Automate Today with n8n
                </h1>
                <p className="text-lg leading-relaxed text-muted">
                  Every week, someone on your team spends hours on tasks a
                  workflow could handle in seconds. Here are 5 automations I
                  build for clients regularly — each one saves 5-15 hours per
                  week and costs $0/month to run after setup.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose-firmo space-y-12">
                {/* What is n8n */}
                <section>
                  <h2>Why n8n (and not Zapier or Make)?</h2>
                  <p>
                    Quick context: <strong>n8n</strong> is an open-source workflow automation
                    platform. You can self-host it on a $5/month server, which means:
                  </p>
                  <ul>
                    <li>No per-task fees (Zapier charges per &quot;zap&quot; execution)</li>
                    <li>No monthly subscription beyond hosting</li>
                    <li>Full control over your data — nothing goes through a third party</li>
                    <li>200+ integrations out of the box</li>
                  </ul>
                  <p>
                    For a business running 1,000+ automations per month, this saves
                    $200-500/month compared to Zapier or Make. Let&apos;s get into the
                    processes.
                  </p>
                </section>

                {/* Process 1 */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg font-bold text-accent">
                      01
                    </span>
                    <h2 className="!mb-0">Lead capture & instant notification</h2>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-2 font-mono text-xs text-accent-dim">THE PROBLEM</p>
                    <p className="text-sm text-muted">
                      Leads from your website form go to an email inbox. Someone checks it
                      hours later. By then, the lead contacted a competitor.
                    </p>
                  </div>
                  <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
                    <p className="mb-2 font-mono text-xs text-accent">THE AUTOMATION</p>
                    <p className="text-sm text-muted">
                      Form submission → n8n webhook → log in Google Sheets (with timestamp,
                      source, all fields) → instant Telegram/Slack notification to your
                      sales team.
                    </p>
                  </div>
                  <p>
                    <strong>Result:</strong> Response time drops from hours to minutes.
                    78% of deals go to the first responder — this automation makes sure
                    that&apos;s you.
                  </p>
                  <p>
                    I built exactly this for a SaaS company. Their lead response time went
                    from 6+ hours to under 3 seconds.{" "}
                    <a href="/work#lead-notifier">See the full case study →</a>
                  </p>
                </section>

                {/* Process 2 */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg font-bold text-accent">
                      02
                    </span>
                    <h2 className="!mb-0">CRM sync with zero duplicates</h2>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-2 font-mono text-xs text-accent-dim">THE PROBLEM</p>
                    <p className="text-sm text-muted">
                      Your sales team manually copies lead data from forms, emails, and
                      spreadsheets into the CRM. Duplicates everywhere. Hours wasted on
                      data entry instead of selling.
                    </p>
                  </div>
                  <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
                    <p className="mb-2 font-mono text-xs text-accent">THE AUTOMATION</p>
                    <p className="text-sm text-muted">
                      Any data source → n8n webhook → smart upsert logic: if email exists
                      in CRM, update the contact. If new, create it. Multiple sources →
                      one clean record.
                    </p>
                  </div>
                  <p>
                    <strong>Result:</strong> Zero duplicate contacts. 100% data accuracy.
                    3+ hours saved per week. Works with HubSpot, Pipedrive, Salesforce, or
                    any CRM with an API.
                  </p>
                  <p>
                    <a href="/work#crm-sync">See how I built this for a B2B sales team →</a>
                  </p>
                </section>

                {/* Process 3 */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg font-bold text-accent">
                      03
                    </span>
                    <h2 className="!mb-0">Invoice follow-ups</h2>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-2 font-mono text-xs text-accent-dim">THE PROBLEM</p>
                    <p className="text-sm text-muted">
                      You send an invoice. The client doesn&apos;t pay on time. You forget
                      to follow up, or feel awkward sending manual reminders.
                    </p>
                  </div>
                  <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
                    <p className="mb-2 font-mono text-xs text-accent">THE AUTOMATION</p>
                    <p className="text-sm text-muted">
                      Invoice created → n8n checks payment status on day 3, 7, and 14 →
                      sends polite, escalating reminders automatically → notifies you only
                      if still unpaid after 14 days.
                    </p>
                  </div>
                  <p>
                    <strong>Result:</strong> No more awkward follow-up emails. Clients pay
                    faster because reminders are consistent. You only step in when it
                    actually needs attention.
                  </p>
                </section>

                {/* Process 4 */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg font-bold text-accent">
                      04
                    </span>
                    <h2 className="!mb-0">Weekly reporting on autopilot</h2>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-2 font-mono text-xs text-accent-dim">THE PROBLEM</p>
                    <p className="text-sm text-muted">
                      Every Friday, someone pulls data from 3 different tabs, copies it
                      into a template, formats it, and sends it. The manager opens it
                      Monday. Every week. Same process. Same delay.
                    </p>
                  </div>
                  <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
                    <p className="mb-2 font-mono text-xs text-accent">THE AUTOMATION</p>
                    <p className="text-sm text-muted">
                      n8n pulls data from your sources (Google Sheets, database, API) →
                      formats into a clean report → sends to Slack/email every Monday at
                      8am. Automatically.
                    </p>
                  </div>
                  <p>
                    <strong>Result:</strong> 6 hours/week × 52 weeks = 312 hours/year your
                    team gets back. The report is always on time, always formatted the same
                    way, and always accurate.
                  </p>
                </section>

                {/* Process 5 */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-mono text-lg font-bold text-accent">
                      05
                    </span>
                    <h2 className="!mb-0">AI-powered customer support</h2>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-2 font-mono text-xs text-accent-dim">THE PROBLEM</p>
                    <p className="text-sm text-muted">
                      Customers ask the same 10 questions over and over. Your team spends
                      hours on repetitive answers instead of handling complex issues.
                    </p>
                  </div>
                  <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
                    <p className="mb-2 font-mono text-xs text-accent">THE AUTOMATION</p>
                    <p className="text-sm text-muted">
                      Customer message (Telegram, WhatsApp, web chat) → n8n triggers an AI
                      agent (GPT-4, Claude) trained on your FAQ/docs → responds naturally
                      in seconds → creates a CRM contact → escalates to a human only when
                      needed.
                    </p>
                  </div>
                  <p>
                    <strong>Result:</strong> 24/7 support with zero manual replies for
                    common questions. I built this for a restaurant — the bot handles menu
                    questions, parking info, and takes reservations automatically.
                  </p>
                  <p>
                    <a href="/work#ai-chatbot">
                      Watch the demo and see the full workflow →
                    </a>
                  </p>
                </section>

                {/* What it costs */}
                <section className="rounded-2xl border border-border bg-card p-8">
                  <h2>What does this cost?</h2>
                  <p>
                    A typical single-workflow automation (like #1 or #2) takes 2-3 days to
                    build and costs around <strong>$500</strong>. After that, it runs on a
                    $5/month server with no per-task fees.
                  </p>
                  <p>
                    Compare that to Zapier at $29-89/month for limited tasks, or hiring
                    someone to do the manual work every week.
                  </p>
                  <p>
                    More complex setups (AI chatbots, multi-step workflows with error
                    handling) range from <strong>$1,200 to $2,500</strong> depending on
                    scope.
                  </p>
                </section>

                {/* CTA */}
                <section className="text-center">
                  <h2>Ready to automate?</h2>
                  <p>
                    Tell me which process is eating your team&apos;s time. I&apos;ll send you
                    a concrete proposal within 24 hours — scope, price, and timeline. No
                    generic quotes.
                  </p>
                  <a
                    href="/#contact"
                    className="cta-pulse mt-4 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]"
                  >
                    Start a project
                  </a>
                </section>
              </div>
            </FadeIn>
          </div>
        </article>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="/" className="font-mono text-lg font-bold tracking-tight">
            <span className="text-accent">F</span>IRMO
          </a>
          <div className="flex items-center gap-8 text-sm text-muted">
            <a href="/#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="/work" className="transition-colors hover:text-foreground">Work</a>
            <a href="/blog" className="text-foreground">Blog</a>
            <a href="/#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <p className="font-mono text-xs text-muted-soft">
            &copy; {new Date().getFullYear()} Firmo
          </p>
        </div>
      </footer>
    </>
  );
}
