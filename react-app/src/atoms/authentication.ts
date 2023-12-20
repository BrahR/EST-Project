import { atomWithMutation } from "jotai-tanstack-query";

import axiosInstance from "@/axios";
import type { User } from "@/types/modals";

import { useAtom } from "jotai";
import { tokenAtom } from "./token";

const loginMutation = atomWithMutation<User, User>(
  () => ({
    mutationFn: async (user: User) => {
      const [token,setToken] = useAtom(tokenAtom);
      try {
        const { data } = await axiosInstance.post('/login', user);
        // Assuming data.token contains the token
        setToken(data.token);
        return data;
      } catch (error) {
        console.error('Login error:', error);
        throw error; // Re-throw the error so that it can be caught by the component
      }
    },
    onSuccess: () => {
      // Handle success if needed
    },
  })
);

export {
  loginMutation,
};
