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

    // This is a method that is taking in some html we don't know
    // what looks like and is wrapping it with a div to force the html
    // that we received to be purely text. So if the user passed in any 
    // unwanted scripts then instead of the scripts executing
    // they would be rendered as safe text.
    // Edit: This method now also preserves the formatting
    const stripHTMLPreserveFormatting = (html) => {

        // Using a regular expression to replace all </p>
        // tags with a newline to keep formatting
        // we can then get rid of the remaining tags
        // as we only really care about the formatting
        let formattedHtml = html.replace(/<\/p>/gi, '\n');

        // Here we are finding everywhere in the html where there are
        // 3 or more \n in a row -- when we find them we replace them
        // with \n\n 
        formattedHtml = formattedHtml.replace(/\n{3,}/g, '\n\n');

        console.log(JSON.stringify(formattedHtml));

        const div = document.createElement("div");
        div.innerHTML = formattedHtml;
        const content = div.textContent || div.innerText || "";

        // Trimming remaining whitespace off ends
        return content.trim();
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
                stripHTMLPreserveFormatting,
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