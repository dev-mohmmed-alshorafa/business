import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Apiservices from '../../services/ApiServices';
import { useDispatch } from 'react-redux';
import { actions } from '../../Redux';
export default function Delete({item}) {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  const handelDelete=()=>{
    Apiservices.delete(`/blog/${item.id}`).then((res)=>{
      dispatch(actions.setUpdate())
      setOpen(false);

    })
  }

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
       <DeleteIcon sx={{color:'red'}}/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handelDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}