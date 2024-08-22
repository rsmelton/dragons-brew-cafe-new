import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        logLevel: 'debug',                // Enable debug logs for proxy requests
      },
    },
  },
})
// the server proxy fixed an error i was having in the item.store.js file
// the error I believe was passing the incorrect endpoint to my fetch call
// which then would return html instead of json to the frontend as the response.
// after adding the server proxy it then returned json data as the response
// I believe because the fetch call then had the correct endpoint.