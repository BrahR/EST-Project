import { Link } from "react-router-dom"

interface departement {
    nom: String; description: String
}

const Modifier = (index: number, nom: String, desc: String) => {
    return (
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">
                <form className="d-flex flex-column">
                    <div className="mb-3">
                        <label className="form-label">Identifiant</label>
                        <input type="number" readOnly className="form-control" value={index} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Identifiant</label>
                        <input type="text" className="form-control" value="DEP-A" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mot de passe</label>
                        <input type="text" className="form-control" value="Description de departement A"/>
                    </div>
                </form>
                <div className="mt-2 pt-2 border-top">
                    <button type="button" className="btn btn-primary btn-sm">Modifier</button>
                    <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="toast">Fermer</button>
                </div>
            </div>
        </div>
    )
}
function DepartsList({ list }: { list: departement[] }): JSX.Element {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                    <th scope="col" colSpan={2} className="text-center">Gérer</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {list.map(({ nom, description }, index) => (
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{nom}</td>
                        <td>{description}</td>
                        <td><button className="btn btn-primary" onClick={() => { Modifier(index, nom, description) }}>Modifier</button></td>
                        <td><button className="btn btn-danger" >Supprimer</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
const departs = [{ nom: "DEP-A", description: "Description de departement A" }, { nom: "DEP-B", description: "Description de departement B" }]
export default function Departement() {
    return (
        <div>
            <div className="d-flex justify-content-between mb-5">
                <h1>Departement</h1>
                <Link to="/addDepartement" className="btn btn-dark h-25">Ajouter un Departement</Link>
            </div>
            <div>
                <DepartsList list={departs} />
            </div>
        </div>
    )
}