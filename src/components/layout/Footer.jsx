
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

// Re-using the GradientPlaneIcon from Navbar for consistency if needed for "FlightTicket" brand name
const GradientPlaneIcon = ({ className }) => {
  const gradientId = "planeIconGradientFooter"; // Use a unique ID
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
        </linearGradient>
      </defs>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      titleComponent: (
        <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105 mb-4" aria-label="FlightTicket Home">
          <GradientPlaneIcon className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-15deg]" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FlightTicket
          </span>
        </Link>
      ),
      content: (
        <>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-4 leading-relaxed">
            Your trusted partner for finding the best flight deals worldwide. We're committed to making your travel experience seamless and enjoyable.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </>
      )
    },
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destinations" },
        { label: "Blogs", href: "/blogs" },
        { label: "Flights", href: "/flights" },
        // { label: "About Us", href: "/about" }, // Example, if you have an about page
        // { label: "Contact", href: "/contact" } // Example, if you have a contact page
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        // { label: "FAQ", href: "/faq" }, // If you have a dedicated FAQ page
      ]
    },
    {
      title: "Contact Us",
      content: (
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <MapPin size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
            <span className="text-neutral-400 dark:text-neutral-500">123 Flight Avenue, Sky City, TravelLand 12345</span>
          </li>
          <li className="flex items-start">
            <Phone size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
            <a href="tel:+1234567890" className="text-neutral-400 dark:text-neutral-500 hover:text-primary transition-colors">+1 (234) 567-890</a>
          </li>
          <li className="flex items-start">
            <Mail size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
            <a href="mailto:info@flightticket.com" className="text-neutral-400 dark:text-neutral-500 hover:text-primary transition-colors">info@flightticket.com</a>
          </li>
        </ul>
      )
    }
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-200 dark:text-neutral-300 border-t border-neutral-800 dark:border-neutral-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              {section.titleComponent ? section.titleComponent : (
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              )}
              {section.links && (
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-neutral-400 dark:text-neutral-500 hover:text-primary hover:underline transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {section.content && section.content}
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-800 dark:border-neutral-700 pt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-600">
            &copy; {currentYear} FlightTicket. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-700">
            Your Journey Starts Here.
          </p>
        </div>
      </div>
    </footer>
  );
}
