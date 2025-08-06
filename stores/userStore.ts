import { create } from "zustand";

export type UserInfo = {
  id: number;
  full_name: string;
  email: string;
  avatar_id?: string | null;
  my_profile_url?: string | null;
};

type UserState = {
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user:
    typeof window !== "undefined" && localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") as string)
      : null,
  setUser: (user) => {
    set({ user });
    if (typeof window !== "undefined") {
      if (user) localStorage.setItem("userInfo", JSON.stringify(user));
      else localStorage.removeItem("userInfo");
    }
  },
}));