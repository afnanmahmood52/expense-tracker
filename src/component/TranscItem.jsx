import React,{useContext, useEffect} from "react";
import classes from "./TranscItem.module.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import ClearIcon from "@material-ui/icons/Clear";

import {GlobalContext} from '../context/GlobalState';

import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'

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

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

  return (
    <div
      className={classes.trans_item}
      style={{ borderRight: `6px solid ${border_color}` }}
      data-aos="slide-right"
      data-aos-mirror="true"
      data-aos-duration="700"
      data-aos-offset="0"
    >
      <h6 className={classes.trans_title}>{props.title}</h6>

      <div className={classes.rightSection}>
        <div className={classes.editButton}>
          <h6 className={classes.trans_value}>{props.value}</h6>
          

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
