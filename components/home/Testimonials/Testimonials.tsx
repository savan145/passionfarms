"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
  highlightedText?: string;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  testimonials?: Testimonial[];
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  cardsContainerClassName?: string;
  cardClassName?: string;
  navigationClassName?: string;
  visibleCards?: number;
  showNavigation?: boolean;
}

const DEFAULT_VISIBLE_CARDS = 3;

export const Testimonials = ({
  title = "Testimonials",
  subtitle = "Results that speaks volume, Read success stories",
  description = "Find out how our happy client are raving about us.",
  testimonials = [
    {
      id: "1",
      name: "Jordan M",
      text: "Every batch feels crafted with care. The freshness and flavor profiles are unlike anything I've tried before — truly premium quality.",
      image: "/images/testimonials/jordan.jpg",
      highlightedText: "premium quality",
    },
    {
      id: "2",
      name: "Samantha T",
      text: "I can always count on consistent quality and smooth experience. The aroma hits first, then that perfect balance follows.",
      image: "/images/testimonials/samantha.jpg",
      highlightedText: "quality and smooth experience",
    },
    {
      id: "3",
      name: "Taylor S",
      text: "From the packaging to the product itself, everything feels top-tier. You can tell this brand actually cares about the details.",
      image: "/images/testimonials/taylor.jpg",
      highlightedText: "top-tier",
    },
    {
      id: "4",
      name: "Olivia R",
      text: "The attention to detail is impeccable. Every aspect of the product is thoughtfully crafted, from the packaging to the flavor itself.",
      image: "/images/testimonials/olivia.jpg",
      highlightedText: "impeccable",
    },
    {
      id: "5",
      name: "Aiden L",
      text: "I'm impressed by the consistency and quality of the product. It exceeds my expectations every time.",
      image: "/images/testimonials/aiden.jpg",
      highlightedText: "consistent and quality",
    },
    {
      id: "6",
      name: "Mason J",
      text: "The product is not only delicious but also made with high-quality ingredients. It's a pleasure to consume.",
      image: "/images/testimonials/mason.jpg",
      highlightedText: "high-quality",
    },
  ],
  sectionClassName = "w-full bg-white py-16 lg:py-24 relative",
  containerClassName = "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]",
  titleClassName = "text-[#1D1D1D] text-xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center",
  subtitleClassName = "text-[#1D1D1D] text-2xl lg:text-[30px] font-semibold leading-9 tracking-[-0.02em] text-center mt-2",
  descriptionClassName = "text-[#878787] text-base lg:text-lg font-semibold leading-9 tracking-[-0.02em] text-center mt-4 mb-12",
  cardsContainerClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12",
  cardClassName = "bg-white rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)] p-6 lg:p-8",
  navigationClassName = "flex items-center justify-center gap-4",
  visibleCards = DEFAULT_VISIBLE_CARDS,
  showNavigation = true,
}: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  }, [testimonials.length, visibleCards]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - visibleCards ? 0 : prev + 1
    );
  }, [testimonials.length, visibleCards]);

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  // Highlight specific text in testimonial
  const renderHighlightedText = (text: string, highlight?: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="text-[#F0BA43] font-semibold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={titleClassName}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {title}
          </p>
          <h2
            className={subtitleClassName}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {subtitle}
          </h2>
          <p
            className={descriptionClassName}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className={cardsContainerClassName}>
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={cardClassName}>
              {/* User Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-[58px] h-[58px] rounded-full overflow-hidden border border-[#E8E8E8]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={58}
                    height={58}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className="text-[#1D1D1D] font-semibold text-base leading-7 tracking-[-0.02em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonial.name}
                  </h3>
                </div>
              </div>

              {/* Testimonial Text */}
              <p
                className="text-[#1D1D1D] text-base leading-7 tracking-[-0.02em] mb-6 line-clamp-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                &quot;
                {renderHighlightedText(
                  testimonial.text,
                  testimonial.highlightedText
                )}
                &quot;
              </p>

              {/* Quote Icon */}
              <div className="flex justify-center">
                <div className="w-[58px] h-[58px] bg-white border border-[#E8E8E8] rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-[#E8E8E8]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showNavigation && (
          <div className={navigationClassName}>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-[60px] h-[60px] rounded-full bg-white border-2 border-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43] transition-colors group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-7 h-7 text-[#343233] stroke-[2.5] group-hover:text-white" />
            </button>

            {/* Dots Indicators */}
            <div className="flex gap-3">
              {Array.from({
                length: testimonials.length - visibleCards + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#F0BA43]" : "bg-[#D1D1D1]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-[60px] h-[60px] rounded-full bg-white border-2 border-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43] transition-colors group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-7 h-7 text-[#343233] stroke-[2.5] group-hover:text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
