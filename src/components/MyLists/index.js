import React from "react";
import Styles from "./index.module.css";
function MyLists() {
  const data = ["Mumbai Startups", "Chennai Investors", "Food Tech Startups"];
  return (
    <div className={Styles.manageEntries}>
      <h3>My Lists</h3>
      <div className={Styles.line}></div>
      <div>
        <ul className={Styles.entriesList}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <p>
                  {index + 1}. {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MyLists;
