export interface IProduct {
  image: string;
  price: number;
  rating: { rate: number; count: number };
  description: string;
  id?: number;
  title: string;
  category: string
}

