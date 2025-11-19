// Product Types
export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: "New" | "Sale" | "Best Seller" | "Limited";
  tags?: string[];
}

// Category Types
export interface Category {
  id: string | number;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  slug: string;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "customer" | "admin";
}

// Cart Types
export interface CartItem {
  productId: string | number;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

// Testimonial Types
export interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
}
