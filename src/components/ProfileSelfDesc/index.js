import React from "react";
import Styles from "./index.module.css";

function ProfileSelfDesc() {
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
      <h3>What best describes you?</h3>
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

export default ProfileSelfDesc;
