import React from 'react'
import classes from './Transaction.module.css'
import Typography from '@material-ui/core/Typography';
import TranscItem from './TranscItem';

export default function Transaction() {
  return (
    <div className={classes.transaction_box}>
      <Typography variant='h6' style={{fontWeight:'600', color:'green', marginBottom:'10px'}} >History of Expenses</Typography>

      <TranscItem title="Cash" value="+500 PKR"/>
      <TranscItem title="Book Item" value="-300000 PKR"/>
      <TranscItem title="Electricity Bill" value="-15000 PKR"/>

    </div>
  )
}
