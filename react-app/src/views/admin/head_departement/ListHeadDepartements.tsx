import AppsIcon from "@/assets/apps.png";
import BasicMenu from "@/components/Menu";
import AddHeadDepartement from "@/views/admin/head_departement/AddHeadDepartement";
import DataTable from "@/components/DataTable";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import axiosInstance from "@/axios";
import EditHeadDepartement from "./EditHeadDepartement";
import { useQuery } from "react-query";
import { useAtom, useAtomValue } from "jotai";
import {
  headDepartementsAtom,
  idHeadDepartement,
  deleteHeadDepartementAtom,
} from "@/atoms/headDepartement";
import type { TableColumn } from "react-data-table-component";
import type { HeadDepartement } from "@/types/modals";
import Breadcrumbs from "@/components/Breadcumbs";

const columns: TableColumn<HeadDepartement>[] = [
  {
    cell: () => <img src={AppsIcon} alt="icon" />,
    width: "56px",
    style: {
      borderBottom: "1px solid #FFFFFF",
      marginBottom: "-1px",
    },
  },
  {
    name: "Nom",
    selector: (row) => row.nom,
    sortable: true,
    grow: 2,
    style: {
      color: "#202124",
      fontSize: "14px",
      fontWeight: 500,
    },
  },
  {
    name: "Prenom",
    selector: (row) => row.prenom,
    sortable: true,
    style: {
      color: "rgba(0,0,0,.54)",
    },
  },
  {
    name: "Departement",
    selector: (row) => row?.departement?.nom ?? "None",
    sortable: true,
    style: {
      color: "rgba(0,0,0,.54)",
    },
  },
  {
    cell: (row) => (
      <BasicMenu
        id={row.id}
        editHandeler={idHeadDepartement}
        deleteHandeler={deleteHeadDepartementAtom}
      />
    ),
    width: "80px",
    style: {
      borderBottom: "1px solid #FFFFFF",
      marginBottom: "-1px",
    },
  },
];

export default function ListHeadDepartments({
  breadcumb,
}: {
  breadcumb: string;
}) {
  const [headDepartements, setHeadDepartment] = useAtom(headDepartementsAtom);
  const id = useAtomValue(idHeadDepartement);

  const { isLoading, isError, data } = useQuery({
    queryFn: () =>
      axiosInstance.get("/chef-departement").then((res) => res.data.chefDep),
    onSuccess: (_headDepartements) => {
      setHeadDepartment(_headDepartements);
    },
  });

  return (
    <>
      <div className="flex mb-5">
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}
          className="flex-grow"
        >
          Liste des chef de départements
        </h1>
        <AddHeadDepartement />
      </div>
      <Breadcrumbs value={breadcumb} />
      <div>
        {isLoading && <Loading />}
        {isError &&
          Error(
            "Could not get the corresponding data. Check if the server is up!"
          )}
        {data && (
          <DataTable data={headDepartements} columns={columns} filter={"nom"} />
        )}
      </div>
      {id != 0 && <EditHeadDepartement />}
    </>
  );
}
