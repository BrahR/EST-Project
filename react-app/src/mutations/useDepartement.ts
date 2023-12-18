import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { departementsAtom } from "@/atoms/departement";
import axiosInstance from "@/axios";

async function fetchDepartements() {
  const { data } = await axiosInstance.get(
    "https://geo.api.gouv.fr/departements"
  );
  return data;
}

// async function addDepartement() {
//   // no api atm
// }

export function useDepartementsQuery() {
  const { data, isLoading, isError } = useQuery(
    "departements",
    fetchDepartements
  );
  const [, setDepartements] = useAtom(departementsAtom);

  if (data) {
    setDepartements(data);
  }

  return { isLoading, isError };
}

export function useAddDepartement() {
  const [, setDepartements] = useAtom(departementsAtom);

  return () => {
    setDepartements((prev) => [...prev, addDepartement()]);
  };
}
