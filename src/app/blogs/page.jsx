
import { Suspense } from 'react';
import BlogsPageClientContent from '@/components/pages/blogs/BlogsPageClientContent';
import { Skeleton } from "@/components/ui/skeleton"; // For a slightly better loading state

function BlogsLoadingFallback() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <Skeleton className="h-[50vh] w-full" />

      <div className="bg-card text-card-foreground py-12 md:py-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title Skeleton */}
          <div className="mb-8 text-center">
            <Skeleton className="h-10 w-3/4 mx-auto mb-3" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          
          {/* Filter Sidebar Skeleton */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-4 p-4 mb-8 bg-card border border-border rounded-lg shadow">
            <Skeleton className="h-10 flex-grow sm:flex-grow-0 sm:w-auto sm:min-w-[250px] md:min-w-[300px]" />
            <Skeleton className="h-10 w-full sm:w-[180px]" />
            <Skeleton className="h-9 w-24" />
          </div>
            
          {/* Blog Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-w-16 aspect-h-11 sm:aspect-h-12 lg:aspect-h-13">
                <Skeleton className="h-full w-full rounded-xl" />
              </div>
            ))}
          </div>
          
          {/* Pagination Skeleton (optional, if you want to show it during loading) */}
          <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-12">
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-9 w-32" />
          </div>
        </div>
      </div>
    </>
  );
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsLoadingFallback />}>
      <BlogsPageClientContent />
    </Suspense>
  );
}
