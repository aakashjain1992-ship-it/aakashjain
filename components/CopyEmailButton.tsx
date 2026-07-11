"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op, mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-sm border border-line-bright px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-cyan hover:text-cyan"
    >
      {copied ? "copied ✓" : "copy email"}
    </button>
  );
}
