import React from "react";
import "./NavBar.css";

const NavBar = ({ tabs, onDelete }) => {
  return (
    <nav className="navbar">
      {tabs.map((tab, index) => (
        <div className="nav-item" key={index}>
          <span>{tab}</span>
          <button className="delete-button" onClick={() => onDelete(tab)}>삭제</button>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;