
"use client";

import * as React from 'react';
import { Plane, Hotel, Car, Users, Sparkles, CalendarDays, UsersRound, Search as SearchIcon, ArrowRightLeft, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const serviceTabsData = [
  { id: 'flights', label: 'Flights', icon: Plane, href: '/flights' },
  { id: 'stays', label: 'Stays', icon: Hotel, href: '/destinations' },
  { id: 'car-rental', label: 'Car Rental', icon: Car, href: '#' },
  { id: 'flight-hotel', label: 'Flight+Hotel', icon: Users, href: '#' },
  { id: 'ai-travel', label: 'FlightTicket.ai', icon: Sparkles, href: '#', isKayakAi: true },
];

const collageImagesData = [
  {
    src: "https://images.unsplash.com/photo-1536960046233-0ba2a5a8e2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhaXJwbGFuZSUyMHdpbmclMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzQ4NjAyMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Airplane wing over winding river and landscape",
    dataAiHint: "airplane wing landscape",
    gridClass: "row-span-2",
    roundingClass: "rounded-l-2xl"
  },
  {
    src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMHN0cmVldCUyMGJ1aWxkaW5nc3xlbnwwfHx8fDE3NDg2MDIwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Street with white and blue buildings",
    dataAiHint: "european street buildings",
    roundingClass: "rounded-tr-2xl"
  },
  {
    src: "https://images.unsplash.com/photo-1640293327317-2a9507051bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2hpbGQlMjBhaXJwbGFuZSUyMHdpbmRvd3xlbnwwfHx8fDE3NDg2MDIwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Child looking out of an airplane window",
    dataAiHint: "child airplane window",
    roundingClass: "rounded-t-2xl" 
  },
  {
    src: "https://images.unsplash.com/photo-1703060565384-f4d98d2e62c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkZXNlcnQlMjBtb251bWVudCUyMGFpcnBsYW5lfGVufDB8fHx8MTc0ODYwMjA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Desert monument valley with airplane flying over",
    dataAiHint: "desert monument airplane",
    gridClass: "row-span-1",
    roundingClass: "rounded-2xl" 
  },
  {
    src: "https://images.unsplash.com/photo-1519909709805-54df302f447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGFsbSUyMGZyb25kJTIwc2t5fGVufDB8fHx8MTc0ODYwMjA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Palm frond against blue sky",
    dataAiHint: "palm frond sky",
    roundingClass: "rounded-br-2xl"
  },
];


export function KayakStyleHero() {
  const [departureDate, setDepartureDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('flights');
  const [origin, setOrigin] = React.useState("New Delhi (DEL)");

  return (
    <section className="py-8 md:py-10 bg-slate-100 dark:bg-slate-900/30 px-2">
      <div className="bg-background dark:bg-card shadow-xl rounded-xl p-3 sm:p-4 md:p-6 mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 md:gap-8 items-start">
          
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Compare deals from 100s of sites.
            </h1>

            <div className="flex items-center border-b border-border pb-2 mb-4 overflow-x-auto hide-scrollbar space-x-2 sm:space-x-3">
              {serviceTabsData.map((tab) => {
                const isCurrentTabActive = activeTab === tab.id;
                const iconColorClass = isCurrentTabActive
                  ? 'text-white' 
                  : tab.isKayakAi
                    ? 'text-purple-600 dark:text-purple-400 group-hover:text-purple-700' 
                    : 'text-foreground/70 group-hover:text-foreground dark:text-slate-400 dark:group-hover:text-slate-200'; 
                
                const textColorClass = isCurrentTabActive
                  ? 'text-white font-medium' 
                  : tab.isKayakAi
                    ? 'text-purple-600 dark:text-purple-400 font-normal group-hover:text-purple-700' 
                    : 'text-foreground/90 dark:text-slate-300 font-normal group-hover:text-foreground'; 

                return (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    className={cn(
                      "flex flex-col items-center justify-center p-2.5 rounded-lg transition-all duration-150 focus:z-10 group w-[70px] h-[68px] sm:w-[76px] sm:h-[72px] shrink-0", 
                      isCurrentTabActive
                        ? tab.isKayakAi
                          ? 'bg-purple-600 shadow-md ring-2 ring-purple-400' 
                          : 'bg-orange-500 shadow-md ring-2 ring-orange-400' 
                        : 'bg-card hover:bg-muted/70 dark:hover:bg-slate-700/50 border border-input', 
                      tab.isKayakAi && !isCurrentTabActive && 'border-purple-300/50 dark:border-purple-700/50 hover:border-purple-400' 
                    )}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className={cn("h-5 w-5 sm:h-6 sm:w-6 mb-1", iconColorClass)} />
                    <span className={cn("text-[10px] sm:text-[11px] leading-tight text-center", textColorClass)}>{tab.label}</span>
                  </Button>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-2 mb-3">
              <Button variant="outline" className="text-xs h-8 px-3 font-normal text-muted-foreground hover:bg-muted/50 border-input">
                Return <ChevronDown className="ml-1 h-3 w-3"/>
              </Button>
               {/* Add One-way and Multi-city buttons here if needed, styled similarly */}
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:border sm:border-input sm:rounded-md sm:focus-within:ring-2 sm:focus-within:ring-primary sm:focus-within:border-primary transition-all gap-2 sm:gap-0">
                <div className="relative w-full">
                  <Input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="From?"
                    className="pl-3 pr-8 py-2.5 text-sm h-12 rounded-md sm:rounded-none sm:rounded-l-md border border-input sm:border-0 focus:ring-0 bg-transparent w-full"
                  />
                  {origin && (
                     <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:bg-muted/50" onClick={() => setOrigin('')}>
                       <X className="h-4 w-4"/>
                     </Button>
                  )}
                </div>
                <div className="text-muted-foreground sm:px-1.5 my-1 sm:my-0 self-center"> {/* Self-center for stacked view */}
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted/50 mx-auto sm:mx-0 block">
                      <ArrowRightLeft className="h-4 w-4"/>
                  </Button>
                </div>
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="To?"
                    className="pl-3 pr-3 py-2.5 text-sm h-12 rounded-md sm:rounded-none sm:rounded-r-md border border-input sm:border-0 focus:ring-0 bg-transparent w-full"
                  />
                  {/* Potentially add a clear button for destination too */}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_auto] md:grid-cols-[repeat(2,minmax(0,1fr))_auto]">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <Popover>
                      <PopoverTrigger asChild>
                          <Button
                          variant="outline"
                          className={cn(
                              "w-full justify-start text-left font-normal h-11 text-xs sm:text-sm rounded-md border-input hover:bg-muted/50",
                              !departureDate && "text-muted-foreground"
                          )}
                          >
                          <CalendarDays className="mr-1.5 h-4 w-4 text-muted-foreground" />
                          {departureDate ? format(departureDate, "ccc d/M") : <span className="text-muted-foreground">Departure</span>}
                          </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                          mode="single"
                          selected={departureDate}
                          onSelect={setDepartureDate}
                          initialFocus
                          />
                      </PopoverContent>
                      </Popover>

                      <Popover>
                      <PopoverTrigger asChild>
                          <Button
                          variant="outline"
                          className={cn(
                              "w-full justify-start text-left font-normal h-11 text-xs sm:text-sm rounded-md border-input hover:bg-muted/50",
                              !returnDate && "text-muted-foreground"
                          )}
                          >
                          {/* Icon removed to match mobile screenshot if date is not set */}
                          {returnDate ? format(returnDate, "ccc d/M") : <span className="text-muted-foreground">Return</span>}
                          </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                          disabled={{ before: departureDate || new Date() }}
                          />
                      </PopoverContent>
                      </Popover>
                  </div>
                
                 <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-11 text-xs sm:text-sm rounded-md border-input hover:bg-muted/50 truncate"
                  >
                      <UsersRound className="mr-1.5 h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">1 adult, Economy</span>
                  </Button>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full sm:w-11 sm:p-0 sm:flex-shrink-0 flex items-center justify-center sm:aspect-square"
                  >
                      <SearchIcon className="h-5 w-5 sm:mx-auto" />
                      <span className="sm:sr-only ml-2 sm:ml-0">Search</span>
                  </Button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:grid grid-cols-[2fr_3fr] gap-2 h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
            <div className="grid grid-rows-2 gap-2">
              {[collageImagesData[0], collageImagesData[2]].map((img) => (
                <div key={img.src + "-left"} className={cn("relative overflow-hidden shadow-sm w-full h-full", img.roundingClass)}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                    data-ai-hint={img.dataAiHint}
                    priority={img.src === collageImagesData[0].src}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-rows-[auto_minmax(0,1fr)_auto] gap-2">
              {[collageImagesData[1], collageImagesData[3], collageImagesData[4]].map((img, index) => (
                <div 
                  key={img.src + "-right-" + index} 
                  className={cn(
                    "relative overflow-hidden shadow-sm w-full", 
                    index === 1 ? "h-full" : "h-auto aspect-[4/3]", 
                    img.roundingClass
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                    data-ai-hint={img.dataAiHint}
                    priority={img.src === collageImagesData[3].src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

