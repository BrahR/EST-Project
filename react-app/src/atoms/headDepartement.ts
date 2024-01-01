import { atom } from "jotai";
import type { HeadDepartement } from "@/types/modals";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";

export const idHeadDepartement = atom(0);
export const headDepartementsAtom = atom<HeadDepartement[]>([]);

export const headDepartementAtom = atom(
  (get) => {
    const headDepartements = get(headDepartementsAtom);
    const id = get(idHeadDepartement);
    return headDepartements.find((departement) => departement.id === id);
  },
  (_get, set, update: HeadDepartement | null) => {
    const headDepartements = _get(headDepartementsAtom);
    const id = _get(idHeadDepartement);
    if (update) {
      console.log(
        headDepartements.map((departement) =>
          departement.id === id ? { ...departement, ...update } : departement
        )
      );
      set(
        headDepartementsAtom,
        headDepartements.map((departement) =>
          departement.id === id ? { ...departement, ...update } : departement
        )
      );
    }
  }
);

export const deleteHeadDepartementAtom = atom(null, (_get, set, id: number) => {
  const headDepartements = _get(headDepartementsAtom);
  axiosInstance
    .delete(`/departements/${id}`)
    .then(() => {
      toast.success("Departement supprimé avec succès");
    })
    .catch(() => {
      toast.error("Erreur lors de la suppression");
    });
  set(
    headDepartementsAtom,
    headDepartements.filter((departement) => departement.id !== id)
  );
});
