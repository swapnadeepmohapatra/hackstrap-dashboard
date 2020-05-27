import React from "react";
import "./stls.css";

var items = ["Startup or Comapny", "Investor", "People", "Incubator"];

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      itemsInScreen: 0,
      aaIndex: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.setState({ itemsInScreen: Math.floor(window.innerWidth / 240) });
    this.setState({ index: Math.floor(window.innerWidth / 300) - 1 });
  }
  handleShow(i) {
    if (i < items.length) {
      this.setState({ index: i });
      this.refs[i].scrollIntoView({ block: "end", behavior: "smooth" });
    }
    // this.setState({ index: this.state.itemsInScreen - 1 });
  }
  render() {
    return (
      <div className="lsit-aa">
        <button
          className="nav-btn"
          onClick={this.handleShow.bind(this, this.state.index - 1)}
        >
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.14015 10.3647L18.7962 0.6857C19 0.574062 19.2376 0.510175 19.4833 0.500954C19.7291 0.491733 19.9736 0.537531 20.1904 0.633389C20.4072 0.729247 20.588 0.871512 20.7132 1.04478C20.8385 1.21805 20.9034 1.41571 20.901 1.61638L20.6544 21.4145C20.6521 21.6153 20.5824 21.8114 20.453 21.9816C20.3235 22.1518 20.1393 22.2897 19.9201 22.3802C19.7009 22.4707 19.4553 22.5105 19.2097 22.4951C18.9642 22.4798 18.7281 22.4099 18.5271 22.2932L1.11761 12.174C0.940256 12.0701 0.796066 11.9329 0.697301 11.7742C0.598535 11.6154 0.548115 11.4397 0.550327 11.2621C0.55254 11.0845 0.60732 10.9101 0.710009 10.7539C0.812698 10.5976 0.960259 10.4641 1.14015 10.3647Z"
              fill="#10389B"
            />
          </svg>
        </button>
        <ul className="entrySubmList">
          {items.map(function (item, i) {
            return (
              <li ref={i}>
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
        <button
          className="nav-btn"
          onClick={this.handleShow.bind(this, this.state.index + 1)}
        >
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0465 11.9047L2.51238 21.8046C2.31003 21.9188 2.07323 21.9856 1.82762 21.9979C1.58202 22.0102 1.33696 21.9675 1.11899 21.8744C0.901026 21.7813 0.718452 21.6413 0.591038 21.4696C0.463624 21.2979 0.396228 21.1011 0.396145 20.9004V1.10071C0.395982 0.899939 0.463196 0.702959 0.590511 0.53112C0.717827 0.359281 0.900387 0.219137 1.1184 0.125876C1.33641 0.0326142 1.58156 -0.010207 1.82729 0.00205308C2.07301 0.0143131 2.30994 0.0811867 2.51238 0.195426L20.0465 10.0953C20.2252 10.1969 20.371 10.3323 20.4718 10.4898C20.5725 10.6473 20.6251 10.8223 20.6251 11C20.6251 11.1777 20.5725 11.3527 20.4718 11.5102C20.371 11.6677 20.2252 11.8031 20.0465 11.9047Z"
              fill="#10389B"
            />
          </svg>
        </button>
      </div>
    );
  }
}
