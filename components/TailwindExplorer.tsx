"use client";

import { useState } from "react";
import { CategorySelector } from "./CategorySelector";
import { PreviewSection } from "./PreviewSection";
import type { TailwindCategories } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";

interface TailwindExplorerProps {
  initialCategories: TailwindCategories;
}
import { TailwindPreview } from "@/types";

export function getClassDescription(className: string): string {
  const patterns = {
    "^p": "מגדיר padding",
    "^m": "מגדיר margin",
    "^w-": "מגדיר רוחב",
    "^h-": "מגדיר גובה",
    "^text-": "מגדיר מאפייני טקסט",
    "^bg-": "מגדיר רקע",
    "^border": "מגדיר מאפייני מסגרת",
    "^rounded": "מגדיר עיגול פינות",
    "^flex": "מגדיר תצוגת flex",
    "^grid": "מגדיר תצוגת grid",
    "^gap": "מגדיר מרווח בין פריטים",
    "^shadow": "מגדיר צל",
    "^opacity": "מגדיר שקיפות",
    "^transform": "מגדיר טרנספורמציה",
    "^transition": "מגדיר אנימציית מעבר",
  };

  for (const [pattern, desc] of Object.entries(patterns)) {
    if (new RegExp(pattern).test(className)) {
      return `${desc}: ${className}`;
    }
  }

  return `מחלקת Tailwind: ${className}`;
}

export function getPreviewType(className: string): TailwindPreview["type"] {
  if (className.match(/^(grid|grid-cols)/)) return "grid";
  if (className.match(/^flex/)) return "flex";
  if (className.match(/^[mp][trblxy]?-/)) return "spacing";
  if (className.match(/^(bg-|text-)/)) return "color";
  if (className.match(/^(text-|font-)/)) return "typography";
  return "default";
}

export function getClassExample(className: string): string {
  const examples = {
    "^flex":
      '<div class="flex gap-4">\n  <div>פריט 1</div>\n  <div>פריט 2</div>\n</div>',
    "^grid":
      '<div class="grid grid-cols-3 gap-4">\n  <div>פריט 1</div>\n  <div>פריט 2</div>\n</div>',
    "^[mp]": '<div class="' + className + '">תוכן</div>',
    "^text-": '<p class="' + className + '">טקסט לדוגמה</p>',
    "^bg-": '<div class="' + className + ' p-4">תוכן עם רקע</div>',
    "^border": '<div class="' + className + ' p-4">תוכן עם מסגרת</div>',
    "^shadow": '<div class="' + className + ' p-4">תוכן עם צל</div>',
  };

  for (const [pattern, example] of Object.entries(examples)) {
    if (new RegExp(pattern).test(className)) {
      return example;
    }
  }

  return `<div class="${className}">תוכן לדוגמה</div>`;
}
export function TailwindExplorer({ initialCategories }: TailwindExplorerProps) {
  // ניהול מצב
  const [selectedCategory, setSelectedCategory] = useState<
    keyof TailwindCategories | null
  >(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const [selectedNestedCategory, setSelectedNestedCategory] = useState<
    string | null
  >(null);
  const [selectedClassName, setSelectedClassName] = useState<string | null>(
    null
  );
  console.log(initialCategories);

  // פונקציות עזר לניווט בקטגוריות
  const getSubCategories = () => {
    if (!selectedCategory) return [];
    return Object.keys(initialCategories[selectedCategory]);
  };

  const getNestedCategories = () => {
    if (!selectedCategory || !selectedSubCategory) return [];
    const subCategory =
      initialCategories[selectedCategory][
        selectedSubCategory as keyof (typeof initialCategories)[typeof selectedCategory]
      ];
    return Array.isArray(subCategory) ? [] : Object.keys(subCategory);
  };

  const getClasses = () => {
    if (!selectedCategory || !selectedSubCategory) return [];
    const category = initialCategories[selectedCategory];
    const subCategory = category[selectedSubCategory as keyof typeof category];

    if (Array.isArray(subCategory)) {
      return subCategory;
    }

    if (selectedNestedCategory && typeof subCategory === "object") {
      return subCategory[selectedNestedCategory] || [];
    }

    return [];
  };

  // רינדור הממשק
  return (
    <div className="flex flex-col gap-6">
      {/* כותרת */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Tailwind CSS Explorer
        </h1>
        <p className="text-muted-foreground text-lg">
          בחר קטגוריה ובדוק את המחלקות השונות
        </p>
      </section>

      {/* תוכן ראשי */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* בורר קטגוריות */}
        <CategorySelector
          categories={initialCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => {
            setSelectedCategory(category as keyof TailwindCategories);
            setSelectedSubCategory(null);
            setSelectedNestedCategory(null);
            setSelectedClassName(null);
          }}
        />

        {/* אזור תצוגה ראשי */}
        <div className="md:col-span-9 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{selectedCategory || "בחר קטגוריה"}</CardTitle>
              <CardDescription>בחר תת-קטגוריה לחקירה</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* תתי קטגוריות */}
              <div className="flex flex-wrap gap-2">
                {getSubCategories().map((subCategory) => (
                  <Button
                    key={subCategory}
                    variant={
                      selectedSubCategory === subCategory
                        ? "default"
                        : "outline"
                    }
                    onClick={() => {
                      setSelectedSubCategory(subCategory);
                      setSelectedNestedCategory(null);
                      setSelectedClassName(null);
                    }}
                  >
                    {subCategory}
                  </Button>
                ))}
              </div>

              {/* קטגוריות מקוננות */}
              {getNestedCategories().length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {getNestedCategories().map((nestedCategory) => (
                    <Button
                      key={nestedCategory}
                      variant={
                        selectedNestedCategory === nestedCategory
                          ? "default"
                          : "outline"
                      }
                      onClick={() => {
                        setSelectedNestedCategory(nestedCategory);
                        setSelectedClassName(null);
                      }}
                    >
                      {nestedCategory}
                    </Button>
                  ))}
                </div>
              )}

              {/* מחלקות */}
              {(selectedSubCategory || selectedNestedCategory) && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {getClasses().map((className) => (
                    <Button
                      key={className}
                      variant={
                        selectedClassName === className ? "default" : "outline"
                      }
                      onClick={() => setSelectedClassName(className)}
                    >
                      {className}
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* תצוגה מקדימה */}
          <PreviewSection
            selectedClass={
              selectedClassName
                ? {
                    name: selectedClassName,
                    description: getClassDescription(selectedClassName),
                    example: getClassExample(selectedClassName),
                    preview: { type: getPreviewType(selectedClassName) },
                  }
                : null
            }
          />
        </div>
      </div>
    </div>
  );
}
