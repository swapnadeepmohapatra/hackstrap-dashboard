import React from "react";
import Styles from "./index.module.css";
import Icon from "./logo.svg";

function FollowsLike({ heading }) {
  const data = ["Amazon", "Facebook", "Google"];
  return (
    <div className={Styles.followsLike}>
      <h3>{heading}</h3>
      <div className={Styles.line}></div>
      <ul>
        {data.map((item, index) => {
          return (
            <li>
              <img src={Icon} />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FollowsLike;
