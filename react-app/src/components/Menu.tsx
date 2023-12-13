import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import more from "@/assets/more.png";
import edit from "@/assets/edit.png";
import supprimer from "@/assets/delete.png";
import ModalEdit from './ModalEdit';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [openEdit , setOpenEdit] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const editClose = () => {
    setAnchorEl(null);
    setOpenEdit(true);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
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
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={editClose}><img style={{marginRight:"10px"}} src={edit}></img>Modifier</MenuItem>
        <MenuItem onClick={handleClose}><img style={{marginRight:"10px"}} src={supprimer}></img>Supprimer</MenuItem>
      </Menu>
      {/* { openEdit && <ModalEdit  condition={openEdit}/>} */}
    </div>
  );
}