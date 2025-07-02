
export interface ProductVariant {
  id: any;
  name: string;
  price?: number;
  description?: string;
  imageSrc?: string;
}


export interface ProductReview {
  name: string;
  review: string;
  rating?: number;
}

export interface Product {
  id: any;
  name: string;
  tagline: string;
  description: string;
  price: number;
  reviews: ProductReview[];
  imageSrc: string;
  fragranceNotes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  categories: string[];
  longevity: string;
  sillage: string;
  occasions: string[];
  experience?: string[];
  emotionalJourney?: string;
  whyChoose?: string[];
  variants?: ProductVariant[];
  // Add bestselling flags
  isMensBestSelling?: boolean;
  isWomensBestSelling?: boolean;
  isArabicBestSelling?: boolean;
}