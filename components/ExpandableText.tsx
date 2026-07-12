"use client";

import { useEffect, useRef, useState } from "react";

const CLAMP_CLASSES: Record<2 | 3 | 4, string> = {
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
};

export default function ExpandableText({
  children,
  lines = 3,
  className = "",
}: {
  children: React.ReactNode;
  lines?: 2 | 3 | 4;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setClamped(el.scrollHeight > el.clientHeight + 1);
  }, []);

  return (
    <div className={className}>
      <div
        ref={ref}
        className={expanded ? "" : `${CLAMP_CLASSES[lines]} sm:line-clamp-none`}
      >
        {children}
      </div>
      {clamped && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1.5 font-mono text-[11px] text-cyan transition-colors hover:text-ink sm:hidden"
        >
          {expanded ? "show less ↑" : "read more →"}
        </button>
      )}
    </div>
  );
}
