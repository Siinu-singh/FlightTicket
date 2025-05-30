
"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

// Simple inline SVG for a paper airplane icon
const PaperAirplaneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21.39,2.61a3.14,3.14,0,0,0-4.48,0L3.36,16.16a2.17,2.17,0,0,0,0,3.08,2.19,2.19,0,0,0,3.08,0l13.55-13.55A3.14,3.14,0,0,0,21.39,2.61Z" />
    <path d="M21.39,2.61,19.24,4.76,8.68,15.32a1.16,1.16,0,0,1-1.64,0,1.17,1.17,0,0,1,0-1.64L17.6,3.12,19.75,1a.5.5,0,0,1,.71,0l1,1A.5.5,0,0,1,21.39,2.61Z" />
  </svg>
);

const AirplaneSilhouetteIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
  >
    <path d="M448 224c0-17.7-14.3-32-32-32L304 192V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192L128 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32V256l112 0c17.7 0 32-14.3 32-32zM0 128C0 92.7 28.7 64 64 64H192V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64H352c35.3 0 64 28.7 64 64v32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H416v32c0 35.3-28.7 64-64 64H288V384c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-35.3 0-64-28.7-64-64V256H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H128V160C128 124.7 99.3 96 64 96S0 124.7 0 160V128z"/>
  </svg>
);


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
  overlayOpacity = "bg-black/50 dark:bg-black/70",
  className,
  animateAirplane = false,
}) {
  const [airplaneStyle, setAirplaneStyle] = useState({
    opacity: 0,
    transform: 'translate(-50%, -50%) scale(0.5) rotate(0deg)',
    left: '50%',
    top: '50%',
  });
  const heroRef = useRef(null);

  useEffect(() => {
    if (!animateAirplane || !heroRef.current) return;

    const heroElement = heroRef.current;

    const handleMouseMove = (event) => {
      const rect = heroElement.getBoundingClientRect();
      // Calculate mouse position relative to the hero section
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      // Clamp position to keep airplane mostly within hero (with some leeway)
      const buffer = 50; // pixels
      x = Math.max(buffer, Math.min(x, rect.width - buffer));
      y = Math.max(buffer, Math.min(y, rect.height - buffer));

      const rotateDeg = (x - rect.width / 2) / 10; // Example rotation based on horizontal position

      setAirplaneStyle({
        opacity: 1,
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(0.75) rotate(${rotateDeg}deg)`,
        left: '0px', // We use translate for positioning now
        top: '0px',
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      });
    };

    const handleMouseLeave = () => {
      setAirplaneStyle((prev) => ({
        ...prev,
        opacity: 0,
        transform: `${prev.transform.split(' scale')[0]} scale(0.3)`, // Keep current translate/rotate but scale down
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
      }));
    };
    
    const handleMouseEnter = () => {
      setAirplaneStyle((prev) => ({
        ...prev, // Keep current position if possible, or reset to center
        opacity: 1,
        transform: `${prev.transform.split(' scale')[0]} scale(0.75)`,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      }));
    };


    heroElement.addEventListener('mousemove', handleMouseMove);
    heroElement.addEventListener('mouseenter', handleMouseEnter);
    heroElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
      heroElement.removeEventListener('mouseenter', handleMouseEnter);
      heroElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animateAirplane]);

  return (
    <section ref={heroRef} className={cn(
      "relative w-full flex items-center overflow-hidden", 
      contentAlignment,
      heightClassName,
      className
    )}>
      {/* Background Image and Overlay Container */}
      <div className="fixed top-0 left-0 h-full w-full -z-10">
         <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority={heightClassName === "h-screen"} 
          data-ai-hint={imageHint}
        />
        <div className={cn("absolute inset-0 z-10", overlayOpacity)}></div>
      </div>

      {/* Animated Airplane */}
      {animateAirplane && (
         <div
          style={{
            position: 'absolute', // Positioned within the hero section
            left: airplaneStyle.left,
            top: airplaneStyle.top,
            opacity: airplaneStyle.opacity,
            transform: airplaneStyle.transform,
            transition: airplaneStyle.transition,
            willChange: 'transform, opacity',
            zIndex: 15, // Above background/overlay, below main text/button
            pointerEvents: 'none', // So it doesn't interfere with mouse events on other elements
          }}
        >
          <AirplaneSilhouetteIcon className="w-10 h-10 text-white/90 drop-shadow-lg" />
        </div>
      )}

      {/* Content Container */}
      <div className={cn(
        "relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 md:pt-40 md:pb-20 drop-shadow-xl", // Adjusted vertical padding
        textMaxWidth
      )}>
        {superTitle && (
          <h2 className="text-sm sm:text-base font-semibold uppercase text-primary mb-3 md:mb-4 tracking-wider">
            {superTitle}
          </h2>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-tight">
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
