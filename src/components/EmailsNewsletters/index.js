import React, { useState } from "react";
import Styles from "./index.module.css";

function EmailsNewslettters() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <div className={Styles.mainDiv}>
        <h3>I’d like to receive emails and newsletters</h3>
        <label className={Styles.switch}>
          <input
            defaultChecked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
            type="checkbox"
          />
          <span className={Styles.slider}></span>
        </label>
      </div>
    </div>
  );
}

export default EmailsNewslettters;
