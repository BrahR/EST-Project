import { atom } from "jotai";
import { User } from "@/types/modals";

const userAtom = atom<User>({
  id: 0,
  name: "",
  email: "",
  role: "",
  token: "",
});

export const derivedUser = atom(
  (get) => {
    return get(userAtom);
  },
  (_get, set, newUser: User | null) => {
    if (newUser) {
      localStorage.setItem("token", JSON.stringify(newUser.token));
      set(userAtom, { ..._get(userAtom), ...newUser });
      console.log("newUser", newUser);
    }

    if (!newUser) {
      localStorage.removeItem("token");
      set(userAtom, {
        id: 0,
        name: "",
        email: "",
        role: "",
        token: "",
      });
    }

    return _get(userAtom);
  }
);

export const states = atom({
  hydrated: false,
  loading: false,
  error: "",
});
