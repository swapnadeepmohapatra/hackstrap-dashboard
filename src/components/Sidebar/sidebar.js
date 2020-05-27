import React from "react";
// import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
// import {
//   toggleSidebarSearch,
//   toggleNewslySidebar,
//   toggleTrelloSidebar,
//   showFooter,
// } from '../../store/actions/index';
import Sidebar1 from "./sidebar1/sidebar1";
import Sidebar2 from "./sidebar2/sidebar2";
// import NewslySideBar from '../Newsly/subComponent/sidebar';
// import TrelloSideBar from '../Trello/Components/Sidebar';
import "./sidebar.css";

function sidebar(props) {
  let ShowNewslySidebar = (isDisplay) => {
    props.toggleNewslySidebar(isDisplay);
    props.onToggle(false);
  };

  let ShowTrelloSidebar = (isDisplay) => {
    props.toggleTrelloSidebar(isDisplay);
    props.toggleNewslySidebar(false);
    props.onToggle(false);
  };

  let ShowDefaultSidebar = (isDisplay) => {
    if (props.isNewslySbarActiveProp) {
      props.toggleNewslySidebar(false);
      props.onToggle();
    } else if (props.isTrelloSbarActiveProp) {
      props.toggleTrelloSidebar(false);
      props.onToggle();
    } else {
      props.onToggle();
    }
  };

  return (
    <React.Fragment>
      {props.render ? (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "sticky",
            top: "3.8rem",
            height: "100%",
            zIndex: "2",
          }}
        >
          <Sidebar1
            ShowFooter={(p) => props.showFooter(p)}
            ShowNewslySidebar={(isTrue) => ShowNewslySidebar(isTrue)}
            ShowTrelloSidebar={(isTrue) => ShowTrelloSidebar(isTrue)}
            click={(p) => ShowDefaultSidebar(p)}
            display={props.display}
            displayNewslySidebar={props.isNewslySbarActiveProp}
            displayTrelloSidebar={props.isTrelloSbarActiveProp}
          />
          {/* <CSSTransition
            in={props.isNewslySbarActiveProp}
            timeout={400}
            classNames="display"
            unmountOnExit={true}
          >
            <NewslySideBar />
          </CSSTransition>
          <CSSTransition
            in={props.isTrelloSbarActiveProp}
            timeout={400}
            classNames="display"
            unmountOnExit={true}
          >
            <TrelloSideBar />
          </CSSTransition>
          <CSSTransition
            in={props.display}
            timeout={400}
            classNames="display"
            unmountOnExit={true}
          >
            <Sidebar2
              display={props.display}
              click={() => ShowDefaultSidebar()}
            />
          </CSSTransition> */}
        </div>
      ) : null}
    </React.Fragment>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggle: (p) => dispatch(toggleSidebarSearch(p)),
//     toggleNewslySidebar: (isTrue) => dispatch(toggleNewslySidebar(isTrue)),
//     toggleTrelloSidebar: (isTrue) => dispatch(toggleTrelloSidebar(isTrue)),
//     showFooter: (p) => dispatch(showFooter(p)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     display: state.ui.displaySearch,
//     render: state.ui.renderSidebar,
//     isNewslySbarActiveProp: state.ui.toggleNewslySidebar,
//     isTrelloSbarActiveProp: state.ui.toggleTrelloSidebar,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
export default sidebar;
