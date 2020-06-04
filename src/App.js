import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody";

function App() {
  return (
    <BrowserRouter>
      <MainBody />
    </BrowserRouter>
  );
}

export default App;
