import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "How Much Does Business Automation Actually Cost in 2026? — Firmo",
  description:
    "Real pricing for workflow automation: from $500 single workflows to $2,500+ AI chatbots. Breakdown of setup costs, ongoing fees, and ROI timelines.",
  openGraph: {
    title: "How Much Does Business Automation Actually Cost in 2026?",
    description: "Real pricing breakdown: setup costs, ongoing fees, and when automation pays for itself.",
    type: "article",
    publishedTime: "2026-06-28",
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
                <a href="/blog" className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-muted-soft transition-colors hover:text-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                  Back to blog
                </a>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">Business</span>
                  <span className="font-mono text-xs text-muted-soft">June 28, 2026</span>
                  <span className="text-border">&middot;</span>
                  <span className="font-mono text-xs text-muted-soft">5 min read</span>
                </div>
                <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  How Much Does Business Automation Actually Cost in 2026?
                </h1>
                <p className="text-lg leading-relaxed text-muted">
                  &quot;It depends&quot; is the honest answer. But here are real numbers from projects I&apos;ve delivered — so you know what to budget before reaching out.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose-firmo space-y-12">

                <section>
                  <h2>The two costs of automation</h2>
                  <p>Every automation has two costs:</p>
                  <ul>
                    <li><strong>Setup cost</strong> — one-time fee to design, build, test, and document the workflow.</li>
                    <li><strong>Running cost</strong> — ongoing infrastructure. With n8n self-hosted, this is typically $5-10/month for a VPS. With Zapier or Make, it scales with usage.</li>
                  </ul>
                  <p>Most clients are surprised by how low the running cost is. The real investment is in the setup.</p>
                </section>

                <section>
                  <h2>Real pricing by complexity</h2>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-3 flex items-baseline justify-between">
                        <h3 className="text-lg font-bold text-foreground">Simple workflow</h3>
                        <span className="font-mono text-xl font-bold text-accent">$500</span>
                      </div>
                      <p className="mb-3 text-sm text-muted">1 trigger, 3-5 steps, 1 integration. Example: form submission → Google Sheets → Telegram notification.</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-soft">
                        <span>Setup: 2-3 days</span>
                        <span>Running: $5/mo</span>
                        <span>ROI: 1-2 weeks</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-accent/30 bg-card p-6">
                      <div className="mb-1 font-mono text-[10px] text-accent uppercase tracking-wider">Most common</div>
                      <div className="mb-3 flex items-baseline justify-between">
                        <h3 className="text-lg font-bold text-foreground">Multi-step workflow</h3>
                        <span className="font-mono text-xl font-bold text-accent">$1,200–$2,000</span>
                      </div>
                      <p className="mb-3 text-sm text-muted">2-4 connected workflows, CRM integration, conditional logic, error handling. Example: lead capture → CRM upsert → email sequence → weekly report.</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-soft">
                        <span>Setup: 5-10 days</span>
                        <span>Running: $5-10/mo</span>
                        <span>ROI: 1-2 months</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-3 flex items-baseline justify-between">
                        <h3 className="text-lg font-bold text-foreground">AI-powered automation</h3>
                        <span className="font-mono text-xl font-bold text-accent">$2,500+</span>
                      </div>
                      <p className="mb-3 text-sm text-muted">AI chatbots, intelligent routing, document processing. Example: Telegram chatbot with GPT-4 → reservation handling → CRM contact creation.</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-soft">
                        <span>Setup: 2-4 weeks</span>
                        <span>Running: $10-30/mo (includes AI API)</span>
                        <span>ROI: 1-3 months</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>The ROI math (why automation pays for itself fast)</h2>
                  <p>Let&apos;s say your team spends 10 hours/week on manual data entry. At $20/hour, that&apos;s:</p>
                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="font-mono text-2xl font-bold text-accent">$800</p>
                        <p className="text-xs text-muted-soft">/month in manual labor</p>
                      </div>
                      <div>
                        <p className="font-mono text-2xl font-bold text-accent">$9,600</p>
                        <p className="text-xs text-muted-soft">/year in manual labor</p>
                      </div>
                    </div>
                  </div>
                  <p>A $1,200 automation setup + $5/month running cost = <strong>$1,260 first year</strong>. You save <strong>$8,340</strong> in year one alone. Every year after that, you save the full $9,600.</p>
                  <p>This is why automation ROI is measured in weeks, not years.</p>
                </section>

                <section>
                  <h2>What affects the price</h2>
                  <ul>
                    <li><strong>Number of integrations.</strong> Connecting 2 tools is simpler than connecting 6.</li>
                    <li><strong>Logic complexity.</strong> Linear workflows (A → B → C) cost less than branching logic with error handling.</li>
                    <li><strong>AI involvement.</strong> Adding GPT-4 or Claude adds setup time for prompt engineering and testing.</li>
                    <li><strong>Data volume.</strong> Processing 10 items/day vs 10,000 items/day requires different architecture.</li>
                    <li><strong>Documentation needs.</strong> If your team needs to maintain it, documentation takes time to do right.</li>
                  </ul>
                </section>

                <section>
                  <h2>Automation vs hiring: the comparison nobody makes</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left font-mono text-xs text-accent-dim uppercase"></th>
                          <th className="py-3 text-left font-mono text-xs text-accent-dim uppercase">Hire someone</th>
                          <th className="py-3 text-left font-mono text-xs text-accent-dim uppercase">Automate it</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted">
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">Monthly cost</td><td className="py-3">$500-2,000+</td><td className="py-3 text-accent">$5-10</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">Availability</td><td className="py-3">8 hours/day</td><td className="py-3 text-accent">24/7</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">Error rate</td><td className="py-3">Human (variable)</td><td className="py-3 text-accent">Near zero</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">Scales with volume</td><td className="py-3">Need to hire more</td><td className="py-3 text-accent">Same cost</td></tr>
                        <tr><td className="py-3 text-foreground">Handles exceptions</td><td className="py-3 text-accent">Yes (judgment)</td><td className="py-3">Needs rules</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Automation doesn&apos;t replace people — it replaces the repetitive parts of their job so they can focus on work that actually requires a human brain.
                  </p>
                </section>

                <section className="text-center">
                  <h2>Want a quote for your specific case?</h2>
                  <p>
                    Tell me what process you want to automate. I&apos;ll send you a concrete proposal with scope, price, and timeline within 24 hours. No generic estimates.
                  </p>
                  <a href="/#contact" className="cta-pulse mt-4 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]">
                    Get a quote
                  </a>
                </section>
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
    </>
  );
}
