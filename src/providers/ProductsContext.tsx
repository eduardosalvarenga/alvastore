import { createContext, ReactNode, useEffect, useState } from "react";
import commerce from "../lib/commerce";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProps {
  id: string;
  name: string;
  price: {
    formatted_with_symbol: string;
  }
  media: {
    source: string;
  }
  quantity: number;
  toLowerCase?: () => any;
}

export const ProductsContext = createContext<ProductsProps[]>([]);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();

    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}