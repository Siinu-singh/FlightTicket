
"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";

export function SortAndViewControls({ totalItems, sortOption, setSortOption }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-card rounded-lg shadow">
      <p className="text-muted-foreground text-sm mb-2 sm:mb-0">
        {totalItems} Destination{totalItems === 1 ? '' : 's'} Found
      </p>
      <div className="flex items-center space-x-2">
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px] h-9 text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            {/* Add more sort options as needed */}
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" className="h-9 w-9" disabled>
          <LayoutGrid className="h-4 w-4 text-primary" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
          <List className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
}
