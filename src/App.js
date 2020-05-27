import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import sidebar from "./components/Sidebar/sidebar";
import Selectedbar from "./components/SelectedBar";
import MainBody from "./components/MainBody";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Selectedbar selectedItem={"Dashboard"} />
      <MainBody />
    </BrowserRouter>
  );
}

export default App;
