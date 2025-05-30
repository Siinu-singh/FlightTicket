
"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const valuePropsData = [
  {
    id: "compare",
    icons: [
      { src: "https://images.unsplash.com/photo-1516306305827-b74eb3993a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhaXJsaW5lJTIwbG9nb3xlbnwwfHx8fDE3NDg2MDMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Airline 1", dataAiHint: "airline logo" },
      { src: "https://images.unsplash.com/photo-1544703097-5b4778d48c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhaXJsaW5lJTIwbG9nb3xlbnwwfHx8fDE3NDg2MDMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Airline 2", dataAiHint: "airline logo" },
      { src: "https://images.unsplash.com/photo-1649472499016-13c9d238ecd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhaXJsaW5lJTIwbG9nb3xlbnwwfHx8fDE3NDg2MDMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Airline 3", dataAiHint: "airline logo" },
      { src: "https://images.unsplash.com/photo-1649472499016-13c9d238ecd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhaXJsaW5lJTIwbG9nb3xlbnwwfHx8fDE3NDg2MDMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Airline 4", dataAiHint: "airline logo" },
    ],
    title: "Save when you compare",
    subtitle: "More deals. More sites. One search.",
  },
  {
    id: "searches",
    avatars: [
      { src: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTc0ODYwMzI4MXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "User 1", dataAiHint: "user avatar" },
      { src: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTc0ODYwMzI4MXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "User 2", dataAiHint: "user avatar" },
      { src: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTc0ODYwMzI4MXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "User 3", dataAiHint: "user avatar" },
    ],
    title: "41,000,000+",
    subtitle: "searches this week",
  },
  {
    id: "ratings",
    stars: 5,
    title: "Travellers love us",
    subtitle: "1M+ ratings on our app",
  },
];

export function ValuePropsSection() {
  return (
    <section className="py-10 md:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {valuePropsData.map((prop) => (
            <div
              key={prop.id}
              className="bg-card text-card-foreground p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start text-left"
            >
              <div className="mb-4 h-10 flex items-center">
                {prop.icons && (
                  <div className="flex -space-x-2">
                    {prop.icons.map((icon, index) => (
                      <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={icon.dataAiHint}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {prop.avatars && (
                  <div className="flex -space-x-3">
                    {prop.avatars.map((avatar, index) => (
                       <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={avatar.dataAiHint}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {prop.stars && (
                  <div className="flex items-center">
                    {Array(prop.stars)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {prop.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {prop.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
