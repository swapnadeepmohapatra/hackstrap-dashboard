import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";

function CustomerSupport({ showAll }) {
  const [show, setShow] = useState(showAll);

  useEffect(() => {
    setShow(showAll);
  }, [showAll]);

  return (
    <div className={Styles.manageProfile}>
      <h3>
        Customer Support
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1201 10.1338L5.64144 6L0.162754 10.1338V13.5L5.64144 9.36621L11.1201 13.5V10.1338Z"
                fill="#00BCD4"
              />
              <path
                d="M11.1201 4.13379L5.64144 0L0.162754 4.13379V7.5L5.64144 3.36621L11.1201 7.5V4.13379Z"
                fill="#00BCD4"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.269531 2.92578L4.75976 6.396L9.24999 2.92578L9.24999 0.0999346L4.75976 3.57015L0.269531 0.0999346L0.269531 2.92578Z"
                fill="#00BCD4"
              />
              <path
                d="M0.269531 7.96265L4.75976 11.4329L9.24999 7.96265L9.24999 5.1368L4.75976 8.60701L0.269531 5.1368L0.269531 7.96265Z"
                fill="#00BCD4"
              />
            </svg>
          )}
        </button>
      </h3>
      {show && (
        <>
          <div className={Styles.line}></div>
          <h4>
            Contact us for any queries or support at{" "}
            <strong>contact@hackstrap.com</strong> or
            <strong>+91 8639688604</strong>
          </h4>
          <h4>
            Join the telegram support group chat with this{" "}
            <strong>invite link</strong>{" "}
          </h4>
        </>
      )}
    </div>
  );
}

export default CustomerSupport;
