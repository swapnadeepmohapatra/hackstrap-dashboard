import React from "react";
import Styles from "./index.module.css";

function WelcomeMessage() {
  return (
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
  );
}

export default WelcomeMessage;
