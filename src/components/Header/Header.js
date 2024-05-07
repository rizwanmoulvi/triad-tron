import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

const Header = () => {
  return (
    <header className="newheader">
      <div style={{ flex: "2", paddingLeft: "50px"}}>
        <Link to="/" 
            style={{ margin: "0 10px", fontSize: "30px", color: "white", fontWeight: "bolder"}}
        >
          TriAd
        </Link>
      </div>
      <nav style={{ flex: "10", textAlign: "right" }}>
        <Link
          to="/admin"
          style={{ margin: "0 10px", fontSize: "30px", color: "white" }}
        >
          Admin
        </Link>
        <Link
          to="/advertisers"
          style={{ margin: "0 10px", fontSize: "30px", color: "white" }}
        >
          Advertisers
        </Link>
        <Link
          to="/publisher"
          style={{ margin: "0 10px", fontSize: "30px", color: "white" }}
        >
          Publisher
        </Link>
        <Link
          to="/site"
          style={{ margin: "0 10px", fontSize: "30px", color: "white" }}
        >
          Site
        </Link>
      </nav>
      <div style={{ flex: "1" }}></div>
    </header>
  );
};

export default Header;
