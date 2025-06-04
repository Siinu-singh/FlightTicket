
import { SectionTitle } from "@/components/shared/SectionTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }) {
  return {
    title: `Flights from Delhi to Dubai - India | FlightTicket`,
    description: `Explore flight options from Delhi to Dubai.`,
  };
}

export default function FlightRoutePage({ params }) {
  const pageDisplayTitle = "Flights from Delhi to Dubai";
  const pageGroupTitle = "India";
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title={pageDisplayTitle} 
        subtitle={`Explore flight options related to ${pageGroupTitle}.`} 
        className="text-left mb-10"
      />
      <div className="prose dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed space-y-6">
        <p>This is a placeholder page for flight search results for <strong>{pageDisplayTitle}</strong>, as part of the <strong>{pageGroupTitle} flights</strong> category.</p>
        <p>In a real application, this page would dynamically display a list of available flights based on this specific route or query.</p>
        <Button asChild className="mt-6">
          <Link href="/flights">Search All Flights</Link>
        </Button>
      </div>
    </div>
  );
}
