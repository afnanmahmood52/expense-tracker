import "./App.css"
import 'fontsource-roboto';
import { Grid } from '@material-ui/core';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import React from 'react'

import {GlobalProvider} from './context/GlobalState'
import expense_items  from './component/expenses'
import BalanceSection from './component/BalanceSection';

function App() {
  //const [Income, setIncome] = React.useState(0)
  //const [Expense, setExpense] = React.useState(0)
  //const [Balance, setBalance] = React.useState(Income-Expense)

  //let E = 0
  //let I = 0

  //expense_items.map((item)=>{
  //  ((item.TranscType === 'Expense') ? Expense += (item.amount) : Income += Math.abs(item.amount))
  //})

  //setIncome(I)
  //setIncome(E)

  //console.log(Income)
  //console.log(Expense)

  return (
    <GlobalProvider>
    <Grid container xs ={12} justify='center' direction='column' alignItems='center' style={{marginTop:'50px'}} >
      <Grid item xs={10} md={6} >
            <BalanceSection />
            <AddTransaction/>
            <TransactionList/>
      </Grid>
    </Grid>    
    </GlobalProvider>
  );
}

export default App;
