import Modal from "@/components/Modal";
import axiosInstance from "@/axios";
import { useState } from "react";
import type { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { idDepartement, updateDepartementMutation } from "@/atoms/departement";
import { useAtom } from "jotai";

type FormValues = {
  id: number;
  name: string;
  description: string;
};

export default function EditDepartement(): ReactElement {
  const [id] = useAtom(idDepartement);
  const [{ mutate }] = useAtom(updateDepartementMutation);
  const { register, handleSubmit } = useForm({
    defaultValues: async () =>
      // await fetch(`/api/departements/${id}`).then((res) => res.json()),
      axiosInstance.get(`/departements/${id}`).then((res) => res.data),
  });
  const [isOpen, setIsOpen] = useState(true);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data.id);
    close();
  };

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  return (
    <div>
      <Modal isOpen={isOpen} closeModal={close}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">
            Nouveau Département
          </h3>
          <button
            type="button"
            onClick={close}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600"
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
        <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
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
