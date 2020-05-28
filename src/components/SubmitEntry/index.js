import React from "react";
import List from "../MainBody/list";
import Styles from "./index.module.css";
function SumbitEntry() {
  return (
    <div className={Styles.entrySubm}>
      <h3>List yourself or Submit an entry</h3>
      <div className={Styles.line}></div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default SumbitEntry;
