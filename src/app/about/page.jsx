
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: 'About Us | FlightTicket',
  description: 'Learn more about FlightTicket, our mission, and our commitment to making your travel experience seamless and enjoyable.',
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="About Us: Your Journey Starts with FlightTicket!"
        className="mt-8 mb-10 md:mb-16" // Added mt-8 here
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed space-y-6">
        <p>Welcome to FlightTicket, your guide in the world of air travel. We are more than a flight booking company; we are a team of travel enthusiasts, technology experts, and customer care agents helping travellers get where they are going easier, faster, and in a more enjoyable way.</p>

        <p>At FlightTicket, we see travelling as going beyond just getting from point A to point B. Travelling is about experiences, memories, and opportunities. Our objective is to enable travellers to confidently explore the world by offering a dependable booking experience with seamless transparency and convenience.</p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Story</h2>
        <p>The inspiration for FlightTicket originated from one simple idea: to save you the trouble of booking a flight! All too often, travellers log into different sites only to be confronted with difficult prices, hidden fees, and unreliable sites. We wanted to change that. So we created a system that puts the traveller first by providing real time pricing, always offering powerful search filters, and delivering clear, relevant information to help travellers make the right choice time after time.</p>
        <p>We exist to change the way flight searching is done. Since FlightTicket was conceived, we have taken thousands of users on the journey to book their appropriate flights based on flight price. With every booking made, we adapted our site to the expectations of the modern traveller.</p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">What you can expect from us</h2>
        <p>FlightTicket is a provider of a huge array of connectivity on domestic and international flights, across all airlines, not just 1 or 2 national airlines. We are discussing a future of choice and connectivity. If you need a ticket on a budget or you want to travel in luxury, we make it simple for you to compare, choose and book everything on one site.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Search Flights in Real Time</li>
          <li>Competitive Price</li>
          <li>Dates are flexible</li>
          <li>All payments are now secured on a payment gateway</li>
          <li>24/7 assistance & support</li>
        </ul>
        <p>Each one of the features has been made for one purpose only: to make your travel planning straightforward and enjoyable!</p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose Us?</h2>
        <p>What differentiates FlightTicket from other booking sites is our commitment to genuine service and transparency. We do not deal in gimmicks or hidden fees. What you see is what you get. We built FlightTicket to deliver accurate results, fast load times, and a seamless booking experience every single time.</p>
        <p>And when your plans change, we are right there with you. Our customer service team is here 24/7 to help you with changes, cancellations, or any travel related questions you might have.</p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Vision</h2>
        <p>As travel changes, we change. FlightTicket is constantly upgrading its technology, expanding its airline partnerships, and introducing features that offer travellers more freedom and flexibility. Our long term vision is to become the one stop shop for everything travel, including flights, hotels and any curated travel experience.</p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Let Us Take You on the Journey</h2>
        <p>At FlightTicket, we are here for your journey. Whether you're travelling for leisure, business, or anything in between, we are here to ensure you have a smooth and enjoyable trip. Thank you for choosing to travel with us. We hope to be part of your travel journey.</p>
      </div>
    </div>
  );
}
