import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [menuItems, setMenuItems] = useState([])
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

    // Functions that make a request to the backend
    const fetchCartItems = async () => {
        const res = await fetch("/api/cart")
        const data = await res.json()
        setCartItems(data.data)
    }

    const fetchMenuItems = async () => {
        const res = await fetch("/api/menu")
        const data = await res.json()
        setMenuItems(data.data)
    }

    const handleAddToCart = async (menuItemID) => {
        const res = await fetch(`/api/cart/${menuItemID}`, {
            method: "POST",
        })
        const data = await res.json()
        
        // setCartItems(prevCartItems => {
        //     const existingItemIndex = prevCartItems.findIndex(
        //         cartItem => cartItem._id === data.data._id
        //     )

        //     if (existingItemIndex !== -1) {
        //         // Item was found and we can update it
        //         const updatedCartItems = [...prevCartItems]
        //         updatedCartItems[existingItemIndex] = data.data
        //         return updatedCartItems
        //     } else {
        //         // Item did not exist, so we add it 
        //         return [...prevCartItems, data.data]
        //     }
        // })
        fetchCartItems()
    }

    const handleModifyCartItemQuantity = async (cartItemID, modifyQuantityBy) => {
        await fetch(`/api/cart/${cartItemID}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ modifyQuantityBy })
        })
        fetchCartItems()
    }

    const handleDeleteCartItem = async (cartItemID) => {
        await fetch(`/api/cart/${cartItemID}`, {
          method: "DELETE",
        })
        setCartItems(cartItems.filter((cartItem) => cartItem._id !== cartItemID))
    }

    const handleDeleteAllCartItems = async () => {
        const res = await fetch("/api/cart", {
          method: "DELETE",
        })
        const data = await res.json()
        setCartItems(data.data)
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