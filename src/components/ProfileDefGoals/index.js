import React from "react";
import Styles from "./index.module.css";

function ProfileDefGoals() {
  const data = [
    "Startup",
    "Corporate",
    "Angel Investor",
    "VC Investor",
    "Other Investor",
    "Fundraising consultant",
    "Government / Enabler",
    "Incubator / Accelerator",
  ];
  return (
    <div className={Styles.manageEntries}>
      <h3>Define your goals for using Hackstrap</h3>
      <div className={Styles.line}></div>
      <div>
        <ul className={Styles.entriesList}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <input type="checkbox" name={item} id="" />
                <label>{item}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProfileDefGoals;
