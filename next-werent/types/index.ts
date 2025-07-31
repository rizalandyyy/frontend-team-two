export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}