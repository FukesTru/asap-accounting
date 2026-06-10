interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="section-dark pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="container">
        <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] mb-4 font-sans font-medium">
          {label}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg leading-relaxed mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
