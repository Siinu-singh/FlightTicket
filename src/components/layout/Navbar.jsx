
"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Custom Gradient Plane Icon
const GradientPlaneIcon = ({ className }) => {
  const gradientId = "planeIconGradient";
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


const navItemsData = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'destinations',
    label: 'Destinations',
    href: '/destinations',
    dropdownSections: [
      {
        title: 'Popular Destinations',
        links: [
          { label: 'Paris', href: '/destinations/paris' },
          { label: 'Tokyo', href: '/destinations/tokyo' },
          { label: 'Rome', href: '/destinations/rome' },
          { label: 'New York', href: '/destinations/new-york' },
        ],
      },
      {
        title: 'Most Visited',
        links: [
          { label: 'Barcelona', href: '/destinations/barcelona' },
          { label: 'Amsterdam', href: '/destinations/amsterdam' },
          { label: 'London', href: '/destinations/london' },
        ],
      },
      {
        title: 'Trending Locations',
        links: [
          { label: 'Kyoto', href: '/destinations/kyoto' },
          { label: 'Sydney', href: '/destinations/sydney' },
          { label: 'Vancouver', href: '/destinations/vancouver' },
        ],
      },
    ],
  },
  {
    id: 'blogs',
    label: 'Blogs',
    href: '/blogs',
    dropdownSections: [
      {
        title: 'Travel Tips',
        links: [
          { label: 'Packing Guides', href: '/blogs/tips/packing' },
          { label: 'Budget Travel', href: '/blogs/tips/budget' },
          { label: 'Solo Travel', href: '/blogs/tips/solo' },
        ],
      },
      {
        title: 'User Stories',
        links: [
          { label: 'My European Adventure', href: '/blogs/stories/europe' },
          { label: 'Backpacking Southeast Asia', href: '/blogs/stories/sea' },
        ],
      },
      {
        title: 'Top 10 Guides',
        links: [
          { label: 'Top 10 Beaches', href: '/blogs/guides/top-10-beaches' },
          { label: 'Top 10 Foodie Cities', href: '/blogs/guides/top-10-foodie-cities' },
        ],
      },
    ],
  },
  {
    id: 'flights',
    label: 'Flights',
    href: '/flights',
    dropdownSections: [
      {
        title: 'Domestic',
        links: [
          { label: 'New York to LA', href: '/flights/search?route=NY-LA' },
          { label: 'Chicago to Miami', href: '/flights/search?route=CHI-MIA' },
        ],
      },
      {
        title: 'International',
        links: [
          { label: 'London to New York', href: '/flights/search?route=LHR-JFK' },
          { label: 'Paris to Tokyo', href: '/flights/search?route=CDG-NRT' },
        ],
      },
      {
        title: 'Special Offers',
        links: [
          { label: 'Last Minute Deals', href: '/flights/offers/last-minute' },
          { label: 'Holiday Packages', href: '/flights/offers/holiday' },
        ],
      },
      {
        title: 'Airlines',
        links: [
          { label: 'SkyHigh Airlines', href: '/flights/airlines/skyhigh' },
          { label: 'AirVoyage', href: '/flights/airlines/airvoyage' },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (itemId) => {
    setOpenMobileDropdowns(prev => ({
      // ...prev, // Uncomment this if you want multiple dropdowns to be open at once
      [itemId]: !prev[itemId]
    }));
  };

  const NavLinkContent = ({ href, label, isActive, className, onClick, children }) => (
    <Link
      href={href}
      className={cn(
        "px-3 py-1.5 text-xs font-medium transition-colors",
        // Active state
        isActive
          ? (isScrolled || isMobileMenuOpen
              ? "text-black dark:text-white" // Active, Scrolled/Mobile: Black in light, White in dark
              : "text-white hover:text-neutral-200") // Active, Transparent Navbar: White
          // Inactive state
          : (isScrolled || isMobileMenuOpen
              ? "text-black hover:text-primary dark:text-neutral-400 dark:hover:text-white" // Inactive, Scrolled/Mobile: Black in light (hover primary), Neutral in dark
              : "text-neutral-300 hover:text-white"), // Inactive, Transparent Navbar: Light neutral
        className
      )}
      onClick={onClick}
    >
      {children || label}
    </Link>
  );
  
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-transparent bg-transparent">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8"> {/* Adjusted height */}
          <div className="flex items-center animate-pulse">
            <div className="h-7 w-7 bg-neutral-700/50 rounded-full mr-2"></div>
            <div className="h-6 w-32 bg-neutral-700/50 rounded"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-neutral-700/50 rounded md:hidden"></div>
            <div className="h-8 w-8 bg-neutral-700/50 rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/90 backdrop-blur-md dark:bg-neutral-900/80 border-b border-border" : "bg-transparent border-b border-transparent"
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8"> {/* Adjusted height */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105" 
          aria-label="FlightTicket Home">
          <GradientPlaneIcon 
             className={cn(
              "h-7 w-7 transition-transform duration-300 group-hover:rotate-[-15deg]"
            )}
          />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FlightTicket
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          {navItemsData.map((item) =>
            item.dropdownSections ? (
              <div key={item.id} className="group relative">
                <NavLinkContent 
                  href={item.href} 
                  label={item.label} 
                  isActive={pathname.startsWith(item.href)} 
                  className="flex items-center"
                />
                <div className={cn(
                  "absolute left-1/2 top-full -translate-x-1/2 transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pt-3 z-30 w-auto"
                )}>
                   <div className={cn(
                    "bg-background shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 rounded-lg p-6",
                    "w-[90vw] md:w-[70vw] lg:w-[60rem]", 
                    "max-w-[calc(100vw_-_2rem)] lg:max-w-screen-lg"
                  )}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 max-w-screen-lg mx-auto">
                      {item.dropdownSections.map((section) => (
                        <div key={section.title} className="min-w-0"> 
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            {section.title}
                          </h3>
                          <ul className="space-y-0.5">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="block py-1.5 px-2 -mx-2 text-sm text-foreground/80 hover:text-primary rounded-md transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLinkContent key={item.id} href={item.href} label={item.label} isActive={pathname === item.href} />
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className={cn("h-8 w-8", isScrolled ? "text-foreground hover:bg-accent/50" : "text-white hover:bg-white/10")}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6 bg-background dark:bg-neutral-900">
                <SheetHeader>
                  <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 h-full overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                     <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105" aria-label="FlightTicket Home" onClick={() => setIsMobileMenuOpen(false)}>
                        <GradientPlaneIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-15deg]" />
                        <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FlightTicket</span>
                      </Link>
                  </div>
                  {navItemsData.map((item) => (
                    <div key={item.id} className="flex flex-col">
                      {item.dropdownSections ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.id)}
                            className={cn(
                              "flex justify-between items-center w-full text-left text-base px-0 py-3 transition-colors",
                               pathname.startsWith(item.href) 
                                ? "text-primary" 
                                : "text-foreground hover:text-primary"
                            )}
                          >
                            {item.label}
                            {openMobileDropdowns[item.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </button>
                          {openMobileDropdowns[item.id] && (
                            <div className="pl-3 mt-1 mb-2 space-y-2 border-l-2 border-primary/50 ml-1">
                              {item.dropdownSections.map(section => (
                                <div key={section.title} className="py-1">
                                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 px-2">{section.title}</h4>
                                  <ul className="space-y-0.5">
                                    {section.links.map(link => (
                                       <li key={link.label}>
                                         <Link
                                          href={link.href}
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="block text-sm py-1.5 px-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                        >
                                          {link.label}
                                        </Link>
                                       </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <div className="pt-1">
                                 <Link
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-sm py-1.5 px-2 font-medium text-primary hover:underline transition-colors"
                                >
                                  View all {item.label}
                                </Link>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <NavLinkContent 
                          href={item.href} 
                          label={item.label} 
                          isActive={pathname === item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-base px-0 py-3 text-foreground hover:text-primary" // Adjusted for mobile menu
                        />
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
