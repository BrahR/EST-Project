import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    setLoadingSpinner(true);
    e.preventDefault();
    // show loading spinner
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        navigate("/dashboard");
        return;
      }

      toast.error("Identifiant ou mot de passe incorrect");
      setLoadingSpinner(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-white border border-gray-200 rounded-lg shadow ">
        <form
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-2/5"
          onSubmit={handleSubmit}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Se connecter à votre compte
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="col-span-full">
              <InputLabel id="username" label="Identifiant" />
              <TextInput
                id="username"
                type="text"
                value={username}
                onChange={setUsername}
              />
            </div>
            <div className="col-span-full">
              <InputLabel id="password" label="Mot de passe" />
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={setPassword}
              />
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
