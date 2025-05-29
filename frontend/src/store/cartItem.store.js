// This file has different functions that allow the frontend
// to communicate with the backend. We are making different requests
// to the backend depending on what the users action is.

import {create} from 'zustand'

// lines 6 and 7 are basically equivalent to
// const [items, setItems] = useState();
export const useCartItemStore = create((set) => ({
    cartItems: [],
    setCartItems: (cartItems) => set({ cartItems }),
    createCartItem: async (newCartItem) => {

        // Understanding functionality
        // If we add a itemCount field to the item model then we probably
        // need to add some code here in the following order:

        // 1. User adds new item to cart
        // 2. We check to see if the item already exists in the items list
            // if it exists: 
                // We increment the itemCount field and exit the function
            // otherwise:
                // We do the code below that fetches the DB and adds the new object to the cart

        // The question: Do we need to run the code below regardless?
        // As we should probably be updating the itemCount in the backend as well. 

        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newCartItem)
        })

        const data = await res.json()

        set((state) => ({ cartItems: [...state.cartItems, data.data] }))

        return { success: true, message: "Item added to cart successfully."}
    },
    fetchCartItems: async () => {
        const res = await fetch("/api/cart", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
        }) 

        const data = await res.json()
        set({ cartItems: data.data })
    },
    deleteCartItem: async (cartItemId) => {
        const res = await fetch(`/api/cart/${cartItemId}`, {
            method: "DELETE"
        })

        const data = await res.json()

        // if we didn't find the item with the specified id
        if (data.success === false) {
            return { success: false, message: data.message }
        }

        set((state) => ({ cartItems: state.cartItems.filter((cartItem) => cartItem._id !== cartItemId) }))

        return { success: true, message: data.message }
    },
    deleteCartItems: async () => {
        const res = await fetch("/api/cart", {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
        })

        const data = await res.json()
        set({ cartItems: data.data })

        return { success: true, message: "Purchased Successfully!" }
    }
}))