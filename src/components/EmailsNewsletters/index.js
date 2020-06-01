import React from "react";
import Styles from "./index.module.css";

function EmailsNewslettters() {
  return (
    <div>
      <div className={Styles.mainDiv}>
        <h3>I’d like to receive emails and newsletters</h3>
        <label className={Styles.switch}>
          <input type="checkbox" />
          <span className={Styles.slider}></span>
        </label>
      </div>
    </div>
  );
}

export default EmailsNewslettters;
