import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    accessToken:'',
    refreshToken:'',
    setAccessToken:(token)=>set(()=>({accessToken:token})),
    setRefreshToken:(token)=>set(()=>({refreshToken:token})),
    clearToken:()=>set(()=>({refreshToken:'',accessToken:''})),
  }),{name:"auth"}
),
);
