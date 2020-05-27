import React, { useState } from 'react';
import { NavLink, Link, withRouter, useLocation } from 'react-router-dom';
import Search from '../../../images/search.svg';
// import Home from '../../../images/home.svg';
import Menu from '../../../images/menu.svg';
import Chat from '../../../images/chat.svg';
// import Bell from '../../../images/bell.svg';
// import Extra from '../../../images/extra.svg';
import Settings from '../../../images/settings.svg';
import logo from '../../../images/newsly/logo.svg';
import board from '../../../images/TeamBoard/board.svg';

import './sidebar1.scss';
import { UserProfileWrapper } from '../../Navbar/UserCard/userCard';

function Sidebar1(props) {
  // Takes boolean to return dynamic css
  let addDynamicSidebarCss = (isPropsTrue) =>
    isPropsTrue ? 'sidebar1-images-box highlight' : 'sidebar1-images-box';


  const NewslyPath = ['/products/newsly'];

  const TrelloPath = ['/products/teamboard'];
  let location = useLocation();
  const SidebarPath = location.pathname;

  const [displayProfile, setDisplayProfile] = useState(false)

  return (
    <section className="Sidebar1">
      <div className="sidebar1-images-container">
        <div className="sidebar1-images-container-envelop">
          {SidebarPath.includes(NewslyPath) ? (
            <div
              className={addDynamicSidebarCss(props.displayNewslySidebar)}
              onClick={() => props.ShowNewslySidebar()}
            >
              <img src={logo} alt="Newsly" className="sidebar1-images" />
            </div>
          ) : null}
          <div
            className={addDynamicSidebarCss(props.display)}
            onClick={() => props.click()}
          >
            <img src={Search} alt="Search" className="sidebar1-images" />
          </div>
          {/* HOME IS TEMPORARILY HIDDEN */}
          {/* <Link to="/hub">
            <div className="sidebar1-images-box">
              <img src={Home} alt="Home" className="sidebar1-images" />
            </div>
          </Link> */}
          <div className="sidebar1-images-box">
            <img src={Menu} alt="Menu" className="sidebar1-images" />
          </div>
          {SidebarPath.includes(TrelloPath) ? (
            <div
              className={addDynamicSidebarCss(props.displayTrelloSidebar)}
              onClick={() => props.ShowTrelloSidebar()}
            >
              <img src={board} alt="Trello" className="sidebar1-images" />
            </div>
          ) : null}
          <NavLink activeClassName="highlight" to="/chat">
            <div className="sidebar1-images-box">
              <img src={Chat} alt="Chat" className="sidebar1-images" />
            </div>
          </NavLink>
          {/* EXTRA SETTINGS ARE TEMPORARILY HIDDEN -- DON'T REMOVE THE IMPORTS! */}
          {/* <div className="sidebar1-images-box">
            <img src={Extra} alt="Extra" className="sidebar1-images" />
          </div> */}
          <div className="sidebar1-images-box"></div>
          <div
            style={{ cursor: "pointer" }}
            className="sidebar1-images-box"
            onClick={() => setDisplayProfile(!displayProfile)}>
            <img src={Settings} alt="Settings" className="sidebar1-images" />
            {displayProfile && <UserProfileWrapper onClick={() => setDisplayProfile(false)} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Sidebar1);
