import React, { useState } from "react";
import "./Vender_registration.css";
import { vendorDetails } from "../../../../http-common";

export default function Vender_registration() {
  const [vendorName, setVendorName] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [technology, setTechnology] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("vendorName", vendorName);
    formData.append("candidateName", candidateName);
    formData.append("technology", technology);
    formData.append("location", location);
    formData.append("cvFormat", cvFile);
    try {
      await vendorDetails(formData);
      setSuccessMessage("Vendor registered successfully.");
      resetFormFields();
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
          "Failed to connect to the server. Please try again later."
      );
    }
  };

  const resetFormFields = () => {
    setVendorName("");
    setCandidateName("");
    setTechnology("");
    setNumber("");
    setLocation("");
    setCvFile("");
  };

  return (
    <div className="vendor-canditate-main">
      <h2 className="canditate-heading">Resource Registration</h2>
      <div className="candidate-form">
        <form onSubmit={handleFormSubmit}>
          <div className="candidate-fields">
            <div className="candidate-left">
              <div className="candidate-input">
                <label className="candidate-label">Candidate Name</label>
                <input
                  className="candidate-input-fields"
                  type="text"
                  name="candidateName"
                  id="candidateName"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  pattern="[A-Za-z\s]+"
                  title="Candidate Name must contain only letters"
                  required
                />
                {candidateName.length > 0 &&
                  !/^[A-Za-z\s]+$/.test(candidateName) && (
                    <p className="candidate-er-msg">
                      Candidate Name must contain only letters
                    </p>
                  )}
              </div>
              <div className="candidate-input">
                <label className="candidate-label">Vendor Name</label>
                <input
                  className="candidate-input-fields"
                  type="text"
                  name="vendorName"
                  id="vendorName"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  pattern="[A-Za-z\s]+"
                  title="Vendor Name must contain only letters"
                  required
                />
                {vendorName.length > 0 && !/^[A-Za-z\s]+$/.test(vendorName) && (
                  <p className="candidate-er-msg">
                    Vendor Name must contain only letters
                  </p>
                )}
              </div>
              <div className="candidate-input">
                <label className="candidate-label">Contact details</label>
                <input
                  className="candidate-input-fields"
                  type="text"
                  name="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  pattern="[A-Za-z\s]+"
                  required
                />
                {number.length > 0 && !/^\d{10}$/.test(number) && (
                  <p className="candidate-er-msg">
                    mobile Number must contain only numbers
                  </p>
                )}
              </div>
            </div>
            <div className="candidate-right">
              <div className="candidate-input">
                <div>
                  <label className="candidate-label">
                    Technologies Supported
                  </label>
                  <input
                    className="candidate-input-fields"
                    type="text"
                    name="technology"
                    id="technology"
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="technology Name must contain only letters"
                    required
                  />
                  {technology.length > 0 &&
                    !/^[A-Za-z\s]+$/.test(technology) && (
                      <p className="candidate-er-msg">
                        Technology must contain only letters
                      </p>
                    )}
                </div>
              </div>
              <div className="candidate-input">
                <div>
                  <label className="candidate-label">
                    Head Office Location
                  </label>
                  <input
                    className="candidate-input-fields"
                    type="textarea"
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="location must contain only letters"
                    required
                  />
                  {location.length > 0 && !/^[A-Za-z\s]+$/.test(location) && (
                    <p className="candidate-er-msg">
                      Location must contain only letters
                    </p>
                  )}
                </div>
              </div>
              <div className="candidate-input">
                <label className="candidate-label">
                  CV Format (Word file only)
                </label>
                <input
                  className="candidate-input-fields word"
                  type="file"
                  name="cvFormat"
                  id="cvFormat"
                  accept=".doc, .docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const fileName = file ? file.name.toLowerCase() : "";
                    const allowedExtensions = [".doc", ".docx"];
                    const extension = fileName.substring(
                      fileName.lastIndexOf(".")
                    );
                    if (!allowedExtensions.includes(extension)) {
                      e.target.value = ""; // Clear the file input
                      setErrorMessage(
                        "Please upload a Word document (.doc or .docx) only."
                      );
                      return;
                    }
                    setCvFile(file);
                    setErrorMessage("");
                  }}
                  required
                />
                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
              </div>
            </div>
          </div>
          <button type="submit" className="candidate-submit">
            Submit
          </button>
        </form>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="candidate-er-msg">{errorMessage}</p>}
    </div>
  );
}
