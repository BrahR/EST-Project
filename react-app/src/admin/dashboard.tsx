import chef from "./assets/chefD.png"
import dep from "./assets/department.png"
import eltM from "./assets/elt_module.png"
import ens from "./assets/eneignant.png"
import fil from "./assets/filiere.png"
import mod from "./assets/module.png"

import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            {/* Header */}
            <div className="d-flex justify-content-between mb-5">
                <h1>Dashboard</h1>
                <Link to="/" className="btn btn-dark h-25">logout</Link>
            </div>
            {/* Body */}
            <div className="container">
                <div className="row">
                    <div className="col-8 mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="card text-center">
                                    <img src={ens} className="img-fluid" alt="..." />
                                    <div className="card-body">
                                        <Link to="/enseignant" className="btn btn-dark">Enseignant</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center">
                                    <img src={chef} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to="/chef-deparetement" className="btn btn-dark">Chef Département</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col m-1">
                                <div className="card text-center">
                                    <img src={dep} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to="/deparetement" className="btn btn-dark">Département</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col m-1">
                                <div className="card text-center">
                                    <img src={fil} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to="/filiere" className="btn btn-dark">Filière</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m-1">
                                <div className="card text-center">
                                    <img src={mod} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to="/module" className="btn btn-dark">Module</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col m-1">
                                <div className="card text-center">
                                    <img src={eltM} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to="/element-module" className="btn btn-dark">Element Module</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}