import { Link } from "react-router-dom";
// import { DepartementType } from "@/types/modals";
import DataTableView from "@/components/DataTable";
import TableData from "@/components/TableData"


// const Modifier = (index: number, nom: string, desc: string) => {
//   return (
//     <div
//       className="toast"
//       role="alert"
//       aria-live="assertive"
//       aria-atomic="true"
//     >
//       <div className="toast-body">
//         <form className="d-flex flex-column">
//           <div className="mb-3">
//             <label className="form-label">Identifiant</label>
//             <input
//               type="number"
//               readOnly
//               className="form-control"
//               value={index}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Identifiant</label>
//             <input type="text" className="form-control" value="DEP-A" />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Mot de passe</label>
//             <input
//               type="text"
//               className="form-control"
//               value="Description de departement A"
//             />
//           </div>
//         </form>
//         <div className="mt-2 pt-2 border-top">
//           <button type="button" className="btn btn-primary btn-sm">
//             Modifier
//           </button>
//           <button
//             type="button"
//             className="btn btn-danger btn-sm"
//             data-bs-dismiss="toast"
//           >
//             Fermer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function DepartsList({ list }: { list: Departement[] }): JSX.Element {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Nom</th>
//           <th scope="col">Description</th>
//           <th scope="col" colSpan={2} className="text-center">
//             Gérer
//           </th>
//         </tr>
//       </thead>
//       <tbody className="table-group-divider">
//         {list.map(({ nom, description }, index) => (
//           <tr>
//             <th scope="row">{index}</th>
//             <td>{nom}</td>
//             <td>{description}</td>
//             <td>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => {
//                   Modifier(index, nom, description);
//                 }}
//               >
//                 Modifier
//               </button>
//             </td>
//             <td>
//               <button className="btn btn-danger">Supprimer</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
// const departs: Departement[] = [
//   { id: 1, nom: "DEP-A", description: "Description de departement A" },
//   { id: 2, nom: "DEP-B", description: "Description de departement B" },
// ];

const mockData = [
  {
    Nom: "Genie Informatique",
    Description: "Bref description sur le départemnt Génie Informatique"
  },
  {
    Nom: "Genie Mécanique",
    Description: "Bref description sur le départemnt Génie Mécanique"
  },
  {
    Nom: "Genie Logiciel",
    Description: "Bref description sur le départemnt Génie Logiciel"
  },
  {
    Nom: "Genie Electrique",
    Description: "Bref description sur le départemnt Génie Electrique"
  },
  // Add more data as needed
];

export default function Departement() {
  return (
    <div>
      <div className="d-flex mb-5" style={{border:'1px solid green'}}> 
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' ,border:'1px solid blue'}} className="flex-grow">Liste des Départements</h1>
        <div style={{border:'1px solid red'}}>
          <Link to="/addDepartement" className="btn btn-dark h-25">
            Ajouter un Departement
          </Link>
        </div>

      </div>
      <div>
        {/* <DataTableView data={mockData.map((item) => Object.values(item))} /> */}
        <TableData />
        {/* <DepartsList list={departs} /> */}
      </div>
    </div>
  );
}
