
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Languages, DollarSign, Play, AppleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button'; // For potential button styling for app stores

// Placeholder SVGs for App Store and Google Play, similar to Kayak's text-based approach
const GooglePlayButton = () => (
  <a href="#" className="inline-block border border-foreground/30 hover:border-foreground/70 rounded-md px-3 py-1.5 text-sm transition-colors">
    <div className="flex items-center">
      <Play className="h-5 w-5 mr-2 fill-foreground text-background" /> {/* Lucide Play icon */}
      <div>
        <div className="text-xs text-muted-foreground">GET IT ON</div>
        <div className="font-semibold text-foreground">Google Play</div>
      </div>
    </div>
  </a>
);

const AppStoreButton = () => (
  <a href="#" className="inline-block border border-foreground/30 hover:border-foreground/70 rounded-md px-3 py-1.5 text-sm transition-colors">
    <div className="flex items-center">
      <AppleIcon className="h-6 w-6 mr-2" /> {/* Lucide Apple icon */}
      <div>
        <div className="text-xs text-muted-foreground">Download on the</div>
        <div className="font-semibold text-foreground">App Store</div>
      </div>
    </div>
  </a>
);


export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinkSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blogs" },
        { label: "Destinations", href: "/destinations" },
        { label: "Flights", href: "/flights" },
      ]
    },
    {
      title: "Support & Legal",
      links: [
        { label: "Contact Us", href: "/about#contact" }, // Assuming contact info/form is on about page or a dedicated page
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "FAQ", href: "/#faq-section" }, // Link to FAQ section on homepage
      ]
    },
    {
      title: "Explore",
      links: [
        { label: "Top Foodie Cities", href: "/blogs/guides/top-10-foodie-cities" },
        { label: "Travel Tips", href: "/blogs/tips/budget" }, // Example link to a tips page
        { label: "All Destinations", href: "/destinations" },
        { label: "All Flights", href: "/flights" },
      ]
    }
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border/70">
      <div className="container mx-auto px-8 sm:px-16 lg:px-24 py-10 md:py-12"> {/* Increased horizontal padding here */}
        {/* Top section with link columns and app download */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 md:mb-10">
          {footerLinkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-muted-foreground hover:text-primary hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Get the FlightTicket App</h3>
            <div className="space-y-3">
              <GooglePlayButton />
              <AppStoreButton />
            </div>
          </div>
        </div>

        {/* Separator line */}
        <hr className="border-border/50 my-6 md:my-8" />

        {/* Bottom section: Copyright, Legal, Social, Localization */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <span>&copy; {currentYear} FlightTicket</span>
            <Link href="/privacy" className="hover:text-primary hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:text-primary hover:underline">Terms & Conditions</Link>
          </div>

          <div className="flex items-center space-x-3 md:space-x-5">
            <a href="#" className="hover:text-primary" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="hover:text-primary" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="hover:text-primary" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" className="hover:text-primary" aria-label="Instagram"><Instagram size={18} /></a>
            
            <span className="border-l border-border/50 h-4 mx-1 md:mx-2"></span>

            <button className="flex items-center hover:text-primary">
              <Languages size={16} className="mr-1" /> English
            </button>
            <button className="flex items-center hover:text-primary">
              <DollarSign size={16} className="mr-1" /> USD
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
