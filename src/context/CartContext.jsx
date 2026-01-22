import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const products = [
  {
    id: 1,
    name: "Red Velvet Roses",
    price: 99.99,
    category: "Flower shelf",
    image:
      "https://plus.unsplash.com/premium_photo-1664304102989-6048cbdc2051?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Pure White Tulips",
    price: 119.99,
    category: "Basket of flower",
    image:
      "https://plus.unsplash.com/premium_photo-1661721870169-d788bcfc46a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Royal Orchid Bloom",
    price: 109.0,
    category: "Basket of flower",
    image:
      "https://plus.unsplash.com/premium_photo-1661304762228-eaac433a75c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Sun-Kissed Sunflowers ",
    price: 34.99,
    category: "Flower shelf",
    image:
      "https://plus.unsplash.com/premium_photo-1661344221539-0b12dfc58228?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: " Casablanca Lilies",
    price: 39.0,
    category: "Gift combos",
    image:
      "https://plus.unsplash.com/premium_photo-1661657759494-df605fa7da44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Wild Lavender Bunch",
    price: 34.0,
    category: "Gift combos",
    image:
      "https://plus.unsplash.com/premium_photo-1674986176795-5b8a45a38f6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Blushing Peonies",
    price: 94.0,
    category: "Flower box",
    image:
      "https://plus.unsplash.com/premium_photo-1677154988951-b500207a6666?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Spring Daisy Mix",
    price: 39.99,
    category: "Basket of flower",
    image:
      "https://plus.unsplash.com/premium_photo-1676143511282-8088aa120bb0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Midnight Blue Hydrangea",
    price: 13.99,
    category: "Flower box",
    image:
      "https://plus.unsplash.com/premium_photo-1661313675612-0dd89088adf4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Rustic Meadow Bouquet",
    price: 29.0,
    category: "Flower shelf",
    image:
      "https://plus.unsplash.com/premium_photo-1661308210204-de42793d0f7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Sweet Carnation Cloud",
    price: 79.0,
    category: "Flower shelf",
    image:
      "https://plus.unsplash.com/premium_photo-1676272527662-286d705e66d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Vibrant Gerbera Basket",
    price: 96.0,
    category: "Gift combos",
    image:
      "https://plus.unsplash.com/premium_photo-1676070095484-87747c885908?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Damask Jasmine Pot",
    price: 49.0,
    category: "Basket of flower",
    image:
      "https://plus.unsplash.com/premium_photo-1713823800826-b72a12046ac5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Golden Glow Bouquet",
    price: 49.0,
    category: "Flower box",
    image:
      "https://plus.unsplash.com/premium_photo-1661659745326-d2535dfd268c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Fiery Orange Lilies",
    price: 69.0,
    category: "Bouquet",
    image:
      "https://plus.unsplash.com/premium_photo-1673546785110-a74ad6261a2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Modern Calla Lily Vase",
    price: 24.99,
    category: "Gift combos",
    image:
      "https://plus.unsplash.com/premium_photo-1676070095371-4162f55eaf81?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Eternal Preserved Rose",
    price: 16.99,
    category: "Bouquet",
    image:
      "https://plus.unsplash.com/premium_photo-1669668198837-aff19a7a75ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: " Morning Dew Assortment",
    price: 75.0,
    category: "Basket of flower",
    image:
      "https://plus.unsplash.com/premium_photo-1678371209911-440cb914e9cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: " Cherry Blossom Sprays",
    price: 59.95,
    category: "Flower box",
    image:
      "https://plus.unsplash.com/premium_photo-1676117273363-2b13dbbc5385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Appreciation Bouquet ",
    price: 39.0,
    category: "Bouquet",
    image:
      "https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww",
  },
];
    const [cart, setCart] = useState(() => {
        const savdeCart = localStorage.getItem('cart');
        return savdeCart ? JSON.parse(savdeCart) : [];
    });
    const [ discount, setDiscount ] = useState(0);
    const [taxRate] = useState(0.10);
   
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = (product) => {
        setCart((PrevCart) => {
            const existingItem = PrevCart.find((item) => item.id === product.id);
             if(existingItem) {
                return PrevCart.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item 
                );
             }
             return[...PrevCart, { ...product, quantity: 1 }];
        });
    };
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };
    const updateQuantity = (productId, newQuantity) => {
        if(newQuantity < 1) return;
        setCart((prevCart) => 
        prevCart.map((item) => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        )
    };
    const applyCoupon = (code) => {
        if(code === 'CODE26'){
            setDiscount(25);
            return true;
        }
        return false;
    }
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxAmount = (totalPrice - discount) * taxRate;
    const finalTotal = totalPrice - discount + taxAmount;
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            totalItems,
            totalPrice,
            taxAmount,
            finalTotal,
            applyCoupon,
            discount,
            products,
        }}>
            {children}
        </CartContext.Provider>
    );
}  ;