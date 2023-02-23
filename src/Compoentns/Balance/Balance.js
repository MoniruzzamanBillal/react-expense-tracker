import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function Balance() {
  const {
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
  } = useContext(appContext);
  return (
    <>
      <h4>Your Balance</h4>
      {/* <h1 id="balance">$0.00</h1> */}
      <h1 id="balance">${balance}</h1>
    </>
  );
}
