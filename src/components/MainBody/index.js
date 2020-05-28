import React from "react";
import Styles from "./index.module.css";
import WelcomeMessage from "../WelcomeMessage";
import SumbitEntry from "../SubmitEntry";
import RecommendedCompetitions from "../RecommendedCompetitions";
import ManageEntries from "../ManageEntries";

function MainBody() {
  return (
    <div className={Styles.welcomeMsgParent}>
      <WelcomeMessage />
      <SumbitEntry />
      <RecommendedCompetitions />
      <div className={Styles.grid2}>
        <ManageEntries />
        <div className={Styles.manageEntries}>
          <h3>Complete Your Profile</h3>
          <div className={Styles.line}></div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
