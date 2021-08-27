import { createContext, ReactNode, useEffect, useState } from "react";
import commerce from "../lib/commerce";

interface ProductsProps {
  id: string;
  name: string;
  line_total: {
    formatted_with_symbol: string;
  }
  price: {
    formatted_with_symbol: string;
  }
  media: {
    source: string;
  }
  quantity: number;
}

interface CartProps {
  id: string;
  line_total:
    {
      formatted_with_symbol: string;
    };
  line_items: Array<ProductsProps>;
  subtotal: {
    formatted_with_symbol: string;
  };
  total_items: number;
  total_unique_items: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProps;
  addToCart: (productId, quantity) => void;
  updateCartQuantity: (productId, quantity) => void;
  removeFromCart: (productId) => void;
  handleCaptureCheckout: (checkoutTokenId, newOrder) => void;
  errorMessage: any;
  order: any;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState({} as CartProps);
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

        setOrder(incomingOrder)
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
}

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart)
  }

  const updateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart)
  }

  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart)
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{cart, addToCart, updateCartQuantity, removeFromCart, handleCaptureCheckout, errorMessage, order }}>
      {children}
    </CartContext.Provider>
  );
}
