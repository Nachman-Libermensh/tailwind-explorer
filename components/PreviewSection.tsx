import { TailwindClass } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface PreviewSectionProps {
  selectedClass: TailwindClass | null;
}

export function PreviewSection({ selectedClass }: PreviewSectionProps) {
  const getPreviewContent = (className: string) => {
    // Layout classes
    if (className.startsWith("flex")) {
      return Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="p-4 bg-blue-200 dark:bg-blue-800 rounded-md">
          Flex Item {i + 1}
        </div>
      ));
    }
    if (className.startsWith("grid")) {
      return Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="p-4 bg-blue-200 dark:bg-blue-800 rounded-md">
          Grid Item {i + 1}
        </div>
      ));
    }
    // Spacing classes
    if (className.match(/^[mp][trblxy]?-/)) {
      return (
        <div className="bg-blue-200 dark:bg-blue-800 rounded-md border-4 border-blue-400">
          Spacing Demo
        </div>
      );
    }
    // Typography classes
    if (className.startsWith("text-") || className.startsWith("font-")) {
      return <span>The quick brown fox jumps over the lazy dog</span>;
    }
    // Color classes
    if (className.startsWith("bg-")) {
      return <div className="w-full h-16 rounded-md">Color Preview</div>;
    }
    // Border classes
    if (className.startsWith("border") || className.startsWith("rounded")) {
      return (
        <div className="w-full h-16 bg-blue-200 dark:bg-blue-800">
          Border Preview
        </div>
      );
    }
    // Shadow classes
    if (className.startsWith("shadow")) {
      return (
        <div className="w-full h-16 bg-white dark:bg-slate-800">
          Shadow Preview
        </div>
      );
    }
    // Default preview
    return <div>Example Content</div>;
  };

  const renderPreview = () => {
    if (!selectedClass) {
      return (
        <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
          <p className="text-muted-foreground">
            בחר מחלקת Tailwind לתצוגה מקדימה
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* תצוגה מקדימה */}
        <div
          className={`p-4 border rounded-lg bg-slate-50 dark:bg-slate-900 ${selectedClass.name}`}
        >
          {getPreviewContent(selectedClass.name)}
        </div>

        {/* קוד הדוגמה */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="mb-2 font-medium text-sm">דוגמת קוד:</div>
          <code className="text-sm">{selectedClass.example}</code>
        </div>

        {/* CSS המיוצר */}
        <div className="p-4 bg-muted rounded-lg">
          <div className="mb-2 font-medium text-sm">חוק CSS:</div>
          <code className="text-sm">{selectedClass.cssRule}</code>
        </div>

        {/* וריאנטים */}
        {selectedClass.variants && selectedClass.variants.length > 0 && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="mb-2 font-medium text-sm">וריאנטים זמינים:</div>
            <div className="flex flex-wrap gap-2">
              {selectedClass.variants.map((variant) => (
                <span
                  key={variant}
                  className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded text-sm"
                >
                  {variant}:
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{selectedClass?.name || "תצוגה מקדימה"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* תצוגה רגילה */}
            <div>
              <h3 className="text-sm font-medium mb-2">מצב רגיל</h3>
              {renderPreview()}
            </div>
            {/* תצוגת דארק מוד */}
            <div className="dark">
              <h3 className="text-sm font-medium mb-2">מצב כהה</h3>
              {renderPreview()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
