import { Hero } from "@/components/landing/Hero";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AvailableNow } from "@/components/home/AvailableNow";

export default function Home() {
  return (
    <main>
      <ProductCategories />
      <Hero />
      <AvailableNow />
    </main>
  );
}
