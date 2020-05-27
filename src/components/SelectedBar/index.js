import React from "react";
import Classes from "./index.module.css";

function Selectedbar({ selectedItem }) {
  return (
    <div className={Classes.topBar}>
      <h3>{selectedItem}</h3>
    </div>
  );
}

export default Selectedbar;
