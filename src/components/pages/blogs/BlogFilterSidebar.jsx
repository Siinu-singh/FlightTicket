
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, Tag, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BlogFilterSidebar({
    searchTerm, setSearchTerm,
    uniqueCategories, selectedCategory, setSelectedCategory, // Changed from selectedCategories
    onResetFilters
}) {

  const handleCategoryChange = (value) => {
    setSelectedCategory(value === "all" ? "" : value);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-4 p-4 mb-8 bg-card border border-border rounded-lg shadow">
      <div className="relative flex-grow sm:flex-grow-0 sm:w-auto sm:min-w-[250px] md:min-w-[300px]">
        <Input
          type="text"
          placeholder="Search Articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-10 text-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      {uniqueCategories.length > 0 && (
        <div className="flex items-center gap-2">
          <Label htmlFor="category-select" className="flex items-center text-sm font-medium text-muted-foreground">
            <Filter className="h-4 w-4 mr-1.5" />
            Category:
          </Label>
          <Select
            value={selectedCategory || "all"}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full sm:w-[180px] h-10 text-sm">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {uniqueCategories.map(category => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      <Button variant="outline" onClick={onResetFilters} className="text-xs h-9 px-3">
        Reset Filters
      </Button>
    </div>
  );
}
