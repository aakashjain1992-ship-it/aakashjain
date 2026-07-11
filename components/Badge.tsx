export default function Badge({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "magenta" | "lime" | "faint";
}) {
  const tones = {
    cyan: "border-[rgba(0,229,255,0.35)] bg-[rgba(0,229,255,0.08)] text-cyan",
    magenta:
      "border-[rgba(255,61,242,0.35)] bg-[rgba(255,61,242,0.08)] text-magenta",
    lime: "border-[rgba(182,255,46,0.35)] bg-[rgba(182,255,46,0.08)] text-lime",
    faint: "border-line-bright bg-surface-2 text-ink-faint",
  };
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[11px] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
