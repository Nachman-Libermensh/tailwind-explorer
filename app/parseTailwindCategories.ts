import fs from "fs/promises";
import path from "path";
import type { TailwindCategories, TailwindClass } from "@/types";

export async function parseTailwindCategories(): Promise<TailwindCategories> {
  try {
    const cssPath = path.join(process.cwd(), "app/tailwind.css");
    const cssContent = await fs.readFile(cssPath, "utf-8");

    const categories: TailwindCategories = {
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
      // הוספת הקטגוריות החסרות
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

    const cssRules = cssContent.match(/\.([^{]+)\{([^}]+)\}/g) || [];

    for (const rule of cssRules) {
      const [, className, styles] = rule.match(/\.([^{]+)\{([^}]+)\}/) || [];
      if (!className) continue;

      const baseClassName = className.split(":").pop()?.trim() || "";
      const variants = className.includes(":")
        ? className.split(":").slice(0, -1)
        : [];

      const classInfo: TailwindClass = {
        name: baseClassName,
        description: getDescription(baseClassName),
        cssRule: styles.trim(),
        example: getExample(baseClassName),
        variants,
      };

      // Layout Categories
      if (baseClassName.match(/^(container|mx-auto)/)) {
        categories.layout.container.push(classInfo);
      } else if (baseClassName.match(/^(flex|grid|block|inline|hidden)/)) {
        categories.layout.display.push(classInfo);
      } else if (
        baseClassName.match(/^(static|fixed|absolute|relative|sticky)/)
      ) {
        categories.layout.position.push(classInfo);
      } else if (baseClassName.match(/^p[trblxy]?-/)) {
        categories.layout.spacing.padding.push(classInfo);
      } else if (baseClassName.match(/^m[trblxy]?-/)) {
        categories.layout.spacing.margin.push(classInfo);
      } else if (baseClassName.match(/^w-/)) {
        categories.layout.sizing.width.push(classInfo);
      } else if (baseClassName.match(/^h-/)) {
        categories.layout.sizing.height.push(classInfo);
      } else if (baseClassName.match(/^grid-/)) {
        categories.layout.grid.push(classInfo);
      } else if (baseClassName.match(/^flex-/)) {
        categories.layout.flex.push(classInfo);
      } else if (baseClassName.match(/^gap-/)) {
        categories.layout.gap.push(classInfo);
      }

      // Typography Categories
      else if (baseClassName.match(/^font-/)) {
        if (baseClassName.match(/^font-(sans|serif|mono)/)) {
          categories.typography.font.family.push(classInfo);
        } else if (
          baseClassName.match(/^font-(thin|light|normal|medium|bold|black)/)
        ) {
          categories.typography.font.weight.push(classInfo);
        }
      } else if (baseClassName.match(/^text-/)) {
        if (
          baseClassName.match(
            /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/
          )
        ) {
          categories.typography.font.size.push(classInfo);
        } else if (baseClassName.match(/^text-(left|center|right|justify)/)) {
          categories.typography.text.align.push(classInfo);
        } else if (
          baseClassName.match(
            /^text-(gray|red|yellow|green|blue|indigo|purple|pink)-/
          )
        ) {
          categories.typography.text.color.push(classInfo);
        }
      }

      // Background Categories
      else if (baseClassName.match(/^bg-/)) {
        if (baseClassName.match(/^bg-gradient-/)) {
          categories.backgrounds.gradient.push(classInfo);
        } else {
          categories.backgrounds.color.push(classInfo);
        }
      }

      // Border Categories
      else if (baseClassName.match(/^border/)) {
        if (baseClassName.match(/^border-[0-9]/)) {
          categories.borders.width.push(classInfo);
        } else if (
          baseClassName.match(/^border-(solid|dashed|dotted|double|none)/)
        ) {
          categories.borders.style.push(classInfo);
        } else if (
          baseClassName.match(
            /^border-(gray|red|yellow|green|blue|indigo|purple|pink)-/
          )
        ) {
          categories.borders.color.push(classInfo);
        }
      } else if (baseClassName.match(/^divide-/)) {
        categories.borders.divide.push(classInfo);
      } else if (baseClassName.match(/^rounded/)) {
        categories.borders.radius.push(classInfo);
      }

      // Effect Categories
      else if (baseClassName.match(/^opacity-/)) {
        categories.effects.opacity.push(classInfo);
      } else if (baseClassName.match(/^shadow-/)) {
        categories.effects.shadow.push(classInfo);
      } else if (baseClassName.match(/^blur-/)) {
        categories.effects.blur.push(classInfo);
      }

      // Transition Categories
      else if (baseClassName.match(/^transition-/)) {
        if (baseClassName.match(/^transition-[a-z]+$/)) {
          categories.transitions.property.push(classInfo);
        } else if (baseClassName.match(/^duration-/)) {
          categories.transitions.duration.push(classInfo);
        }
      }

      // Transform Categories
      else if (baseClassName.match(/^transform/)) {
        if (baseClassName.match(/^scale-/)) {
          categories.transforms.scale.push(classInfo);
        } else if (baseClassName.match(/^rotate-/)) {
          categories.transforms.rotate.push(classInfo);
        } else if (baseClassName.match(/^translate-/)) {
          categories.transforms.translate.push(classInfo);
        }
      }

      // Filter Categories
      else if (baseClassName.match(/^filter/)) {
        if (baseClassName.match(/^blur-/)) {
          categories.filters.blur.push(classInfo);
        } else if (baseClassName.match(/^brightness-/)) {
          categories.filters.brightness.push(classInfo);
        } else if (baseClassName.match(/^contrast-/)) {
          categories.filters.contrast.push(classInfo);
        }
      }

      // Interactivity Categories
      else if (baseClassName.match(/^cursor-/)) {
        categories.interactivity.cursor.push(classInfo);
      } else if (baseClassName.match(/^pointer-/)) {
        categories.interactivity.pointer.push(classInfo);
      } else if (baseClassName.match(/^resize-/)) {
        categories.interactivity.resize.push(classInfo);
      } else if (baseClassName.match(/^select-/)) {
        categories.interactivity.userSelect.push(classInfo);
      }
    }

    return categories;
  } catch (error) {
    console.error("Error parsing Tailwind classes:", error);
    throw error;
  }
}

function getDescription(className: string): string {
  const patterns = {
    "^p": "Sets padding",
    "^m": "Sets margin",
    "^w-": "Sets width",
    "^h-": "Sets height",
    "^text-": "Sets text properties",
    "^bg-": "Sets background",
    "^border": "Sets border properties",
    "^rounded": "Sets border radius",
    "^flex": "Sets flex properties",
    "^grid": "Sets grid properties",
  };

  for (const [pattern, desc] of Object.entries(patterns)) {
    if (new RegExp(pattern).test(className)) {
      return `${desc}: ${className}`;
    }
  }

  return `Tailwind class: ${className}`;
}

function getExample(className: string): string {
  if (className.match(/^(flex|grid)/)) {
    return `<div class="${className}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
  }

  if (className.match(/^(p|m)[trblxy]?-/)) {
    return `<div class="${className} bg-gray-200">Spacing Example</div>`;
  }

  if (className.match(/^(text-|font-)/)) {
    return `<p class="${className}">Sample Text</p>`;
  }

  return `<div class="${className}">Example content</div>`;
}
