import {create} from 'zustand'

export const useMenuItemStore = create((set) => ({
    menuItems: [],
    setMenuItems: (menuItems) => set({ menuItems }),
    fetchMenuItems: async () => {
        const res = await fetch("/api/menu", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
        }) 

        const data = await res.json()
        set({ menuItems: data.data })
    },
}))