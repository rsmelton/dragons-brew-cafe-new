import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [menuItems, setMenuItems] = useState([])
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

    // Functions that make a request to the backend
    const fetchCartItems = async () => {
        await fetch("/api/cart")
            .then((res) => res.json())
            .then((data) => setCartItems(data.data))
    }

    const fetchMenuItems = async () => {
        await fetch("/api/menu")
            .then((res) => res.json())
            .then((data) => setMenuItems(data.data))
    }

    const handleAddToCart = async (menuItemID) => {
        await fetch(`/api/cart/${menuItemID}`, {
            method: "POST",
        }).then((res) => res.json())
          .then((data) => setCartItems(data.data))
    }

    const handleModifyCartItemQuantity = async (cartItemID, modifyQuantityBy) => {
        await fetch(`/api/cart/${cartItemID}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ modifyQuantityBy })
        }).then((res) => res.json())
          .then((data) => setCartItems(data.data))
    }

    const handleDeleteCartItem = async (cartItemID) => {
        await fetch(`/api/cart/${cartItemID}`, {
            method: "DELETE",
        }).then((res) => res.json())
          .then((data) => setCartItems(data.data))
    }

    const handleDeleteAllCartItems = async () => {
        await fetch("/api/cart", {
            method: "DELETE",
        }).then((res) => res.json())
          .then((data) => setCartItems(data.data))
    }

    // When the cartItems state changes we run this hook to calculate
    // the total quantity of all items in our cart to display a value for the user
    useEffect(() => {
        let calculatedCartTotalQuantity = 0
        cartItems.map((cartItem) => {
            calculatedCartTotalQuantity += getCartItemQuantity(cartItem)
        })
        setCartTotalQuantity(calculatedCartTotalQuantity)
    }, [cartItems])

    // Cart accessor functions
    const getCartItemID = (cartItem) => {
        return cartItem._id
    }
    
    const getCartItemQuantity = (cartItem) => {
        return cartItem.quantity
    }

    // Menu accessor functions
    const getMenuItemID = (menuItem) => {
        return menuItem._id
    }
    
    const getMenuItemName = (menuItem) => {
        return menuItem.name
    }
    
    const getMenuItemPrice = (menuItem) => {
        return menuItem.price
    }
    
    const getMenuItemDescription = (menuItem) => {
        return menuItem.description
    }
    
    const getMenuItemImageURLString = (menuItem) => {
        return menuItem.imageURLString
    }

    // We wrap our application with this context so we can use
    // these states and functions anywhere we want
    return (
        <AppContext.Provider
            value={{
                cartItems,
                menuItems,
                cartTotalQuantity,
                fetchCartItems,
                fetchMenuItems,
                handleAddToCart,
                handleModifyCartItemQuantity,
                handleDeleteCartItem,
                handleDeleteAllCartItems,
                getCartItemID,
                getCartItemQuantity,
                getMenuItemID,
                getMenuItemName,
                getMenuItemPrice,
                getMenuItemDescription,
                getMenuItemImageURLString,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useCart = () => useContext(AppContext)