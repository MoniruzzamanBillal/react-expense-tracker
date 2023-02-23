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
  const [detailInpValue, setDetailInpValue] = useState("");
  const [moneyInpValue, setMoneyInpValue] = useState();
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(10);
  const [expense, setExpense] = useState(20);
  const [detail, setdetail] = useState([]);
  const [amount, setAmount] = useState([]);
  const [obj, setObj] = useState([]);
  const [posAmount, setPosAmount] = useState([]);
  const [negAmount, setNegAmount] = useState([]);

  function addTransaction() {
    // console.log(amount);
    // console.log(detail);

    // for history section
    let prevObj = [...obj];

    let hisObj = {
      id: Math.random(),
      detail: detailInpValue,
      value: moneyInpValue,
    };

    prevObj.push(hisObj);
    setObj(prevObj);
    console.log(prevObj);
    setMoneyInpValue();
    setDetailInpValue("");
  }

  return (
    <>
      <appContext.Provider
        value={{
          obj,
          setObj,
          detailInpValue,
          setDetailInpValue,
          moneyInpValue,
          setMoneyInpValue,
          balance,
          setBalance,
          income,
          setIncome,
          expense,
          setExpense,
          detail,
          setdetail,
          posAmount,
          setPosAmount,
          negAmount,
          setNegAmount,
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
