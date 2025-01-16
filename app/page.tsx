import { Suspense } from "react";
import { parseTailwindCategories } from "@/app/parseTailwindCategories";
import { TailwindExplorer } from "@/components/TailwindExplorer";

export default async function Home() {
  const categories = await parseTailwindCategories();
  console.log(categories);

  return (
    <main className="container mx-auto p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <TailwindExplorer initialCategories={categories} />
      </Suspense>
    </main>
  );
}
