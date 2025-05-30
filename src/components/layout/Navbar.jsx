
"use client";

import Link from "next/link";
import { Menu, X, Heart, UserCircle, Plane, Hotel, Car, Users, Sparkles, Globe, Send, Clock, Briefcase, Languages, Settings2, ChevronDown, ChevronUp, MessageSquare, Ticket } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FlightTicketLogo } from "./FlightTicketLogo";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const kayakSheetNavItems = [
  {
    type: 'section',
    items: [
      { id: 'flights', label: 'Flights', href: '/flights', icon: Plane, activePaths: ['/flights'] },
      { id: 'stays', label: 'Stays', href: '/destinations', icon: Hotel, activePaths: ['/destinations'] },
      { id: 'car-rental', label: 'Car Rental', href: '#', icon: Car, activePaths: ['/cars'] },
      { id: 'flight-hotel', label: 'Flight+Hotel', href: '#', icon: Users, activePaths: ['/packages'] },
      { id: 'ai-travel', label: 'AI Travel', href: '#', icon: Sparkles, activePaths: ['/ai-travel'], isBeta: true },
    ]
  },
  { type: 'separator' },
  {
    type: 'section',
    items: [
      { id: 'explore', label: 'Explore', href: '/destinations', icon: Globe },
      { id: 'direct', label: 'Direct', href: '#', icon: Send },
      { id: 'best-time', label: 'Best Time to Travel', href: '#', icon: Clock },
      { id: 'ft-business', label: 'FlightTicket for Business', href: '#', icon: Briefcase, isNew: true },
      { id: 'trips', label: 'Trips', href: '/blogs', icon: Heart }, 
    ]
  },
  { type: 'separator' },
  {
    type: 'section',
    items: [
      { id: 'language', label: 'English', href: '#', icon: Languages, hasDropdown: true },
      { id: 'currency', label: 'Indian rupee', href: '#', icon: Settings2, hasDropdown: true }, 
      { id: 'feedback', label: 'Feedback', href: '#', icon: MessageSquare },
    ]
  }
];


export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  if (!isMounted) {
    // Simplified skeleton loader for the navbar
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background h-16">
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-muted rounded"></div>
            <div className="h-7 w-32 bg-muted rounded"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-muted rounded hidden sm:block"></div>
            <div className="h-8 w-20 bg-muted rounded hidden sm:block"></div>
            <div className="h-8 w-8 bg-muted rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background border-b border-border/75 shadow-sm h-16">
      <div className="container mx-auto flex h-full items-center justify-between px-2 sm:px-4 lg:px-6">
        {/* Left: Hamburger Menu & Logo */}
        <div className="flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground hover:bg-muted">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-full max-w-xs sm:max-w-sm p-0 bg-background dark:bg-card flex flex-col"
            >
              <SheetHeader className="p-4 border-b border-border">
                <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
                <FlightTicketLogo /> 
              </SheetHeader>
              <div className="flex-1 overflow-y-auto">
                {kayakSheetNavItems.map((section, sectionIndex) => (
                  section.type === 'separator' 
                  ? <Separator key={`sep-${sectionIndex}`} className="my-2" />
                  : (
                    <div key={`section-${sectionIndex}`} className="py-2 px-1">
                      {section.items.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = item.activePaths && item.activePaths.some(p => pathname === p || pathname.startsWith(p + '/'));
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={item.href === '#' ? (e) => e.preventDefault() : closeMobileMenu}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                              isActive
                               ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                               : "text-foreground hover:bg-muted/70 dark:text-slate-300 dark:hover:bg-slate-700/50"
                            )}
                          >
                            {IconComponent && <IconComponent className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground dark:text-slate-400")} />}
                            <span className="flex-grow">{item.label}</span>
                            {item.isBeta && <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-700/30 dark:text-blue-300 dark:border-blue-500">BETA</Badge>}
                            {item.isNew && <Badge variant="outline" className="text-xs bg-green-100 text-green-700 border-green-300 dark:bg-green-700/30 dark:text-green-300 dark:border-green-500">NEW</Badge>}
                            {item.hasDropdown && <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />}
                          </Link>
                        );
                      })}
                    </div>
                  )
                ))}
              </div>
               <div className="p-4 border-t border-border mt-auto">
                 <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
           <Link href="/" className="ml-2 sm:ml-3" aria-label="FlightTicket Home">
              <FlightTicketLogo />
           </Link>
        </div>
       
        {/* Right: Icons and Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-muted/50 hidden sm:inline-flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm h-8 px-2 sm:px-3 border-primary/50 hover:bg-primary/10 text-primary hover:border-primary">
            <Link href="/flights">
              <Ticket className="h-3.5 w-3.5 mr-1.5 hidden sm:inline-block" />
              Book Flight
            </Link>
          </Button>
          <div className="hidden sm:block ml-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
