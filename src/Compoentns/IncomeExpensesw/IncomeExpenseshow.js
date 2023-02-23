import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function IncomeExpenseshow() {
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
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>

          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>

          <p id="money-minus" className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </>
  );
}
