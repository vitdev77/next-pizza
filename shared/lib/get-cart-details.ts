import { calcCartItemTotalPrice } from '@/shared/lib';
import { CartDTO } from '../services/dto/cart.dto';

export type CartStateItem = {
  disabled: boolean;
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  // const items = data.items.map((item) => ({
  // Fix console error --> Cannot read properties of null (reading 'items')
  const items = data?.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    disabled: false,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as CartStateItem[];

  return {
    items,
    // totalAmount: data.totalAmount,
    // Fix console error --> Cannot read properties of null (reading 'items')
    totalAmount: data?.totalAmount,
  };
};
