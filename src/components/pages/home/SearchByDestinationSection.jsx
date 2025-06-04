
"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import flightRouteGroupsData from "@/data/flightRouteGroups.json";


export function SearchByDestinationSection() {
  return (
    <section className="py-12 md:py-16 bg-background dark:bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          Search cheap flights by destination
        </h2>
        <Link href="/flights" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">
          Find Flight Tickets
        </Link>
        <p className="text-muted-foreground mb-8 md:mb-10 max-w-3xl text-sm leading-relaxed">
          Save money on airfare by searching for cheap flight tickets on FlightTicket. FlightTicket searches for flight deals on hundreds of airline ticket sites to help you find the cheapest flights. Whether you are looking for a last-minute flight or a cheap plane ticket for a later date, you can find the best deals faster at FlightTicket.
        </p>

        <Accordion 
            type="single" 
            collapsible 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 md:items-start"
        >
          {flightRouteGroupsData.map((group) => (
            <AccordionItem key={group.id} value={group.id} className="border-b border-border/70 last:border-b-0 lg:last:border-b">
              <AccordionTrigger className="py-3 hover:no-underline text-sm font-medium text-left flex justify-between w-full items-center text-foreground hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                {group.title}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-sm">
                <ul className="space-y-1.5">
                  {group.links.map((link) => (
                    <li key={link.linkSlug}>
                      <Link 
                        href={`/destinations/`} 
                        className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
