
export function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 md:mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
