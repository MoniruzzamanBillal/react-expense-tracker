import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function Balance() {
  const {
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
  } = useContext(appContext);
  return (
    <>
      <h4>Your Balance</h4>
      {/* <h1 id="balance">$0.00</h1> */}
      <h1 id="balance">${balance}</h1>
    </>
  );
}
