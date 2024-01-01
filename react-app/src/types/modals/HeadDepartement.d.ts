import Departement from "./Departement";

type HeadDepartement = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password?: string;
  id_departement?: number;
  departement?: Departement;
};

export default HeadDepartement;
