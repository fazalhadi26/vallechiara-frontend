import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, amount: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  vat: number;
  totalToPay: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toast = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('vallechiara_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('vallechiara_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast({
          title: "Already in cart",
          description: `${product.name} is already in your cart. We've increased the quantity!`,
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      toast({
        title: "Product Added",
        description: `${product.name} has been added to your cart.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, amount: number) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.length; // Count unique items
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal >= 150 ? 0 : 10;
  const vat = subtotal * 0.05; // Assuming 5% VAT if not included, but image says VAT includes 7.50 for 140. 7.5/140 is ~5.3%.
  const totalToPay = subtotal + shipping; // image shows 157.50 = 140 + 10 + 7.5. Wait.

  // Re-evaluating image: 
  // Subtotal = 140.00
  // Shipping = 10.00
  // VAT = 7.50
  // Total = 157.50
  // So VAT is added on top in the final sum in the image.

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      shipping,
      vat,
      totalToPay: subtotal + shipping + vat
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
