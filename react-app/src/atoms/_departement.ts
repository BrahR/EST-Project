import { atom } from "jotai";
import type { Departement } from "@/types/modals";
import axiosInstance from "@/axios";

export const idDepartement = atom(0);
export const departementsAtom = atom<Departement[]>([]);

export const departementAtom = atom(
  (get) => {
    const departements = get(departementsAtom);
    const id = get(idDepartement);
    return departements.find((departement) => departement.id === id);
  },
  (_get, set, update: Departement | null) => {
    const departements = _get(departementsAtom);
    const id = _get(idDepartement);
    if (update) {
      console.log(
        departements.map((departement) =>
          departement.id === id ? { ...departement, ...update } : departement
        )
      );
      set(
        departementsAtom,
        departements.map((departement) =>
          departement.id === id ? { ...departement, ...update } : departement
        )
      );
    }
  }
);

export const deleteDepartementAtom = atom(null, (_get, set, id: number) => {
  const departements = _get(departementsAtom);
  axiosInstance.delete(`/departements/${id}`);
  set(
    departementsAtom,
    departements.filter((departement) => departement.id !== id)
  );
});
