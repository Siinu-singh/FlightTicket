
import Image from "next/image";
import destinationsData from "@/data/destinations.json";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CalendarDays, Star, Ticket, Building, Trees, Users, Palette, Church, Landmark, ScrollText, Flame, RectangleEllipsis, Youtube, Sun, CloudLightning } from "lucide-react";
import { FlightCard } from "@/components/shared/FlightCard";
import flightsData from "@/data/flights.json"; 
import { SectionTitle } from "@/components/shared/SectionTitle";


async function getDestinationById(id) {
  return (destinationsData).find(dest => dest.id === id);
}

async function getFlightsToDestination(destinationName) {
  return (flightsData).filter(flight => flight.destination.toLowerCase().includes(destinationName.toLowerCase()));
}

export async function generateMetadata(
  { params },
  parent
) {
  const id = params.id;
  const destination = await getDestinationById(id);

  if (!destination) {
    return {
      title: 'Destination Not Found | FlightTicket',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${destination.name} - Explore ${destination.country}`,
    description: `Discover ${destination.name}: ${destination.description}. Plan your trip to ${destination.country} with FlightTicket.`,
    openGraph: {
      title: `${destination.name}, ${destination.country}`,
      description: destination.description,
      images: [
        {
          url: destination.image, // Use actual image if available in future
          width: 1200,
          height: 630,
          alt: `Image of ${destination.name}`,
        },
        ...previousImages,
      ],
    },
  };
}

// Helper to get Lucide icon component
const getIconComponent = (iconName) => {
  if (!iconName) return Star; // Default icon
  const iconMap = {
    MapPin, CalendarDays, Star, Ticket, Building, Trees, Users, Palette, Church, Landmark, ScrollText, Flame, RectangleEllipsis, Youtube, Sun, CloudLightning, Tower: Building // Alias Tower to Building if Tower not available
  };
  return iconMap[iconName] || Star;
};


export default async function DestinationDetailPage({ params }) {
  const destination = await getDestinationById(params.id);

  if (!destination) {
    notFound();
  }

  const relatedFlights = await getFlightsToDestination(destination.name);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <article>
        <header className="mb-8 md:mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mb-6">
            <Image
              src={destination.image}
              alt={`Panoramic view of ${destination.name}`}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={destination.dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-2">
            {destination.name}
          </h1>
          <div className="flex items-center text-xl text-muted-foreground">
            <MapPin className="h-6 w-6 mr-2 text-primary" />
            <span>{destination.country}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">About {destination.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
                <p>{destination.longDescription || destination.description}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="h-5 w-5 mr-2 text-primary" />
                  <strong>Best time to visit:</strong>&nbsp;{destination.bestTimeToVisit}
                </div>
              </CardContent>
            </Card>

            {destination.attractions && destination.attractions.length > 0 && (
              <Card className="mt-8 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Top Attractions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destination.attractions.map((attraction, index) => {
                      const IconComponent = getIconComponent(attraction.icon);
                      return (
                        <li key={index} className="flex items-center p-3 bg-secondary/30 rounded-md">
                          {IconComponent && <IconComponent className="h-5 w-5 mr-3 text-primary flex-shrink-0" />}
                          <span>{attraction.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-8">
            {/* Placeholder for booking widget or more info */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-center">
                <Ticket className="h-12 w-12 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-semibold mb-2">Ready to Go?</h3>
                <p className="text-muted-foreground mb-4">Find the best flights to {destination.name} and start your adventure!</p>
                {/* <Button size="lg" className="w-full">Find Flights</Button> */}
            </Card>
            {/* Add more relevant info here: e.g., average flight price, quick facts */}
          </aside>
        </div>
        
        {relatedFlights.length > 0 && (
          <section className="mt-12 md:mt-16">
            <SectionTitle title={`Flights to ${destination.name}`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedFlights.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          </section>
        )}

      </article>
    </div>
  );
}
