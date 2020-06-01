import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";
import CircularProgress from "../CircularProgress";

function CompleteProfile({ showAll }) {
  const data = [
    "Complete your basic profile",
    "Update your entry in People",
    "Answer ‘What best describes you?’",
    "Answer ‘Define your goals for using Hackstrap?’",
  ];

  const [show, setShow] = useState(showAll);

  useEffect(() => {
    setShow(showAll);
  }, [showAll]);

  return (
    <div>
      <div className={Styles.manageProfile}>
        <h3>
          Complete Your Profile
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
            <div className={Styles.grid2}>
              <div className={Styles.profileSteps}>
                <p>
                  Get 1 week of <strong>premium plan</strong> for free by
                  completing your profile
                </p>
                <h4>Steps To Complete</h4>
                <div className={Styles.line}></div>
                <ul className={Styles.entriesList}>
                  {data.map((item, index) => {
                    return (
                      <li key={index}>
                        <p>
                          {index + 1}. {item}
                        </p>
                        {index === 3 && (
                          <svg
                            width="37"
                            height="27"
                            viewBox="0 0 37 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M34.8744 2.49406C33.8791 1.49875 32.2653 1.49875 31.27 2.49405L12.7163 21.0478C11.721 22.0431 11.721 23.6568 12.7163 24.6521V24.6521C13.7116 25.6474 15.3253 25.6474 16.3207 24.6521L34.8744 6.09838C35.8697 5.10307 35.8697 3.48936 34.8744 2.49406V2.49406Z"
                              fill="#7ED321"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.13342 10.7838C1.13315 11.7841 1.13315 13.4059 2.13342 14.4061L12.5526 24.8253C13.5529 25.8256 15.1746 25.8256 16.1749 24.8253V24.8253C17.1752 23.825 17.1752 22.2033 16.1749 21.203L5.75574 10.7838C4.75546 9.78354 3.1337 9.78354 2.13342 10.7838V10.7838Z"
                              fill="#7ED321"
                            />
                          </svg>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <CircularProgress progress={50} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CompleteProfile;
