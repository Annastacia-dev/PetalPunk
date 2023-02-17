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
        }
        else {
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

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
        setCartItems(JSON.parse(cartItems));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    // Wishlist

    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = (item) => {
        const isItemInWishlist = wishlistItems.find( (wishlistItem) => wishlistItem.id === item.id);

        if (isItemInWishlist) {
            setWishlistItems(
                wishlistItems.map((wishlistItem) =>
                wishlistItem.id === item.id
                    ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
                    : wishlistItem
                )
            );
        } else {
            setWishlistItems([...wishlistItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromWishlist = (item) => {
        const isItemInWishlist = wishlistItems.find( (wishlistItem) => wishlistItem.id === item.id);

        if (isItemInWishlist.quantity !== undefined && isItemInWishlist.quantity === 1) {
            setWishlistItems(wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id));
        } else {
            setWishlistItems(
                wishlistItems.map((wishlistItem) =>
                wishlistItem.id === item.id
                    ? { ...wishlistItem, quantity: Math.max(0, wishlistItem.quantity - 1) }
                    : wishlistItem
                )
            );
        }
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    const wishlistTotal = wishlistItems.reduce(
        (ack, item) => ack + item.quantity * item.price,
        0
    );

    useEffect(() => {
        const wishlistItems = localStorage.getItem("wishlistItems");
        if (wishlistItems) {
            setWishlistItems(JSON.parse(wishlistItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }, [wishlistItems]);


    
    return (
        <CartContext.Provider
        value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal }}
        >
        {children}
        </CartContext.Provider>
    );
    };

export { CartContext, CartProvider };