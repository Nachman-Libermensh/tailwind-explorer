import { TailwindClass } from "@/types";
import { Card, CardContent } from "./ui/card";

interface PreviewSectionProps {
  selectedClass: TailwindClass | null;
}

export function PreviewSection({ selectedClass }: PreviewSectionProps) {
  const renderPreview = () => {
    if (!selectedClass) {
      return (
        <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
          <p className="text-muted-foreground">
            Select a Tailwind class to see preview
          </p>
        </div>
      );
    }

    switch (selectedClass.preview?.type) {
      case "grid":
        return (
          <div className="space-y-4">
            <div
              className={`${selectedClass.name} gap-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900`}
            >
              {Array.from({ length: selectedClass.preview.items || 4 }).map(
                (_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-blue-200 dark:bg-blue-800 rounded-md shadow-sm"
                  >
                    Item {i + 1}
                  </div>
                )
              )}
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-sm">
                {`<div class="${selectedClass.name}">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  ...\n</div>`}
              </code>
            </div>
          </div>
        );

      case "flex":
        return (
          <div className="space-y-4">
            <div
              className={`${selectedClass.name} p-4 border rounded-lg bg-slate-50 dark:bg-slate-900`}
            >
              {Array.from({ length: selectedClass.preview.items || 3 }).map(
                (_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-green-200 dark:bg-green-800 rounded-md shadow-sm"
                  >
                    Item {i + 1}
                  </div>
                )
              )}
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-sm">
                {`<div class="${selectedClass.name}">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>`}
              </code>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className={`${selectedClass.name}`}>
                {selectedClass.example}
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-sm">
                {`<div class="${selectedClass.name}">${selectedClass.example}</div>`}
              </code>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium mb-2">Light Mode</h3>
            {renderPreview()}
          </CardContent>
        </Card>
        <Card className="dark">
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium mb-2">Dark Mode</h3>
            {renderPreview()}
          </CardContent>
        </Card>
      </div>
      {selectedClass && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{selectedClass.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
