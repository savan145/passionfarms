"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/common/Card";

type Product = {
    id: number;
    title: string;
    category: string;
    price: number;
    original?: string;
    img: string;
    starImage?: string;
    rating?: number;
};

interface SimilarItemsProps {
    products?: Product[];
    title?: string;
    subtitle?: string;
    gridColumns?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
}

const defaultProducts: Product[] = [
    {
        id: 1,
        title: "Frosted Donuts",
        category: "Bulk Flowers",
        price: 850,
        img: "/images/categories/bulk-flowers.svg",
        starImage: "/images/categories/stars.svg",
        rating: 4.4,
    },
    {
        id: 2,
        title: "Italian Ice",
        category: "Bulk Flowers",
        price: 850,
        img: "/images/categories/Graphes.png",
        starImage: "/images/categories/stars.svg",
        rating: 4.4,
    },
    {
        id: 3,
        title: "Whiteheads",
        category: "Bulk Flowers",
        price: 1400,
        img: "/images/categories/payroll.png",
        starImage: "/images/categories/stars.svg",
        rating: 4.4,
    },
    {
        id: 4,
        title: "Froyo",
        category: "Bulk Flowers",
        price: 1350,
        img: "/images/categories/watermallon.png",
        starImage: "/images/categories/stars.svg",
        rating: 4.4,
    },
];

export const SimilarItems: React.FC<SimilarItemsProps> = ({
    products = defaultProducts,
    title = "Similar items Viewed products",
    gridColumns = { mobile: 2, tablet: 2, desktop: 4 },
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;
    const visibleProducts = products.slice(
        startIndex,
        Math.min(startIndex + itemsPerPage, products.length)
    );
    const handleAddToCart = (productId: number) => {
        console.log("Add to cart", productId);
    };

    const handleToggleFavorite = (productId: number) => {
        console.log("Toggle favorite", productId);
    };
    // Dynamic grid classes based on gridColumns prop
    const getGridClasses = () => {
        const { mobile = 2, tablet = 2, desktop = 4 } = gridColumns;
        const mobileClass = `grid-cols-${mobile}`;
        const tabletClass =
            tablet === 2
                ? "sm:grid-cols-2"
                : tablet === 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-4";
        const desktopClass =
            desktop === 3
                ? "lg:grid-cols-3"
                : desktop === 4
                    ? "xl:grid-cols-4"
                    : "lg:grid-cols-2";
        return `${mobileClass} ${tabletClass} lg:grid-cols-3 ${desktopClass}`;
    };

    return (
        <section className="relative w-full flex lg:flex-row flex-col py-4.5 gap-5">
            <div className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-[35px] w-full flex flex-col gap-3">
                {/* Header */}
                <h2 className="font-semibold leading-9 text-base">
                    {title}
                </h2>
                {/* Grid (no horizontal scroll) */}
                <div className="">
                    <div
                        className={`grid ${getGridClasses()} gap-4 lg:gap-[20px]  relative `}
                    >
                        {visibleProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex justify-center"
                            >
                                <ProductCard
                                    id={product.id.toString()}
                                    image={product.img}
                                    category={product.category}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating || 0}
                                    onAddToCart={() =>
                                        handleAddToCart(product.id)
                                    }
                                    onToggleFavorite={() =>
                                        handleToggleFavorite(product.id)
                                    }
                                />
                            </div>
                        ))}
                        <button className="absolute -left-3 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white sm:inline-flex hidden rounded-full flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10  shadow-md hover:shadow-lg transition-opacity">
                            <ChevronLeft size={22} />
                        </button>

                        <button className="absolute -right-4 sm:inline-flex hidden sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shadow-md hover:shadow-lg transition-opacity">
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimilarItems;