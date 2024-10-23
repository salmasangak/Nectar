import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.name === product.name);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (name) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== name));
    };

    const updateCartQuantity = (name, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.name === name ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
