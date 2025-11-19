/**
 * Types for Testimonials component
 */

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
  highlightedText?: string; // Text to highlight in yellow (#F0BA43)
}

export interface TestimonialsProps {
  // Content
  title?: string;
  subtitle?: string;
  description?: string;
  testimonials?: Testimonial[];

  // Styling
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  cardsContainerClassName?: string;
  cardClassName?: string;
  navigationClassName?: string;

  // Slider behavior
  visibleCards?: number; // How many cards to show (default: 3)
  showNavigation?: boolean; // Show prev/next buttons and dots (default: true)
}
