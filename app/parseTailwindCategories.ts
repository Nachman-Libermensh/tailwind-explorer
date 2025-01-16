/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TailwindCategories, TailwindClass } from "@/types";
import fs from "fs/promises";
import path from "path";

const PATTERNS = {
  layout: {
    container: /^(container|mx-auto)/,
    display: /^(flex|grid|block|inline|hidden)/,
    position: /^(static|fixed|absolute|relative|sticky)/,
    padding: /^p[trblxy]?-/,
    margin: /^m[trblxy]?-/,
    width: /^w-/,
    height: /^h-/,
    grid: /^grid-/,
    flex: /^flex-/,
    gap: /^gap-/,
  },
  typography: {
    font: {
      family: /^font-(sans|serif|mono)/,
      size: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      weight: /^font-(thin|light|normal|medium|bold|black)/,
    },
    text: {
      color: /^text-(gray|red|yellow|green|blue|indigo|purple|pink)-/,
      align: /^text-(left|center|right|justify)/,
      transform: /^(uppercase|lowercase|capitalize)/,
    },
  },
  backgrounds: {
    color: /^bg-(gray|red|yellow|green|blue|indigo|purple|pink)-/,
    gradient: /^bg-gradient-/,
    opacity: /^bg-opacity-/,
  },
  borders: {
    width: /^border-[0-9]/,
    color: /^border-(gray|red|yellow|green|blue|indigo|purple|pink)-/,
    radius: /^rounded/,
    style: /^border-(solid|dashed|dotted|double|none)/,
    divide: /^divide-/,
  },
  effects: {
    opacity: /^opacity-/,
    shadow: /^shadow-/,
    blur: /^blur-/,
  },
  transitions: {
    property: /^transition-[a-z]+$/,
    duration: /^duration-/,
  },
  transforms: {
    scale: /^scale-/,
    rotate: /^rotate-/,
    translate: /^translate-/,
  },
  filters: {
    blur: /^filter-blur-/,
    brightness: /^brightness-/,
    contrast: /^contrast-/,
  },
  interactivity: {
    cursor: /^cursor-/,
    pointer: /^pointer-/,
    resize: /^resize-/,
    userSelect: /^select-/,
  },
};

function classifyTailwindClass(
  className: string
): { category: string; subcategory: string } | null {
  for (const [category, categoryPatterns] of Object.entries(PATTERNS)) {
    for (const [subcategory, pattern] of Object.entries(categoryPatterns)) {
      if (pattern instanceof RegExp && pattern.test(className)) {
        return { category, subcategory };
      } else if (typeof pattern === "object" && !Array.isArray(pattern)) {
        for (const [subsubcategory, subpattern] of Object.entries(
          pattern as Record<string, RegExp>
        )) {
          if (subpattern.test(className)) {
            return {
              category: `${category}.${subcategory}`,
              subcategory: subsubcategory,
            };
          }
        }
      }
    }
  }
  return null;
}

