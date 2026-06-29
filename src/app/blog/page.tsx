import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Blog — Firmo",
  description:
    "Technical articles about workflow automation, QA testing, and web development. Practical guides with real examples.",
};

const posts = [
  {
    slug: "5-processes-to-automate-with-n8n",
    title: "5 Business Processes You Can Automate Today with n8n",
    description:
      "Stop paying per-task fees. These 5 automations save 10-20 hours per week and cost $0/month to run.",
    date: "June 28, 2026",
    readTime: "7 min read",
    tags: ["n8n", "Automation", "Business"],
  },
];

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-32">
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <p className="mb-3 font-mono text-sm tracking-widest text-accent-dim uppercase">
                Blog
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Guides, tips &{" "}
                <span className="gradient-text">real examples.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-xl text-lg text-muted">
                Practical articles about automation, testing, and web
                development. No fluff — just things you can use today.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 pb-28">
          <StaggerContainer className="mx-auto max-w-3xl space-y-6" staggerDelay={0.1}>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group glow-card block rounded-2xl border border-border bg-card p-8 transition-all"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-muted-soft">
                      {post.date}
                    </span>
                    <span className="text-border">·</span>
                    <span className="font-mono text-xs text-muted-soft">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold leading-snug transition-colors group-hover:text-accent sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-muted-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
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
