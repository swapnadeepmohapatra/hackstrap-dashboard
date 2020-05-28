import React from "react";
import Styles from "./index.module.css";

function ManageEntries() {
  const data = [
    "People",
    "Companies",
    "Investors",
    "Incubators",
    "Accelerators",
    "Schools",
  ];

  return (
    <div className={Styles.manageEntries}>
      <h3>Manage your Entires</h3>
      <div className={Styles.line}></div>
      <div>
        <ul className={Styles.manageItemsList}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <button disabled={item === "People"}>{item}</button>
              </li>
            );
          })}
        </ul>
        <ul className={Styles.entriesList}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <p>
                  {index + 1}. {item}
                </p>
                {index === 3 && <p className={Styles.caption}>Pending</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ManageEntries;
