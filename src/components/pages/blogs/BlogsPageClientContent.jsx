
"use client";
import { useState, useMemo, useEffect } from 'react'; // Added useEffect for initial mount
import { useSearchParams } from 'next/navigation';
import { BlogCard } from "@/components/shared/BlogCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { HeroSection } from "@/components/shared/HeroSection";
import { BlogFilterSidebar } from "@/components/pages/blogs/BlogFilterSidebar";
import { PaginationControls } from "@/components/pages/destinations/PaginationControls";
import allBlogsData from "@/data/blogs.json";
import Image from "next/image";

const ITEMS_PER_PAGE = 8;

const getUniqueCategories = (blogs) => {
  const allKeywords = blogs.flatMap(blog => (blog.dataAiHint || "").toLowerCase().split(" ")).filter(Boolean);
  const uniqueKeywords = [...new Set(allKeywords)];
  return uniqueKeywords.sort();
};


export default function BlogsPageClientContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // State to ensure searchParams is ready before calculating currentPage
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  let currentPage = 1;
  if (isMounted) {
    const pageQuery = searchParams.get('page');
    let parsedPage = parseInt(pageQuery, 10);
    if (!isNaN(parsedPage) && parsedPage >= 1) {
      currentPage = parsedPage;
    }
  }
  
  const uniqueCategories = useMemo(() => getUniqueCategories(allBlogsData), []);

  const filteredBlogs = useMemo(() => {
    let filtered = allBlogsData;

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory) { 
      filtered = filtered.filter(blog => {
        const blogKeywords = (blog.dataAiHint || "").toLowerCase().split(" ").filter(Boolean);
        return blogKeywords.includes(selectedCategory.toLowerCase());
      });
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const overlappingAirplaneImageUrl = "https://w7.pngwing.com/pngs/391/193/png-transparent-airplane-aircraft-belfast-airport-bus-airplane-mode-of-transport-cargo-flight-thumbnail.png";

  if (!isMounted) {
    // Optionally, return a minimal loading state or null until searchParams are ready
    // This helps prevent trying to read searchParams before they are available
    return null; // Or a loading spinner if preferred
  }

  return (
    <>
      <div className="relative">
        <HeroSection
          title="Our Travel Blog"
          paragraph="Get inspired with our latest travel stories, tips, and destination guides."
          imageUrl="https://img.freepik.com/free-photo/airplane_74190-464.jpg?uid=R202168573&ga=GA1.1.1575231207.1748452014&semt=ais_items_boosted&w=740"
          imageAlt="Airplane in the sky"
          imageHint="airplane sky"
          heightClassName="h-[50vh]"
          showButton={false}
          contentAlignment="justify-center text-center"
          textMaxWidth="max-w-3xl"
          overlayOpacity="bg-black/30 dark:bg-black/50"
        />

        <div
          className="absolute w-full flex justify-center 
                     bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] 
                     left-0 right-0 z-20 pointer-events-none"
        >
          <div className="w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Image
              src={overlappingAirplaneImageUrl}
              alt="Airplane flying over content"
              width={360} 
              height={203} 
              className="drop-shadow-2xl"
              data-ai-hint="airplane vehicle png"
            />
          </div>
        </div>
      </div>

      <div className="bg-card text-card-foreground py-12 md:py-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest Articles"
            subtitle="Dive into our fresh content. Filter and sort to find your next read."
            className="mb-8"
          />
          
          <BlogFilterSidebar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            uniqueCategories={uniqueCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onResetFilters={handleResetFilters}
          />
            
          {filteredBlogs.length > 0 ? (
            <>
              {paginatedBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {paginatedBlogs.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">No articles found for the current filters on this page. Try adjusting your filters or changing the page.</p>
              )}
            </>
          ) : (
            <p className="text-center text-muted-foreground py-16">No articles match your current filter criteria. Please try broadening your search.</p>
          )}
            {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  basePath="/blogs" 
                  className="mt-12"
                />
              )}
        </div>
      </div>
    </>
  );
}
