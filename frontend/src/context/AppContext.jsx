import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [menuItems, setMenuItems] = useState([])
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

    // Functions that make a request to the backend: fetchCartItems down to handleDeleteAllCartItems
    const fetchCartItems = async () => {
        await fetch("/api/cart")
            .then((res) => res.json())
            .then((data) => {
                const cartItemsData = data.data
                setCartItems(cartItemsData)
            })
    }

    const fetchMenuItems = async () => {
        await fetch("/api/menu")
            .then((res) => res.json())
            .then((data) => {
                const menuItemsData = data.data
                setMenuItems(menuItemsData)
            })
    }

    const handleAddToCart = async (menuItemID) => {
        await fetch(`/api/cart/${menuItemID}`, {
            method: "POST",
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsData = data.data
              setCartItems(cartItemsData)
          })
    }

    const handleModifyCartItemQuantity = async (cartItem, modifyQuantityBy) => {
        await fetch(`/api/cart/${cartItem._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ modifyQuantityBy })
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsData = data.data
              setCartItems(cartItemsData)
          })
    }

    const handleDeleteCartItem = async (cartItem) => {
        await fetch(`/api/cart/${cartItem._id}`, {
            method: "DELETE",
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsData = data.data
              setCartItems(cartItemsData)
          })
    }

    const handleDeleteAllCartItems = async () => {
        await fetch("/api/cart", {
            method: "DELETE",
        }).then((res) => res.json())
          .then((data) => {
              const cartItemsData = data.data
              setCartItems(cartItemsData)
          })
    }

    const doesMenuItemMatchCartItem = (menuItem, cartItem) => {
        return menuItem._id === cartItem._id
    }

    const handleFindTotalPriceOfCart = (cartItems, menuItems) => {
        let totalPrice = 0
    
        cartItems.map((cartItem) => {
          const cartItemQuantity = getCartItemQuantity(cartItem)
          const menuItem = menuItems.find((menuItem) => doesMenuItemMatchCartItem(menuItem, cartItem))
          const menuItemPrice = getMenuItemPrice(menuItem)
          totalPrice += menuItemPrice * cartItemQuantity
        })
    
        return totalPrice.toFixed(2)
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
                doesMenuItemMatchCartItem,
                handleFindTotalPriceOfCart,
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