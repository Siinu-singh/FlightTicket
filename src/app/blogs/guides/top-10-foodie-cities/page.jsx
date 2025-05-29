
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FoodieCityCard } from "@/components/pages/blogs/guides/top-10-foodie-cities/FoodieCityCard";
import { Utensils } from "lucide-react";

export const metadata = {
  title: 'Top 10 Foodie Cities to Visit | FlightTicket Blog',
  description: 'Explore the culinary capitals of the world with our guide to the top 10 foodie cities. Discover unique flavors and dining experiences.',
};

const foodieCitiesData = [
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "tokyo sushi ramen",
    description: "From Michelin-starred sushi to bustling ramen shops and vibrant street food stalls, Tokyo is a culinary paradise."
  },
  {
    id: "paris",
    name: "Paris, France",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "paris pastry cafe",
    description: "Indulge in exquisite pastries, classic French bistros, and innovative fine dining in the City of Lights."
  },
  {
    id: "rome",
    name: "Rome, Italy",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "rome pasta pizza",
    description: "Savor authentic pasta, crispy Roman pizza, and delightful gelato while exploring ancient wonders."
  },
  {
    id: "bangkok",
    name: "Bangkok, Thailand",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "bangkok street food",
    description: "Dive into a world of aromatic spices, vibrant street food, and complex flavors that define Thai cuisine."
  },
  {
    id: "new-york",
    name: "New York City, USA",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "new york diverse food",
    description: "A melting pot of cultures offering everything from iconic bagels and pizza to global gourmet experiences."
  },
  {
    id: "barcelona",
    name: "Barcelona, Spain",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "barcelona tapas paella",
    description: "Delight in flavorful tapas, fresh seafood paella, and the lively atmosphere of La Boqueria market."
  },
  {
    id: "mexico-city",
    name: "Mexico City, Mexico",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "mexico city tacos",
    description: "Experience the rich and diverse world of Mexican cuisine, from street tacos to sophisticated moles."
  },
  {
    id: "singapore",
    name: "Singapore",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "singapore hawker food",
    description: "A foodie haven with legendary hawker centers offering a symphony of Asian flavors at affordable prices."
  },
  {
    id: "istanbul",
    name: "Istanbul, Turkey",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "istanbul kebab baklava",
    description: "A fusion of Middle Eastern and Mediterranean flavors, with succulent kebabs, rich mezes, and sweet baklava."
  },
  {
    id: "new-orleans",
    name: "New Orleans, USA",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "new orleans creole food",
    description: "Discover the unique Creole and Cajun cuisines, from gumbo and jambalaya to beignets and po'boys."
  }
];

export default function TopFoodieCitiesPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionTitle
          title="World's Top 10 Foodie Cities"
          subtitle="Embark on a gastronomic journey to the most delicious destinations across the globe. Your taste buds will thank you!"
          className="mb-12 md:mb-16"
        />
        
        <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90 dark:text-slate-300 mb-12 md:mb-16 text-center leading-relaxed">
          <p>
            For many travelers, food is not just sustenance; it's a central part of the adventure. 
            Exploring local markets, trying traditional dishes, and discovering hidden culinary gems can be 
            the highlight of any trip. We've curated a list of ten cities that stand out for their 
            exceptional food scenes, offering a diverse range of flavors and experiences that are sure to delight any food lover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {foodieCitiesData.map((city) => (
            <FoodieCityCard key={city.id} city={city} />
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90 dark:text-slate-300 mt-16 md:mt-24 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center justify-center">
            <Utensils className="h-7 w-7 mr-3"/>
            Ready to Eat Your Way Around the World?
          </h3>
          <p>
            Each of these cities offers a unique culinary identity shaped by its history, culture, and local ingredients. 
            Whether you're craving street food, fine dining, or traditional home-style cooking, these destinations 
            promise unforgettable gastronomic adventures. Start planning your next culinary journey today!
          </p>
        </div>
      </div>
    </div>
  );
}
