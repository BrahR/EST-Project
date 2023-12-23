import type { Departement } from ".";

type Filiere = {
    id: number;
    nom : string ;
    description : string ;
    departement : Departement ;
}

export default Filiere ;