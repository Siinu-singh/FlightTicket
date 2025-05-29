
export interface Attraction {
  name: string;
  icon?: string; // Optional: lucide-react icon name or SVG path
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  longDescription?: string;
  image: string;
  dataAiHint: string;
  attractions: Attraction[];
  bestTimeToVisit: string;
  averageFlightPrice?: number;
}

export interface Flight {
  id: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  airline: string;
  airlineLogo?: string; // URL to airline logo or placeholder
  dataAiHint?: string; // For airline logo placeholder
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  date: string;
  stops: number;
  layovers?: { airport: string; duration: string }[];
}
