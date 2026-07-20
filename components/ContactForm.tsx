"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-sm border border-line-bright bg-[rgba(10,13,24,0.6)] px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-cyan";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "sent") {
    return (
      <div className="max-w-md rounded-sm border border-cyan/40 bg-[rgba(0,229,255,0.06)] px-5 py-4 font-mono text-sm text-cyan">
        Message sent ✓ — I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      {/* Honeypot — hidden from real visitors, catches bots that fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="font-mono text-[11px] text-ink-faint">
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-[11px] text-ink-faint">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="phone" className="font-mono text-[11px] text-ink-faint">
          phone <span className="text-ink-faint">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 555 000 0000"
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] text-ink-faint">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What's on your mind?"
          className={`mt-1.5 resize-none ${inputClasses}`}
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-[12px] text-magenta">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-cyan px-5 py-2.5 font-mono text-[13px] font-medium text-void shadow-[0_0_24px_rgba(0,229,255,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(0,229,255,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "sending..." : "send message"}
      </button>
    </form>
  );
}
