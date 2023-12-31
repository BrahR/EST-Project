import {atom} from "jotai";
import type { Filiere } from "@/types/modals";
import axiosInstance from "@/axios";

export const idFiliere = atom(0);
export const filieresAtom = atom<Filiere[]>([]);

export const filiereAtom = atom(
    (get) => {
        const filieres = get(filieresAtom);
        const id = get(idFiliere);
        return filieres.find((filiere) => filiere.id === id);
    },
    (_get, set, update: Filiere | null) => {
        const filieres = _get(filieresAtom);
        const id = _get(idFiliere);
        if (update) {
            set(
                filieresAtom,
                filieres.map((filiere) => filiere.id === id ? {...filiere, ...update} : filiere)
            )
        }
    }
);

export const deleteFiliereAtom = atom(null, (_get, set, id: number) => {
    const filieres = _get(filieresAtom);
    axiosInstance.delete(`/filieres/${id}`);
    set(
        filieresAtom,
        filieres.filter((filiere) => filiere.id !== id)
    );
});

export const addFiliereAtom = atom( null, async (_get, set, newFiliere: Filiere) => {
        try {
            const response = await axiosInstance.post('/filieres', newFiliere);
            const addedFiliere = response.data;

            set(filieresAtom, (prevFilieres) => [...prevFilieres, addedFiliere]);
        } catch (error) {
            console.error('Error adding filiere:', error);
        }
    }
);
