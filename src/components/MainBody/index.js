import React from "react";
import Styles from "./index.module.css";
import List from "./list";

function MainBody() {
  return (
    <div className={Styles.welcomeMsgParent}>
      <div className={Styles.welcomeMsg}>
        <h3>Welcome to your dashboard</h3>
        <ul className={Styles.manageItemsList}>
          <li className={Styles.currPlan}>
            <button>{"Curent Plan: Basic"}</button>
          </li>
          <li className={Styles.upgPlan}>
            <button>{"Upgrade You Plan"}</button>
          </li>
          <li className={Styles.collaps}>
            <button>{"Collaps all"}</button>
          </li>
        </ul>
      </div>
      <div className={Styles.entrySubm}>
        <h3>List yourself or Submit an entry</h3>
        <div className={Styles.line}></div>
        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
