import Link from "next/link";
import BackgroundFX from "@/components/BackgroundFX";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <>
      <BackgroundFX />
      <header className="sticky top-0 z-50 border-b border-line bg-[rgba(6,8,15,0.85)] backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-[15px] font-medium text-ink"
          >
            <Logo />
            Aakash Jain
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center sm:py-48">
        <p className="path-label font-mono text-xs">/404</p>
        <h1 className="glow-cyan mt-4 font-display text-6xl font-medium text-cyan sm:text-8xl">
          404
        </h1>
        <div className="scanline mt-6 h-px w-40" />
        <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
          This route doesn&apos;t exist — or it moved. Let&apos;s get you back
          on track.
        </p>
        <Link
          href="/"
          className="mt-9 rounded-sm bg-cyan px-5 py-2.5 font-mono text-[13px] font-medium text-void shadow-[0_0_24px_rgba(0,229,255,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(0,229,255,0.55)]"
        >
          back to portfolio
        </Link>
      </main>
    </>
  );
}
