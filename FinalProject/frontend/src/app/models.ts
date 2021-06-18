export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  short_description: string;
  rating: number;
  full_description: string;
  category: Category;
  comments: Comment[];
}

export interface Comment {
  id: number;
  sender: string;
  body: string;
  product: number;
}

export interface Image {
  id: number;
  product: Product;
  url: string;
}

export interface Shipping {
  id: number;
  type: string;
  price: number;
  description: string;
}
