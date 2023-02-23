import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function AddTransaction({ addTransaction }) {
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
      <h3>Add new transaction</h3>
      <form id="form">
        {/* text detail section  */}
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={detailInpValue}
            onChange={(e) => {
              setDetailInpValue(e.target.value);
              // console.log(e.target.value);
            }}
          />
        </div>

        {/* money amount section  */}
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>

          {/* money give input  */}
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={moneyInpValue}
            onChange={(e) => {
              setMoneyInpValue(e.target.value);
            }}
          />
        </div>

        {/* add transaction button  */}
        <button
          className=" btn btn-success"
          type="button"
          onClick={addTransaction}
        >
          Add transaction
        </button>
      </form>
    </>
  );
}
