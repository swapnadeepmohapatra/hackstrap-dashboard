import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Classes from "./Navbar.module.scss";
import AngleDown from "../../images/angle-down.svg";
import Sidebar from "../../images/sidebar.svg";
import Search from "../../images/searchBar.svg";
import Logo from "../../images/adjacentLogo.svg";
import InfoBox from "../InfoBox/InfoBox";

function Navbar({ toggleSidebar, renderSidebar, isAuth, name, email }) {
  const [showInfoBox, setShowInfoBox] = useState({ type: null });
  // const [navbarClass, setNavbarClass] = useState([Classes.navbar])

  const setNull = () => {};

  const node = useRef();
  const showBoxes = useRef();
  const showProducts = useRef();

  useEffect(() => {
    // let prevScrollPos = -1;

    const handleClick = (e) => {
      if (node.current.contains(e.target)) {
        return;
      } else if (showBoxes.current && showBoxes.current.contains(e.target)) {
        return;
      } else if (
        showProducts.current &&
        showProducts.current.contains(e.target)
      ) {
        return;
      }
      setNull();
      setShowInfoBox({ type: null });
    };

    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // window.addEventListener('scroll', () => scrollFunc(navbarClass));

    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
      // document.removeEventListener('scroll', () => scrollFunc(navbarClass));
    };
  }, []);

  const handleInfoBox = (type) => {
    if (type !== showInfoBox.type) setShowInfoBox({ type });
    else setShowInfoBox({ type: null });
  };

  return (
    <header className={[Classes.navbar, Classes.sticky].join(" ")}>
      <div className={Classes.wrapper}>
        <div className={Classes.dropper} onClick={renderSidebar}>
          <img src={Sidebar} alt="dotted menu" />
        </div>
        <Link
          to={isAuth ? "/hub" : "/"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={Classes.logo}>
            <img src={Logo} alt="Hackstrap logo" />
          </div>
        </Link>
        <div className={Classes.menu}>
          <ul>
            <li ref={showProducts} onClick={() => handleInfoBox(2)}>
              Products <img src={AngleDown} alt="angle down" />
              {showInfoBox.type === 2 ? (
                <InfoBox className={Classes.box}>
                  <div className={Classes.infoContent}>
                    <Link to="/products/newsly">
                      <p>Newsly</p>
                    </Link>
                    <Link to="/products/teamboard">
                      <p>Teamboard</p>
                    </Link>
                    <Link to="/one-page-pitch">
                      <p>One Page Pitch</p>
                    </Link>
                  </div>
                </InfoBox>
              ) : null}
            </li>
          </ul>
          <div className={Classes.search}>
            <div className={Classes.searchInput}>
              <div className={Classes.input}>
                <input
                  type="text"
                  placeholder="Search for Companies, Investors,  Incubators and more"
                />
              </div>
              <div className={Classes.icon}>
                <img src={Search} alt="search" />
              </div>
              <div className={Classes.resultBox} ref={node}></div>
            </div>
          </div>
        </div>
        <div className={Classes.wrapper}></div>
      </div>
    </header>
  );
}

export default Navbar;
