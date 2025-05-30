
"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react"; // Or MessageSquare, Info etc.

export function SpecialOfferCallout() {
  return (
    <div className="absolute bottom-6 right-6 z-10">
      <div className="bg-card p-4 rounded-xl shadow-2xl max-w-xs w-full transform transition-all hover:scale-105">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NDg1OTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Expert consultant"
              width={40}
              height={40}
              className="rounded-full"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <Sparkles className="h-4 w-4 text-primary mr-1.5" />
              <p className="text-xs font-semibold text-primary">
                Special Offer
              </p>
            </div>
            <p className="text-sm font-medium text-card-foreground leading-tight">
              Get The Consultation With Our Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
