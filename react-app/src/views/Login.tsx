import type { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useSetAtom } from "jotai";
import { derivedUser } from "@/atoms/user";
import { useMutation } from "react-query";
import axiosInstance from "@/axios";
import { User } from "@/types/modals";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type FormValues = {
  email: string;
  pwd: string;
};

export default function Login(): ReactElement {
  const navigate = useNavigate();
  const setUser = useSetAtom(derivedUser);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "admin@gmail.com",
      pwd: "password",
    },
  });
  const login = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await axiosInstance.post("/login", data);
      return res.data;
    },
    onSuccess: (data: User) => {
      console.log("data", data);
      console.log("Logging in");
      setUser(data);
      navigate("/dashboard");
      toast.success("Vous êtes connecté avec succès");
    },
    onError: () => {
      toast.error("Identifiant ou mot de passe incorrect");
    },
  });

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-white border border-gray-200 rounded-lg shadow ">
        <form
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-2/5"
          onSubmit={handleSubmit((data) => login.mutate(data))}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Se connecter à votre compte
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Identifiant
              </label>

              <div className="mt-2">
                <input
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="pwd"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>

              <div className="mt-2">
                <input
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("pwd", { required: true })}
                />
              </div>
            </div>
            <button
              className={`flex mx-auto my-6 d-btn d-btn-block d-btn-primary transition duration-300 ease-in-out`}
              disabled={login.isLoading}
            >
              <span
                style={{ display: login.isLoading ? "inline-block" : "none" }}
                className="d-loading d-loading-spinner"
              ></span>
              <span hidden={login.isLoading}>S'authentifier</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
