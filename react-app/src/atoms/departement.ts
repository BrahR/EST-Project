import { atom } from "jotai";
import { atomWithQuery, atomWithMutation } from "jotai-tanstack-query";

import axiosInstance from "@/axios";
import type { Departement } from "@/types/modals";

const idDepartement = atom(0);

const fetchDepartements = async () => {
  const { data } = await axiosInstance.get("/departements");
  return data.departement;
};

const addDepartement = async (departement: Departement) => {
  const { data } = await axiosInstance.post("/departements", departement);
  return data;
};

const updateDepartement = async (id: number) => {
  const { data } = await axiosInstance.put(`/departements/${id}`);
  return data;
};

const deleteDepartement = async (id: number) => {
  const { data } = await axiosInstance.delete(`/departements/${id}`);
  return data;
};

const departementsAtom = atomWithQuery<Departement[]>(() => ({
  queryKey: ["departements"],
  queryFn: fetchDepartements,
}));

const addDepartementMutation = atomWithMutation<Departement, Departement>(
  (get) => ({
    mutationFn: addDepartement,
    onSuccess: () => {
      get(departementsAtom).refetch();
    },
  })
);

const updateDepartementMutation = atomWithMutation<number, number>((get) => ({
  mutationFn: updateDepartement,
  onSuccess: () => {
    get(departementsAtom).refetch();
  },
}));

const deleteDepartementMutation = atomWithMutation<number, number>((get) => ({
  mutationFn: deleteDepartement,
  onSuccess: () => {
    get(departementsAtom).refetch();
  },
}));

export {
  idDepartement,
  departementsAtom,
  addDepartementMutation,
  updateDepartementMutation,
  deleteDepartementMutation,
};
