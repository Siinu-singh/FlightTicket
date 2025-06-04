
"use client";

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation'; 
import { DestinationCard } from "@/components/shared/DestinationCard";
import { PaginationControls } from "@/components/pages/destinations/PaginationControls";
import { FilterSidebar } from "@/components/pages/destinations/FilterSidebar";
import { SortAndViewControls } from "@/components/pages/destinations/SortAndViewControls";
import allDestinationsData from "@/data/destinations.json";
import { SectionTitle } from '@/components/shared/SectionTitle';
import { HeroSection } from '@/components/shared/HeroSection';

const ITEMS_PER_PAGE = 9;

const getUniqueTypes = (destinations) => {
  const allTypes = destinations.flatMap(dest => dest.type || []);
  return [...new Set(allTypes)];
};

export default function DestinationsPage() { 
  // console.log("DEBUG: Rendering DestinationsPage (with filter sidebar and advanced features)"); 

  const nextSearchParams = useSearchParams(); 

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOption, setSortOption] = useState('name-asc'); 
  
  const pageQuery = nextSearchParams.get('page'); 
  let currentPage = parseInt(pageQuery, 10);
  if (isNaN(currentPage) || currentPage < 1) {
    currentPage = 1;
  }
  
  const uniqueTypes = useMemo(() => getUniqueTypes(allDestinationsData), []);

  const filteredDestinations = useMemo(() => {
    let filtered = allDestinationsData;

    if (searchTerm) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter(dest =>
        dest.type && selectedTypes.every(st => dest.type.includes(st))
      );
    }
    
    if (priceRange.min) {
        filtered = filtered.filter(dest => dest.pricePerNight && dest.pricePerNight >= parseFloat(priceRange.min));
    }
    if (priceRange.max) {
        filtered = filtered.filter(dest => dest.pricePerNight && dest.pricePerNight <= parseFloat(priceRange.max));
    }

    if (selectedRating > 0) {
        filtered = filtered.filter(dest => dest.averageRating && dest.averageRating >= selectedRating);
    }

    return filtered;
  }, [searchTerm, selectedTypes, priceRange, selectedRating]);

  const sortedDestinations = useMemo(() => {
    let sorted = [...filteredDestinations];
    switch (sortOption) {
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        sorted.sort((a,b) => (a.pricePerNight || Infinity) - (b.pricePerNight || Infinity));
        break;
      case 'price-desc':
        sorted.sort((a,b) => (b.pricePerNight || 0) - (a.pricePerNight || 0));
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredDestinations, sortOption]);
  
  const totalPages = Math.ceil(sortedDestinations.length / ITEMS_PER_PAGE);

  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  const paginatedDestinations = sortedDestinations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
    setPriceRange({ min: '', max: '' });
    setSelectedRating(0);
  };

  return (
    <>
      <HeroSection
        superTitle="Find Your Next Adventure"
        title="Explore Our Destinations"
        paragraph="Find your perfect getaway from a wide range of breathtaking locations."
        imageUrl="https://img.freepik.com/premium-photo/png-airplane-aircraft-airliner-outdoors_53876-750979.jpg?uid=R202168573&ga=GA1.1.1575231207.1748452014&semt=ais_items_boosted&w=740" 
        imageAlt="Airplane outdoors on tarmac"
        imageHint="airplane outdoors tarmac"
        heightClassName="h-screen" 
        showButton={true}
        buttonText="Discover Destinations"
        buttonLink="#all-destinations"
        contentAlignment="justify-center text-center"
        textMaxWidth="max-w-3xl"
        overlayOpacity="bg-black/40 dark:bg-black/60"
      />
      <div id="all-destinations" className="bg-card text-card-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="All Destinations"
            subtitle="Discover a world of adventure. Filter and sort to find your next journey."
            className="mb-8"
          />
          <div className="flex flex-col md:flex-row gap-8">
            <FilterSidebar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              uniqueTypes={uniqueTypes}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              onResetFilters={handleResetFilters}
            />
            <div className="flex-grow md:w-3/4">
              <SortAndViewControls
                totalItems={sortedDestinations.length}
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
              {sortedDestinations.length > 0 ? (
                <>
                  {paginatedDestinations.length > 0 ? (
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {paginatedDestinations.map((destination) => (
                        <DestinationCard key={destination.id} destination={destination} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">No destinations found for the current filters on this page. Try adjusting your filters or changing the page.</p>
                  )}
                </>
              ) : (
                <p className="text-center text-muted-foreground py-16">No destinations match your current filter criteria. Please try broadening your search.</p>
              )}
               {totalPages > 1 && (
                    <PaginationControls
                      currentPage={currentPage}
                      totalPages={totalPages}
                      basePath="/destinations"
                      className="mt-12"
                    />
                  )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
