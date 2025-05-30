
import { FlightCard } from "@/components/shared/FlightCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { HeroSection } from "@/components/shared/HeroSection";
import flightsData from "@/data/flights.json";

export const metadata = {
  title: 'All Flights - Find Your Journey',
  description: 'Browse all available flights and find the best deals for your next journey with FlightTicket.',
};

async function getAllFlights() {
  return flightsData;
}

export default async function FlightsPage() {
  const allFlights = await getAllFlights();

  return (
    <>
      <HeroSection
        className="mt-20" // Added to place hero below navbar
        title="Find Your Perfect Flight"
        paragraph="Explore our wide selection of flights to destinations around the globe. Your next adventure is just a click away."
        imageUrl="https://images.unsplash.com/photo-1549836032-eb40a0222043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3NDg1OTY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
        imageAlt="Airplane wing view over clouds"
        imageHint="airplane sky"
        heightClassName="h-[50vh]"
        showButton={true}
        buttonText="Search Flights Now"
        buttonLink="#search-form" 
        contentAlignment="justify-center text-center"
        textMaxWidth="max-w-3xl"
        overlayOpacity="bg-black/40 dark:bg-black/60"
      />
      <div id="search-form" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> {/* Added id for button link */}
        <SectionTitle
          title="Available Flights"
          subtitle="Browse our current flight offerings. Deals updated regularly!"
        />
        {allFlights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {allFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No flights available at the moment. Please check back later.</p>
        )}
      </div>
    </>
  );
}
