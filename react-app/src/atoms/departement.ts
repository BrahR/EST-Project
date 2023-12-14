import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

import axiosInstance from "@/axios";
import type { Departement } from "@/types/modals";
import { get } from "jquery";

const fetchDepartements = async () => {
  const { data } = await axiosInstance.get("/departements");
  return data;
};

const departementsAtom = atomWithQuery(() => ({
  queryKey: ["departements"],
  queryFn: fetchDepartements,
}));

export { departementsAtom };
