
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'My European Adventure | FlightTicket Blog',
  description: 'Follow along on a personal journey through the diverse landscapes and cultures of Europe.',
};

export default function EuropeanAdventurePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="My European Adventure"
        subtitle="A collection of stories, experiences, and photos from a memorable trip across Europe."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>This is the "My European Adventure" story page. Here, you'll find captivating tales from travels across various European countries.</p>
        <p>From the charming streets of Paris to the historic ruins of Rome, and the scenic beauty of the Swiss Alps, relive the journey through personal anecdotes and travelogues.</p>
        <p>Stay tuned for more chapters from this adventure!</p>
      </div>
    </div>
  );
}
