import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import more from "@/assets/more.png";
import edit from "@/assets/edit.png";
import supprimer from "@/assets/delete.png";
import EditDepartement from "@/views/admin/department/EditDepartement";
import { useState } from "react";
import { idDepartement, deleteDepartementMutation } from "@/atoms/departement";
import { useAtom } from "jotai";

type Props = {
  id: number;
};

export default function BasicMenu({ id }: Props) {
  const [, setId] = useAtom(idDepartement);
  const [{ mutate }] = useAtom(deleteDepartementMutation);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    mutate(id);
  };

  const editClose = () => {
    setAnchorEl(null);
    setOpenEdit(true);
    setId(id);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={more}></img>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={editClose}>
          <img style={{ marginRight: "10px" }} src={edit}></img>Modifier
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img style={{ marginRight: "10px" }} src={supprimer}></img>Supprimer
        </MenuItem>
      </Menu>
      {openEdit && <EditDepartement />}
    </div>
  );
}
