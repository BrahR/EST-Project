import { useState } from "react";
import { useParams } from "react-router-dom";

interface departement {
  nom: String;
  description: String;
}

export default function EditDepartement() {
  let id: number = useParams();
  const [depart, setDepart] = useState<departement>({} as departement);
  const [error, setError] = useState("");

  if (id == 0) {
    setDepart({ nom: "DEP-A", description: "Description de departement A" });
  } else if (id == 1) {
    setDepart({ nom: "DEP-B", description: "Description de departement B" });
  } else {
    setError("Cette Département n'existe pas");
  }
}
