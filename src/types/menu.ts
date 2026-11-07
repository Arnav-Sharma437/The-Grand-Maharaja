/**
 * The Grand Maharaja - Menu TypeScript Definitions
 */

export interface MenuItem {
  name: string;
  price: string;
  prices?: string[];
  description?: string;
  isSignature?: boolean;
  tags?: string[];
  chilli?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  type: "food" | "drinks";
  colHeaders?: string[];
  items: MenuItem[];
}
