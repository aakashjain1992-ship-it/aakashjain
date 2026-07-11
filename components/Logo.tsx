export default function Logo() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M3 12L8 4L13 12"
        stroke="var(--cyan)"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />
      <circle cx="8" cy="4" r="1.6" fill="var(--cyan)" />
      <circle cx="3" cy="12" r="1.6" fill="var(--magenta)" />
      <circle cx="13" cy="12" r="1.6" fill="var(--cyan)" />
    </svg>
  );
}
