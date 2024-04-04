import React, { useState } from "react";

import "./Co-wRegistration.css";

//import { cowregistration } from "../../../../http-common";

const Co_w_registration = () => {
  const [slNo, setSlNo] = useState("");

  const [date, setDate] = useState("");

  const [leadNo, setLeadNo] = useState("");

  const [leadName, setLeadName] = useState("");

  const [emailId, setEmailId] = useState("");

  const [contactInfo, setContactInfo] = useState("");

  const [source, setSource] = useState("");

  const [nextFollowUp, setNextFollowUp] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      slNo,

      date,

      leadNo,

      leadName,

      emailId,

      contactInfo,

      source,

      nextFollowUp,

      successMessage,

      errorMessage,
    };
  };

  const resetFormFields = () => {
    setSlNo("");

    setDate("");

    setLeadNo("");

    setLeadName("");

    setEmailId("");

    setContactInfo("");

    setSource("");

    setNextFollowUp("");
  };

  return (
    <div className="co-work-main">
      <h4 className="co-work-heading">Co working Space Registration</h4>

      <div className="form-section">
        <form onSubmit={handleFormSubmit} className="cowork-form">
          <div className="cowork-container">
            <div className="left-side-cowork">
              <div className="side_by_side">
                <div>
                  <label htmlFor="slNo">Sl.no</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="slNo"
                    id="slNo"
                    value={slNo}
                    onChange={(e) => {
                      const enteredValue = e.target.value;

                      // Check if the entered value does not start with zero

                      if (!enteredValue.startsWith("0")) {
                        setSlNo(enteredValue);
                      }
                    }}
                    pattern="[0-9]*"
                    title="Sl.No ID must contain only numbers"
                    required
                  />

                  {slNo && !/^[0-9]*$/.test(slNo) && (
                    <p className="error-message">Please enter numbers only</p>
                  )}
                </div>
              </div>
              <div className="side_by_side">
                <div>
                  <label htmlFor="date">Date</label>
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    pattern="[0-9]*"
                    title="Date must contain only numbers"
                    required
                    max={new Date().toISOString().split("T")[0]} // Set max to today's date
                  />
                </div>
              </div>
              <div className="side_by_side">
                <div>
                  <label htmlFor="leadNo">LeadNo</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="leadNo"
                    id="leadNo"
                    value={leadNo}
                    onChange={(e) => {
                      const enteredValue = e.target.value;

                      // Check if the entered value does not start with zero

                      if (!enteredValue.startsWith("0")) {
                        setLeadNo(enteredValue);

                        // alert("number not start wityh 0");
                      }
                    }}
                    pattern="[0-9]*"
                    title="LeadNo ID must contain only numbers"
                    required
                  />

                  {leadNo && !/^[0-9]*$/.test(leadNo) && (
                    <p className="error-message">Please enter numbers only</p>
                  )}
                </div>
              </div>
              <div className="side_by_side">
                <div>
                  <label htmlFor="leadName">LeadName</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="leadName"
                    id="leadName"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="Client Name must contain only letters"
                    required
                  />

                  {leadName && !/^[A-Za-z\s]+$/.test(leadName) && (
                    <p className="error-message">Please enter letters only</p>
                  )}
                </div>
              </div>
            </div>

            <div className="right-side-cowork">
              {" "}
              <div className="side_by_side">
                <div>
                  <label htmlFor="emailId">Email ID</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="emailId"
                    id="emailId"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" // Basic email pattern
                    title="Please enter a valid email address"
                    required
                  />

                  {emailId &&
                    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      emailId
                    ) && (
                      <p className="error-message">
                        Please enter a valid email address
                      </p>
                    )}
                </div>
              </div>
              <div className="side_by_side">
                <div>
                  <label htmlFor="contactInfo">Contact Info</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="contactInfo"
                    id="contactInfo"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}" // Example pattern for xxx-xxx-xxxx format
                    title="Please enter a valid contact number in the format xxxxxxxxxx"
                    required
                  />

                  {contactInfo && !/^[0-9]{10}$/.test(contactInfo) && (
                    <p className="error-message">
                      Please enter a valid contactInfo number in the format
                      xxxxxxxxxx
                    </p>
                  )}
                </div>
              </div>
              <div className="side_by_side">
                <div>
                  <label htmlFor="source">Source</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="source"
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="source must contain only letters"
                    required
                  />

                  {source && !/^[A-Za-z\s]+$/.test(source) && (
                    <p className="error-message">
                      source must contain only letters
                    </p>
                  )}
                </div>
              </div>
              <div className="side_by_side">
                <div>
                  <label htmlFor="nextFollowUp">Next Follow Up</label>
                </div>

                <div>
                  <input
                    type="date"
                    name="nextFollowUp"
                    id="nextFollowUp"
                    value={nextFollowUp}
                    onChange={(e) => setNextFollowUp(e.target.value)}
                    pattern="[0-9]*"
                    title="date must contain only numbers"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="cowork-submit">
            Submit
          </button>
        </form>
      </div>

      {successMessage && <p className="success-message">{successMessage}</p>}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Co_w_registration;
