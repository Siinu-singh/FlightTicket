
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageReelItem({ src, alt, dataAiHint, className }) {
  return (
    <div
      className={cn(
        "flex-shrink-0 snap-center",
        "w-48 h-80 md:w-60 md:h-[24rem] lg:w-64 lg:h-[28rem]", // Reduced size
        "rounded-xl overflow-hidden shadow-lg bg-neutral-200 dark:bg-neutral-800",
        "transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl",
        "relative group",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={dataAiHint}
      />
      {/* Optional: Add an overlay or title here that appears on hover */}
      {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white text-lg font-semibold">{alt}</h3>
      </div> */}
    </div>
  );
}
