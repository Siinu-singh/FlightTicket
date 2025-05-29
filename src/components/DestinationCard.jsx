
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart, Ticket } from "lucide-react";

export function DestinationCard({ destination }) {
  const displayRating = destination.averageRating || 0;
  const displayPrice = destination.pricePerNight;

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-0 relative h-48 sm:h-56">
        <Image
          src={destination.image}
          alt={`Image of ${destination.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={destination.dataAiHint}
        />
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/70 hover:bg-white text-rose-500 hover:text-rose-600 h-8 w-8 rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
        {destination.tags && destination.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex space-x-1">
            {destination.tags.map(tag => (
              <span key={tag} className={`px-2 py-0.5 text-xs font-semibold rounded-full text-white ${tag === 'New' ? 'bg-green-500' : tag === 'Offer' ? 'bg-rose-500' : 'bg-primary'}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1 line-clamp-1">{destination.name}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
          <span>{destination.country}</span>
        </div>
        {displayRating > 0 && (
          <div className="flex items-center text-xs mb-2">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(displayRating) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted-foreground'}`} />
            ))}
            <span className="ml-1 text-muted-foreground">({displayRating.toFixed(1)})</span>
          </div>
        )}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{destination.description}</p>
        {displayPrice && (
            <div className="text-lg font-bold text-primary">
                ${displayPrice}<span className="text-xs font-normal text-muted-foreground">/night</span>
            </div>
        )}
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-sm h-9">
          <Link href={`/destinations/${destination.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
