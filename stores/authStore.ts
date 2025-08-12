import { create } from "zustand";

type AuthState = {
  sessionExpired: boolean;
  setSessionExpired: (expired: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  sessionExpired: false,
  setSessionExpired: (expired) => set({ sessionExpired: expired }),
}));