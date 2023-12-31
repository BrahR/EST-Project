import { atom } from "jotai";
import type { Module } from "@/types/modals";
import axiosInstance from "@/axios";

export const idModule = atom(0);
export const modulesAtom = atom<Module[]>([]);

export const moduleAtom = atom(
    (get) => {
        const modules = get(modulesAtom);
        const id = get(idModule);
        return modules.find((module) => module.id === id);
    },
    (_get, set, update: Module | null) => {
        const modules = _get(modulesAtom);
        const id = _get(idModule);
        if (update) {
            set(
                modulesAtom,
                modules.map((module) => module.id === id ? { ...module, ...update } : module)
            )
        }
    }
);

export const deleteModuleAtom = atom(null, (_get, set, id: number) => {
    const modules = _get(modulesAtom);
    axiosInstance.delete(`/modules/${id}`);
    set(
        modulesAtom,
        modules.filter((module) => module.id !== id)
    );
});

export const addModuleAtom = atom(null, async (_get, set, newModule: Module) => {
    try {
        const response = await axiosInstance.post('/modules', newModule);
        const addedModule = response.data;

        set(modulesAtom, (prevModules) => [...prevModules, addedModule]);
    } catch (error) {
        console.error('Error adding module:', error);
    }
}
);
