
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils } from "lucide-react";

export function FoodieCityCard({ city }) {
  return (
    <Card className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col h-full bg-card आकर्षण-कार्ड transform hover:-translate-y-1 hover:scale-[1.02]">
      <CardHeader className="p-0 relative">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={city.image}
            alt={`Food scene in ${city.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={city.dataAiHint || "city food"}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </CardHeader>
      <CardContent className="p-5 flex-grow">
        <div className="flex items-center mb-1 text-primary">
          <Utensils className="h-5 w-5 mr-2" />
          <CardTitle className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {city.name}
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {city.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 border-t border-border/60">
        <Button asChild variant="ghost" className="w-full text-primary hover:bg-primary/10 hover:text-primary/90 h-9 text-sm">
          {/* In a real app, this would link to a more detailed page or a section */}
          <Link href="#">Explore Cuisine</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
