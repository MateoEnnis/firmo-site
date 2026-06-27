import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/motion";
import { Nav } from "@/components/nav";
import { HeroGraph } from "@/components/hero-graph";
import { ParallaxHero } from "@/components/parallax-hero";
import { TypewriterCode } from "@/components/typewriter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <ParallaxHero>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            Top Rated on Upwork
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
            Your processes,
            <br />
            <span className="gradient-text">running on autopilot.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Firmo builds workflow automations, tests your software, and develops
            web applications — with the precision of 8+ years in QA and the
            speed of AI-powered execution.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="cta-pulse rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]"
            >
              Start a project
            </a>
            <a
              href="#process"
              className="rounded-full border border-border px-8 py-3.5 font-semibold text-muted transition-colors hover:border-accent-dim hover:text-foreground"
            >
              See how it works
            </a>
          </div>
        </FadeIn>

        <HeroGraph />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <FadeIn delay={1.2}>
          <div className="flex flex-col items-center gap-2 text-muted-soft">
            <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-muted-soft to-transparent" />
          </div>
        </FadeIn>
      </div>
    </ParallaxHero>
  );
}

function TrustStrip() {
  const stats = [
    { value: 8, suffix: "+", label: "Years in QA & Testing" },
    { label: "Top Rated on Upwork", badge: true },
    { value: 50, suffix: "+", label: "Automations Delivered" },
    { label: "24/7 Uptime", always: true },
  ];

  return (
    <section className="glow-seam border-y border-border bg-card/50 px-6 py-10" aria-label="Key statistics">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1} direction="none">
            <div className="text-center">
              {stat.badge ? (
                <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                  Top Rated
                </p>
              ) : stat.always ? (
                <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                  24/7
                </p>
              ) : (
                <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                  <CountUp target={stat.value!} suffix={stat.suffix} />
                </p>
              )}
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 text-center font-mono text-sm tracking-widest text-accent-dim uppercase">
            What we do
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-20 text-center text-3xl font-bold tracking-tight sm:text-5xl">
            Three pillars. <span className="gradient-text">One standard.</span>
          </h2>
        </FadeIn>

        {/* Bento grid: Automation spans 2 rows left, QA + WebDev stack right */}
        <StaggerContainer
          className="grid gap-6 md:grid-cols-5 md:grid-rows-2"
          staggerDelay={0.15}
        >
          {/* Automation — featured, spans left 3 cols and 2 rows */}
          <StaggerItem className="md:col-span-3 md:row-span-2">
            <div className="group glow-card relative flex h-full flex-col rounded-2xl border border-accent/30 bg-card p-8">
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 font-mono text-xs font-semibold text-background">
                Most requested
              </span>
              <div className="mb-5 inline-flex rounded-xl border border-border bg-background p-3 text-accent">
                <svg className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-1 text-2xl font-bold">Automation</h3>
              <p className="mb-4 font-mono text-xs text-accent-dim">
                n8n · AI Agents · Integrations
              </p>
              <p className="mb-6 text-base leading-relaxed text-muted">
                Custom workflow automation that connects your tools, eliminates
                repetitive tasks, and runs 24/7. Built with n8n for full control
                and zero vendor lock-in.
              </p>
              <ul className="mb-8 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Workflow automation (n8n)",
                  "AI agent integration",
                  "WhatsApp Business bots",
                  "CRM & billing automation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-dim/15 text-accent-dim text-[10px]" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Mini workflow visual */}
              <div className="mt-auto rounded-xl border border-border/50 bg-background/50 p-4">
                <div className="flex items-center justify-between gap-2">
                  {["Trigger", "Process", "AI", "Output"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-card text-[10px] font-mono text-accent">
                          {step.slice(0, 2)}
                        </div>
                        <span className="mt-1 text-[9px] text-muted-soft">{step}</span>
                      </div>
                      {i < 3 && (
                        <div className="flow-line mb-3 h-px w-6 border-t border-dashed border-accent/30 sm:w-10" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* QA & Testing — top right */}
          <StaggerItem className="md:col-span-2">
            <div className="group glow-card flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex rounded-xl border border-border bg-background p-3 text-accent">
                <svg className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="mb-1 text-xl font-bold">QA & Testing</h3>
              <p className="mb-3 font-mono text-xs text-accent-dim">Manual + Automated Testing</p>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                8+ years finding bugs before users do. Automated pipelines that catch regressions on every commit.
              </p>
              <ul className="mt-auto space-y-2">
                {["Test automation pipelines", "End-to-end & API testing", "CI/CD integration"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-dim/15 text-accent-dim text-[10px]" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Web Development — bottom right with typewriter */}
          <StaggerItem className="md:col-span-2">
            <div className="group glow-card flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex rounded-xl border border-border bg-background p-3 text-accent">
                <svg className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <h3 className="mb-1 text-xl font-bold">Web Development</h3>
              <p className="mb-3 font-mono text-xs text-accent-dim">Next.js · React · Full Stack</p>
              <p className="text-sm leading-relaxed text-muted">
                Fast, SEO-optimized web apps built with modern frameworks. Clean code that performs.
              </p>
              <TypewriterCode />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "You tell me what's slowing you down. I identify where automation, testing, or development will have the biggest impact.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I design and build the solution using battle-tested tools. You get updates at every milestone, not a black box.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "You receive a working, documented solution with clear handoff. I stay available for ongoing support.",
  },
];

function HowItWorks() {
  return (
    <section id="process" className="glow-seam relative border-y border-border px-6 py-20">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeIn>
          <p className="mb-3 text-center font-mono text-sm tracking-widest text-accent-dim uppercase">
            How it works
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-5xl">
            From idea to <span className="gradient-text">running system.</span>
          </h2>
        </FadeIn>
        <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.2}>
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="flow-line absolute top-10 left-full hidden h-px w-full border-t border-dashed border-accent/30 md:block" aria-hidden="true" />
                )}
                <p className="mb-4 font-mono text-6xl font-light text-accent/30">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div>
          <FadeIn>
            <p className="mb-3 border-l-2 border-accent pl-3 font-mono text-sm tracking-widest text-accent-dim uppercase">
              Why Firmo
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-5xl">
              Senior expertise.
              <br />
              <span className="gradient-text">Startup speed.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-5 text-lg leading-relaxed text-muted">
              Firmo is a one-person tech studio powered by AI-driven workflows.
              8+ years of QA experience, full-stack development skills, and deep
              expertise in workflow automation with n8n.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg leading-relaxed text-muted">
              You get the focus and quality of a senior engineer with the
              throughput of a team — because the repetitive work is handled by
              automated agents, not by cutting corners.
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="space-y-5" staggerDelay={0.15}>
          {[
            { value: "8+", label: "Years in QA & testing", detail: "From manual testing to automated pipelines" },
            { value: "Top Rated", label: "Upwork — top 10% of the platform", detail: "Consistently high-quality delivery" },
            { value: "24/7", label: "Automations that never sleep", detail: "Your workflows run while you focus on growth" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glow-card rounded-2xl border border-border bg-card p-6">
                <div className="flex items-baseline gap-4">
                  <p className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                    {stat.value}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{stat.label}</p>
                    <p className="text-sm text-muted">{stat.detail}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="glow-seam relative border-t border-border px-6 py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="mb-3 font-mono text-sm tracking-widest text-accent-dim uppercase">
            Let&apos;s talk
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to automate,
            <br />
            <span className="gradient-text">test, or build?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mb-12 text-lg text-muted">
            Tell me about your project. I&apos;ll get back to you within 24
            hours with a clear, no-BS proposal.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:mateoennis777@gmail.com"
              className="flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Email me
            </a>
            <a
              href="https://www.upwork.com/freelancers/~mateo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-3.5 font-semibold text-muted transition-colors hover:border-accent-dim hover:text-foreground"
            >
              Hire on Upwork
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p className="font-mono text-lg font-bold tracking-tight">
            <span className="text-accent">F</span>IRMO
          </p>
          <p className="text-xs text-muted">
            Automation · QA · Web Development
          </p>
        </div>
        <div className="flex items-center gap-8 text-sm text-muted">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </div>
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            Based in Uruguay · Serving clients worldwide
          </p>
          <p className="font-mono text-xs text-muted-soft">
            &copy; {new Date().getFullYear()} Firmo
          </p>
        </div>
      </div>
    </footer>
  );
}
