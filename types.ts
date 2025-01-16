export interface TailwindCategory {
  name: string;
  description: string;
  subCategories: TailwindSubCategory[];
}

export interface TailwindSubCategory {
  name: string;
  description: string;
  classes: TailwindClass[];
}

export interface TailwindClass {
  name: string;
  description: string;
  example: string;
  preview?: {
    type: "grid" | "flex" | "text" | "single";
    items?: number;
    template?: string;
  };
}
