import axiosInstance from "@/axios";
import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import Modal from "@/components/Modal";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

import { filieresAtom } from "@/atoms/filiere";
import { modulesAtom } from "@/atoms/module";

type FormValues = {
  id: number;
  nom: string;
  description: string;
  filiere_id: number;
};

export default function AddModule(): ReactElement {
  const filieres = useAtomValue(filieresAtom);
  const [, setFilieres] = useAtom(filieresAtom);

  useEffect(() => {
    if (filieres.length === 0) {
      const fetchData = async () => {
        try {
          const data = await axiosInstance
            .get("/filieres")
            .then((res) => res.data.filiere);
          setFilieres(data);
        } catch (error) {
          console.error("Couldn't get the filieres *-*", error);
        }
      };

      fetchData();
    }
  }, [filieres, setFilieres]);

  const [modules, setModules] = useAtom(modulesAtom);
  const { register, handleSubmit } = useForm<FormValues>();
  const [isOpen, setIsOpen] = useState(false);

  const add = useMutation({
    mutationFn: (data: FormValues) => {
      return axiosInstance.post("/modules", data).then((res) => res.data);
    },
    onSuccess: (data) => {
      console.log("data", data);
      setModules([...modules, data.module]);
      toast.success("Module ajoutée avec success!");
    },
    onError: () => {
      console.log("looks like an error to me");
      toast.error("Module non ajouté *-*");
    },
  });

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  return (
    <div>
      <button
        onClick={open}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
      >
        Ajouter un Module
      </button>

      <Modal isOpen={isOpen} closeModal={close}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">
            Nouveau Module
          </h3>
          <button
            type="button"
            onClick={close}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-toggle="crud-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form
          className="p-4 md:p-5"
          onSubmit={handleSubmit((data) => add.mutate(data))}
        >
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Nom
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type product name"
                {...register("nom", { required: true })}
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="filiere"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Filière
              </label>
              <select
                id="filiere_id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                defaultValue=""
                {...register("filiere_id", { required: true })}
              >
                <option value="" disabled>
                  Sélectionnez une filière
                </option>
                {filieres?.map((filiere) => (
                  <option key={filiere.id} value={filiere.id}>
                    {filiere.nom}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write product description here"
                {...register("description", { required: true })}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Ajouter
          </button>
        </form>
      </Modal>
    </div>
  );
}
