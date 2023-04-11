export interface Donut {
  id?: string;
  name: string;
  price: number;
  promo?: 'new' | 'limited';
  icon: string;
  description: string
}
