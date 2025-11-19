import { Hero } from "@/components/landing/Hero";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AvailableNow } from "@/components/home/AvailableNow";
import { HotSales } from "@/components/home/HotSales";
import { FeaturedStore } from "@/components/home/FeaturedStore";

export default function Home() {
  return (
    <main>
      <ProductCategories />
      <Hero />
      <AvailableNow />
      <HotSales />
      <FeaturedStore />
    </main>
  );
}
