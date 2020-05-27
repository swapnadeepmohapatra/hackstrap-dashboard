import React, { useState, Fragment } from "react";
// import UserProfile from '../../UserProfile/base'
import User from "../../../images/user.svg";
import Classes from "./userCard.module.css";

// Get User Profile Component
export const UserProfileWrapper = ({ onClick }) => (
  <div className={Classes.UserProfileWrapper}>
    {/* <UserProfile closeHandler={onClick} /> */}
  </div>
);

function UserCard() {
  const [displayProfile, setDisplayProfile] = useState(false);

  const open = () => setDisplayProfile(true);
  const close = () => setDisplayProfile(false);

  return (
    <Fragment>
      <div className={Classes.userImage} onClick={open}>
        <img src={User} alt="user" />
      </div>
      {displayProfile && <UserProfileWrapper onClick={close} />}
    </Fragment>
  );
}

export default UserCard;
