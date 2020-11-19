import React, {useContext} from 'react'
import classes from './TransactionList.module.css'
import Typography from '@material-ui/core/Typography';
import TranscItem from './TranscItem';
import {GlobalContext} from '../context/GlobalState'

export default function TransactionList() {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)

  return (
    <div className={classes.transaction_box}>
      <Typography variant='h6' style={{fontWeight:'600', color:'green', marginBottom:'10px'}} >History of Expenses</Typography>
      {
        transactions.map(transaction=> (<TranscItem key ={transaction.id} id={transaction.id} title={transaction.detail} value={`${transaction.amount} PKR`}/>))
      }
    </div>
  )
}
