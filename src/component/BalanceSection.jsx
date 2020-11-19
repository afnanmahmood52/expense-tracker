import React,{useContext} from "react";
import Typography from '@material-ui/core/Typography';
import {GlobalContext} from '../context/GlobalState'

export default function BalanceSection() {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const BalanceTotal = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item)=>(acc += item),0)
    .toFixed(2)
  
  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc,item)=>(acc += Math.abs(item)),0)
    .toFixed(2)

    console.log(expense)
    console.log(income)

  //console.log(total)

  return (
    <div>
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          fontWeight: "600",
          color: "green",
          marginBottom: "20px",
        }}
      >
        Expense Tracker
      </Typography>

      <div className="balance_section">
        <Typography variant="h5">Your Balance</Typography>
        <Typography
          variant="h5"
          style={{ fontWeight: "600", color: "green" }}
        >{`${BalanceTotal} PKR`}</Typography>
      </div>

      <div className="detail_expense">
      <div className="income_section">
          <Typography variant="h6" style={{ fontWeight: "600", color: "blue" }}>
            INCOME
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "500", color: "blue" }}
          >{`${income} PKR`}</Typography>
        </div>

        <hr className="divider"/>
        <div className="expense_section">
          <Typography variant="h6" style={{ fontWeight: "600", color: "red" }}>
            EXPENSE
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "500", color: "red" }}
          >{`${expense} PKR`}</Typography>
        </div>
      </div>
        
    </div>
  );
}
