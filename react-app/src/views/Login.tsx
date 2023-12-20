import { useState } from "react";
import type { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import { loginMutation } from "@/atoms/authentication";
import { useAtom } from "jotai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  pwd: string;
};

export default function Login(): ReactElement {
  const navigate = useNavigate(); 
  const [{ mutate }] = useAtom(loginMutation);
  const { register, handleSubmit } = useForm<FormValues>();

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoadingSpinner(true);
    console.log('Data to be sent:', data);
    try {
      await mutate(data);
      console.log('try');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoadingSpinner(false);
      //navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-white border border-gray-200 rounded-lg shadow ">
        <form
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-2/5"
          onSubmit={handleSubmit(onSubmit)}
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
              disabled={loadingSpinner}
            >
              <span
                style={{ display: loadingSpinner ? "inline-block" : "none" }}
                className="d-loading d-loading-spinner"
              ></span>
              <span hidden={loadingSpinner}>S'authentifier</span>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
}
