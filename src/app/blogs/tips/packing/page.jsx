
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Packing Guides | FlightTicket Blog',
  description: 'Tips and guides for packing efficiently for your travels.',
};

export default function PackingGuidesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Packing Guides"
        subtitle="Find the best tips for packing light and smart for your next adventure."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>This is the page for Packing Guides. Content related to travel packing tips will be displayed here.</p>
        <p>Our expert travelers share their secrets on how to pack efficiently, what essentials to bring, and how to avoid overpacking. Whether you're going on a weekend trip or a month-long expedition, our packing guides will help you prepare.</p>
        <p>Stay tuned for updates and detailed articles!</p>
      </div>
    </div>
  );
}
