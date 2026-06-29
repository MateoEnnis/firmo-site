import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "The QA Checklist I Run Before Every Launch (8 Years of Testing) — Firmo",
  description:
    "A battle-tested QA checklist from professional testing experience. Cross-browser, mobile, security, performance — the items that actually catch bugs before users do.",
  openGraph: {
    title: "The QA Checklist I Run Before Every Launch",
    description: "Professional testing experience condensed into one checklist. The items that actually catch bugs.",
    type: "article",
    publishedTime: "2026-06-28",
  },
};

const checks = [
  {
    num: "01",
    title: "Cross-browser testing",
    description: "Chrome, Firefox, Safari, Edge. Not just \"it opens\" — test every interactive element. Safari is where most bugs hide.",
    critical: true,
  },
  {
    num: "02",
    title: "Mobile on real devices",
    description: "DevTools mobile simulation is not real mobile testing. Borrow an iPhone and an Android. Test touch targets, scrolling, and orientation changes.",
    critical: true,
  },
  {
    num: "03",
    title: "Form validation",
    description: "Empty fields, special characters, SQL injection attempts, extremely long inputs, emoji in text fields. If your form accepts anything without validation, you have a security problem.",
    critical: true,
  },
  {
    num: "04",
    title: "API error handling",
    description: "What happens when the server returns a 500? A timeout? An empty response? If the answer is 'white screen' or 'infinite spinner,' your users will leave.",
    critical: true,
  },
  {
    num: "05",
    title: "Load time under 3 seconds on mobile",
    description: "Run Google Lighthouse on mobile. If your LCP (Largest Contentful Paint) is above 2.5s, you're losing users. Check Core Web Vitals — Google ranks you on these.",
    critical: false,
  },
  {
    num: "06",
    title: "Full auth flow",
    description: "Login, logout, password reset, session expiry, remember me, OAuth if applicable. Test what happens when a session expires mid-action. Test with wrong credentials 5 times.",
    critical: true,
  },
  {
    num: "07",
    title: "One complete user journey end-to-end",
    description: "Pick your most important flow (signup → first action → value moment) and run through it as a real user would. No shortcuts. No admin access. Fresh browser, fresh account.",
    critical: true,
  },
  {
    num: "08",
    title: "Payment flow (if applicable)",
    description: "Test with real cards in sandbox/test mode. Test declined cards, insufficient funds, 3D Secure. Test refunds. Test what happens if the user closes the tab mid-payment.",
    critical: true,
  },
  {
    num: "09",
    title: "Email deliverability",
    description: "Are your transactional emails (welcome, reset password, receipts) actually arriving? Check spam folders. Test with Gmail, Outlook, and Yahoo.",
    critical: false,
  },
  {
    num: "10",
    title: "404 and error pages",
    description: "Type a random URL on your site. Do you get a branded 404 page or a server error? Broken links erode trust immediately.",
    critical: false,
  },
];

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
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">QA & Testing</span>
                  <span className="font-mono text-xs text-muted-soft">June 28, 2026</span>
                  <span className="text-border">&middot;</span>
                  <span className="font-mono text-xs text-muted-soft">6 min read</span>
                </div>
                <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  The QA Checklist I Run Before Every Launch
                </h1>
                <p className="text-lg leading-relaxed text-muted">
                  After years of professional testing and hundreds of projects, these are the 10 items that actually catch bugs. Most production issues I find come from items 3, 4, and 6.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose-firmo space-y-12">

                <section>
                  <h2>Why most launches ship with bugs</h2>
                  <p>
                    Because the dev team tests their own code. That&apos;s like proofreading your own essay — you read what you meant to write, not what&apos;s actually there.
                  </p>
                  <p>
                    A dedicated QA pass by someone who didn&apos;t build it catches 3-5x more bugs. Here&apos;s the checklist I use after hundreds of projects.
                  </p>
                </section>

                <section>
                  <h2>The checklist</h2>
                  <div className="space-y-4">
                    {checks.map((check) => (
                      <div key={check.num} className={`rounded-xl border p-5 ${check.critical ? "border-accent/20 bg-card" : "border-border bg-card"}`}>
                        <div className="mb-2 flex items-start gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">
                            {check.num}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-foreground">{check.title}</h3>
                              {check.critical && (
                                <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-[10px] font-medium text-red-400">Critical</span>
                              )}
                            </div>
                            <p className="mt-1 text-sm leading-relaxed text-muted">{check.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2>The items that catch the most bugs</h2>
                  <p>
                    After hundreds of QA audits, the top bug sources are consistently:
                  </p>
                  <ul>
                    <li><strong>#3 Form validation</strong> — Almost every app I test has at least one form that accepts data it shouldn&apos;t.</li>
                    <li><strong>#4 API error handling</strong> — Happy path works. Sad path crashes. Every time.</li>
                    <li><strong>#6 Auth flow</strong> — Session expiry and edge cases around login/logout are a goldmine for bugs.</li>
                  </ul>
                  <p>
                    If you only have time for 3 items before launch, test those three.
                  </p>
                </section>

                <section>
                  <h2>What this checklist doesn&apos;t cover</h2>
                  <p>
                    This is a pre-launch sanity check, not a full QA strategy. A complete audit also includes:
                  </p>
                  <ul>
                    <li>Accessibility testing (WCAG compliance)</li>
                    <li>Security testing (OWASP Top 10)</li>
                    <li>Load testing (how does it handle 1,000 concurrent users?)</li>
                    <li>Regression testing (did the new feature break old ones?)</li>
                    <li>Automated test suite setup for CI/CD</li>
                  </ul>
                </section>

                <section className="rounded-2xl border border-border bg-card p-8">
                  <h2>A real example</h2>
                  <p>
                    I ran this checklist on an e-commerce platform. The founder said &quot;just check if checkout works.&quot; I found <strong>11 broken user flows</strong>. Three of them would have caused data loss in production.
                  </p>
                  <p>
                    <a href="/work#ecommerce-qa">Read the full case study →</a>
                  </p>
                </section>

                <section className="text-center">
                  <h2>Launching soon?</h2>
                  <p>
                    I&apos;ll run this checklist (and more) on your app before your users do. Quick Audit starts at $400 — you get a full bug report with severity, screenshots, and steps to reproduce.
                  </p>
                  <a href="/#contact" className="cta-pulse mt-4 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]">
                    Book a QA audit
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
