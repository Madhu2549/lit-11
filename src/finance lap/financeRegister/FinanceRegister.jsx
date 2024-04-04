import React, { useState } from "react";
import "./FinanceRegister.css";
export default function FinanceRegister() {
  const [Finance_serno, SetFinance_serno] = useState("");
  const [Discription, SetDiscription] = useState("");
  const [BaseAmount, SetBaseamount] = useState("");
  const [Gstvalue, SetGstvalue] = useState("");
  const [Tdsvalue, SetTdsValve] = useState("");
  const [emailId, SetEmailid] = useState("");
  const [InvoiceName, SetInvoicename] = useState("");
  const [BankAccNO, SetBankAccNO] = useState("");
  const [IfscCode, SetIfscCode] = useState("");
  const [TotalAmount, SetTotalAmount] = useState("");
  const [AdditionalDoc, SetAdditionalDoc] = useState(null);
  const [UploadInvoice, SetUploadInvoice] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleFormSubmit = () => {};
  const resetFormFields = () => {};

  return (
    <div className="finance-main">
      <h4 className="heading-name-f">Finance Registration</h4>
      <div className="form-div">
        <form className="form-main" onSubmit={handleFormSubmit}>
          <div className="form-left">
            <div className="finance-field">
              <label className="lable-f">Invoice Serial no</label>
              <input
                className="input-f"
                type="text"
                name="vendorId"
                id="vendorId"
                value={Finance_serno}
                onChange={(e) => SetFinance_serno(e.target.value)}
                pattern="[0-9]*"
                title="Vendor ID must contain only numbers"
                required
              />
            </div>
            <div className="finance-field">
              <label className="lable-f">Invoice Name</label>
              <input
                type="text"
                className="input-f"
                name="candidateName"
                id="candidateName"
                value={InvoiceName}
                onChange={(e) => SetInvoicename(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="Candidate Name must contain only letters"
                required
              />
            </div>
            <div className="finance-field">
              <label className="lable-f">Description</label>
              <input
                type="text"
                className="input-f"
                name="rateCard"
                id="rateCard"
                value={Discription}
                onChange={(e) => SetDiscription(e.target.value)}
                pattern="[0-9]*"
                title="Rate card must contain only numbers"
                required
              />
            </div>
            <div className="finance-field">
              <label className="lable-f">Base Amount</label>
              <input
                type="text"
                className="input-f"
                name="firstReviewed"
                id="firstReviewed"
                value={BaseAmount}
                onChange={(e) => SetBaseamount(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="firstReviewed must contain only letters"
                required
              />
            </div>
            <div className="finance-field">
              <label className="lable-f">GST 18%</label>
              <input
                type="text"
                className="input-f"
                name="jobType"
                id="jobType"
                value={Gstvalue}
                onChange={(e) => SetGstvalue(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="jobType must contain only letters"
                required
              />
            </div>
            <div className="finance-field">
              <label className="lable-f">TDS 2%</label>  
              <input
                type="text"
                className="input-f"
                name="payRoll"
                id="payRoll"
                value={Tdsvalue}
                onChange={(e) => SetTdsValve(e.target.value)}
                pattern="[0-9]*"
                title="Rate card must contain only numbers"
                required
              />
            </div>
          </div>
          <div className="form-right">
            <div className="finance-field">
              <label className="lable-f">Email Id</label>
              <input
                type="text"
                className="input-f"
                name="jobType"
                id="jobType"
                value={emailId}
                onChange={(e) => SetEmailid(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="jobType must contain only letters"
                required
              />
            </div>
            <div className="finance-field">
              <label className="lable-f">Bank Acc No</label>

              <input
                type="text"
                className="input-f"
                name="jobType"
                id="jobType"
                value={BankAccNO}
                onChange={(e) => SetBankAccNO(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="jobType must contain only letters"
                required
              />
            </div>

            <div className="finance-field">
              <label className="lable-f">IFSC Code</label> 
              <input
                type="text"
                className="input-f"
                name="jobType"
                id="jobType"
                value={IfscCode}
                onChange={(e) => SetIfscCode(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="jobType must contain only letters"
                required
              />
            </div>

            <div className="finance-field">
              <label className="lable-f">Total Amount</label>

              <input
                type="text"
                className="input-f"
                name="jobType"
                id="jobType"
                value={TotalAmount}
                onChange={(e) => SetTotalAmount(e.target.value)}
                pattern="[A-Za-z\s]+"
                title="jobType must contain only letters"
                required
              />
            </div>

            <div className="finance-field">
              <label className="lable-f">  Invoice Pdf  </label>
              <input
                type="file"
                className="input-doc"
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
                  SetUploadInvoice(file);
                  setErrorMessage("");
                }}
                required
              />
              {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            </div>

            <div className="finance-field">
              <label className="lable-f">  Aditional Documents  </label>
              <input
                type="file"
                className="input-doc"
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
                  SetAdditionalDoc(file);
                  setErrorMessage("");
                }}
                required
              />
            </div>
          </div>
        </form>
        <button type="submit" className="f-submit">
          Submit
        </button>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
