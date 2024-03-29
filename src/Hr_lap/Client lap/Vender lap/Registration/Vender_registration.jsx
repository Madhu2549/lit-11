import React, { useState } from "react";
import "./Vender_registration.css";
import { vendorDetails } from "../../../../http-common";

export default function Vender_registration() {
  const [vendorId, setVendorId] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [rateCard, setRateCard] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [payRoll, setPayRoll] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [technology, setTechnology] = useState("");
  const [years, setYears] = useState("");
  const [firstReviewed, setFirstReviewed] = useState("");
  const [secondReviewed, setSecondReviewed] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("vendorId", vendorId);
    formData.append("vendorName", vendorName);
    formData.append("rateCard", rateCard);
    formData.append("location", location);
    formData.append("jobType", jobType);
    formData.append("payRoll", payRoll);
    formData.append("candidateName", candidateName);
    formData.append("technology", technology);
    formData.append("years", years);
    formData.append("firstReviewed", firstReviewed);
    formData.append("secondReviewed", secondReviewed);
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
    setVendorId("");
    setVendorName("");
    setRateCard("");
    setLocation("");
    setJobType("");
    setPayRoll("");
    setCandidateName("");
    setTechnology("");
    setYears("");
    setFirstReviewed("");
    setSecondReviewed("");
    setCvFile("");
  };

  return (
    <div className="vendormain">
      <h4 className="heading">Resource Registration</h4>

      {/* Section: Registration */}

      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          <div className="firstsix">
            <div className="leftcol">
              <div className="side_by_side">
                <div>
                  <label htmlFor="candidateName">Candidate Name</label>
                </div>
                <div>
                  <input
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
                      <p className="error-message">
                        Candidate Name must contain only letters
                      </p>
                    )}
                </div>
              </div>
            </div>

            <div className="rightcol">
              <div className="side_by_side">
                <div>
                  <label htmlFor="vendorName">Vendor Name</label>
                </div>
                <div style={{ marginLeft: "-90px" }}>
                  <input
                    type="text"
                    name="vendorName"
                    id="vendorName"
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="Vendor Name must contain only letters"
                    required
                  />
                  {vendorName.length > 0 &&
                    !/^[A-Za-z\s]+$/.test(vendorName) && (
                      <p className="error-message">
                        Vendor Name must contain only letters
                      </p>
                    )}
                </div>
              </div>

              <div className="side_by_side">
                <div>
                  <label htmlFor="technology">Technologies Supported</label>
                </div>
                <div>
                  <input
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
                      <p className="error-message">
                        Technology must contain only letters
                      </p>
                    )}
                </div>
              </div>

              <div className="side_by_side">
                <div>
                  <label htmlFor="location">Head Office Location</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    pattern="[A-Za-z\s]+"
                    title="location must contain only letters"
                    required
                  />
                  {location.length > 0 && !/^[A-Za-z\s]+$/.test(location) && (
                    <p className="error-message">
                      Location must contain only letters
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="side_by_side">
            <div>
              <label>CV Format (Word file only)</label>
            </div>
            <div>
              <input
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
          <button type="submit" className="vendorsubmit">
            Submit
          </button>
        </form>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
