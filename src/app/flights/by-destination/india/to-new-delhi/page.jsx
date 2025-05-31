
import { SectionTitle } from "@/components/shared/SectionTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }) {
  return {
    title: `Flights to New Delhi - India | FlightTicket`,
    description: `Find flight deals to New Delhi, India.`,
  };
}

export default function FlightRoutePage({ params }) {
  const groupTitle = params.groupSlug.charAt(0).toUpperCase() + params.groupSlug.slice(1).replace(/-/g, ' ');
  const linkTitle = params.linkSlug.replace(/-/g, ' ');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title={`Flights: ${linkTitle.charAt(0).toUpperCase() + linkTitle.slice(1)}`} 
        subtitle={`Explore flight options related to ${groupTitle}.`} 
        className="text-left mb-10"
      />
      <div className="prose dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed space-y-6">
        <p>This is a placeholder page for flight search results for <strong>{linkTitle}</strong>, as part of the <strong>{groupTitle}</strong> flights category.</p>
        <p>In a real application, this page would dynamically display a list of available flights based on this specific route or query. You would typically see features such as:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Real-time flight listings from various airlines.</li>
          <li>Price comparisons and filtering options (e.g., by price, duration, stops, airline).</li>
          <li>Departure and arrival times.</li>
          <li>Details about layovers, baggage allowance, and aircraft type.</li>
          <li>Secure booking links or integration with a booking engine.</li>
        </ul>
        <p>For now, please use our main flight search page to find your perfect flight.</p>
        <Button asChild className="mt-6">
          <Link href="/flights">Search All Flights</Link>
        </Button>
      </div>
    </div>
  );
}
