
import { Suspense } from 'react';
import DestinationsPageClient from '@/components/pages/destinations/DestinationsPageClient';
import { Skeleton } from "@/components/ui/skeleton";

function DestinationsLoadingFallback() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <Skeleton className="h-screen w-full" />
      
      <div className="bg-card text-card-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title Skeleton */}
          <div className="mb-8 text-center">
            <Skeleton className="h-10 w-3/4 mx-auto mb-3" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar Skeleton */}
            <div className="md:w-1/4 lg:w-1/5 p-1 md:pr-6">
              <div className="sticky top-20">
                <Skeleton className="h-8 w-3/4 mb-4" /> {/* Filter title */}
                <Skeleton className="h-10 w-full mb-6" /> {/* Search input */}
                <Skeleton className="h-px w-full mb-4" /> {/* Separator */}
                <Skeleton className="h-6 w-1/2 mb-3" /> {/* Section title */}
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-full mb-4" />
                <Skeleton className="h-px w-full mb-4" /> {/* Separator */}
                 <Skeleton className="h-6 w-1/2 mb-3" /> {/* Section title */}
                <Skeleton className="h-10 w-full mb-2" />
                <Skeleton className="h-px w-full mb-4" /> {/* Separator */}
              </div>
            </div>

            <div className="flex-grow md:w-3/4">
              {/* Sort and View Controls Skeleton */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-card rounded-lg shadow">
                <Skeleton className="h-6 w-1/3 mb-2 sm:mb-0" />
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-9 w-[180px]" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                </div>
              </div>
              
              {/* Destination Cards Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="rounded-xl shadow-lg flex flex-col h-full">
                    <Skeleton className="h-56 sm:h-64 md:h-72 w-full rounded-t-xl" />
                    <div className="p-4 flex-grow">
                      <Skeleton className="h-6 w-3/4 mb-1" />
                      <Skeleton className="h-4 w-1/2 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-3" />
                      <Skeleton className="h-5 w-1/3 mt-2" />
                    </div>
                    <div className="p-4 border-t">
                      <Skeleton className="h-9 w-full" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination Skeleton */}
              <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-12">
                <Skeleton className="h-9 w-32" />
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default function DestinationsPage() {
  return (
    <Suspense fallback={<DestinationsLoadingFallback />}>
      <DestinationsPageClient />
    </Suspense>
  );
}
