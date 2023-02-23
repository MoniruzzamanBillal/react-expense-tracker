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

      {balance < 0 ? (
        <h1 id="balance">-${balance * -1}</h1>
      ) : (
        <h1 id="balance">${balance}</h1>
      )}
    </>
  );
}
