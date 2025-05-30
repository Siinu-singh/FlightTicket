
"use client";

// KAYAK-style logo using app's theme colors
export function FlightTicketLogo({ className = "" }) {
  const text = "FlightTicket";
  // Using your theme's primary for background and primary-foreground for text
  // to keep it consistent with the overall theme, but with KAYAK's block style.
  const letterBaseClasses = "font-extrabold text-xl sm:text-2xl tracking-tight px-1.5 sm:px-2 py-0.5 flex items-center justify-center";
  const letterContainerClasses = "bg-primary text-primary-foreground";

  return (
    <div className={`flex items-center select-none ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`${letterContainerClasses} ${letterBaseClasses} ${
            index < text.length -1 ? "mr-[1px] sm:mr-[2px]" : "" // Small gap between letters
          }`}
          style={{ minWidth: '1em' }} // Ensure some width for thin letters like 'i'
        >
          {char}
        </span>
      ))}
    </div>
  );
}
