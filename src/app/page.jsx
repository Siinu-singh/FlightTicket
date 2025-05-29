
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DestinationCard } from "@/components/shared/DestinationCard";
import { FlightCard } from "@/components/shared/FlightCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FaqSection } from "@/components/pages/home/FaqSection";
import { ContactUsForm } from "@/components/pages/home/ContactUsForm"; 
import { HeroSection } from "@/components/shared/HeroSection";
import destinationsData from "@/data/destinations.json";
import flightsData from "@/data/flights.json";
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
      <HeroSection
        className="mt-20" 
        superTitle="Your Journey Awaits"
        title="Book Your Dream Flight Today"
        paragraph="Discover amazing destinations and book your flights at the best prices. Adventure is just a click away."
        imageUrl="https://img.freepik.com/premium-photo/big-white-airplane-is-flying-rocks-sunrise_159067-623.jpg?uid=R202168573&ga=GA1.1.1575231207.1748452014&semt=ais_hybrid&w=740"
        imageAlt="Airplane flying over mountains at sunrise"
        imageHint="airplane sunrise mountains"
        heightClassName="h-screen"
        showButton={true}
        buttonText="Book Flight"
        buttonLink="/flights"
        contentAlignment="justify-center text-center"
        textMaxWidth="max-w-3xl"
        overlayOpacity="bg-black/40 dark:bg-black/60"
      />

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

      <FaqSection />
      <ContactUsForm />
    </>
  );
}
