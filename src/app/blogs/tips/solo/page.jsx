
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Solo Travel Guides | FlightTicket Blog',
  description: 'Empowering guides and tips for solo adventurers looking to explore the world on their own terms.',
};

export default function SoloTravelPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Solo Travel Guides"
        subtitle="Embark on your solo journey with confidence. Tips, safety advice, and destination ideas for traveling alone."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>This page is dedicated to Solo Travel. We provide resources for planning safe and exciting solo trips, meeting new people, and enjoying the freedom of traveling independently.</p>
        <p>Whether it's your first solo trip or you're a seasoned solo traveler, find inspiration and practical advice here.</p>
        <p>More content coming soon!</p>
      </div>
    </div>
  );
}
