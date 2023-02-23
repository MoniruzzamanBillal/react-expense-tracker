import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function Balance() {
  const { balance } = useContext(appContext);
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
