import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function IncomeExpenseshow() {
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
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          {/* <p  className="money plus">
            +$0.00
          </p> */}
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          {/* <p id="money-minus" className="money minus">
            -$0.00
          </p> */}
          <p id="money-minus" className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </>
  );
}
