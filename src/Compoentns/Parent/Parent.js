import React, { createContext, useState } from "react";
import "./Parent.css";
import "../../Compoentns/IncomeExpensesw/IncomeExpenseshow.css";
import "../History/History.css";
import Balance from "../Balance/Balance";
import IncomeExpenseshow from "../IncomeExpensesw/IncomeExpenseshow";
import History from "../History/History";
import AddTransaction from "../AddTransaction/AddTransaction";

export const appContext = createContext();

export default function Parent() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(10);
  const [expense, setExpense] = useState(20);
  const [detail, setdetail] = useState("Initial detail");
  const [amount, setAmount] = useState(0);

  function addTransaction() {
    console.log(amount);
    console.log(detail);
  }

  return (
    <>
      <appContext.Provider
        value={{
          balance,
          setBalance,
          income,
          setIncome,
          expense,
          setExpense,
          detail,
          setdetail,
          amount,
          setAmount,
        }}
      >
        <div className="container">
          <Balance />
          <IncomeExpenseshow />
          <History />
          <AddTransaction addTransaction={addTransaction} />
        </div>
      </appContext.Provider>
    </>
  );
}
