"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "@/components/shared/SectionTitle";
// Icons are removed as per the new design
// import { Briefcase, CreditCard, HelpCircle, Search, XCircle } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What is the cheapest day of the week to book a flight?",
    answer: "Flight prices can vary, but Tuesdays and Wednesdays are often considered cheaper days to book flights. However, this can depend on the route, airline, and time of year. Using price comparison tools can help you find the best deals.",
  },
  {
    id: "faq-2",
    question: "When is the best time to buy plane tickets - Last minute or in advance?",
    answer: "Generally, booking in advance (e.g., 1-3 months for domestic flights, 2-8 months for international) tends to offer better prices than last-minute bookings. However, airlines occasionally release last-minute deals for unsold seats.",
  },
  {
    id: "faq-3",
    question: "How does FlightTicket find such low flight prices?",
    answer: "FlightTicket searches hundreds of travel sites at once to find the best deals for you. We compare prices from various airlines and online travel agencies to help you save time and money.",
  },
  {
    id: "faq-4",
    question: "How can Hacker Fares save me money?",
    answer: "Hacker Fares combine one-way tickets from different airlines to create a round-trip, which can sometimes be cheaper than booking a standard round-trip with a single airline. We'll show you these options if they're available.",
  },
  {
    id: "faq-5",
    question: "How does FlightTicket's flight Price Forecast tool help me choose the right time to buy?",
    answer: "Our Price Forecast tool uses historical data to predict whether the price for a given flight is likely to rise or fall in the next 7 days. This helps you decide whether to book now or wait for a potential price drop.",
  },
  {
    id: "faq-6",
    question: "Which month of the year are flight prices lowest?",
    answer: "This varies by destination and origin. Generally, shoulder seasons (spring and fall) and less popular travel months like January or September might offer lower prices compared to peak summer or holiday periods.",
  },
  {
    id: "faq-7",
    question: "Can flying international flights with a layover save money on airfare?",
    answer: "Yes, flights with one or more layovers are often cheaper than direct flights. If you're flexible with your travel time, considering flights with layovers can be a good way to find lower fares.",
  },
  {
    id: "faq-8",
    question: "How do I find the best flight deals on FlightTicket?",
    answer: "Use our flexible search options: search by date range, nearby airports, and set up price alerts. Comparing different airlines and dates will help you find the most affordable options for your trip.",
  },
  {
    id: "faq-9",
    question: "Does FlightTicket query more flight providers than competitors?",
    answer: "We strive to provide comprehensive search results by querying a wide range of airlines, online travel agencies, and low-cost carriers. Our goal is to show you as many options as possible in one place.",
  },
  {
    id: "faq-10",
    question: "What is FlightTicket's 'flexible dates' feature and why should I care?",
    answer: "The 'flexible dates' feature allows you to see if flying a few days earlier or later can save you money. If your travel dates aren't fixed, this can be a great way to find significantly cheaper flights.",
  },
];

export function FaqSection() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-16 md:py-24 bg-background dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently asked questions"
          // Subtitle removed to match the image
          className="mb-10 md:mb-12 text-left" // Align title to the left
        />
        <div className="mx-auto"> {/* Removed max-w-5xl */}
          <Accordion 
            type="single" 
            collapsible 
            className="w-full md:grid md:grid-cols-2 md:gap-x-12" // 2-column grid for md and up
          >
            {faqData.map((item) => {
              // Icons removed to match KAYAK style
              return (
                <AccordionItem 
                  key={item.id} 
                  value={item.id} 
                  className="border-b border-border py-0" // Simpler item styling
                >
                  <AccordionTrigger className="py-4 text-sm md:text-base text-left hover:no-underline text-foreground dark:text-slate-100">
                    {/* IconComponent removed */}
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
    </section>
  );
}