function getDescription(className: string): string {
  const descriptionPatterns = {
    "^p[trblxy]?-": "Sets padding",
    "^m[trblxy]?-": "Sets margin",
    "^w-": "Sets width",
    "^h-": "Sets height",
    "^text-": "Sets text properties",
    "^bg-": "Sets background properties",
    "^border": "Sets border properties",
    "^rounded": "Sets border radius",
    "^flex": "Sets flex container properties",
    "^grid": "Sets grid container properties",
    "^col-": "Sets grid column properties",
    "^row-": "Sets grid row properties",
    "^gap-": "Sets gap between elements",
    "^space-": "Sets space between children",
    "^font-": "Sets font properties",
    "^opacity-": "Sets opacity level",
    "^shadow-": "Sets box shadow",
    "^transition-": "Sets transition properties",
    "^transform-": "Sets transform properties",
    "^scale-": "Sets scaling transform",
    "^rotate-": "Sets rotation transform",
    "^translate-": "Sets translation transform",
    "^skew-": "Sets skew transform",
    "^cursor-": "Sets cursor type",
    "^select-": "Sets text selection behavior",
    "^resize-": "Sets resize behavior",
    "^z-": "Sets z-index stacking order",
    "^overflow-": "Sets overflow behavior",
    "^object-": "Sets object-fit and position",
    "^filter-": "Sets filter effects",
    "^backdrop-": "Sets backdrop filter effects",
    "^outline-": "Sets outline properties",
    "^ring-": "Sets ring/focus properties",
    "^animate-": "Sets animation properties",
    "^gradient-": "Sets gradient background",
  };

  for (const [pattern, description] of Object.entries(descriptionPatterns)) {
    if (new RegExp(pattern).test(className)) {
      return `${description}: ${className}`;
    }
  }

  return `Tailwind utility class: ${className}`;
}
function getExample(className: string): string {
  const examples = {
    layout: (cls: string) => `<div class="${cls}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,

    spacing: (cls: string) => `<div class="${cls} bg-gray-200">
  <p>Spacing Example Content</p>
</div>`,

    typography: (cls: string) => `<p class="${cls}">
  This is a sample text to demonstrate typography
</p>`,

    background: (cls: string) => `<div class="${cls} w-full h-24">
  Background Example
</div>`,

    border: (cls: string) => `<div class="${cls} p-4">
  Border Example Content
</div>`,

    effect: (cls: string) => `<div class="${cls} bg-blue-500 p-4">
  Effect Example
</div>`,

    transform: (cls: string) => `<div class="${cls} bg-green-500 p-4">
  Transform Example
</div>`,

    interaction: (cls: string) => `<button class="${cls} px-4 py-2 bg-blue-500">
  Interactive Element
</button>`,

    default: (cls: string) => `<div class="${cls}">
  Default Example Content
</div>`,
  };

  // Pattern matching for different categories
  if (className.match(/^(flex|grid|cols-|rows-)/)) {
    return examples.layout(className);
  }
  if (className.match(/^(p|m)[trblxy]?-|^gap-|^space-/)) {
    return examples.spacing(className);
  }
  if (className.match(/^(text-|font-|leading-|tracking-|whitespace-)/)) {
    return examples.typography(className);
  }
  if (className.match(/^bg-|^gradient-/)) {
    return examples.background(className);
  }
  if (className.match(/^border|^rounded|^divide/)) {
    return examples.border(className);
  }
  if (className.match(/^(shadow-|opacity-|blur-|filter-)/)) {
    return examples.effect(className);
  }
  if (className.match(/^(scale-|rotate-|translate-|skew-|transform)/)) {
    return examples.transform(className);
  }
  if (className.match(/^(cursor-|hover:|focus:|active:|disabled:)/)) {
    return examples.interaction(className);
  }

  return examples.default(className);
}
function initializeCategories(): TailwindCategories {
  return {
    layout: {
      container: [],
      display: [],
      position: [],
      spacing: {
        padding: [],
        margin: [],
      },
      sizing: {
        width: [],
        height: [],
      },
      grid: [],
      flex: [],
      gap: [],
    },
    typography: {
      font: {
        family: [],
        size: [],
        weight: [],
      },
      text: {
        color: [],
        align: [],
        transform: [],
      },
      lists: [],
    },
    backgrounds: {
      color: [],
      gradient: [],
      opacity: [],
    },
    borders: {
      width: [],
      color: [],
      radius: [],
      style: [],
      divide: [],
    },
    effects: {
      opacity: [],
      shadow: [],
      blur: [],
    },
    transitions: {
      property: [],
      duration: [],
    },
    transforms: {
      scale: [],
      rotate: [],
      translate: [],
    },
    filters: {
      blur: [],
      brightness: [],
      contrast: [],
    },
    interactivity: {
      cursor: [],
      pointer: [],
      resize: [],
      userSelect: [],
    },
  };
}
function parseClassName(className: string): {
  baseClassName: string;
  variants: string[];
} {
  // Handle empty or invalid input
  if (!className || typeof className !== "string") {
    return {
      baseClassName: "",
      variants: [],
    };
  }

  // Split on ':' to separate variants from base class
  const parts = className.trim().split(":");

  // Last part is the base class name
  const baseClassName = parts.pop() || "";

  // All other parts are variants
  const variants = parts.filter(Boolean);

  // Validate base class name
  if (!baseClassName.match(/^[a-zA-Z0-9-]+$/)) {
    console.warn(`Invalid base class name: ${baseClassName}`);
  }

  return {
    baseClassName,
    variants,
  };
}
function createClassInfo(
  baseClassName: string,
  cssRule: string,
  variants: string[]
): TailwindClass {
  return {
    name: baseClassName,
    description: getDescription(baseClassName),
    cssRule,
    example: getExample(baseClassName),
    variants,
  };
}
function matchCategories(className: string): Array<{
  category: string;
  subcategory: string;
  path: string[];
}> {
  const matches = [];

  // Layout patterns - comprehensive
  if (className.match(/^(container|mx-auto|max-w-|min-w-)/)) {
    matches.push({
      category: "layout",
      subcategory: "container",
      path: ["layout", "container"],
    });
  }

  if (
    className.match(
      /^(flex|grid|block|inline|hidden|table|flow-root|columns-|float-|clear-|object-|overflow-)/
    )
  ) {
    matches.push({
      category: "layout",
      subcategory: "display",
      path: ["layout", "display"],
    });
  }

  if (
    className.match(
      /^(static|fixed|absolute|relative|sticky|inset-|top-|right-|bottom-|left-|z-)/
    )
  ) {
    matches.push({
      category: "layout",
      subcategory: "position",
      path: ["layout", "position"],
    });
  }

  // Spacing and Sizing - expanded
  if (className.match(/^p[txbrlxy]?-[0-9\[\]]/)) {
    matches.push({
      category: "layout",
      subcategory: "spacing.padding",
      path: ["layout", "spacing", "padding"],
    });
  }

  if (className.match(/^m[txbrlxy]?-[0-9\[\]]/)) {
    matches.push({
      category: "layout",
      subcategory: "spacing.margin",
      path: ["layout", "spacing", "margin"],
    });
  }

  if (className.match(/^(w-|min-w-|max-w-|width-)/)) {
    matches.push({
      category: "layout",
      subcategory: "sizing.width",
      path: ["layout", "sizing", "width"],
    });
  }

  if (className.match(/^(h-|min-h-|max-h-|height-)/)) {
    matches.push({
      category: "layout",
      subcategory: "sizing.height",
      path: ["layout", "sizing", "height"],
    });
  }

  // Typography - comprehensive
  if (className.match(/^font-(sans|serif|mono|family|display|body)/)) {
    matches.push({
      category: "typography",
      subcategory: "font.family",
      path: ["typography", "font", "family"],
    });
  }

  if (
    className.match(
      /^(text-|tracking-|leading-|indent-|whitespace-|break-|hyphens-)/
    )
  ) {
    matches.push({
      category: "typography",
      subcategory: "text",
      path: ["typography", "text"],
    });
  }

  // Backgrounds - enhanced
  if (
    className.match(
      /^bg-(transparent|current|black|white|gray|red|yellow|green|blue|indigo|purple|pink|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)/
    )
  ) {
    matches.push({
      category: "backgrounds",
      subcategory: "color",
      path: ["backgrounds", "color"],
    });
  }

  if (className.match(/^(bg-gradient-|from-|via-|to-)/)) {
    matches.push({
      category: "backgrounds",
      subcategory: "gradient",
      path: ["backgrounds", "gradient"],
    });
  }

  // Borders - comprehensive
  if (className.match(/^border(-[0-9]|$|-x-|-y-|-t-|-r-|-b-|-l-)/)) {
    matches.push({
      category: "borders",
      subcategory: "width",
      path: ["borders", "width"],
    });
  }

  if (
    className.match(
      /^(rounded|border-radius-|rounded-t-|rounded-r-|rounded-b-|rounded-l-|rounded-tl-|rounded-tr-|rounded-br-|rounded-bl-)/
    )
  ) {
    matches.push({
      category: "borders",
      subcategory: "radius",
      path: ["borders", "radius"],
    });
  }

  // Effects and Filters - enhanced
  if (className.match(/^(shadow-|drop-shadow-)/)) {
    matches.push({
      category: "effects",
      subcategory: "shadow",
      path: ["effects", "shadow"],
    });
  }

  if (
    className.match(
      /^(filter-|backdrop-filter-|blur-|brightness-|contrast-|grayscale-|hue-rotate-|invert-|saturate-|sepia-)/
    )
  ) {
    matches.push({
      category: "filters",
      subcategory: className.split("-")[0],
      path: ["filters", className.split("-")[0]],
    });
  }

  // Transforms and Transitions - expanded
  if (
    className.match(/^(transform-|scale-|rotate-|translate-|skew-|origin-)/)
  ) {
    matches.push({
      category: "transforms",
      subcategory: className.split("-")[0],
      path: ["transforms", className.split("-")[0]],
    });
  }

  if (className.match(/^(transition-|duration-|ease-|delay-)/)) {
    matches.push({
      category: "transitions",
      subcategory: className.split("-")[0],
      path: ["transitions", className.split("-")[0]],
    });
  }

  return matches;
}
function assignToCategory(
  categories: TailwindCategories,
  path: string[],
  classInfo: TailwindClass
): void {
  let current: any = categories;

  // Traverse the path except for the last element
  for (const key of path.slice(0, -1)) {
    if (!(key in current)) {
      throw new Error(`Invalid category path: ${path.join(".")}`);
    }
    current = current[key];
  }

  // Get the final key (where we'll store the class)
  const finalKey = path[path.length - 1];

  // Ensure the target is an array before pushing
  if (Array.isArray(current[finalKey])) {
    current[finalKey].push(classInfo);
  } else {
    throw new Error(`Cannot assign to non-array category: ${path.join(".")}`);
  }
}
function deduplicateCategories(categories: TailwindCategories): void {
  const isEqual = (a: TailwindClass, b: TailwindClass): boolean => {
    return (
      a.name === b.name &&
      a.cssRule === b.cssRule &&
      JSON.stringify(a.variants?.sort()) === JSON.stringify(b.variants?.sort())
    );
  };

  const dedup = (arr: TailwindClass[]): TailwindClass[] => {
    return arr.filter((item, index) => {
      return arr.findIndex((compare) => isEqual(item, compare)) === index;
    });
  };

  const dedupObject = (obj: Record<string, unknown>): void => {
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        obj[key] = dedup(value);
      } else if (value && typeof value === "object") {
        dedupObject(value as Record<string, unknown>);
      }
    }
  };

  dedupObject(categories);
}
function validateCategories(categories: TailwindCategories): void {
  const validateTailwindClass = (item: any): boolean => {
    return (
      typeof item === "object" &&
      typeof item.name === "string" &&
      typeof item.description === "string" &&
      typeof item.cssRule === "string" &&
      typeof item.example === "string" &&
      Array.isArray(item.variants)
    );
  };

  const validate = (obj: any): boolean => {
    return Object.values(obj).every((value) => {
      if (Array.isArray(value)) {
        return value.every((item) => validateTailwindClass(item));
      }
      if (typeof value === "object") {
        return validate(value);
      }
      return true;
    });
  };

  if (!validate(categories)) {
    throw new Error("Invalid category structure detected");
  }
}
export async function parseTailwindCategories(): Promise<TailwindCategories> {
  try {
    // Read CSS file
    const cssPath = path.join(process.cwd(), "app/tailwind.css");
    const cssContent = await fs.readFile(cssPath, "utf-8");

    // Initialize categories structure
    const categories = initializeCategories();

    // Extract CSS rules using regex
    const cssRules = cssContent.match(/\.([^{]+)\{([^}]+)\}/g) || [];

    // Process each rule
    for (const rule of cssRules) {
      const [, className, styles] = rule.match(/\.([^{]+)\{([^}]+)\}/) || [];
      if (!className) continue;

      // Parse className and get variants
      const { baseClassName, variants } = parseClassName(className);

      // Create class info object
      const classInfo = createClassInfo(baseClassName, styles.trim(), variants);

      // Match categories and assign
      const categoryMatches = matchCategories(baseClassName);
      for (const { path } of categoryMatches) {
        try {
          assignToCategory(categories, path, classInfo);
        } catch (error) {
          console.warn(
            `Failed to assign class ${baseClassName}: ${
              error instanceof Error ? error.message : String(error)
            }`
          );
        }
      }
    }

    // Post-processing
    deduplicateCategories(categories);
    validateCategories(categories);

    return categories;
  } catch (error) {
    console.error("Error parsing Tailwind categories:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse Tailwind categories: ${errorMessage}`);
  }
}
