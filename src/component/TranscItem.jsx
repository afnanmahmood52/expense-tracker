import React,{useContext} from "react";
import classes from "./TranscItem.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import ClearIcon from "@material-ui/icons/Clear";

import {GlobalContext} from '../context/GlobalState';

export default function TranscItem(props) {
  const {deleteTransaction} = useContext(GlobalContext);

  const border_color = props.value[0] === "-" ? "red" : "blue";

  console.log(props.value)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Update, setUpdate] = React.useState(false);

  const handleUpdateUpdate = () => {
    setUpdate(true);
  };

  const handleUpdateClose = () => {
    setUpdate(false);
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
            <EditIcon onClick={handleUpdateUpdate}/>
            <Dialog
              open={Update}
              onClose={handleUpdateClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle
                id="form-dialog-title"
                style={{
                  backgroundColor: "#4747d1",
                  color: "white",
                  textAlign: "center",
                }}
              >
                UPDATE TRANSACTION
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  Fill in the following information.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="detail"
                  label="Enter Transaction Name"
                  variant="outlined"
                  type="text"
                  fullWidth
                  //onChange={handleTranscNameChange}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="amount"
                  label="Enter the Amount (PKR)"
                  type="number"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                  //onChange={handleTranscValueChange}
                />
                
              </DialogContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DialogActions>
                  <Button
                    onUpdate={handleUpdateClose}
                    variant="contained"
                    color="primary"
                    startIcon={<CancelIcon />}
                  >
                    CANCEL
                  </Button>
                  <Button
                    //onUpdate={getFormValues}
                    variant="contained"
                    style={{ backgroundColor: "#558000", color: "white" }}
                    startIcon={<EditIcon />}
                  >
                    UPDATE
                  </Button>
                </DialogActions>
              </div>
            </Dialog>
          </IconButton>

          <IconButton style={{ transform: "scale(0.9)" }}>
            <ClearIcon
              onClick={handleClickOpen}
              styles={{ transform: "scale(1)" }}
            />
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
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                  startIcon={<CancelIcon />}
                >
                  CANCEL
                </Button>
                <Button
                  onClick={()=>{
                    deleteTransaction(props.id);
                    handleClose()
                  }}
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteForeverIcon />}
                >
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
