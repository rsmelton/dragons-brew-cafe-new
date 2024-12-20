import {create} from 'zustand'

// lines 6 and 7 are basically equivalent to
// const [items, setItems] = useState();
export const useItemStore = create((set) => ({
    items: [],
    setItems: (items) => set({ items }),
    createItem: async (newItem) => {
        // make the request
        console.log(`New item type: ${typeof(newItem)}`)
        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newItem)
        })
        // wait for the response
        console.log("We made it right before the res.json() call.")
        console.log(`Response status: ${res.status}`)
        const data = await res.json()
        console.log(`Data: ${data.data}`)

        // this is how I did it in the other project
        set((state) => ({ items: [...state.items, data.data] }))

        // return some object describing what happened
        return { success: true, message: "Item added to cart successfully."}
    },
    fetchItems: async () => {
        // not specifying what kind of request it is makes it
        // by default a GET request. This request then gets sent
        // to the backend to then talk to the DB, which will then 
        // send back a response here into items which we can then 
        // use in the frontend.
        const res = await fetch("/api", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
            },
        }) 
        // console.log(await res.text())

        const data = await res.json()
        set({ items: data.data })

        // // *** newly added code ***
        // if (res.status === 204) { 
        //     // this means the server couldnt find any content
        //     set({ items: [] })
        // } else {
        //     // *** old code ***
        //     const data = await res.json()
        //     set({ items: data.data })
        // }

    },
    deleteItem: async (itemId) => {
        // requesting specific item from backend
        const res = await fetch(`/api/cart/${itemId}`, {
            method: "DELETE"
        })
        // waiting for response
        const data = await res.json()

        // if we didn't find the item with the specified id
        if (data.success === false) {
            return { success: false, message: data.message }
        }

        // trying a separate way from the other project
        // filtering out the item we want to delete
        // set([...items, items.filter( (item) => item._id !== itemId )])

        set((state) => ({ items: state.items.filter((item) => item._id !== itemId) }))

        return { success: true, message: data.message }
    },
    deleteItems: async () => {
        const res = await fetch("/api/cart", {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
        })

        const data = await res.json()
        set({ items: data.data })

        return {success: true, message: "Purchased Successfully!"}
    }
}))