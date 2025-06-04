
import { KayakStyleHero } from "@/components/pages/home/KayakStyleHero"; 
import { ValuePropsSection } from "@/components/pages/home/ValuePropsSection";
import { ImageReelSection } from "@/components/pages/home/ImageReelSection"; 
import { SearchByDestinationSection } from "@/components/pages/home/SearchByDestinationSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { DestinationCard } from "@/components/shared/DestinationCard";
import { FlightCard } from "@/components/shared/FlightCard";
import { FaqSection } from "@/components/pages/home/FaqSection";
import { ExpandableContentSection } from "@/components/pages/home/ExpandableContentSection"; // New Import
import { StatsAndImageSection } from "@/components/pages/home/StatsAndImageSection";
import destinationsData from "@/data/destinations.json";
import flightsData from "@/data/flights.json";
import { flightTicketIntroText } from "@/data/homePageIntro.js"; 
import { cn } from "@/lib/utils"; 

export const metadata = {
  title: 'Home - Discover Amazing Flights & Destinations',
  description: 'Explore a wide range of flights and destinations. Plan your dream vacation with FlightTicket.',
};

async function getFeaturedDestinations() {
  return destinationsData.slice(0, 4);
}

async function getFeaturedFlights() {
  return flightsData.slice(0, 4);
}

export default async function HomePage() {
  const featuredDestinations = await getFeaturedDestinations();
  const featuredFlights = await getFeaturedFlights();

  return (
    <>
      <div className="mt-16"> 
        <KayakStyleHero />
      </div>

      <ValuePropsSection /> 

      <ImageReelSection /> 

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Popular Destinations"
            subtitle="Journey to the world's most breathtaking locations. Your adventure awaits."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Flights"
            subtitle="Grab these amazing flight deals before they're gone. Book your ticket today!"  
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {featuredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      </section>
      
      <SearchByDestinationSection />
      <FaqSection />
      <ExpandableContentSection rawText={flightTicketIntroText} initialWordLimit={450} />
      <StatsAndImageSection />
    </>
  );
}

