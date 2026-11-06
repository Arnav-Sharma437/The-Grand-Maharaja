/**
 * TypeScript Definitions for The Grand Maharaja
 */

// Navigation
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Menu Items & Categories
export type DietaryPreference = "vegetarian" | "vegan" | "jain" | "gluten-free";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subCategory?: string;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  dietary?: DietaryPreference[];
  image?: string;
  spicyLevel?: 1 | 2 | 3;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  items: MenuItem[];
}

// Banquet & Event Services
export interface BanquetHall {
  id: string;
  name: string;
  tagline: string;
  capacity: {
    min: number;
    max: number;
  };
  suitableFor: string[];
  features: string[];
  images: string[];
}

export interface BanquetInquiry {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  guestCount: number;
  hallId?: string;
  specialRequests?: string;
}

// Table Reservation
export interface TableReservation {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  partySize: number;
  seatingPreference?: "indoor" | "private-dining" | "outdoor";
  specialOccasion?: "birthday" | "anniversary" | "business" | "family" | "other";
  notes?: string;
}

// Gallery & Media
export interface GalleryMediaItem {
  id: string;
  title: string;
  category: "ambiance" | "food" | "banquet" | "royal-events";
  imageUrl: string;
  thumbnailUrl?: string;
  alt: string;
  caption?: string;
}

// Testimonials / Reviews
export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  quote: string;
  rating: number; // 1 to 5
  source?: "Google" | "TripAdvisor" | "Direct";
  date?: string;
}

// Standard API Response Structure (Future Backend Compatibility)
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
