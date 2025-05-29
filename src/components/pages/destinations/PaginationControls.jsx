
"use client";

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation'; // Import the hook

export function PaginationControls({ currentPage, totalPages, basePath, className }) {
  const currentSearchParams = useSearchParams(); // Get current search params via hook

  const createPageURL = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return '#';
    // Preserve existing query parameters by using the hook's result
    const params = new URLSearchParams(currentSearchParams.toString());
    params.set('page', pageNumber.toString());
    return `${basePath}?${params.toString()}`;
  };

  const pageNumbers = [];
  const maxPagesToShow = 4; // Max number of page number buttons (e.g., 1 2 3 4)
  let startPage, endPage;

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor((maxPagesToShow -1) / 2);
    const maxPagesAfterCurrentPage = Math.ceil((maxPagesToShow-1) / 2) -1;

    if (currentPage <= maxPagesBeforeCurrentPage +1) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage +1 ;
       // Ensure endPage doesn't exceed totalPages due to calculation
       if (endPage > totalPages) endPage = totalPages;
       // Ensure startPage doesn't make the range too small if endPage was adjusted
       if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
         startPage = Math.max(1, endPage - maxPagesToShow + 1);
       }
    }
  }
  // Ensure startPage is at least 1
  startPage = Math.max(1, startPage);


  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Pagination" className={cn("flex justify-center items-center space-x-1 sm:space-x-2 mt-12", className)}>
      <Button
        variant="outline"
        size="default"
        asChild
        disabled={currentPage === 1}
        className={cn("h-9 px-3 text-sm", currentPage === 1 && "text-muted-foreground cursor-not-allowed opacity-60")}
      >
        <Link href={createPageURL(currentPage - 1)} aria-label="Go to previous page">
          <ChevronLeft className="h-4 w-4 mr-1 sm:mr-2" />
          Previous Page
        </Link>
      </Button>

      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === currentPage ? 'default' : 'outline'}
          size="icon"
          asChild
          className={cn(
            "h-9 w-9 text-sm",
            pageNumber === currentPage 
              ? "bg-primary text-primary-foreground cursor-default" 
              : "text-foreground hover:bg-accent/10",
          )}
        >
          <Link href={createPageURL(pageNumber)} aria-current={pageNumber === currentPage ? 'page' : undefined}>
            {pageNumber}
          </Link>
        </Button>
      ))}

      <Button
        variant="outline"
        size="default"
        asChild
        disabled={currentPage === totalPages}
        className={cn("h-9 px-3 text-sm", currentPage === totalPages && "text-muted-foreground cursor-not-allowed opacity-60")}
      >
        <Link href={createPageURL(currentPage + 1)} aria-label="Go to next page">
          Next Page
          <ChevronRight className="h-4 w-4 ml-1 sm:ml-2" />
        </Link>
      </Button>
    </nav>
  );
}
