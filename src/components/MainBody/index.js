import React from "react";
import Styles from "./index.module.css";
import List from "./list";
import ListRec from "./listRec";

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
      <div className={Styles.recomd}>
        <h3>Recommended competitions, events and opportunities</h3>
        <div className={Styles.line}></div>
        <div>
          <ListRec />
        </div>
      </div>
      <div className={Styles.grid3}>
        <div className={Styles.manageEntries}>
          <h3>Manage your Entires</h3>
          <div className={Styles.line}></div>
        </div>
        <div className={Styles.manageEntries}>
          <h3>Complete Your Profile</h3>
          <div className={Styles.line}></div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
