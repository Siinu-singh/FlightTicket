
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Backpacking Southeast Asia | FlightTicket Blog',
  description: 'An inspiring travelogue about backpacking through the vibrant countries of Southeast Asia.',
};

export default function BackpackingSEAPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Backpacking Southeast Asia"
        subtitle="Discover the wonders of Southeast Asia through the eyes of a backpacker. Adventures, cultures, and unforgettable moments."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>This page shares stories from a backpacking trip across Southeast Asia. Read about island hopping in Thailand, exploring ancient temples in Cambodia, and navigating bustling Vietnamese cities.</p>
        <p>Get insights into budget travel, local experiences, and the unique charm of this incredible region.</p>
        <p>More stories from the road are on their way!</p>
      </div>
    </div>
  );
}
