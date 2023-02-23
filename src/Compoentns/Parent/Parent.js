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
  const [balance, setBalance] = useState();
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [detail, setdetail] = useState([]);
  const [obj, setObj] = useState([]);
  const [posAmount, setPosAmount] = useState([]);
  const [negAmount, setNegAmount] = useState([]);

  function addTransaction() {
    let prevObj = [...obj];

    let hisObj = {
      id: Math.random(),
      detail: detailInpValue,
      value: moneyInpValue,
    };

    prevObj.push(hisObj);

    // for total income
    let inco = 0;
    let inc = prevObj.filter((e) => {
      if (e.value > 0) {
        inco += parseInt(e.value);
      }
    });
    setIncome(inco);

    // for total expense
    let expo = 0;
    let exp = prevObj.filter((e) => {
      if (e.value < 0) {
        expo += parseInt(e.value);
      }
    });
    setExpense(expo * -1);

    // for balance
    let bal = inco + expo;
    setBalance(bal);

    setObj(prevObj);
    setDetailInpValue("");
    setMoneyInpValue("");

    // console.log(prevObj);
    // console.log(`income = ${inco}`);
    // console.log(`expense = ${expo}`);
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
