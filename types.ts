export interface TailwindPreview {
  type: "grid" | "flex" | "default" | "spacing" | "color" | "typography";
  items?: number;
  direction?: "row" | "column";
  gap?: string;
  darkMode?: boolean;
}

export interface TailwindClass {
  name: string;
  description: string;
  cssRule: string;
  example: string;
  variants?: string[];
}

export interface TailwindCategories {
  layout: {
    container: TailwindClass[];
    display: TailwindClass[];
    position: TailwindClass[];
    spacing: {
      padding: TailwindClass[];
      margin: TailwindClass[];
    };
    sizing: {
      width: TailwindClass[];
      height: TailwindClass[];
    };
    grid: TailwindClass[];
    flex: TailwindClass[];
    gap: TailwindClass[];
  };
  typography: {
    font: {
      family: TailwindClass[];
      size: TailwindClass[];
      weight: TailwindClass[];
    };
    text: {
      color: TailwindClass[];
      align: TailwindClass[];
      transform: TailwindClass[];
    };
    lists: TailwindClass[];
  };
  borders: {
    width: TailwindClass[];
    color: TailwindClass[];
    radius: TailwindClass[];
    style: TailwindClass[];
    divide: TailwindClass[];
  };
  effects: {
    opacity: TailwindClass[];
    shadow: TailwindClass[];
    blur: TailwindClass[];
  };
  backgrounds: {
    color: TailwindClass[];
    gradient: TailwindClass[];
    opacity: TailwindClass[];
  };
  transitions: {
    property: TailwindClass[];
    duration: TailwindClass[];
  };
  transforms: {
    scale: TailwindClass[];
    rotate: TailwindClass[];
    translate: TailwindClass[];
  };
  filters: {
    blur: TailwindClass[];
    brightness: TailwindClass[];
    contrast: TailwindClass[];
  };
  interactivity: {
    cursor: TailwindClass[];
    pointer: TailwindClass[];
    resize: TailwindClass[];
    userSelect: TailwindClass[];
  };
}
