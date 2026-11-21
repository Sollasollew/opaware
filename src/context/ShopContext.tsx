import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getProduct } from '../data/catalog';

export interface LineItem {
  productId: string;
  qty: number;
}

interface ShopContextValue {
  cart: LineItem[];
  list: string[];
  addToCart: (productId: string, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  toggleList: (productId: string) => void;
  clearCart: () => void;
  cartCount: number;
  listCount: number;
  cartTotal: number;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<LineItem[]>([]);
  const [list, setList] = useState<string[]>([]);

  const value = useMemo<ShopContextValue>(() => {
    const addToCart = (productId: string, qty = 1) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.productId === productId);
        if (existing) {
          return prev.map((i) =>
            i.productId === productId ? { ...i, qty: i.qty + qty } : i,
          );
        }
        return [...prev, { productId, qty }];
      });
    };

    const removeFromCart = (productId: string) => {
      setCart((prev) => prev.filter((i) => i.productId !== productId));
    };

    const setQty = (productId: string, qty: number) => {
      if (qty <= 0) {
        removeFromCart(productId);
        return;
      }
      setCart((prev) =>
        prev.map((i) => (i.productId === productId ? { ...i, qty } : i)),
      );
    };

    const toggleList = (productId: string) => {
      setList((prev) =>
        prev.includes(productId)
          ? prev.filter((id) => id !== productId)
          : [...prev, productId],
      );
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
    const listCount = list.length;
    const cartTotal = cart.reduce((sum, i) => {
      const p = getProduct(i.productId);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);

    return {
      cart,
      list,
      addToCart,
      removeFromCart,
      setQty,
      toggleList,
      clearCart,
      cartCount,
      listCount,
      cartTotal,
    };
  }, [cart, list]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
}
