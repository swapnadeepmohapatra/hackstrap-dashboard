import React from "react";
import Styles from "./index.module.css";
import ListRec from "../MainBody/listRec";

function RecommendedCompetitions() {
  return (
    <div className={Styles.recomd}>
      <h3>Recommended competitions, events and opportunities</h3>
      <div className={Styles.line}></div>
      <div>
        <ListRec />
      </div>
    </div>
  );
}

export default RecommendedCompetitions;
