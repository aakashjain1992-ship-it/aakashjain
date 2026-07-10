import Reveal from "./Reveal";

export default function SectionHeading({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="path-label font-mono text-xs">{path}</p>
      <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-cyan to-transparent" />
    </Reveal>
  );
}
