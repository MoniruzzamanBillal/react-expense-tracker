import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function History() {
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
      <h3>History</h3>
      <ul id="list" className="list">
        {/* <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li> */}
        <li className="minus">
          {detail} <span>-${amount}</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}
