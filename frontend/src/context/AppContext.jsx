import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

    // Functions that make a request to the backend: fetchCartItems down to handleDeleteAllCartItems
    const fetchCartItems = async () => {
        await fetch("/api/cart")
            .then((res) => res.json())
            .then((data) => {
                const cartItemsReadFromDB = data.data;
                setCartItems(cartItemsReadFromDB);
            });
    };

    const fetchMenuItems = async () => {
        await fetch("/api/menu")
            .then((res) => res.json())
            .then((data) => {
                const menuItemsData = data.data;
                setMenuItems(menuItemsData);
            });
    };

    // Fetching from our WordPress Site to access our blogs
    const fetchBlogs = async () => {
        await fetch("https://www.dragons-brew-coffee-corner.com/wp-json/wp/v2/posts")
            .then((res) => res.json())
            .then((data) => {
                const blogsData = data;
                setBlogs(blogsData);
            });
    };

    const handleAddToCart = async (menuItem) => {
        await fetch(`/api/cart/${getMenuItemID(menuItem)}`, {
            method: "POST",
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsReadFromDB = data.data;
              setCartItems(cartItemsReadFromDB);
          });
    };

    const handleModifyCartItemQuantity = async (cartItem, modifyQuantityBy) => {
        await fetch(`/api/cart/${getCartItemID(cartItem)}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ modifyQuantityBy })
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsReadFromDB = data.data;
              setCartItems(cartItemsReadFromDB);
          });
    };

    const handleDeleteCartItem = async (cartItem) => {
        await fetch(`/api/cart/${getCartItemID(cartItem)}`, {
            method: "DELETE",
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsReadFromDB = data.data;
              setCartItems(cartItemsReadFromDB);
          });
    };

    const handleDeleteAllCartItems = async () => {
        await fetch("/api/cart", {
            method: "DELETE",
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsReadFromDB = data.data;
              setCartItems(cartItemsReadFromDB);
          });
    };

    // Helper methods
    const doesMenuItemMatchCartItem = (menuItem, cartItem) => {
        return getMenuItemID(menuItem) === getCartItemID(cartItem);
    };

    const handleFindTotalPriceOfCart = (cartItems, menuItems) => {
        let totalPrice = 0;
    
        cartItems.map((cartItem) => {
          const menuItem = menuItems.find((menuItem) => doesMenuItemMatchCartItem(menuItem, cartItem));
          const menuItemPrice = getMenuItemPrice(menuItem);
          const cartItemQuantity = getCartItemQuantity(cartItem);
          totalPrice += menuItemPrice * cartItemQuantity;
        });
    
        return totalPrice.toFixed(2);
    };

    const calculateCartTotalQuantity = (cartItems) => {
        let calculatedCartTotalQuantity = 0;
        cartItems.map((cartItem) => {
            calculatedCartTotalQuantity += getCartItemQuantity(cartItem);
        });
        return calculatedCartTotalQuantity;
    };

    // When the cartItems state changes we run this hook to calculate
    // the total quantity of all items in our cart to display a value for the user
    useEffect(() => {
        let calculatedCartTotalQuantity = calculateCartTotalQuantity(cartItems);
        setCartTotalQuantity(calculatedCartTotalQuantity);
    }, [cartItems]);

    // Cart accessor functions    
    const getCartItemID = (cartItem) => {
        return cartItem._id;
    };

    const getCartItemQuantity = (cartItem) => {
        return cartItem.quantity;
    };

    // Menu accessor functions
    const getMenuItemID = (menuItem) => {
        return menuItem._id;
    };
    
    const getMenuItemName = (menuItem) => {
        return menuItem.name;
    };
    
    const getMenuItemPrice = (menuItem) => {
        return menuItem.price;
    };
    
    const getMenuItemDescription = (menuItem) => {
        return menuItem.description;
    };
    
    const getMenuItemImageURLString = (menuItem) => {
        return menuItem.imageURLString;
    };

    // We wrap our application with this context so we can use
    // these states and functions anywhere we want in the frontend
    return (
        <AppContext.Provider
            value={{
                cartItems,
                menuItems,
                blogs,
                cartTotalQuantity,
                fetchCartItems,
                fetchMenuItems,
                fetchBlogs,
                handleAddToCart,
                handleModifyCartItemQuantity,
                handleDeleteCartItem,
                handleDeleteAllCartItems,
                doesMenuItemMatchCartItem,
                handleFindTotalPriceOfCart,
                getCartItemQuantity,
                getMenuItemName,
                getMenuItemPrice,
                getMenuItemDescription,
                getMenuItemImageURLString,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useCart = () => useContext(AppContext);