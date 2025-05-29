
"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Search,SlidersHorizontal, Star, PlusCircle, ChevronDown, ChevronUp } from "lucide-react";

const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-semibold text-foreground mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && <div className="space-y-3 pl-1">{children}</div>}
      <Separator className="mt-4" />
    </div>
  );
};


export function FilterSidebar({ 
    searchTerm, setSearchTerm, 
    uniqueTypes, selectedTypes, setSelectedTypes,
    priceRange, setPriceRange,
    selectedRating, setSelectedRating,
    onResetFilters 
}) {
  const [showAllTypes, setShowAllTypes] = useState(false);
  const initialTypesToShow = 3;

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(prev => prev === rating ? 0 : rating);
  };

  const propertyTypesToDisplay = showAllTypes ? uniqueTypes : uniqueTypes.slice(0, initialTypesToShow);

  // Placeholder data for amenities and languages
  const amenities = ["Accepts Credit Cards", "Car Parking", "Free Coupons", "Reservations", "Restaurant"];
  const languages = ["English", "Spanish", "French", "Turkish"];
  const reviewLevels = [5, 4, 3, 2, 1];


  return (
    <aside className="md:w-1/4 lg:w-1/5 p-1 md:pr-6">
      <div className="sticky top-20"> {/* Adjust top value based on navbar height */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center">
            <SlidersHorizontal className="h-5 w-5 mr-2 text-primary" />
            Filters
          </h2>
          <Button variant="link" onClick={onResetFilters} className="text-sm p-0 h-auto text-primary hover:text-primary/80">
            Reset All
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Input 
            type="text" 
            placeholder="Search Destination..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <Separator />

        <FilterSection title="Destination Type" defaultOpen={true}>
          {propertyTypesToDisplay.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox 
                id={`type-${type}`} 
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => handleTypeChange(type)}
              />
              <Label htmlFor={`type-${type}`} className="font-normal text-muted-foreground">{type}</Label>
            </div>
          ))}
          {uniqueTypes.length > initialTypesToShow && (
            <Button variant="link" onClick={() => setShowAllTypes(!showAllTypes)} className="text-sm p-0 h-auto mt-2 text-primary hover:text-primary/80">
              {showAllTypes ? "See Less" : `See More (${uniqueTypes.length - initialTypesToShow})`}
            </Button>
          )}
        </FilterSection>

        <FilterSection title="Price Range">
          <div className="flex space-x-2">
            <Input 
              type="number" 
              placeholder="Min" 
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))} 
            />
            <Input 
              type="number" 
              placeholder="Max" 
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
            />
          </div>
        </FilterSection>

        <FilterSection title="Top Reviews">
            {reviewLevels.map(level => (
                <div key={`rating-${level}`} className="flex items-center space-x-2">
                    <Checkbox 
                        id={`rating-${level}`}
                        checked={selectedRating === level}
                        onCheckedChange={() => handleRatingChange(level)}
                    />
                    <Label htmlFor={`rating-${level}`} className="font-normal text-muted-foreground flex items-center">
                        {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < level ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted-foreground'}`} />
                        ))}
                    </Label>
                </div>
            ))}
        </FilterSection>

        <FilterSection title="Amenities">
          {amenities.slice(0,3).map(amenity => ( // Show limited for placeholder
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox id={`amenity-${amenity}`} disabled />
              <Label htmlFor={`amenity-${amenity}`} className="font-normal text-muted-foreground">{amenity}</Label>
            </div>
          ))}
           <Button variant="link" disabled className="text-sm p-0 h-auto mt-2 text-primary hover:text-primary/80 opacity-50 cursor-not-allowed">
              See More
            </Button>
        </FilterSection>

        <FilterSection title="Language">
          {languages.slice(0,3).map(lang => ( // Show limited for placeholder
            <div key={lang} className="flex items-center space-x-2">
              <Checkbox id={`lang-${lang}`} disabled />
              <Label htmlFor={`lang-${lang}`} className="font-normal text-muted-foreground">{lang}</Label>
            </div>
          ))}
           <Button variant="link" disabled className="text-sm p-0 h-auto mt-2 text-primary hover:text-primary/80 opacity-50 cursor-not-allowed">
              See More
            </Button>
        </FilterSection>
      </div>
    </aside>
  );
}
