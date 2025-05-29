
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function HeroSection({
  superTitle,
  title = "Buy airline tickets",
  paragraph = "Experience seamless flight booking. Find the best deals, choose your preferred seats, and get ready for an unforgettable journey. Your adventure starts here.",
  imageUrl = "https://placehold.co/1920x1080.png",
  imageAlt = "People booking and buying flight tickets",
  imageHint = "travel booking",
  heightClassName = "h-screen",
  showButton = true,
  buttonText = "Buy Now",
  buttonLink = "/flights",
  contentAlignment = "justify-start text-left",
  textMaxWidth = "max-w-2xl",
  overlayOpacity = "bg-black/50 dark:bg-black/70", // Slightly increased default opacity
  className
}) {
  return (
    <section className={cn(
      "relative w-full flex items-center overflow-hidden", 
      contentAlignment,
      heightClassName,
      className
    )}>
      {/* Background Image and Overlay Container - NOW FIXED */}
      <div className="fixed top-0 left-0 h-full w-full -z-10">
         <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority={heightClassName === "h-screen"} // Only prioritize if it's the main full-screen hero
          className="" 
          data-ai-hint={imageHint}
        />
        <div className={cn("absolute inset-0 z-10", overlayOpacity)}></div>
      </div>

      {/* Content Container */}
      <div className={cn(
        "relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 drop-shadow-xl", // Added drop-shadow-xl for depth
        textMaxWidth
      )}>
        {superTitle && (
          <h2 className="text-sm sm:text-base font-semibold uppercase text-primary mb-3 md:mb-4 tracking-wider">
            {superTitle}
          </h2>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-tight">
          {title}
        </h1>
        {paragraph && (
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 dark:text-slate-200 mb-8 md:mb-10 leading-relaxed">
            {paragraph}
          </p>
        )}
        {showButton && (
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-xl transition-transform hover:scale-105 px-10 py-3.5 text-base md:text-lg rounded-lg">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
