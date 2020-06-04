import React, { useState } from "react";
import Styles from "./index.module.css";
import WelcomeMessage from "../WelcomeMessage";
import SumbitEntry from "../SubmitEntry";
import RecommendedCompetitions from "../RecommendedCompetitions";
import ManageEntries from "../ManageEntries";
import CompleteProfile from "../CompleteProfile";
import ProfileSelfDesc from "../ProfileSelfDesc";
import ProfileDefGoals from "../ProfileDefGoals";
import MyLists from "../MyLists";
import FollowsLike from "../FollowsLikes";
import EmailsNewslettters from "../EmailsNewsletters";
import CustomerSupport from "../CustomerSupport";

function MainBody() {
  const [showAll, setShowAll] = useState(true);

  const toggleCollapse = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={Styles.welcomeMsgParent}>
      <WelcomeMessage onClick={toggleCollapse} />
      <SumbitEntry showAll={showAll} />
      <RecommendedCompetitions showAll={showAll} />
      <div className={Styles.grid2}>
        <ManageEntries showAll={showAll} />
        <CompleteProfile showAll={showAll} />
      </div>
      <div className={Styles.grid3}>
        <ProfileSelfDesc showAll={showAll} />
        <ProfileDefGoals showAll={showAll} />
        <MyLists showAll={showAll} />
      </div>
      <div className={Styles.grid2Follow}>
        <FollowsLike heading={"My Follows"} showAll={showAll} />
        <FollowsLike heading={"My Likes"} showAll={showAll} />
      </div>
      <div className={Styles.grid2}>
        <EmailsNewslettters />
        <CustomerSupport showAll={showAll} />
      </div>
    </div>
  );
}

export default MainBody;
