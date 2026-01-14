import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savdeCart = localStorage.getItem('cart')
        if(savdeCart) {
            setCart(JSON.parse(savdeCart));
        }
    },[]);
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
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            totalItems,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    );
}  ;