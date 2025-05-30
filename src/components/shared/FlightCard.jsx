
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff, PlaneLanding, Clock, ArrowRight, Briefcase, UserCheck } from "lucide-react"; // Using Briefcase for stops for now
import { format } from 'date-fns';
import { cn } from "@/lib/utils";

export function FlightCard({ flight }) {
  if (!flight) return null;

  const departureDateTime = new Date(flight.departureTime);
  const arrivalDateTime = new Date(flight.arrivalTime);

  return (
    <Card className={cn(
      "group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out",
      "border border-transparent hover:border-primary/50 hover:scale-[1.02] overflow-hidden"
    )}>
      <CardHeader className="p-5 bg-card">
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle className="text-2xl font-extrabold tracking-tight text-foreground">
              {flight.originCode}{" "}
              <ArrowRight className="inline-block h-5 w-5 mx-1 text-muted-foreground relative -top-0.5" />{" "}
              {flight.destinationCode}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {flight.origin} to {flight.destination}
            </CardDescription>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${flight.price.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">Total Price</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-3 mt-3">
          {flight.airlineLogo && (
            <Image 
              src={flight.airlineLogo} 
              alt={`${flight.airline} logo`} 
              width={24} 
              height={24}
              className="h-6 w-6 object-contain rounded-sm"
              data-ai-hint={flight.dataAiHint || "airline brand"}
            />
          )}
          <span>{flight.airline} - {flight.flightNumber}</span>
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-4 bg-background/50 dark:bg-secondary/20">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs text-muted-foreground">Depart</span>
            <span className="text-lg font-semibold text-foreground">{format(departureDateTime, "HH:mm")}</span>
            <span className="text-xs text-muted-foreground">{format(departureDateTime, "MMM d, yyyy")}</span>
          </div>
          
          <div className="flex flex-col items-center">
             <PlaneTakeoff className="h-5 w-5 text-primary mb-1" />
             <div className="w-full border-t-2 border-dashed border-border my-1"></div>
             <PlaneLanding className="h-5 w-5 text-primary mt-1" />
          </div>

          <div className="flex flex-col items-end text-right">
            <span className="text-xs text-muted-foreground">Arrive</span>
            <span className="text-lg font-semibold text-foreground">{format(arrivalDateTime, "HH:mm")}</span>
            <span className="text-xs text-muted-foreground">{format(arrivalDateTime, "MMM d, yyyy")}</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-muted-foreground border-t border-border pt-3">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{flight.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" /> {/* Using Briefcase for stops illustration */}
            <span>{flight.stops > 0 ? `${flight.stops} stop(s)` : 'Direct'}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 border-t border-border bg-card">
        <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base">
          View Deal
        </Button>
      </CardFooter>
    </Card>
  );
}
