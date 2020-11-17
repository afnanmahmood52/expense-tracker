import React from "react";
import classes from "./TranscItem.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import ClearIcon from '@material-ui/icons/Clear';

export default function TranscItem(props) {
  const border_color = props.value[0] === "+" ? "blue" : "red";

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={classes.trans_item}
      style={{ borderRight: `6px solid ${border_color}` }}
    >
      <h6 className={classes.trans_title}>{props.title}</h6>

      <div className={classes.rightSection}>
        
        <div className={classes.editButton}>
          <h6 className={classes.trans_value}>{props.value}</h6>
          <IconButton>
            <EditIcon />
          </IconButton>

          <IconButton style={{transform: 'scale(0.9)'}}>
            <ClearIcon onClick={handleClickOpen} styles={{transform: 'scale(1)'}}/>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Are your sure you want to delete this transaction?
              </DialogTitle>
              
              <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary" startIcon={<CancelIcon />}>
                    CANCEL
                </Button>
                <Button onClick={handleClose} variant="contained" color="secondary" startIcon={<DeleteForeverIcon />}>
                    DELETE
                </Button>
                
              </DialogActions>
            </Dialog>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
