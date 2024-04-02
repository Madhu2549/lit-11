import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from "react";
import "./Userinfo.css";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../http-common";

export default function Userinfo() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isUserInfoVisible, setUserInfoVisible] = useState(true);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserInfoVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await userDetails();
      console.log("response.data-->", response);
      setUserInfo(response); // Assuming userDetails returns an object with user data
      setError(null);
    } catch (error) {
      setError("Data not found");
      setUserInfo(null);
    }
  };

  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleTimeString(undefined, options);
  };

  const toggleUserInfo = () => {
    setUserInfoVisible(!isUserInfoVisible);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setUserInfoVisible(false);
    navigate("/");
  };

  return (
    <div className="user-details">
      <div className="user-info-container">
        <div className="user-info-button" onClick={fetchData}>
          <FontAwesomeIcon icon={faUserTie} className="userimge" />
        </div>
        {isUserInfoVisible && userInfo && (
          <div className="user-info-dropdown" ref={dropdownRef}>
            <p>{userInfo.fullName}</p>
            <p>{userInfo.empid}</p>
            <p>{userInfo.email}</p>
            <hr />
            <p>Current Date: {formatDate(currentDateTime)}</p>
            <p>Last Login: {userInfo.lastLogin}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
