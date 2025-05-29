
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'Budget Travel Tips | FlightTicket Blog',
  description: 'Learn how to travel the world without breaking the bank with our budget travel tips.',
};

export default function BudgetTravelPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Budget Travel Tips"
        subtitle="Explore the world on a shoestring with our expert advice on budget-friendly travel."
        className="mb-10 md:mb-16"
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
        <p>This is the page for Budget Travel Tips. Here you'll find strategies for affordable accommodation, cheap eats, free attractions, and transportation hacks.</p>
        <p>Discover how to make your travel dreams a reality, no matter your budget. We believe that travel should be accessible to everyone.</p>
        <p>Check back soon for more insightful articles!</p>
      </div>
    </div>
  );
}
