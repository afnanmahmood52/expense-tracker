import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import { Divider, Grid } from '@material-ui/core';
import classes from './App.module.css'
import Transaction from './component/Transaction';


function App() {


  return (
    <Grid container xs ={12} justify='center' direction='column' alignItems='center' style={{marginTop:'50px'}} >
      <Grid item xs={10} md={6} >

            <Typography variant='h3' style={{textAlign:'center', fontWeight:'600', color:'green', marginBottom:'20px'}}>Expense Tracker</Typography>

            <div className={classes.balance_section}>
              <Typography variant='h5' >Your Balance</Typography>
              <Typography variant='h5' style={{fontWeight:'600', color:'green'}}>2600.00 PKR</Typography>
            </div>

            <div className={classes.detail_expense}>
              
              <div className={classes.income_section} >
                <Typography variant='h6' style={{fontWeight:'600', color:'blue'}} >INCOME</Typography>
                <Typography variant='h6' style={{fontWeight:'500', color:'blue'}} >30000 PKR</Typography>
              </div>
            
              <hr className={classes.divider}/>
              <div className={classes.expense_section}>
                <Typography variant='h6' style={{fontWeight:'600', color:'red'}} >EXPENSE</Typography>
                <Typography variant='h6' style={{fontWeight:'500', color:'red'}}>30000 PKR</Typography>
              </div>
            </div>

            <Transaction/>        
          
      
      </Grid>
    </Grid>    
  );
}

export default App;
