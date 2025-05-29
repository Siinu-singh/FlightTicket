
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "@/components/SectionTitle";
import { Briefcase, CreditCard, HelpCircle, Search, XCircle } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    icon: Search,
    question: "How do I search for and book a flight?",
    answer: "Navigate to our 'Flights' page, enter your departure and arrival cities, select your travel dates, and click 'Search'. You'll see a list of available flights. Choose your preferred flight and follow the on-screen instructions to complete your booking.",
  },
  {
    id: "faq-2",
    icon: XCircle,
    question: "Can I change or cancel my flight booking?",
    answer: "Yes, most bookings can be changed or canceled, but this is subject to the airline's specific fare rules and policies. Fees may apply. Please visit the 'Manage My Booking' section (if available) or contact our customer support team with your booking reference for assistance.",
  },
  {
    id: "faq-3",
    icon: CreditCard,
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), debit cards, and sometimes PayPal or other regional payment options. The available methods will be displayed at checkout.",
  },
  {
    id: "faq-4",
    icon: Briefcase,
    question: "What is the baggage allowance for my flight?",
    answer: "Baggage allowance varies depending on the airline, fare type, and route. Details regarding checked and carry-on baggage will be provided during the booking process and are also typically available on the airline's website or your e-ticket.",
  },
  {
    id: "faq-5",
    icon: HelpCircle,
    question: "Who do I contact for support or issues?",
    answer: "For any support, questions, or issues with your booking, please use the 'Contact Us' form below or find our customer service contact details on our dedicated support page. We're here to help!",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about our flight booking services. If you can't find what you're looking for, feel free to contact us."
          className="mb-10 md:mb-16"
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((item) => {
              const IconComponent = item.icon || HelpCircle;
              return (
                <AccordionItem 
                  key={item.id} 
                  value={item.id} 
                  className="border border-border rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out bg-card dark:bg-slate-800/30"
                >
                  <AccordionTrigger className="px-6 py-4 text-base md:text-lg text-left hover:no-underline text-foreground dark:text-slate-100">
                    <div className="flex items-center">
                      <IconComponent className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground dark:text-slate-400 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

