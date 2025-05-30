
"use client";

import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ImageReelItem } from "./ImageReelItem";

const reelImagesData = [
  {
    id: "reel-1",
    src: "https://images.unsplash.com/photo-1640077782067-44ac31435725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx2aW50YWdlJTIwdmFuJTIwYmVhY2h8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Vintage travel van by the beach",
    dataAiHint: "vintage van beach"
  },
  {
    id: "reel-2",
    src: "https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjYW1lcmElMjBsZW5zJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Close-up of a professional camera lens",
    dataAiHint: "camera lens photography"
  },
  {
    id: "reel-3",
    src: "https://images.unsplash.com/photo-1524439905099-9bcb592260cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwb3J0cmFpdCUyMHRyYWRpdGlvbmFsJTIwY2xvdGhpbmd8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Portrait of a person in traditional attire",
    dataAiHint: "portrait traditional clothing"
  },
  {
    id: "reel-4",
    src: "https://images.unsplash.com/photo-1636138103588-ae927bfe10aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxvdmVybGFuZCUyMHZlaGljbGUlMjBzdW5zZXR8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Overland vehicle with rooftop tent at sunset",
    dataAiHint: "overland vehicle sunset"
  },
  {
    id: "reel-5",
    src: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhYnN0cmFjdCUyMHNvdW5kJTIwd2F2ZXN8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Abstract representation of sound waves",
    dataAiHint: "abstract sound waves"
  },
  {
    id: "reel-6",
    src: "https://images.unsplash.com/photo-1520264834865-7effb972c224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern architectural detail",
    dataAiHint: "modern architecture detail"
  },
  {
    id: "reel-7",
    src: "https://images.unsplash.com/photo-1445711005973-54fe2a103826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmb3Jlc3QlMjBwYXRoJTIwbmF0dXJlfGVufDB8fHx8MTc0ODU5MzQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Lush forest path",
    dataAiHint: "forest path nature"
  },
  {
    id: "reel-8",
    src: "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwbmlnaHR8ZW58MHx8fHwxNzQ4NTkzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "City street at night",
    dataAiHint: "city street night"
  }
];

// Duplicate the data for a smoother infinite scroll illusion
const duplicatedReelImagesData = [...reelImagesData, ...reelImagesData];

export function ImageReelSection() {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth / 2) {
          // When it reaches the end of the first set of items, silently jump back
          // This creates an illusion of infinite scroll with duplicated content
          scrollEl.scrollLeft = 0;
        }
        scrollEl.scrollLeft += 1; // Adjust scroll speed here (1px per interval)
      }, 30); // Adjust interval timing here (e.g., 30ms)
    };

    const stopScrolling = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    if (!isHovering) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => stopScrolling(); // Cleanup interval on component unmount or when isHovering changes

  }, [isHovering]);


  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-0 sm:px-4 lg:px-8">
        <SectionTitle
          title="Featured Experiences"
          subtitle="Get inspired by these stunning visual stories from around the globe."
          className="px-4 sm:px-0"
        />
      </div>
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="w-full flex overflow-x-auto space-x-4 md:space-x-6 py-8 px-4 md:px-8 hide-scrollbar snap-x snap-mandatory scroll-smooth relative 
                   [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]
                   sm:[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
                   lg:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
      >
        {/* Render duplicated items for smooth infinite loop illusion */}
        {duplicatedReelImagesData.map((image, index) => (
          <ImageReelItem
            key={`${image.id}-${index}`} // Ensure unique keys for duplicated items
            src={image.src}
            alt={image.alt}
            dataAiHint={image.dataAiHint}
          />
        ))}
      </div>
    </section>
  );
}

    