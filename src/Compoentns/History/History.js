import React, { useContext } from "react";
import { appContext } from "../Parent/Parent";

export default function History() {
  const { obj } = useContext(appContext);

  return (
    <>
      <h3>History</h3>

      <ul id="list" className="list">
        {obj.map((ele) => {
          return (
            <>
              {ele.value < 0 ? (
                <li className="minus" key={ele.id}>
                  {ele.detail}
                  <span>-${ele.value * -1}</span>
                  <button className="delete-btn">x</button>{" "}
                </li>
              ) : (
                <li className="plus" key={ele.id}>
                  {ele.detail} <span>${ele.value}</span>
                  <button className="delete-btn">x</button>{" "}
                </li>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
}
