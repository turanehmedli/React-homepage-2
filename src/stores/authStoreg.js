import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: "",
      refreshToken: "",
      
      // Tokenları set etme
      setAccessToken: (token) => set({ accessToken: token }),
      setRefreshToken: (token) => set({ refreshToken: token }),
      
    
    }),
    {
      name: "auth-storage", // localStorage'daki anahtar ismi
      storage: createJSONStorage(() => localStorage), // Tarayıcı hafızasını kullan
    }
  )
);