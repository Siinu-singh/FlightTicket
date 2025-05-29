
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Top 10 Beaches in the World | FlightTicket Blog',
  description: 'Discover our curated list of the top 10 most beautiful beaches around the globe.',
};

export default function TopBeachesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Top 10 Beaches in the World"
        subtitle="Your ultimate guide to the most stunning and serene beaches across the continents."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>Welcome to our guide on the Top 10 Beaches in the World. From the white sands of the Maldives to the rugged coastlines of the Pacific Northwest, we cover must-visit beach destinations.</p>
        <p>Find inspiration for your next coastal getaway, with details on what makes each beach unique, best times to visit, and activities to enjoy.</p>
        <p>Detailed reviews and more photos coming soon!</p>
      </div>
    </div>
  );
}
