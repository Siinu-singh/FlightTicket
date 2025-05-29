import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff, PlaneLanding, Clock, Tag, CalendarDays, Ticket } from "lucide-react";
import { format } from 'date-fns';

export function FlightCard({ flight }) {
  const departureDateTime = new Date(flight.departureTime);
  const arrivalDateTime = new Date(flight.arrivalTime);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-semibold">
              {flight.originCode} &rarr; {flight.destinationCode}
            </CardTitle>
            <CardDescription className="text-sm">{flight.origin} to {flight.destination}</CardDescription>
          </div>
          {flight.airlineLogo && (
            <Image 
              src={flight.airlineLogo} 
              alt={`${flight.airline} logo`} 
              width={80} 
              height={32}
              className="object-contain"
              data-ai-hint={flight.dataAiHint || "airline brand"}
            />
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{flight.airline} - {flight.flightNumber}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm">
          <PlaneTakeoff className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
          <span>Departs: {format(departureDateTime, "MMM d, HH:mm")}</span>
        </div>
        <div className="flex items-center text-sm">
          <PlaneLanding className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
          <span>Arrives: {format(arrivalDateTime, "MMM d, HH:mm")}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
          <span>Duration: {flight.duration}</span>
        </div>
         <div className="flex items-center text-sm">
          <Ticket className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
          <span>Stops: {flight.stops > 0 ? `${flight.stops} stop(s)` : 'Direct'}</span>
        </div>
        <div className="flex items-center text-lg font-semibold text-primary">
          <Tag className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>${flight.price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
