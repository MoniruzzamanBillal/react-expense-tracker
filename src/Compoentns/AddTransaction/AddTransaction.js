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
            onChange={(e) => {
              // console.log(e.target.value);
              setMoneyInpValue(e.target.value);
              // let prevPosArray = [...posAmount];
              // let prevNegArray = [...negAmount];
              // if (e.target.value < 0) {
              //   prevNegArray.push(e.target.value);
              //   setNegAmount(prevNegArray);
              // } else {
              //   prevPosArray.push(e.target.value);
              //   setPosAmount(prevPosArray);
              // }
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
