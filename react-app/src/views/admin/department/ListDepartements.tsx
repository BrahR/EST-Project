import AppsIcon from "@/assets/apps.png";
import BasicMenu from "@/components/Menu";
import AddDepartement from "@/views/admin/department/AddDepartement";
import DataTable from "@/components/DataTable";
import {
  departementsAtom,
  idDepartement,
  deleteDepartementAtom,
} from "@/atoms/_departement";
import { useAtom, useAtomValue } from "jotai";
import type { Departement } from "@/types/modals";
import type { TableColumn } from "react-data-table-component";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useQuery } from "react-query";
import axiosInstance from "@/axios";
import EditDepartement from "./EditDepartement";

const columns: TableColumn<Departement>[] = [
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
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    style: {
      color: "rgba(0,0,0,.54)",
    },
  },
  {
    cell: (row) => (
      <BasicMenu
        id={row.id}
        editHandeler={idDepartement}
        deleteHandeler={deleteDepartementAtom}
      />
    ),
    width: "80px",
    style: {
      borderBottom: "1px solid #FFFFFF",
      marginBottom: "-1px",
    },
  },
];

export default function ListDepartments() {
  const [departements, setDepartment] = useAtom(departementsAtom);
  const id = useAtomValue(idDepartement);

  const { isLoading, isError, data } = useQuery({
    queryFn: () =>
      axiosInstance.get("/departements").then((res) => res.data.departements),
    onSuccess: (departements) => {
      setDepartment(departements);
    },
  });

  return (
    <>
      <div className="flex mb-5">
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}
          className="flex-grow"
        >
          Liste des Départements
        </h1>
        <AddDepartement />
      </div>
      <nav className="lx" aria-label="Breadcrumb">
        <ol role="list" className="lx yz abj">
          <li>
            <div>
              <a href="#" className="axp bkx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="nz sb up"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="t">Home</span>
              </a>
            </div>
          </li>
          <li>
            <div className="lx yz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="nz sb up axp"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#" className="jx awa awe axr bkz">
                Départements
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        {isLoading && <Loading />}
        {isError &&
          Error(
            "Could not get the corresponding data. Check if the server is up!"
          )}
        {data && (
          <DataTable data={departements} columns={columns} filter={"nom"} />
        )}
      </div>
      {id != 0 && <EditDepartement />}
    </>
  );
}
