"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { PreviewSection } from "@/components/PreviewSection";
import { tailwindCategories } from "./tailwind-data";
import type {
  TailwindCategory,
  TailwindSubCategory,
  TailwindClass,
} from "@/types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<TailwindCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<TailwindSubCategory | null>(null);
  const [selectedClass, setSelectedClass] = useState<TailwindClass | null>(
    null
  );

  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Tailwind CSS Explorer
          </h1>
          <p className="text-muted-foreground text-lg">
            Interactive playground to explore and test Tailwind CSS classes
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Categories Sidebar */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Choose a category to explore</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {tailwindCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={
                    selectedCategory?.name === category.name
                      ? "default"
                      : "ghost"
                  }
                  className="justify-start"
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubCategory(null);
                    setSelectedClass(null);
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <div className="md:col-span-9 space-y-6">
            {/* Sub Categories Card */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedCategory?.name || "Select a Category"}
                </CardTitle>
                <CardDescription>
                  {selectedCategory?.description ||
                    "Choose a category from the sidebar to start exploring"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sub Categories */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Sub Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory ? (
                      selectedCategory.subCategories.map((subCategory) => (
                        <Button
                          key={subCategory.name}
                          variant={
                            selectedSubCategory?.name === subCategory.name
                              ? "default"
                              : "outline"
                          }
                          onClick={() => {
                            setSelectedSubCategory(subCategory);
                            setSelectedClass(null);
                          }}
                        >
                          {subCategory.name}
                        </Button>
                      ))
                    ) : (
                      <p className="text-muted-foreground">
                        Select a category to view sub-categories
                      </p>
                    )}
                  </div>
                </div>

                {/* Classes */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Classes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedSubCategory ? (
                      selectedSubCategory.classes.map((cls) => (
                        <Button
                          key={cls.name}
                          variant={
                            selectedClass?.name === cls.name
                              ? "default"
                              : "outline"
                          }
                          onClick={() => setSelectedClass(cls)}
                        >
                          {cls.name}
                        </Button>
                      ))
                    ) : (
                      <p className="text-muted-foreground col-span-full">
                        Select a sub-category to view available classes
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview Card */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>
                  {selectedClass
                    ? selectedClass.description
                    : "Select a class to see it in action"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PreviewSection selectedClass={selectedClass} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
