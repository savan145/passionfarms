import { Hero } from "@/components/landing/Hero";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AvailableNow } from "@/components/home/AvailableNow";
import { HotSales } from "@/components/home/HotSales";
import { FeaturedStore } from "@/components/home/FeaturedStore";
import { FeaturedDeals } from "@/components/home/FeaturedDeals";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { TopBrands } from "@/components/home/TopBrands";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { FAQ } from "@/components";

export default function Home() {
  // Sample product data
  const sampleProducts = [
    {
      id: "1",
      image: "/images/products/placeholder.svg",
      category: "Bulk Flowers",
      title: "Cherry Garcia",
      price: 1075.0,
      rating: 4.4,
    },
    {
      id: "2",
      image: "/images/products/placeholder.svg",
      category: "Disposables",
      title: "2g Dual Chamber Plume dispose (Authentic)",
      price: 1075.0,
      rating: 4.4,
      featured: true,
    },
    {
      id: "3",
      image: "/images/products/placeholder.svg",
      category: "Prerolls",
      title: "Sherbinski live resin joints",
      price: 200.0,
      rating: 4.4,
    },
    {
      id: "4",
      image: "/images/products/placeholder.svg",
      category: "Edibles",
      title: "UGI Cannabis Infused Gummies",
      price: 200.0,
      rating: 4.4,
      isFavorite: true,
    },
    {
      id: "5",
      image: "/images/products/placeholder.svg",
      category: "Bulk Flowers",
      title: "Cherry Garcia",
      price: 1075.0,
      rating: 4.4,
    },
    {
      id: "6",
      image: "/images/products/placeholder.svg",
      category: "Disposables",
      title: "2g Dual Chamber Plume dispose (Authentic)",
      price: 1075.0,
      rating: 4.4,
    },
    {
      id: "7",
      image: "/images/products/placeholder.svg",
      category: "Prerolls",
      title: "Sherbinski live resin joints",
      price: 200.0,
      rating: 4.4,
    },
    {
      id: "8",
      image: "/images/products/placeholder.svg",
      category: "Edibles",
      title: "UGI Cannabis Infused Gummies",
      price: 400.0,
      rating: 4.4,
    },
  ];

  return (
    <main>
      <ProductCategories />
      <Hero />
      <AvailableNow products={sampleProducts} title="Available Now" />
      <HotSales />
      <FeaturedStore />
      <FeaturedDeals />
      <AvailableNow
        products={sampleProducts}
        showTabs={false}
        title="Best selling products this week"
      />
      <SpecialOffers />
      <TopBrands />
      <Testimonials />
      <FAQ />
    </main>
  );
}
