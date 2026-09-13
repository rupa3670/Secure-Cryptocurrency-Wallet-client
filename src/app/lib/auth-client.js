import { createAuthClient } from "better-auth/react"
import { jwt } from "better-auth/plugins"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000",
    plugins: [
    jwtClient() 
  ]

})