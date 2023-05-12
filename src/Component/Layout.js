import React from "react";

import "./Layout.css";

function Layout(props) {
  return (
    <div>
      <h1 className="headding">Welcome to TMDB World!</h1>
      <div className="mainContainer">
        <p className="styledPara">This is a awesome Page.</p>
      </div>
      <div className="cardContainer">{props.children}</div>
    </div>
  );
}

export default Layout;
