
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HEADING_KEYWORDS = [
  "Why FlightTicket?",
  "Real time Flight Search and Instant Booking",
  "Domestic and International Locations Included",
  "Budget Travel and Price Comparison",
  "Flexible Booking and Travel Options",
  "24/7 Customer Support for Stress Free Travel",
  "Mobile optimised and easy going readiness",
  "Unique FlightTicket Offers and Seasonal Deals",
  "Book More Than Just Flights",
  "FlightTicket: The Future of Flight on the Internet",
  "Start Your Journey Today with FlightTicket"
];

export function ExpandableContentSection({ rawText, initialWordLimit = 450 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentElements = useMemo(() => {
    if (!rawText) return [];
    const blocks = rawText.split(/\n\s*\n/); 
    
    return blocks.map((block, index) => {
      const trimmedBlock = block.trim();
      if (index === 0 && blocks.length > 1 && !HEADING_KEYWORDS.some(keyword => trimmedBlock.startsWith(keyword))) { 
        return { type: 'h1', content: trimmedBlock };
      }
      if (HEADING_KEYWORDS.some(keyword => trimmedBlock.startsWith(keyword))) {
        return { type: 'h2', content: trimmedBlock };
      }
      if (trimmedBlock.split('\n').every(line => line.trim().startsWith('- ') || line.trim().startsWith('* ') || /^\d+\.\s/.test(line.trim()))) {
        return { 
          type: 'ul', 
          items: trimmedBlock.split('\n').map(item => item.trim().replace(/^[\-\*\d\.]\s*/, '')) 
        };
      }
      return { type: 'p', content: trimmedBlock };
    }).filter(el => el.content || (el.items && el.items.length > 0 && el.items.some(item => item.trim() !== '')));
  }, [rawText]);

  const { displayedElements, isActuallyTruncated } = useMemo(() => {
    if (!initialWordLimit) { // If no limit, show all (isActuallyTruncated will be false)
        return { displayedElements: contentElements, isActuallyTruncated: false };
    }
    if (isExpanded) { // If expanded, show all
        // Check if full content is indeed longer than what would be shown if truncated
        let wordCountFull = 0;
        contentElements.forEach(el => {
            if (el.type === 'ul') el.items.forEach(item => wordCountFull += item.split(/\s+/).filter(Boolean).length);
            else wordCountFull += el.content.split(/\s+/).filter(Boolean).length;
        });
        // Simulate truncation to see if it *would* truncate
        let currentWordCountSimulated = 0;
        let wouldTruncate = false;
        for (const element of contentElements) {
            let elementWordCount = 0;
            if (element.type === 'ul') element.items.forEach(item => elementWordCount += item.split(/\s+/).filter(Boolean).length);
            else elementWordCount = element.content.split(/\s+/).filter(Boolean).length;

            if (currentWordCountSimulated + elementWordCount <= initialWordLimit) {
                currentWordCountSimulated += elementWordCount;
            } else {
                wouldTruncate = true;
                break;
            }
        }
        return { displayedElements: contentElements, isActuallyTruncated: wouldTruncate };
    }


    let currentWordCount = 0;
    const elementsToShow = [];
    let truncated = false;

    for (const element of contentElements) {
      let elementWordCount = 0;
      if (element.type === 'ul') {
        element.items.forEach(item => {
          elementWordCount += item.split(/\s+/).filter(Boolean).length;
        });
      } else {
        elementWordCount = element.content.split(/\s+/).filter(Boolean).length;
      }
      
      if (currentWordCount + elementWordCount <= initialWordLimit) {
        elementsToShow.push(element);
        currentWordCount += elementWordCount;
      } else {
        if (elementsToShow.length === 0 && element.type !== 'ul') { // First element itself is too long
          const words = element.content.split(/\s+/).filter(Boolean);
          elementsToShow.push({ ...element, content: words.slice(0, initialWordLimit).join(' ') + '...' });
          currentWordCount += initialWordLimit;
        }
        truncated = true;
        break;
      }
    }
    
    if (elementsToShow.length === 0 && contentElements.length > 0) {
        const firstElement = contentElements[0];
        if (firstElement.type === 'ul') {
             elementsToShow.push(firstElement);
        } else {
            const words = firstElement.content.split(/\s+/).filter(Boolean);
            const sliceLimit = Math.min(words.length, Math.max(50, initialWordLimit / 2)); // Ensure reasonable minimum
            elementsToShow.push({ ...firstElement, content: words.slice(0, sliceLimit).join(' ') + (words.length > sliceLimit ? '...' : '') });
        }
        // Check if actual full content is longer than this minimal display
        let fullContentWordCount = 0;
        contentElements.forEach(el => {
            if (el.type === 'ul') el.items.forEach(item => fullContentWordCount += item.split(/\s+/).filter(Boolean).length);
            else fullContentWordCount += el.content.split(/\s+/).filter(Boolean).length;
        });
        let shownWordCount = 0;
        elementsToShow.forEach(el => {
             if (el.type === 'ul') el.items.forEach(item => shownWordCount += item.split(/\s+/).filter(Boolean).length);
            else shownWordCount += el.content.replace(/\.\.\.$/, '').split(/\s+/).filter(Boolean).length;
        });
        truncated = fullContentWordCount > shownWordCount;
    }


    return { displayedElements: elementsToShow, isActuallyTruncated: truncated };
  }, [isExpanded, contentElements, initialWordLimit]);

  if (!contentElements.length) return null;

  const renderElement = (element, index) => {
    switch (element.type) {
      case 'h1':
        return <h1 key={index} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">{element.content}</h1>;
      case 'h2':
        return <h2 key={index} className="text-2xl font-semibold text-primary mt-8 mb-4">{element.content}</h2>;
      case 'p':
        return <p key={index} className="text-foreground/90 dark:text-slate-300 leading-relaxed mb-4">{element.content}</p>;
      case 'ul':
        return (
          <ul key={index} className="list-disc pl-6 space-y-1 mb-4 text-foreground/90 dark:text-slate-300">
            {element.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-none mx-auto"> 
          {displayedElements.map(renderElement)}
        </div>
        {isActuallyTruncated && !isExpanded && (
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={() => setIsExpanded(true)} className="text-primary border-primary hover:bg-primary/10 hover:text-primary">
              Read More
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        {isExpanded && isActuallyTruncated && ( 
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => setIsExpanded(false)} className="text-primary border-primary hover:bg-primary/10 hover:text-primary">
              Read Less
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
