import { atom } from "jotai";
import type { Element } from "@/types/modals";
import axiosInstance from "@/axios";

export const idElement = atom(0);
export const elementsAtom = atom<Element[]>([]);

export const elementAtom = atom(
    (get) => {
        const elements = get(elementsAtom);
        const id = get(idElement);
        return elements.find((element) => element.id === id);
    },
    (_get, set, update: Element | null) => {
        const elements = _get(elementsAtom);
        const id = _get(idElement);
        if (update) {
            set(
                elementsAtom,
                elements.map((element) => element.id === id ? { ...element, ...update } : element)
            )
        }
    }
);

export const deleteElementAtom = atom(null, (_get, set, id: number) => {
    const elements = _get(elementsAtom);
    axiosInstance.delete(`/elements/${id}`);
    set(
        elementsAtom,
        elements.filter((element) => element.id !== id)
    );
});

export const addElementAtom = atom(null, async (_get, set, newElement: Element) => {
    try {
        const response = await axiosInstance.post('/elements', newElement);
        const addedElement = response.data;

        set(elementsAtom, (prevElements) => [...prevElements, addedElement]);
    } catch (error) {
        console.error('Error adding Element:', error);
    }
}
);
