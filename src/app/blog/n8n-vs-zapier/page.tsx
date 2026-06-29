import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "n8n vs Zapier in 2026: Which One Should You Use? — Firmo",
  description:
    "An honest comparison of n8n and Zapier for business automation. Cost, features, self-hosting, and when each one makes sense.",
  openGraph: {
    title: "n8n vs Zapier in 2026: Which One Should You Use?",
    description: "An honest comparison for business owners. Cost breakdown, features, and when each one makes sense.",
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
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">Automation</span>
                  <span className="font-mono text-xs text-muted-soft">June 28, 2026</span>
                  <span className="text-border">&middot;</span>
                  <span className="font-mono text-xs text-muted-soft">6 min read</span>
                </div>
                <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  n8n vs Zapier in 2026: Which One Should You Use?
                </h1>
                <p className="text-lg leading-relaxed text-muted">
                  Both tools automate workflows. But they serve different needs, budgets, and technical levels. Here&apos;s an honest breakdown from someone who builds automations for clients every day.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose-firmo space-y-12">

                <section>
                  <h2>The short answer</h2>
                  <p>
                    <strong>Use Zapier</strong> if you want plug-and-play simplicity, your team isn&apos;t technical, and you run fewer than 100 tasks/month.
                  </p>
                  <p>
                    <strong>Use n8n</strong> if you want full control, your workflows are complex, and you don&apos;t want per-task pricing eating your budget as you scale.
                  </p>
                  <p>
                    Most of my clients start with Zapier, then switch to n8n when the monthly bill passes $200 and they realize they&apos;re paying per automation run.
                  </p>
                </section>

                <section>
                  <h2>Cost comparison (this is where it gets real)</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left font-mono text-xs text-accent-dim uppercase">Metric</th>
                          <th className="py-3 text-left font-mono text-xs text-accent-dim uppercase">Zapier</th>
                          <th className="py-3 text-left font-mono text-xs text-accent-dim uppercase">n8n</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted">
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">Free tier</td><td className="py-3">100 tasks/month</td><td className="py-3">Unlimited (self-hosted)</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">Starter plan</td><td className="py-3">$29.99/mo (750 tasks)</td><td className="py-3">$5/mo (VPS hosting)</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">1,000 tasks/month</td><td className="py-3">$29.99-$73.50/mo</td><td className="py-3">$5/mo</td></tr>
                        <tr className="border-b border-border/50"><td className="py-3 text-foreground">10,000 tasks/month</td><td className="py-3">$73.50-$448.50/mo</td><td className="py-3">$5-10/mo</td></tr>
                        <tr><td className="py-3 text-foreground">Per-task fee</td><td className="py-3">Yes (scales with usage)</td><td className="py-3 text-accent">No</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    The cost difference is dramatic at scale. A business running 5,000 automations per month pays Zapier <strong>$200-400/month</strong>. With n8n self-hosted, it&apos;s <strong>$5/month</strong> for the server. Same automations.
                  </p>
                </section>

                <section>
                  <h2>When Zapier wins</h2>
                  <ul>
                    <li><strong>Zero technical knowledge needed.</strong> Connect apps with dropdowns, no code at all.</li>
                    <li><strong>Speed of setup.</strong> Simple automations take 5 minutes to build.</li>
                    <li><strong>Managed infrastructure.</strong> Nothing to host, maintain, or update.</li>
                    <li><strong>Huge app library.</strong> 6,000+ integrations out of the box.</li>
                  </ul>
                  <p>
                    If you need &quot;when X happens in Gmail, create a row in Google Sheets&quot; and that&apos;s it — Zapier is perfect. Don&apos;t overcomplicate it.
                  </p>
                </section>

                <section>
                  <h2>When n8n wins</h2>
                  <ul>
                    <li><strong>Complex logic.</strong> Conditional branches, loops, error handling, retries — n8n handles multi-step workflows that would require 3-4 Zapier zaps.</li>
                    <li><strong>Cost at scale.</strong> No per-task pricing. Run 100,000 tasks for the same $5/month server cost.</li>
                    <li><strong>Data privacy.</strong> Self-hosted means your data never leaves your server. Critical for healthcare, finance, and GDPR compliance.</li>
                    <li><strong>AI integration.</strong> Native nodes for OpenAI, Claude, and custom AI agents. Build chatbots and intelligent workflows.</li>
                    <li><strong>Custom code.</strong> JavaScript/Python nodes when you need logic that no-code can&apos;t express.</li>
                  </ul>
                </section>

                <section>
                  <h2>The hidden cost of Zapier nobody talks about</h2>
                  <p>
                    Zapier charges per &quot;task&quot; — every step in your automation counts. A 5-step workflow triggered 100 times = 500 tasks. That burns through your plan fast.
                  </p>
                  <p>
                    With n8n, there&apos;s no concept of &quot;tasks.&quot; A 20-step workflow triggered 1,000 times costs the same as a 2-step workflow triggered once. The pricing is based on infrastructure, not usage.
                  </p>
                </section>

                <section>
                  <h2>My recommendation</h2>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
                    <p className="!mb-2"><strong>For most small businesses:</strong> Start with Zapier if your automations are simple. Switch to n8n when you outgrow it.</p>
                    <p className="!mb-2"><strong>For growing businesses:</strong> Go directly to n8n. The cost savings compound and the flexibility pays off immediately.</p>
                    <p className="!mb-0"><strong>For businesses handling sensitive data:</strong> n8n, no question. Self-hosted means full control over where your data lives.</p>
                  </div>
                </section>

                <section className="text-center">
                  <h2>Need help deciding?</h2>
                  <p>
                    I build automations with both tools. Tell me what you&apos;re trying to automate and I&apos;ll recommend the right one — honestly, even if it means Zapier is the better fit.
                  </p>
                  <a href="/#contact" className="cta-pulse mt-4 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]">
                    Get a recommendation
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
