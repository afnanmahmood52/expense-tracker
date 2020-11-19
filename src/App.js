import "./App.css"
import 'fontsource-roboto';
import { Grid } from '@material-ui/core';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import React from 'react'

import {GlobalProvider} from './context/GlobalState'
import BalanceSection from './component/BalanceSection';

function App() {
  
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
