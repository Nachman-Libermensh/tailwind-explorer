import { TailwindCategory } from "@/types";

export const tailwindCategories: TailwindCategory[] = [
  {
    name: "Layout",
    description: "Core layout utilities",
    subCategories: [
      {
        name: "Grid",
        description: "Grid system utilities",
        classes: [
          {
            name: "grid grid-cols-2",
            description: "Two columns grid",
            example: "Two columns layout",
            preview: {
              type: "grid",
              items: 4,
              template: `<div class="p-4 bg-blue-200">Item {n}</div>`,
            },
          },
          {
            name: "grid grid-cols-3",
            description: "Three columns grid",
            example: "Three columns layout",
            preview: {
              type: "grid",
              items: 6,
              template: `<div class="p-4 bg-blue-200">Item {n}</div>`,
            },
          },
          {
            name: "grid grid-cols-4",
            description: "Four columns grid",
            example: "Four columns layout",
            preview: {
              type: "grid",
              items: 8,
              template: `<div class="p-4 bg-blue-200">Item {n}</div>`,
            },
          },
          {
            name: "grid-rows-2",
            description: "Two rows grid",
            example: "Two rows layout",
            preview: {
              type: "grid",
              items: 4,
              template: `<div class="h-12 bg-blue-200 flex items-center justify-center">Item {n}</div>`,
            },
          },
          {
            name: "gap-4",
            description: "Grid gap (1rem)",
            example: "Grid with gap",
            preview: {
              type: "grid",
              items: 4,
              template: `<div class="p-4 bg-blue-200 text-center">Item {n}</div>`,
            },
          },
        ],
      },
      {
        name: "Flexbox",
        description: "Flexible box layout",
        classes: [
          {
            name: "flex justify-between",
            description: "Space between items",
            example: "Spaced items",
            preview: {
              type: "flex",
              items: 3,
              template: `<div class="p-4 bg-green-200">Item {n}</div>`,
            },
          },
          {
            name: "flex justify-center",
            description: "Center items horizontally",
            example: "Centered items",
            preview: {
              type: "flex",
              items: 3,
              template: `<div class="p-4 bg-green-200">Item {n}</div>`,
            },
          },
          {
            name: "flex items-center",
            description: "Center items vertically",
            example: "Vertically centered",
            preview: {
              type: "flex",
              items: 3,
              template: `<div class="p-4 bg-green-200">Item {n}</div>`,
            },
          },
          {
            name: "flex flex-wrap",
            description: "Wrap flex items",
            example: "Wrapped items",
            preview: {
              type: "flex",
              items: 6,
              template: `<div class="w-1/3 p-4 bg-green-200 m-1 text-center">Item {n}</div>`,
            },
          },
          {
            name: "flex flex-col",
            description: "Vertical flex direction",
            example: "Column layout",
            preview: {
              type: "flex",
              items: 3,
              template: `<div class="w-full p-4 bg-green-200 m-1 text-center">Item {n}</div>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Typography",
    description: "Text styling utilities",
    subCategories: [
      {
        name: "Font Size",
        description: "Text size utilities",
        classes: [
          {
            name: "text-sm",
            description: "Small text size (14px)",
            example: "Small text example",
            preview: {
              type: "text",
              template: "The quick brown fox jumps over the lazy dog",
            },
          },
          {
            name: "text-base",
            description: "Base text size (16px)",
            example: "Base text example",
            preview: {
              type: "text",
              template: "The quick brown fox jumps over the lazy dog",
            },
          },
          {
            name: "text-lg",
            description: "Large text size (18px)",
            example: "Large text example",
            preview: {
              type: "text",
              template: "The quick brown fox jumps over the lazy dog",
            },
          },
          {
            name: "text-xl",
            description: "Extra large text (20px)",
            example: "Extra large text",
            preview: {
              type: "text",
              template: "The quick brown fox jumps over the lazy dog",
            },
          },
          {
            name: "text-2xl",
            description: "Extra large text (24px)",
            example: "2XL Text",
            preview: {
              type: "text",
              template: "Large Display Text",
            },
          },
          {
            name: "text-3xl",
            description: "Extra extra large text (30px)",
            example: "3XL Text",
            preview: {
              type: "text",
              template: "Larger Display Text",
            },
          },
        ],
      },
      {
        name: "Font Weight",
        description: "Text weight utilities",
        classes: [
          {
            name: "font-normal",
            description: "Normal font weight",
            example: "Normal weight text",
            preview: {
              type: "text",
              template: "Normal weight example",
            },
          },
          {
            name: "font-medium",
            description: "Medium font weight",
            example: "Medium weight text",
            preview: {
              type: "text",
              template: "Medium weight example",
            },
          },
          {
            name: "font-bold",
            description: "Bold font weight",
            example: "Bold weight text",
            preview: {
              type: "text",
              template: "Bold weight example",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Colors",
    description: "Color utilities",
    subCategories: [
      {
        name: "Background Colors",
        description: "Background color utilities",
        classes: [
          // Slate Colors
          {
            name: "bg-slate-50",
            description: "Lightest slate background",
            example: "Very light slate",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-slate-50"></div>`,
            },
          },
          {
            name: "bg-slate-500",
            description: "Medium slate background",
            example: "Medium slate",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-slate-500"></div>`,
            },
          },
          {
            name: "bg-slate-900",
            description: "Darkest slate background",
            example: "Dark slate",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-slate-900"></div>`,
            },
          },

          // Blue Colors
          {
            name: "bg-blue-50",
            description: "Lightest blue background",
            example: "Very light blue",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-blue-50"></div>`,
            },
          },
          {
            name: "bg-blue-500",
            description: "Medium blue background",
            example: "Medium blue",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-blue-500"></div>`,
            },
          },
          {
            name: "bg-blue-900",
            description: "Darkest blue background",
            example: "Dark blue",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-blue-900"></div>`,
            },
          },

          // Violet Colors
          {
            name: "bg-violet-50",
            description: "Lightest violet background",
            example: "Very light violet",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-violet-50"></div>`,
            },
          },
          {
            name: "bg-violet-500",
            description: "Medium violet background",
            example: "Medium violet",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-violet-500"></div>`,
            },
          },
          {
            name: "bg-violet-900",
            description: "Darkest violet background",
            example: "Dark violet",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-violet-900"></div>`,
            },
          },

          // Rose Colors
          {
            name: "bg-rose-50",
            description: "Lightest rose background",
            example: "Very light rose",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-rose-50"></div>`,
            },
          },
          {
            name: "bg-rose-500",
            description: "Medium rose background",
            example: "Medium rose",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-rose-500"></div>`,
            },
          },
          {
            name: "bg-rose-900",
            description: "Darkest rose background",
            example: "Dark rose",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-rose-900"></div>`,
            },
          },

          // Gradient Combinations
          {
            name: "bg-gradient-to-r from-cyan-500 to-blue-500",
            description: "Cyan to blue gradient",
            example: "Horizontal gradient",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>`,
            },
          },
          {
            name: "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500",
            description: "Triple color diagonal gradient",
            example: "Diagonal gradient",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>`,
            },
          },
          {
            name: "bg-blue-500",
            description: "Blue background",
            example: "Blue background example",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded"></div>`,
            },
          },
          {
            name: "bg-red-500",
            description: "Red background",
            example: "Red background example",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded"></div>`,
            },
          },
          {
            name: "bg-green-500",
            description: "Green background",
            example: "Green background example",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded"></div>`,
            },
          },
          {
            name: "bg-yellow-500",
            description: "Yellow background",
            example: "Yellow background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-yellow-500"></div>`,
            },
          },
          {
            name: "bg-purple-500",
            description: "Purple background",
            example: "Purple background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-purple-500"></div>`,
            },
          },
          {
            name: "bg-pink-500",
            description: "Pink background",
            example: "Pink background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-pink-500"></div>`,
            },
          },
          {
            name: "bg-green-50",
            description: "Lightest green background",
            example: "Very light green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-50"></div>`,
            },
          },
          {
            name: "bg-green-100",
            description: "Very light green background",
            example: "Light green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-100"></div>`,
            },
          },
          {
            name: "bg-green-200",
            description: "Light green background",
            example: "Soft green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-200"></div>`,
            },
          },
          {
            name: "bg-green-300",
            description: "Soft green background",
            example: "Mild green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-300"></div>`,
            },
          },
          {
            name: "bg-green-400",
            description: "Medium green background",
            example: "Medium green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-400"></div>`,
            },
          },
          {
            name: "bg-green-500",
            description: "Standard green background",
            example: "Standard green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-500"></div>`,
            },
          },
          {
            name: "bg-green-600",
            description: "Dark green background",
            example: "Deep green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-600"></div>`,
            },
          },
          {
            name: "bg-green-700",
            description: "Darker green background",
            example: "Rich green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-700"></div>`,
            },
          },
          {
            name: "bg-green-800",
            description: "Very dark green background",
            example: "Deep forest green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-800"></div>`,
            },
          },
          {
            name: "bg-green-900",
            description: "Darkest green background",
            example: "Darkest green",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-green-900"></div>`,
            },
          },
          {
            name: "bg-indigo-500",
            description: "Indigo background",
            example: "Indigo background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-indigo-500"></div>`,
            },
          },
          {
            name: "bg-teal-500",
            description: "Teal background",
            example: "Teal background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-teal-500"></div>`,
            },
          },
          {
            name: "bg-gradient-to-r from-blue-500 to-purple-500",
            description: "Gradient background",
            example: "Gradient example",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg"></div>`,
            },
          },
          {
            name: "bg-opacity-50",
            description: "50% background opacity",
            example: "Semi-transparent background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-blue-500"></div>`,
            },
          },
        ],
      },
      {
        name: "Text Colors",
        description: "Text color utilities",
        classes: [
          {
            name: "text-blue-500",
            description: "Blue text",
            example: "Blue colored text",
            preview: {
              type: "text",
              template: "Sample colored text",
            },
          },
          {
            name: "text-red-500",
            description: "Red text",
            example: "Red colored text",
            preview: {
              type: "text",
              template: "Sample colored text",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Spacing & Sizing",
    description: "Spacing and sizing utilities",
    subCategories: [
      {
        name: "Padding",
        description: "Padding utilities",
        classes: [
          {
            name: "p-4",
            description: "Padding on all sides (1rem)",
            example: "Padding example",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Content with padding</div>`,
            },
          },
          {
            name: "px-4",
            description: "Horizontal padding (1rem)",
            example: "Horizontal padding",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Horizontal padding</div>`,
            },
          },
          {
            name: "py-4",
            description: "Vertical padding (1rem)",
            example: "Vertical padding",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Vertical padding</div>`,
            },
          },
        ],
      },
      {
        name: "Margin",
        description: "Margin utilities",
        classes: [
          {
            name: "m-4",
            description: "Margin on all sides (1rem)",
            example: "Margin example",
            preview: {
              type: "single",
              template: `<div class="bg-green-200">Content with margin</div>`,
            },
          },
          {
            name: "mx-auto",
            description: "Center horizontally",
            example: "Auto horizontal margin",
            preview: {
              type: "single",
              template: `<div class="w-1/2 bg-green-200">Centered content</div>`,
            },
          },
        ],
      },
      {
        name: "Width",
        description: "Width utilities",
        classes: [
          {
            name: "w-full",
            description: "Full width",
            example: "Full width element",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Full width</div>`,
            },
          },
          {
            name: "w-1/2",
            description: "50% width",
            example: "Half width element",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Half width</div>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Borders & Effects",
    description: "Border and visual effect utilities",
    subCategories: [
      {
        name: "Border Width",
        description: "Border width utilities",
        classes: [
          {
            name: "border-2",
            description: "2px border width",
            example: "Medium border",
            preview: {
              type: "single",
              template: `<div class="bg-white border-blue-500">Border example</div>`,
            },
          },
          {
            name: "border-4",
            description: "4px border width",
            example: "Thick border",
            preview: {
              type: "single",
              template: `<div class="bg-white border-blue-500">Thick border</div>`,
            },
          },
        ],
      },
      {
        name: "Border Radius",
        description: "Border radius utilities",
        classes: [
          {
            name: "rounded-lg",
            description: "Large border radius",
            example: "Rounded corners",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Rounded corners</div>`,
            },
          },
          {
            name: "rounded-full",
            description: "Full border radius (circle/pill)",
            example: "Circular shape",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 w-16 h-16">Circle</div>`,
            },
          },
        ],
      },
      {
        name: "Background Colors",
        description: "Background color utilities",
        classes: [
          // ...existing classes...,
          {
            name: "bg-gradient-to-r from-blue-500 to-purple-500",
            description: "Gradient background",
            example: "Gradient example",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg"></div>`,
            },
          },
          {
            name: "bg-opacity-50",
            description: "50% background opacity",
            example: "Semi-transparent background",
            preview: {
              type: "single",
              template: `<div class="w-full h-24 rounded-lg bg-blue-500"></div>`,
            },
          },
        ],
      },

      // עדכון Borders & Effects -> Shadow
      {
        name: "Shadow",
        description: "Box shadow utilities",
        classes: [
          {
            name: "shadow-md",
            description: "Medium shadow",
            example: "Medium shadow effect",
            preview: {
              type: "single",
              template: `<div class="bg-white p-4 rounded-lg">Shadowed box</div>`,
            },
          },
          {
            name: "shadow-lg",
            description: "Large shadow",
            example: "Large shadow effect",
            preview: {
              type: "single",
              template: `<div class="bg-white p-4 rounded-lg">Large shadow box</div>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Transitions & Animations",
    description: "Motion and animation utilities",
    subCategories: [
      {
        name: "Transitions",
        description: "Transition utilities",
        classes: [
          {
            name: "transition",
            description: "Default transition",
            example: "Transition example",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 hover:scale-110">Hover me</div>`,
            },
          },
          {
            name: "duration-300",
            description: "300ms transition duration",
            example: "Medium duration",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 hover:scale-110">Medium transition</div>`,
            },
          },
        ],
      },
      {
        name: "Transforms",
        description: "Transform utilities",
        classes: [
          {
            name: "scale-110",
            description: "Scale up by 10%",
            example: "Scale transform",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Scaled element</div>`,
            },
          },
          {
            name: "rotate-45",
            description: "Rotate 45 degrees",
            example: "Rotation transform",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200">Rotated element</div>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Interactivity",
    description: "Interactive utilities",
    subCategories: [
      {
        name: "Hover",
        description: "Hover state utilities",
        classes: [
          {
            name: "hover:bg-blue-600",
            description: "Change background on hover",
            example: "Hover background",
            preview: {
              type: "single",
              template: `<div class="bg-blue-500">Hover me</div>`,
            },
          },
          {
            name: "hover:scale-105",
            description: "Scale up on hover",
            example: "Hover scale",
            preview: {
              type: "single",
              template: `<div class="bg-blue-500">Hover to scale</div>`,
            },
          },
        ],
      },
      {
        name: "Focus",
        description: "Focus state utilities",
        classes: [
          {
            name: "focus:outline-none focus:ring-2",
            description: "Custom focus ring",
            example: "Focus ring",
            preview: {
              type: "single",
              template: `<button class="bg-blue-500">Focus me</button>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Filters & Backdrop",
    description: "Visual filter utilities",
    subCategories: [
      {
        name: "Blur",
        description: "Blur effect utilities",
        classes: [
          {
            name: "blur-sm",
            description: "Small blur effect",
            example: "Slight blur",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 p-4">
                <img src="/demo-image.jpg" class="w-full h-32 object-cover" />
              </div>`,
            },
          },
          {
            name: "backdrop-blur-md",
            description: "Medium backdrop blur",
            example: "Backdrop blur",
            preview: {
              type: "single",
              template: `<div class="relative">
                <div class="absolute inset-0 bg-white/30">Content</div>
              </div>`,
            },
          },
        ],
      },
      {
        name: "Brightness",
        description: "Brightness filter utilities",
        classes: [
          {
            name: "brightness-110",
            description: "Increase brightness by 10%",
            example: "Brighter element",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 p-4">Brightened content</div>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Position & Z-index",
    description: "Positioning utilities",
    subCategories: [
      {
        name: "Position",
        description: "Position type utilities",
        classes: [
          {
            name: "absolute",
            description: "Position absolute",
            example: "Absolute positioning",
            preview: {
              type: "single",
              template: `<div class="relative h-32 bg-gray-100">
                <div class="absolute top-0 right-0 bg-blue-200 p-2">Absolute</div>
              </div>`,
            },
          },
          {
            name: "fixed",
            description: "Position fixed",
            example: "Fixed positioning",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 p-2">Fixed element</div>`,
            },
          },
        ],
      },
      {
        name: "Z-Index",
        description: "Stack order utilities",
        classes: [
          {
            name: "z-10",
            description: "Z-index of 10",
            example: "Stack order",
            preview: {
              type: "single",
              template: `<div class="relative h-32">
                <div class="absolute inset-0 bg-blue-200">Base</div>
                <div class="absolute inset-0 bg-green-200 translate-x-4 translate-y-4">Stacked</div>
              </div>`,
            },
          },
        ],
      },
    ],
  },
  {
    name: "Container",
    description: "Container query utilities",
    subCategories: [
      {
        name: "Container Type",
        description: "Container type utilities",
        classes: [
          {
            name: "container",
            description: "Responsive container",
            example: "Container width",
            preview: {
              type: "single",
              template: `<div class="bg-blue-200 p-4">Container content</div>`,
            },
          },
        ],
      },
      {
        name: "@container",
        description: "Container query breakpoints",
        classes: [
          {
            name: "@container (min-width: 640px)",
            description: "Container breakpoint at 640px",
            example: "Container query",
            preview: {
              type: "single",
              template: `<div class="@container">
                <div class="@md:bg-blue-200 p-4">Responsive container</div>
              </div>`,
            },
          },
        ],
      },
    ],
  },
];
