import { BackgroundPattern } from "../components/BackgroundPattern";

export default function UnderDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-red-600">
      <BackgroundPattern />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-12" style={{ zIndex: 1 }}>
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Under Development</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-200">
            We&apos;re crafting something amazing! While you wait, why not try our mini-game?
          </p>
        </header>
      </div>
    </div>
  );
} 