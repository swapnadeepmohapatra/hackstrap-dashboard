import React from "react";
import Styles from "./index.module.css";
import WelcomeMessage from "../WelcomeMessage";
import SumbitEntry from "../SubmitEntry";
import RecommendedCompetitions from "../RecommendedCompetitions";
import ManageEntries from "../ManageEntries";
import CompleteProfile from "../CompleteProfile";
import ProfileSelfDesc from "../ProfileSelfDesc";

function MainBody() {
  return (
    <div className={Styles.welcomeMsgParent}>
      <WelcomeMessage />
      <SumbitEntry />
      <RecommendedCompetitions />
      <div className={Styles.grid2}>
        <ManageEntries />
        <CompleteProfile />
      </div>
      <div className={Styles.grid3}>
        <ProfileSelfDesc />
        <ProfileSelfDesc />
        <ManageEntries />
      </div>
    </div>
  );
}

export default MainBody;
