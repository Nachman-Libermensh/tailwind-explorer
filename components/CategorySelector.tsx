import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { TailwindCategories } from "@/types";

interface CategorySelectorProps {
  categories: TailwindCategories;
  selectedCategory: keyof TailwindCategories | null;
  onCategorySelect: (category: string) => void;
}

export function CategorySelector({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategorySelectorProps) {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription>Choose a category to explore</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {Object.keys(categories).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            className="justify-start"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
