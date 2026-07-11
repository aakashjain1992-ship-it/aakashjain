"use client";

import { useState } from "react";
import { getDuration } from "@/lib/experience";

export default function PeriodToggle({
  period,
  startDate,
  endDate,
}: {
  period: string;
  startDate: Date;
  endDate?: Date;
}) {
  const [showDuration, setShowDuration] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowDuration((v) => !v)}
      className="font-mono text-xs text-ink-faint underline decoration-dotted underline-offset-4 transition-colors hover:text-cyan"
      title="Click to toggle between dates and duration"
    >
      {showDuration ? getDuration(startDate, endDate) : period}
    </button>
  );
}
