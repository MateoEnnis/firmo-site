"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mx-auto mb-12 max-w-xl rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
        <div className="mb-4 text-4xl">&#10003;</div>
        <p className="text-lg font-semibold text-foreground">Message sent!</p>
        <p className="mt-2 text-sm text-muted">
          I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-12 max-w-xl space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs tracking-wider text-muted-soft uppercase">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-soft transition-colors focus:border-accent focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs tracking-wider text-muted-soft uppercase">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-soft transition-colors focus:border-accent focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block font-mono text-xs tracking-wider text-muted-soft uppercase">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted transition-colors focus:border-accent focus:outline-none"
        >
          <option value="automation">Automation (n8n / AI)</option>
          <option value="qa">QA &amp; Testing</option>
          <option value="webdev">Web Development</option>
          <option value="other">Other / Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs tracking-wider text-muted-soft uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-soft transition-colors focus:border-accent focus:outline-none"
          placeholder="Tell me about your project — what problem are you trying to solve?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-pulse w-full rounded-full bg-accent px-8 py-3.5 font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_var(--accent-glow)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
