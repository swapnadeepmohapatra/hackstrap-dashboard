import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Classes from "./Navbar.module.scss";
import AngleDown from "../../images/angle-down.svg";
import Sidebar from "../../images/sidebar.svg";
import Search from "../../images/searchBar.svg";
import Logo from "../../images/adjacentLogo.svg";
import InfoBox from "../InfoBox/InfoBox";

function Navbar({ toggleSidebar, renderSidebar, isAuth, name, email }) {
  const [startup, setStartup] = useState([]);
  const [investor, setInvestor] = useState([]);
  // const [incubator, setIncubator] = useState([]);
  // const [accelerator, setAccelerator] = useState([]);
  const [showInfoBox, setShowInfoBox] = useState({ type: null });
  // const [navbarClass, setNavbarClass] = useState([Classes.navbar])

  const setNull = () => {
    setInvestor([]);
    setStartup([]);
    // setIncubator([]);
    // setAccelerator([]);
  };

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

  const search = async (e) => {
    const query = e.target.value;
    if (query) {
      const url = `https://api.hackstrap.com/beta/api/database/search/`;
      try {
        const [
          resStartup,
          resInvestor,
          resIncubator,
          resAccelerator,
        ] = await Promise.all([
          // axios.get(url + "companies?query=" + query),
          // axios.get(url + "investors?query=" + query),
          // axios.get(url + 'incubators?query=' + query),
          // axios.get(url + "accelerators?query=" + query),
        ]);
        setStartup(resStartup.data.result);
        setInvestor(resInvestor.data.result);
        // setIncubator(resIncubator.data.result);
        // setAccelerator(resAccelerator.data.result);
      } catch (error) {
        console.error(error);
      }
    } else {
      setNull();
    }
  };

  const renderAuthenticatedPart = () => {
    if (isAuth) {
      return (
        <div className={Classes.buttons}>
          {/* <UserCard name={name} email={email} /> */}
        </div>
      );
    } else {
      return (
        <div className={Classes.buttons}>
          <Link to={{ pathname: "/authentication", state: { isSignin: true } }}>
            <div className={Classes.authWrapper}>
              <button className={Classes.in}>Sign In</button>
            </div>
          </Link>
          <Link
            to={{ pathname: "/authentication", state: { isSignin: false } }}
          >
            <div className={Classes.authWrapper}>
              <button className={Classes.up}>Sign Up</button>
            </div>
          </Link>
        </div>
      );
    }
  };

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
                  onKeyUp={search}
                  placeholder="Search for Companies, Investors,  Incubators and more"
                />
              </div>
              <div className={Classes.icon}>
                <img src={Search} alt="search" />
              </div>
              <div className={Classes.resultBox} ref={node}>
                {/* <SearchResult
                  tag="Companies"
                  result={startup}
                  navTo="company"
                  setNull={setNull}
                />
                <SearchResult
                  tag="Investors"
                  result={investor}
                  navTo="investor"
                  setNull={setNull}
                /> */}
                {/* <SearchResult tag="Incubators" result={incubator} navTo="incubator" setNull={setNull} />
                                <SearchResult tag="Accelerator" result={accelerator} navTo="accelerator" setNull={setNull} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={Classes.wrapper}></div>
      </div>
    </header>
  );
}

export default Navbar;
