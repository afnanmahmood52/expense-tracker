import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import CancelIcon from '@material-ui/icons/Cancel';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {GlobalContext} from '../context/GlobalState'


export default function AddTransaction() {
  const {addTransaction} = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [TranscType, setTranscType] = React.useState('Income');

  const [TranscName, setTranscName] = React.useState('');
  const [TranscValue, setTranscValue] = React.useState('');

  const handleTranscNameChange = (event) => {
    setTranscName(event.target.value);
    //console.log(TranscName)
  };

  const handleTranscValueChange = (event) => {
    setTranscValue(event.target.value);
    //console.log(TranscValue)
  };

  const handleRadioChange = (event) => {
    setTranscType(event.target.value);
    //setTranscValue( event.target.value === 'Expense' ? TranscValue: (TranscValue - 2*TranscValue))
  };

  const getFormValues = (event) =>{

    event.preventDefault()

    // Check if the transaction amount or the transaction value field
    // is empty We should return in that case
    
    if(!TranscValue || !TranscName){
      if(!TranscValue && !TranscName){
        alert("Transaction Name and Amount can't be empty!!!")
        return
      }

      if(!TranscValue){
        alert("Transaction Amount can't be empty!!!")
        return
      }
      
      if(!TranscName){
        alert("Transaction Name can't be empty!!!")
        return
      }
      
    }

    console.log(TranscType)
    console.log(TranscName)
    console.log(TranscValue)

    const newTransaction = {
      id: Math.floor(Math.random()*100000),
      detail: TranscName,
      amount: (TranscType === 'Income' ? (+TranscValue) :((+TranscValue) - 2*(+TranscValue)))
    }

    addTransaction(newTransaction)

    //Empty the states after submission of add transaction
    setTranscName('');
    setTranscValue('');

    handleClose()
  };

  return (
    <div className="add-transaction">
      <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={handleClickOpen}>
        ADD NEW TRANSACTION
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{backgroundColor:'#4747d1', color:'white', textAlign:'center'}}>ADD NEW TRANSACTION</DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center', marginTop:'10px'}}>
            Fill in the following information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="detail"
            label="Enter Transaction Name"
            variant='outlined'
            type="text"
            fullWidth
            onChange={handleTranscNameChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Enter the Amount (PKR)"
            type="number"
            variant='outlined'
            fullWidth
            InputProps={{
                inputProps: { 
                    min: 0,
                }
            }}
            onChange={handleTranscValueChange}
          />
        <div style =
            {{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign:'center'
            }}>
        <FormControl component="fieldset" style={{marginTop:'20px', marginBottom:'10px'}}>
            <FormLabel component="legend" >Type of Transaction</FormLabel>
            <RadioGroup aria-label="transcType" name="transcType" value={TranscType} onChange={handleRadioChange}>
                <div>
                    <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
                    <FormControlLabel value="Income" control={<Radio />} label="Income" />
                </div>
                
            </RadioGroup>
        </FormControl>
        </div>

        </DialogContent>
        <div style =
            {{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary" startIcon={<CancelIcon />}>
                    CANCEL
                </Button>
                <Button onClick={getFormValues} variant="contained" style={{backgroundColor:'#558000', color:'white'}} startIcon={<AddCircleIcon />}>
                    ADD
                </Button>
            </DialogActions>
        </div>
        
      </Dialog>
     
    </div>
  );
}