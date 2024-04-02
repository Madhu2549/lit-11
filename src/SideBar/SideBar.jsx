import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <ul className="sidebar">
        <li className="sidebar-list">
          <Link to={"/home/timetracker"}>Time Tracker</Link>
        </li>
        <li className="sidebar-list">
          <Link to={"/home/employeeprofile"}>Employee Profile</Link>
        </li>
        <li className="sidebar-list">
          <Link to={"/home/raiseticket"}>Raise Ticket</Link>
        </li>
        <li className="sidebar-list">
          <Link to={"/home/timesheet"}>Time Sheet</Link>
        </li>
        <li className="sidebar-list">
          <Link to={"/home/settings"}>Settings</Link>
        </li>
        <li className="sidebar-list">
          <Link to={"/home/support"}>Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
