import { useState, useEffect, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart) {
        setCartItems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
        );
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };
    
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.quantity !== undefined && isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
        setCartItems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) }
                : cartItem
            )
        );
        }
    };
    
    const clearCart = () => {
        setCartItems([]);
    };
    
    const cartTotal = cartItems.reduce(
        (ack, item) => ack + item.quantity * item.price,
        0
    );
    
    return (
        <CartContext.Provider
        value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal }}
        >
        {children}
        </CartContext.Provider>
    );
    };

export { CartContext, CartProvider };