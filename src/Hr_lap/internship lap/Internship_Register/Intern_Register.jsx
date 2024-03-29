import React, { useState } from "react";
import "./Intern_Register.css";

export default function Intern_Register() {
  const [accordionState, setAccordionState] = useState({
    fullName: false,
    joiningInfo: false,
    // documentChecklist: false,
    personalInfo: false,
    addressInfo: false,

    emergencyContact1: false,
    emergencyContact2: false,
    employeenomination: false,
    bankDetails: false,
    acknowledgment: false,
    dependentInformation: false,
    educationdeatails: false,
    experiencehistory: false,
    documentChecklist: false,
  });

  const [formData, setFormData] = useState({
    fullName: { fullName: "" },
    joiningInfo: {
      joiningDate: "",
      joiningOffice: "",
      joiningTitle: "",
    },

    personalInfo: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      fatherName: "",
      motherName: "",
      maritalStatus: "",
      spouseName: "",
      identityMark: "",
      bloodGroup: "",
      allergies: "",
      passportNumber: "",
      panNumber: "",
      aadharNumber: "",
      pfAccountNumber: "",
      uan: "",
    },

    personalInfo: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      fatherName: "",
      motherName: "",
      maritalStatus: "",
      spouseName: "",
      identityMark: "",
      bloodGroup: "",
      allergies: "",
      passportNumber: "",
      panNumber: "",
      aadharNumber: "",
      pfAccountNumber: "",
      uan: "",
    },

    addressInfo: {
      presentAddress: "",
      permanentAddress: "",
      mobileNumber: "",
      personalEmail: "",
    },

    emergencyContact1: {
      name: "",
      relationship: "",
      landline: "",
      mobile: "",
    },

    emergencyContact2: {
      name: "",
      relationship: "",
      landline: "",
      mobile: "",
    },

    employeenomination: {
      name: "",
      relationship: "",
      age: "",
      address: " ",
      mobile: "",
    },

    bankDetails: {
      bankName: "",
      bankAcNo: "",
      bankBranch: "",
      ifscCode: "",
    },

    acknowledgment: {
      name: "",
    },

    dependentInformation: {
      name: "",
      relationship: "",
      dateOfBirth: "",

      name1: "",
      relationship1: "",
      dateOfBirth1: "",

      name2: "",
      relationship2: "",
      dateOfBirth2: "",
    },

    educationdeatails: {
      degree1: "",
      nameofuniversity1: "",
      marksObtained1: "",
      passingyerrar1: "",

      degree2: "",
      nameofuniversity2: "",
      marksObtained2: "",
      passingyerrar2: "",

      degree3: "",
      nameofuniversity3: "",
      marksObtained3: "",
      passingyerrar3: "",
    },

    experiencehistory: {
      nameofthecompany1: "",
      designation1: "",
      dateofjoining1: "",
      dateofresigning1: "",
      totalyearsofExperience1: "",
      remarks1: "",

      nameofthecompany2: "",
      designation2: "",
      dateofjoining2: "",
      dateofresigning2: "",
      totalyearsofExperience2: "",
      remarks2: "",

      nameofthecompany3: "",
      designation3: "",
      dateofjoining3: "",
      dateofresigning3: "",
      totalyearsofExperience3: "",
      remarks3: "",
    },

    documentChecklist: {
      signedCopyOfAppointmentLetter: false,
      photographs: false,
      curriculumVitae: false,
      proofOfIdentity: false,
      birthCertificate: false,
      Relieving: false,
      LatestPayslip: false,
      EducationDegreeCertificateMarksheet: false,
      PANCardAcknowledgementslipofForm49: false,
    },
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const missingFields = [];
      const missingFields2 = [];
      const missingFields3 = [];
      const missingFields4 = [];
      const missingFields5 = [];
      const missingFields6 = [];
      const missingFields7 = [];
      const missingFields8 = [];
      const missingFields9 = [];
      const missingFields10 = [];

      const missingFields11 = [];
      const missingFields12 = [];
      const missingFields13 = [];
      const missingFields14 = [];

      if (!formData.fullName.fullName.trim()) {
        setErrorMessage("Full Name is required");
        return;
      }
      if (!formData.joiningInfo.joiningDate.trim()) {
        setErrorMessage("Joining Date is required");
        return;
      }
      if (!formData.joiningInfo.joiningOffice.trim()) {
        setErrorMessage("Joining Office/Location is required");
        return;
      }
      if (!formData.joiningInfo.joiningTitle.trim()) {
        setErrorMessage("Joining Title is required");
        return;
      }

      if (!formData.documentChecklist.signedCopyOfAppointmentLetter) {
        missingFields14.push("signed Copy Of Appointment Letter");
      }
      if (!formData.documentChecklist.photographs) {
        missingFields14.push("photographs");
      }
      if (!formData.documentChecklist.curriculumVitae) {
        missingFields14.push("curriculum Vitae");
      }
      if (!formData.documentChecklist.proofOfIdentity) {
        missingFields14.push("proofOfIdentity");
      }
      if (!formData.documentChecklist.birthCertificate) {
        missingFields14.push("birth Certificate");
      }
      if (!formData.documentChecklist.Relieving) {
        missingFields14.push("Relieving/Resignation Acceptance Letter");
      }
      if (!formData.documentChecklist.LatestPayslip) {
        missingFields14.push("LatestPayslip / Salary Certificate");
      }
      if (!formData.documentChecklist.EducationDegreeCertificateMarksheet) {
        missingFields14.push("Education Degree Certificate Marksheet");
      }
      if (!formData.documentChecklist.PANCardAcknowledgementslipofForm49) {
        missingFields14.push("PAN Card Ac knowledgement slipof Form49");
      }
      if (missingFields14.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields14.join(", ")}`
        );
        return;
      }

      if (!formData.personalInfo.title.trim()) {
        setErrorMessage("title is required");
        return;
      }
      if (!formData.personalInfo.firstName.trim()) {
        setErrorMessage("firstName is required");
        return;
      }
      if (!formData.personalInfo.middleName.trim()) {
        setErrorMessage("middleName is required");
        return;
      }
      if (!formData.personalInfo.lastName.trim()) {
        setErrorMessage("lastName is required");
        return;
      }
      if (!formData.personalInfo.dateOfBirth.trim()) {
        setErrorMessage("dateOfBirth is required");
        return;
      }
      if (!formData.personalInfo.gender.trim()) {
        setErrorMessage("gender is required");
        return;
      }
      if (!formData.personalInfo.fatherName.trim()) {
        setErrorMessage("fatherName is required");
        return;
      }
      if (!formData.personalInfo.motherName.trim()) {
        setErrorMessage("motherName is required");
        return;
      }
      if (!formData.personalInfo.motherName.trim()) {
        setErrorMessage("motherName is required");
        return;
      }
      if (!formData.personalInfo.maritalStatus.trim()) {
        setErrorMessage("maritalStatus is required");
        return;
      }
      if (!formData.personalInfo.spouseName.trim()) {
        setErrorMessage("spouseName is required");
        return;
      }
      if (!formData.personalInfo.identityMark.trim()) {
        setErrorMessage("identityMark is required");
        return;
      }
      if (!formData.personalInfo.allergies.trim()) {
        setErrorMessage("allergies is required");
        return;
      }
      if (!formData.personalInfo.passportNumber.trim()) {
        setErrorMessage("passportNumber is required");
        return;
      }
      if (!formData.personalInfo.panNumber.trim()) {
        setErrorMessage("panNumber is required");
        return;
      }
      if (!formData.personalInfo.aadharNumber.trim()) {
        setErrorMessage("aadharNumber is required");
        return;
      }
      if (!formData.personalInfo.pfAccountNumber.trim()) {
        setErrorMessage("pfAccountNumber is required");
        return;
      }
      if (!formData.addressInfo.presentAddress.trim()) {
        setErrorMessage("presentAddress is required");
        return;
      }
      if (!formData.addressInfo.permanentAddress.trim()) {
        setErrorMessage("permanentAddress is required");
        return;
      }
      if (!formData.addressInfo.mobileNumber.trim()) {
        setErrorMessage("mobileNumber is required");
        return;
      }
      if (!formData.addressInfo.personalEmail.trim()) {
        setErrorMessage("personalEmail is required");
        return;
      }

      if (!formData.dependentInformation.name.trim()) {
        missingFields5.push("dependent name");
      }
      if (!formData.dependentInformation.relationship.trim()) {
        missingFields5.push("dependent relationship");
      }
      if (!formData.dependentInformation.dateOfBirth.trim()) {
        missingFields5.push("dependent dateOfBirth");
      }
      if (missingFields5.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields5.join(", ")}`
        );
        return;
      }
      if (!formData.dependentInformation.name1.trim()) {
        missingFields6.push("dependent name");
      }
      if (!formData.dependentInformation.relationship1.trim()) {
        missingFields6.push("dependent relationship");
      }
      if (!formData.dependentInformation.dateOfBirth1.trim()) {
        missingFields6.push("dependent dateOfBirth");
      }
      if (missingFields6.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields6.join(", ")}`
        );
        return;
      }
      if (!formData.dependentInformation.name2.trim()) {
        missingFields7.push("dependent name");
      }
      if (!formData.dependentInformation.relationship2.trim()) {
        missingFields7.push("dependent relationship");
      }
      if (!formData.dependentInformation.dateOfBirth2.trim()) {
        missingFields7.push("dependent dateOfBirth");
      }
      if (missingFields7.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields7.join(", ")}`
        );
        return;
      }

      if (!formData.emergencyContact1.name.trim()) {
        missingFields.push("Emergency Contact Name");
      }
      if (!formData.emergencyContact1.relationship.trim()) {
        missingFields.push("Relationship");
      }
      if (!formData.emergencyContact1.landline.trim()) {
        missingFields.push("Landline No (with STD Code)");
      }
      if (!formData.emergencyContact1.mobile.trim()) {
        missingFields.push("Mobile No");
      }

      if (missingFields.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields.join(", ")}`
        );
        return;
      }

      if (!formData.emergencyContact2.name.trim()) {
        missingFields2.push("Emergency Contact Name");
      }
      if (!formData.emergencyContact2.relationship.trim()) {
        missingFields2.push("Relationship");
      }
      if (!formData.emergencyContact2.landline.trim()) {
        missingFields2.push("Landline No (with STD Code)");
      }
      if (!formData.emergencyContact2.mobile.trim()) {
        missingFields2.push("Mobile No");
      }

      if (missingFields2.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields2.join(", ")}`
        );
        return;
      }
      if (!formData.educationdeatails.degree1.trim()) {
        missingFields8.push(" degree");
      }
      if (!formData.educationdeatails.nameofuniversity1.trim()) {
        missingFields8.push("name of university");
      }
      if (!formData.educationdeatails.marksObtained1.trim()) {
        missingFields8.push("marks Obtained");
      }
      if (!formData.educationdeatails.passingyerrar1.trim()) {
        missingFields8.push("passing yerrar");
      }
      if (missingFields8.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields8.join(", ")}`
        );
        return;
      }
      if (!formData.educationdeatails.degree2.trim()) {
        missingFields9.push(" degree");
      }
      if (!formData.educationdeatails.nameofuniversity2.trim()) {
        missingFields9.push("name of university");
      }
      if (!formData.educationdeatails.marksObtained2.trim()) {
        missingFields9.push("marks Obtained");
      }
      if (!formData.educationdeatails.passingyerrar2.trim()) {
        missingFields9.push("passing yerrar");
      }
      if (missingFields9.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields9.join(", ")}`
        );
        return;
      }
      if (!formData.educationdeatails.degree3.trim()) {
        missingFields10.push(" degree");
      }
      if (!formData.educationdeatails.nameofuniversity3.trim()) {
        missingFields10.push("name of university");
      }
      if (!formData.educationdeatails.marksObtained3.trim()) {
        missingFields10.push("marks Obtained");
      }
      if (!formData.educationdeatails.passingyerrar3.trim()) {
        missingFields10.push("passing yerrar");
      }
      if (missingFields10.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields10.join(", ")}`
        );
        return;
      }
      if (!formData.experiencehistory.nameofthecompany1.trim()) {
        missingFields11.push(" name of the company");
      }
      if (!formData.experiencehistory.designation1.trim()) {
        missingFields11.push("designation");
      }
      if (!formData.experiencehistory.dateofjoining1.trim()) {
        missingFields11.push("date of joining");
      }
      if (!formData.experiencehistory.dateofresigning1.trim()) {
        missingFields11.push("date of resigning");
      }
      if (!formData.experiencehistory.totalyearsofExperience1.trim()) {
        missingFields11.push("total years of Experience");
      }
      if (!formData.experiencehistory.remarks1.trim()) {
        missingFields11.push("remarks");
      }
      if (missingFields11.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields11.join(", ")}`
        );
        return;
      }
      if (!formData.experiencehistory.nameofthecompany2.trim()) {
        missingFields12.push(" name of the company");
      }
      if (!formData.experiencehistory.designation2.trim()) {
        missingFields12.push("designation");
      }
      if (!formData.experiencehistory.dateofjoining2.trim()) {
        missingFields12.push("date of joining");
      }
      if (!formData.experiencehistory.dateofresigning2.trim()) {
        missingFields12.push("date of resigning");
      }
      if (!formData.experiencehistory.totalyearsofExperience2.trim()) {
        missingFields12.push("total years of Experience");
      }
      if (!formData.experiencehistory.remarks2.trim()) {
        missingFields12.push("remarks");
      }
      if (missingFields12.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields12.join(", ")}`
        );
        return;
      }
      if (!formData.experiencehistory.nameofthecompany3.trim()) {
        missingFields13.push(" name of the company");
      }
      if (!formData.experiencehistory.designation3.trim()) {
        missingFields13.push("designation");
      }
      if (!formData.experiencehistory.dateofjoining3.trim()) {
        missingFields13.push("date of joining");
      }
      if (!formData.experiencehistory.dateofresigning3.trim()) {
        missingFields13.push("date of resigning");
      }
      if (!formData.experiencehistory.totalyearsofExperience3.trim()) {
        missingFields13.push("total years of Experience");
      }
      if (!formData.experiencehistory.remarks3.trim()) {
        missingFields13.push("remarks");
      }
      if (missingFields13.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields13.join(", ")}`
        );
        return;
      }

      if (!formData.employeenomination.name.trim()) {
        missingFields3.push("Nomininee Name");
      }
      if (!formData.employeenomination.relationship.trim()) {
        missingFields3.push("Relationship");
      }
      if (!formData.employeenomination.age.trim()) {
        missingFields3.push("Age ");
      }
      if (!formData.employeenomination.address.trim()) {
        missingFields3.push("Address ");
      }

      if (!formData.employeenomination.mobile.trim()) {
        missingFields3.push("Mobile No");
      }

      if (missingFields3.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields3.join(", ")}`
        );
        return;
      }
      if (!formData.bankDetails.bankName.trim()) {
        missingFields4.push("Bank Name");
      }
      if (!formData.bankDetails.bankAcNo.trim()) {
        missingFields4.push("Bank Ac No");
      }
      if (!formData.bankDetails.bankBranch.trim()) {
        missingFields4.push("Bank Branch ");
      }

      if (!formData.bankDetails.ifscCode.trim()) {
        missingFields4.push("ifsc Code");
      }

      if (missingFields4.length > 0) {
        setErrorMessage(
          `Please fill in the following fields: ${missingFields4.join(", ")}`
        );
        return;
      }

      const dataToSend = {
        fullName: formData.fullName.fullName,
        joiningDate: formData.joiningInfo.joiningDate,
        joiningOffice: formData.joiningInfo.joiningOffice,
        joiningTitle: formData.joiningInfo.joiningTitle,
        title: formData.personalInfo.title,
        firstName: formData.personalInfo.firstName,
        middleName: formData.personalInfo.middleName,
        lastName: formData.personalInfo.lastName,
        dateOfBirth: formData.personalInfo.dateOfBirth,
        gender: formData.personalInfo.gender,
        fatherName: formData.personalInfo.fatherName,
        motherName: formData.personalInfo.motherName,
        maritalStatus: formData.personalInfo.maritalStatus,
        spouseName: formData.personalInfo.spouseName,
        identityMark: formData.personalInfo.identityMark,
        bloodGroup: formData.personalInfo.bloodGroup,
        allergies: formData.personalInfo.allergies,
        passportNumber: formData.personalInfo.passportNumber,
        panNumber: formData.personalInfo.panNumber,
        aadharNumber: formData.personalInfo.aadharNumber,
        pfAccountNumber: formData.personalInfo.pfAccountNumber,
        presentAddress: formData.addressInfo.presentAddress,
        presentAddress: formData.addressInfo.permanentAddress,
        mobileNumber: formData.addressInfo.mobileNumber,
        personalEmail: formData.addressInfo.personalEmail,
        dependentName1: formData.dependentInfo.dependentName1,
        name: formData.emergencyContact1.name,
        relationship: formData.emergencyContact1.relationship,
        landline: formData.emergencyContact1.landline,
        mobile: formData.emergencyContact1.mobile,
        name: formData.emergencyContact2.name,
        relationship: formData.emergencyContact2.relationship,
        landline: formData.emergencyContact2.landline,
        mobile: formData.emergencyContact2.mobile,
        name: formData.employeenomination.name,
        relationship: formData.employeenomination.relationship,
        age: formData.employeenomination.age,
        address: formData.employeenomination.address,
        mobile: formData.employeenomination.mobile,
        bankName: formData.bankDetails.bankName,
        bankAcNo: formData.bankDetails.bankAcNo,
        bankBranch: formData.bankDetails.bankBranch,
        ifscCode: formData.bankDetails.ifscCode,
        name: formData.dependentInformation.name,
        relationship: formData.dependentInformation.relationship,
        dateOfBirth: formData.dependentInformation.dateOfBirth,
        name1: formData.dependentInformation.name1,
        relationship1: formData.dependentInformation.relationship1,
        dateOfBirth1: formData.dependentInformation.dateOfBirth1,
        name2: formData.dependentInformation.name2,
        relationship2: formData.dependentInformation.relationship2,
        dateOfBirth2: formData.dependentInformation.dateOfBirth2,

        degree1: formData.educationdeatails.degree1,
        nameofuniversity1: formData.educationdeatails.nameofuniversity1,
        marksObtained1: formData.educationdeatails.marksObtained1,
        passingyerrar1: formData.educationdeatails.passingyerrar1,

        degree2: formData.educationdeatails.degree2,
        nameofuniversity2: formData.educationdeatails.nameofuniversity2,
        marksObtained2: formData.educationdeatails.marksObtained2,
        passingyerrar2: formData.educationdeatails.passingyerrar2,

        degree3: formData.educationdeatails.degree3,
        nameofuniversity3: formData.educationdeatails.nameofuniversity3,
        marksObtained3: formData.educationdeatails.marksObtained3,
        passingyerrar3: formData.educationdeatails.passingyerrar3,

        nameofthecompany1: formData.experiencehistory.nameofthecompany1,
        designation1: formData.experiencehistory.designation1,
        dateofjoining1: formData.experiencehistory.dateofjoining1,
        dateofresigning1: formData.experiencehistory.dateofresigning1,
        totalyearsofExperience1:
          formData.experiencehistory.totalyearsofExperience1,
        remarks1: formData.experiencehistory.remarks1,

        nameofthecompany2: formData.experiencehistory.nameofthecompany2,
        designation2: formData.experiencehistory.designation2,
        dateofjoining2: formData.experiencehistory.dateofjoining2,
        dateofresigning2: formData.experiencehistory.dateofresigning2,
        totalyearsofExperience2:
          formData.experiencehistory.totalyearsofExperience2,
        remarks2: formData.experiencehistory.remarks2,

        nameofthecompany3: formData.experiencehistory.nameofthecompany3,
        designation3: formData.experiencehistory.designation3,
        dateofjoining3: formData.experiencehistory.dateofjoining3,
        dateofresigning3: formData.experiencehistory.dateofresigning3,
        totalyearsofExperience3:
          formData.experiencehistory.totalyearsofExperience3,
        remarks3: formData.experiencehistory.remarks3,
      };

      console.log(dataToSend);
      setSuccessMessage("Data posted successfully!");
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  // personalInfo: s

  const handlePersonalInfoChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value,
      },
    }));
  };

  // personalInfo: e

  //adrrass_info s

  const handleAddressInfoChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      addressInfo: {
        ...prevData.addressInfo,
        [field]: value,
      },
    }));
  };
  // adrrass_info e //

  // emergencyContact1: e

  const handleEmergencyContact1Change = (field) => (e) => {
    handleInputChange("emergencyContact1", field, e.target.value);
  };

  // emergencyContact2: s

  const handleEmergencyContact2Change = (field) => (e) => {
    handleInputChange("emergencyContact2", field, e.target.value);
  };

  // emergencyContact2: e

  // employeenomination s
  const handleemployeenominationChange = (field) => (e) => {
    handleInputChange("employeenomination", field, e.target.value);
  };
  // employeenomination e

  // bank deatails s

  const handlebankDetailsChange = (field) => (e) => {
    handleInputChange("bankDetails", field, e.target.value);
  };

  // bank deatails e

  // acknowledgment s

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // acknowledgment e

  // dependent s

  const handledependentInformationChange = (field) => (e) => {
    handleInputChange("dependentInformation", field, e.target.value);
  };
  // dependent e

  // education s

  const handleeducationdeatailsChange = (field) => (e) => {
    handleInputChange("educationdeatails", field, e.target.value);
  };
  // education e

  //exprience s

  const handleexperiencehistoryChange = (field) => (e) => {
    handleInputChange("experiencehistory", field, e.target.value);
  };

  //exprience e

  // check list s

  const handleDocumentChecklistChange = (documentType) => {
    setFormData((prevData) => ({
      ...prevData,
      documentChecklist: {
        ...prevData.documentChecklist,
        [documentType]: !prevData.documentChecklist[documentType],
      },
    }));
  };

  // check list e

  // form reset 1 s

  const resetFormFields = () => {
    setAccordionState({
      fullName: { isOpen: false, fullName: "" },
      joiningInfo: {
        isOpen: false,
        joiningDate: "",
        joiningOffice: "",
        joiningTitle: "",
      },
      documentChecklist: {
        isOpen: false,
        signedCopyOfAppointmentLetter: false,
        photographs: false,
        curriculumVitae: false,
        proofOfIdentity: false,
        birthCertificate: false,
        Relieving: false,
        LatestPayslip: false,
        EducationDegreeCertificateMarksheet: false,
        PANCardAcknowledgementslipofForm49: false,
      },
      personalInfo: {
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        fatherName: "",
        motherName: "",
        maritalStatus: "",
        spouseName: "",
        identityMark: "",
        bloodGroup: "",
        allergies: "",
        passportNumber: "",
        panNumber: "",
        aadharNumber: "",
        pfAccountNumber: "",
        uan: "",
      },
      addressInfo: {
        presentAddress: "",
        permanentAddress: "",
        mobileNumber: "",
        personalEmail: "",
      },
      dependentInformation: {
        name: "",
        relationship: "",
        dateOfBirth: "",

        name1: "",
        relationship1: "",
        dateOfBirth1: "",

        name2: "",
        relationship2: "",
        dateOfBirth2: "",
      },
      emergencyContact1: {
        name: "",
        relationship: "",
        landline: "",
        mobile: "",
      },
      emergencyContact2: {
        name: "",
        relationship: "",
        landline: "",
        mobile: "",
      },

      educationdeatails: {
        degree1: "",
        nameofuniversity1: "",
        marksObtained1: "",
        passingyerrar1: "",

        degree2: "",
        nameofuniversity2: "",
        marksObtained2: "",
        passingyerrar2: "",

        degree3: "",
        nameofuniversity3: "",
        marksObtained3: "",
        passingyerrar3: "",
      },

      experiencehistory: {
        nameofthecompany1: "",
        designation1: "",
        dateofjoining1: "",
        dateofresigning1: "",
        totalyearsofExperience1: "",
        remarks1: "",

        nameofthecompany2: "",
        designation2: "",
        dateofjoining2: "",
        dateofresigning2: "",
        totalyearsofExperience2: "",
        remarks2: "",

        nameofthecompany3: "",
        designation3: "",
        dateofjoining3: "",
        dateofresigning3: "",
        totalyearsofExperience3: "",
        remarks3: "",
      },

      employeenomination: {
        name: "",
        relationship: "",
        age: "",
        address: " ",
        mobile: "",
      },

      bankDetails: {
        bankName: "",
        bankAcNo: "",
        bankBranch: "",
        ifscCode: "",
      },
    });
  };

  // form reset 1 e

  // prient s

  // const handlePrint = () => {
  //   window.print();
  // };

  // prient e

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>

      {/* Section 1: Full Name */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("fullName")}>
          {accordionState.fullName
            ? "1. Full Name (as per PAN Card) -"
            : "1. Full Name (as per PAN Card) +"}
        </h6>
        {accordionState.fullName && (
          <div>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={formData.fullName.fullName}
              onChange={(e) =>
                handleInputChange("fullName", "fullName", e.target.value)
              }
              required
            />
            {formData.fullName.fullName.length > 0 &&
              !/^[A-Za-z\s]*$/.test(formData.fullName.fullName) && (
                <p className="error-message">
                  Full Name must contain only letters
                </p>
              )}
          </div>
        )}
      </div>

      {/* Section 2: Joining Information */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("joiningInfo")}>
          {accordionState.joiningInfo
            ? "2. Joining Information -"
            : "2. Joining Information +"}
        </h6>
        {accordionState.joiningInfo && (
          <table>
            <tr>
              <td>Joining Date (DD/MM/YYYY):</td>
              <td>
                <input
                  type="date"
                  value={formData.joiningInfo.joiningDate}
                  onChange={(e) =>
                    handleInputChange(
                      "joiningInfo",
                      "joiningDate",
                      e.target.value
                    )
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Joining Office/Location:</td>
              <td>
                <input
                  type="text"
                  value={formData.joiningInfo.joiningOffice}
                  onChange={(e) =>
                    handleInputChange(
                      "joiningInfo",
                      "joiningOffice",
                      e.target.value
                    )
                  }
                  required
                />
                {formData.joiningInfo.joiningOffice.length > 0 &&
                  !/^[A-Za-z0-9\s ]*$/.test(
                    formData.joiningInfo.joiningOffice
                  ) && (
                    <p className="error-message">
                      Joining Office/Location must contain only letters and
                      numbers
                    </p>
                  )}
              </td>
            </tr>
            <tr>
              <td>Joining Title:</td>
              <td>
                <input
                  type="text"
                  value={formData.joiningInfo.joiningTitle}
                  onChange={(e) =>
                    handleInputChange(
                      "joiningInfo",
                      "joiningTitle",
                      e.target.value
                    )
                  }
                  required
                />
                {formData.joiningInfo.joiningTitle.length > 0 &&
                  !/^[A-Za-z\s ]*$/.test(formData.joiningInfo.joiningTitle) && (
                    <p className="error-message">
                      Joining Title must contain only letters
                    </p>
                  )}
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 3: Checklist of documents  */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("documentChecklist")}>
          {accordionState.documentChecklist
            ? "3. Checklist of Documents to be Submitted on Joining -"
            : "3. Checklist of Documents to be Submitted on Joining +"}
        </h6>
        {accordionState.documentChecklist && (
          <table>
            <tbody>
              <tr>
                <th>Document</th>
                <td>
                  <b>Submitted</b>
                </td>
                <th>OFFICIAL USE ONLY</th>
              </tr>
              <tr>
                <td>1. Signed Copy of Appointment Letter</td>
                <td>
                  <input
                    type="checkbox"
                    checked={
                      formData.documentChecklist.signedCopyOfAppointmentLetter
                    }
                    onChange={() =>
                      handleDocumentChecklistChange(
                        "signedCopyOfAppointmentLetter"
                      )
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>

              <tr>
                <td>2. Self Photographs (Passport Sized, Colour)</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.documentChecklist.photographs}
                    onChange={() =>
                      handleDocumentChecklistChange("photographs")
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>3. Latest Curriculum Vitae</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.documentChecklist.curriculumVitae}
                    onChange={() =>
                      handleDocumentChecklistChange("curriculumVitae")
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>4. Proof of Identity</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.documentChecklist.proofOfIdentity}
                    onChange={() =>
                      handleDocumentChecklistChange("proofOfIdentity")
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>5. Date of Birth Certificate</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.documentChecklist.birthCertificate}
                    onChange={() =>
                      handleDocumentChecklistChange("birthCertificate")
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>6. Relieving/ Resignation Acceptance Letter</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.documentChecklist["Relieving"]}
                    onChange={() => handleDocumentChecklistChange("Relieving")}
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>7. Latest Payslip / Salary Certificate</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.documentChecklist["LatestPayslip"]}
                    onChange={() =>
                      handleDocumentChecklistChange("LatestPayslip")
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>8. Education Degree Certificate & Marksheet</td>
                <td>
                  <input
                    type="checkbox"
                    checked={
                      formData.documentChecklist
                        .EducationDegreeCertificateMarksheet
                    }
                    onChange={() =>
                      handleDocumentChecklistChange(
                        "EducationDegreeCertificateMarksheet"
                      )
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>9. PAN Card / Acknowledgement slip of Form 49</td>
                <td>
                  <input
                    type="checkbox"
                    checked={
                      formData.documentChecklist
                        .PANCardAcknowledgementslipofForm49
                    }
                    onChange={() =>
                      handleDocumentChecklistChange(
                        "PANCardAcknowledgementslipofForm49"
                      )
                    }
                    required
                  />
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
              <tr>
                <td colSpan="3"> Note: All photocopies to be self certified</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 4: personal Information */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("personalInfo")}>
          {accordionState.personalInfo
            ? "4. Personal Information -"
            : "4. Personal Information +"}
        </h6>
        {accordionState.personalInfo && (
          <table>
            <tbody>
              <tr>
                <td>Title:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.title}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "title", e.target.value)
                    }
                    required
                  />
                  {formData.personalInfo.title.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.title) && (
                      <p className="error-message">
                        Title must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.firstName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "firstName",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.firstName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.firstName) && (
                      <p className="error-message">
                        firstName must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Middle Name:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.middleName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "middleName",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.middleName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.middleName) && (
                      <p className="error-message">
                        MiddleName must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.lastName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "lastName",
                        e.target.value
                      )
                    }
                    required
                  />

                  {formData.personalInfo.lastName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.lastName) && (
                      <p className="error-message">
                        LastName must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Date Of Birth(DD/MM/YYYY):</td>
                <td>
                  <input
                    type="date"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "dateOfBirth",
                        e.target.value
                      )
                    }
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <input
                    type="checkbox"
                    checked={formData.personalInfo.gender === "Male"}
                    onChange={() =>
                      handleInputChange("personalInfo", "gender", "Male")
                    }
                    required
                  />
                  Male {"\t"}
                  <input
                    type="checkbox"
                    checked={formData.personalInfo.gender === "Female"}
                    onChange={() =>
                      handleInputChange("personalInfo", "gender", "Female")
                    }
                    required
                  />
                  Female
                </td>
              </tr>
              <tr>
                <td>Father's Name:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.fatherName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "fatherName",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.fatherName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.fatherName) && (
                      <p className="error-message">
                        FatherName must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Mother's Name:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.motherName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "motherName",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.motherName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.motherName) && (
                      <p className="error-message">
                        Mother Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Marital Status:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.maritalStatus}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "maritalStatus",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.maritalStatus.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.personalInfo.maritalStatus
                    ) && (
                      <p className="error-message">
                        Marital Status must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Spouse's Name(if applicable):</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.spouseName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "spouseName",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.spouseName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.spouseName) && (
                      <p className="error-message">
                        Spouse Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Identity Mark:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.identityMark}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "identityMark",
                        e.target.value
                      )
                    }
                    required
                  />

                  {formData.personalInfo.identityMark.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.personalInfo.identityMark
                    ) && (
                      <p className="error-message">
                        Identity Mark must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Blood Group:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.bloodGroup}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "bloodGroup",
                        e.target.value
                      )
                    }
                    required
                  />

                  {formData.personalInfo.bloodGroup.length > 0 &&
                    !/^[A-Za-z\s+-]*$/.test(
                      formData.personalInfo.bloodGroup
                    ) && (
                      <p className="error-message">
                        Blood Group must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Any Other(Allergies):</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.allergies}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "allergies",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.allergies.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.personalInfo.allergies) && (
                      <p className="error-message">
                        Any Other must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Passport NO:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.passportNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "passportNumber",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.passportNumber.length > 0 &&
                    !/^[A-Za-z0-9]*$/.test(
                      formData.personalInfo.passportNumber
                    ) && (
                      <p className="error-message">
                        Passport Number must contain only letters and numbers
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>PAN No:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.panNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "panNumber",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.panNumber.length > 0 &&
                    !/^[A-Za-z0-9]*$/.test(formData.personalInfo.panNumber) && (
                      <p className="error-message">
                        PAN No must contain only letters and numbers
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Aadhar No(if available):</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.aadharNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "aadharNumber",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.aadharNumber.length > 0 &&
                    !/^[0-9]*$/.test(formData.personalInfo.aadharNumber) && (
                      <p className="error-message">
                        Aadhar No must contain only numbers
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>PF Account No & UAN:</td>
                <td>
                  <input
                    type="text"
                    value={formData.personalInfo.pfAccountNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "pfAccountNumber",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.personalInfo.pfAccountNumber.length > 0 &&
                    !/^[0-9]*$/.test(formData.personalInfo.pfAccountNumber) && (
                      <p className="error-message">
                        PF Account No & UAN must contain only numbers
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 5: AddressInformation */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("addressInfo")}>
          {accordionState.addressInfo
            ? "5. Address Information -"
            : "5. Address Information +"}
        </h6>
        {accordionState.addressInfo && (
          <table>
            <tbody>
              <tr>
                <td>Present Address:</td>
                <td>
                  <textarea
                    name="presentAddress"
                    id="presentAddress"
                    rows="3"
                    cols="30"
                    value={formData.addressInfo.presentAddress}
                    onChange={(e) =>
                      handleInputChange(
                        "addressInfo",
                        "presentAddress",
                        e.target.value
                      )
                    }
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Permanent Address:</td>
                <td>
                  <textarea
                    name="permanentAddress"
                    id="permanentAddress"
                    rows="3"
                    cols="30"
                    value={formData.addressInfo.permanentAddress}
                    onChange={(e) =>
                      handleInputChange(
                        "addressInfo",
                        "permanentAddress",
                        e.target.value
                      )
                    }
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>
                  <input
                    type="text"
                    name="mobileNumber"
                    id="mobileNumber"
                    value={formData.addressInfo.mobileNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "addressInfo",
                        "mobileNumber",
                        e.target.value
                      )
                    }
                    required
                  />

                  {formData.addressInfo.mobileNumber.length > 0 &&
                    !/^[6-9][0-9]{9}$/.test(
                      formData.addressInfo.mobileNumber
                    ) && (
                      <p className="error-message">
                        mobile Number must contain exactly 10 digits, starting
                        with a number between 6 to 9.
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Personal Email ID:</td>
                <td>
                  <input
                    type="text"
                    name="personalEmail"
                    id="personalEmail"
                    value={formData.addressInfo.personalEmail}
                    onChange={(e) =>
                      handleInputChange(
                        "addressInfo",
                        "personalEmail",
                        e.target.value
                      )
                    }
                    required
                  />

                  {formData.addressInfo.personalEmail.length > 0 &&
                    !/^\S+@\S+\.\S+$/.test(
                      formData.addressInfo.personalEmail
                    ) && (
                      <p className="error-message">Invalid email address.</p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 6: Dependent Information */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("dependentInformation")}>
          {accordionState.dependentInformation
            ? "6. dependent Information -"
            : "6. dependent Information +"}
        </h6>
        {accordionState.dependentInformation && (
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Relationship</td>
                <td>Date Of Birth</td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    name="dependentName"
                    id="dependentName"
                    value={formData.dependentInformation.name1}
                    onChange={handledependentInformationChange("name1")}
                    required
                  />
                  {formData.dependentInformation.name1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.dependentInformation.name1
                    ) && (
                      <p className="error-message">
                        dependent Name must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="relationship"
                    id="relationship"
                    value={formData.dependentInformation.relationship1}
                    onChange={handledependentInformationChange("relationship1")}
                    required
                  />
                  {formData.dependentInformation.relationship1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.dependentInformation.relationship1
                    ) && (
                      <p className="error-message">
                        dependent relationship must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dependentInformation.dateOfBirth1}
                    onChange={handledependentInformationChange("dateOfBirth1")}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="dependentName"
                    id="dependentName"
                    value={formData.dependentInformation.name2}
                    onChange={handledependentInformationChange("name2")}
                    required
                  />
                  {formData.dependentInformation.name2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.dependentInformation.name2
                    ) && (
                      <p className="error-message">
                        dependent Name must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="relationship"
                    id="relationship"
                    value={formData.dependentInformation.relationship2}
                    onChange={handledependentInformationChange("relationship2")}
                    required
                  />
                  {formData.dependentInformation.relationship2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.dependentInformation.relationship2
                    ) && (
                      <p className="error-message">
                        dependent relationship must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dependentInformation.dateOfBirth2}
                    onChange={handledependentInformationChange("dateOfBirth2")}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    name="dependentName"
                    id="dependentName"
                    value={formData.dependentInformation.name}
                    onChange={handledependentInformationChange("name")}
                    required
                  />
                  {formData.dependentInformation.name.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.dependentInformation.name
                    ) && (
                      <p className="error-message">
                        dependent Name must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="relationship"
                    id="relationship"
                    value={formData.dependentInformation.relationship}
                    onChange={handledependentInformationChange("relationship")}
                    required
                  />
                  {formData.dependentInformation.relationship.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.dependentInformation.relationship
                    ) && (
                      <p className="error-message">
                        dependent relationship must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dependentInformation.dateOfBirth}
                    onChange={handledependentInformationChange("dateOfBirth")}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 7: Emergency Contact Information 1 */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("emergencyContact1")}>
          {accordionState.emergencyContact1
            ? "7. Emergency Contact 1 -"
            : "7. Emergency Contact 1 +"}
        </h6>
        {accordionState.emergencyContact1 && (
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactName1"
                    id="emergencyContactName1"
                    value={formData.emergencyContact1.name}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact1",
                        "name",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact1.name.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.emergencyContact1.name) && (
                      <p className="error-message">
                        Full Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Relationship:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactRelationship1"
                    id="emergencyContactRelationship1"
                    value={formData.emergencyContact1.relationship}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact1",
                        "relationship",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact1.relationship.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.emergencyContact1.relationship
                    ) && (
                      <p className="error-message">
                        Full Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Landline No (with STD Code):</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactLandline1"
                    id="emergencyContactLandline1"
                    value={formData.emergencyContact1.landline}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact1",
                        "landline",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact1.landline.length > 0 &&
                    !/^[0-9][0-9]{11}$/.test(
                      formData.emergencyContact1.landline
                    ) && (
                      <p className="error-message">
                        landline Number must contain exactly 11 digits
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Mobile No:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactMobile1"
                    id="emergencyContactMobile1"
                    value={formData.emergencyContact1.mobile}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact1",
                        "mobile",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact1.mobile.length > 0 &&
                    !/^[6-9][0-9]{9}$/.test(
                      formData.emergencyContact1.mobile
                    ) && (
                      <p className="error-message">
                        mobile Number must contain exactly 10 digits, starting
                        with a number between 6 to 9.
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 7: Emergency Contact Information 2 */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("emergencyContact2")}>
          {accordionState.emergencyContact2
            ? "7. Emergency Contact 2 -"
            : "7. Emergency Contact 2 +"}
        </h6>
        {accordionState.emergencyContact2 && (
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactName2"
                    id="emergencyContactName2"
                    value={formData.emergencyContact2.name}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact2",
                        "name",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.fullName.fullName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.fullName.fullName) && (
                      <p className="error-message">
                        Full Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Relationship:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactRelationship2"
                    id="emergencyContactRelationship2"
                    value={formData.emergencyContact2.relationship}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact2",
                        "relationship",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact2.relationship.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.emergencyContact2.relationship
                    ) && (
                      <p className="error-message">
                        Full Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Landline No (with STD Code):</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactLandline2"
                    id="emergencyContactLandline2"
                    value={formData.emergencyContact2.landline}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact2",
                        "landline",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact2.landline.length > 0 &&
                    !/^[0-9][0-9]{11}$/.test(
                      formData.emergencyContact2.landline
                    ) && (
                      <p className="error-message">
                        landline Number must contain exactly 11 digits
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Mobile No:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactMobile2"
                    id="emergencyContactMobile2"
                    value={formData.emergencyContact2.mobile}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContact2",
                        "mobile",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.emergencyContact2.mobile.length > 0 &&
                    !/^[6-9][0-9]{9}$/.test(
                      formData.emergencyContact2.mobile
                    ) && (
                      <p className="error-message">
                        mobile Number must contain exactly 10 digits, starting
                        with a number between 6 to 9.
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 8: Education deatails */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("educationdeatails")}>
          {accordionState.educationdeatails
            ? "8. Education Details -"
            : "8. Education Details +"}
        </h6>
        {accordionState.educationdeatails && (
          <table>
            <tbody>
              <tr>
                <td>Degree</td>
                <td>Name of Board/University</td>
                <td>Marks Obtained(%)</td>
                <td>Passing Year</td>
              </tr>
              {/* first row s*/}
              <tr>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsdegree1"
                    id="educationdeatailsdegree1"
                    value={formData.educationdeatails.degree1}
                    onChange={handleeducationdeatailsChange("degree1")}
                    required
                  />
                  {formData.educationdeatails.degree1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.educationdeatails.degree1
                    ) && (
                      <p className="error-message">
                        dependent Name must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofuniversity1"
                    id="educationdeatailsnameofuniversity1"
                    value={formData.educationdeatails.nameofuniversity1}
                    onChange={handleeducationdeatailsChange(
                      "nameofuniversity1"
                    )}
                    required
                  />
                  {formData.educationdeatails.nameofuniversity1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.educationdeatails.nameofuniversity1
                    ) && (
                      <p className="error-message">
                        dependent relationship must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofmarksObtained1"
                    id="educationdeatailsnameofmarksObtained1"
                    value={formData.educationdeatails.marksObtained1}
                    onChange={handleeducationdeatailsChange("marksObtained1")}
                    required
                  />
                  {formData.educationdeatails.marksObtained1.length > 0 &&
                    !/^[1-9]{2}\.[0-9]{2}$/.test(
                      formData.educationdeatails.marksObtained1
                    ) && (
                      <p className="error-message">
                        percentage must contain exactly 2 digits, starting with
                        a number between 1 to 9, followed by a dot (.) and then
                        two digits. EXP : 89.28
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofpassingyerrar1"
                    id="educationdeatailsnameofpassingyerrar1"
                    value={formData.educationdeatails.passingyerrar1}
                    onChange={handleeducationdeatailsChange("passingyerrar1")}
                    required
                  />
                  {formData.educationdeatails.passingyerrar1.length > 0 &&
                    !/^[1-9][0-9]{3}$/.test(
                      formData.educationdeatails.passingyerrar1
                    ) && (
                      <p className="error-message">
                        passing yerrar must be a valid number exp:2014
                      </p>
                    )}
                </td>
              </tr>

              {/* second row */}

              <tr>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsdegree2"
                    id="educationdeatailsdegree2"
                    value={formData.educationdeatails.degree2}
                    onChange={handleeducationdeatailsChange("degree2")}
                    required
                  />
                  {formData.educationdeatails.degree2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.educationdeatails.degree2
                    ) && (
                      <p className="error-message">
                        dependent Name must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofuniversity2"
                    id="educationdeatailsnameofuniversity2"
                    value={formData.educationdeatails.nameofuniversity2}
                    onChange={handleeducationdeatailsChange(
                      "nameofuniversity2"
                    )}
                    required
                  />
                  {formData.educationdeatails.nameofuniversity2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.educationdeatails.nameofuniversity2
                    ) && (
                      <p className="error-message">
                        dependent relationship must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofmarksObtained2"
                    id="educationdeatailsnameofmarksObtained2"
                    value={formData.educationdeatails.marksObtained2}
                    onChange={handleeducationdeatailsChange("marksObtained2")}
                    required
                  />
                  {formData.educationdeatails.marksObtained2.length > 0 &&
                    !/^[1-9]{2}\.[0-9]{2}$/.test(
                      formData.educationdeatails.marksObtained2
                    ) && (
                      <p className="error-message">
                        percentage must contain exactly 2 digits, starting with
                        a number between 1 to 9, followed by a dot (.) and then
                        two digits. EXP : 89.28
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofpassingyerrar2"
                    id="educationdeatailsnameofpassingyerrar2"
                    value={formData.educationdeatails.passingyerrar2}
                    onChange={handleeducationdeatailsChange("passingyerrar2")}
                    required
                  />
                  {formData.educationdeatails.passingyerrar2.length > 0 &&
                    !/^[1-9][0-9]{3}$/.test(
                      formData.educationdeatails.passingyerrar2
                    ) && (
                      <p className="error-message">
                        passing yerrar must be a valid number exp:2014
                      </p>
                    )}
                </td>
              </tr>

              {/* third row */}

              <tr>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsdegree3"
                    id="educationdeatailsdegree3"
                    value={formData.educationdeatails.degree3}
                    onChange={handleeducationdeatailsChange("degree3")}
                    required
                  />
                  {formData.educationdeatails.degree3.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.educationdeatails.degree3
                    ) && (
                      <p className="error-message">
                        dependent Name must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofuniversity3"
                    id="educationdeatailsnameofuniversity3"
                    value={formData.educationdeatails.nameofuniversity3}
                    onChange={handleeducationdeatailsChange(
                      "nameofuniversity3"
                    )}
                    required
                  />
                  {formData.educationdeatails.nameofuniversity3.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.educationdeatails.nameofuniversity3
                    ) && (
                      <p className="error-message">
                        dependent relationship must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofmarksObtained3"
                    id="educationdeatailsnameofmarksObtained3"
                    value={formData.educationdeatails.marksObtained3}
                    onChange={handleeducationdeatailsChange("marksObtained3")}
                    required
                  />
                  {formData.educationdeatails.marksObtained3.length > 0 &&
                    !/^[1-9]{2}\.[0-9]{2}$/.test(
                      formData.educationdeatails.marksObtained3
                    ) && (
                      <p className="error-message">
                        percentage must contain exactly 2 digits, starting with
                        a number between 1 to 9, followed by a dot (.) and then
                        two digits. EXP : 89.28
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="educationdeatailsnameofpassingyerrar3"
                    id="educationdeatailsnameofpassingyerrar3"
                    value={formData.educationdeatails.passingyerrar3}
                    onChange={handleeducationdeatailsChange("passingyerrar3")}
                    required
                  />
                  {formData.educationdeatails.passingyerrar3.length > 0 &&
                    !/^[1-9][0-9]{3}$/.test(
                      formData.educationdeatails.passingyerrar3
                    ) && (
                      <p className="error-message">
                        passing yerrar must be a valid number exp:2014
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 9: Experience history */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("experiencehistory")}>
          {accordionState.experiencehistory
            ? "9. experiencehistory -"
            : "9. experiencehistory +"}
        </h6>
        {accordionState.experiencehistory && (
          <table>
            <tbody>
              <tr>
                <td>Name of the company</td>
                <td>Designation</td>
                <td>Date of Joining</td>
                <td>Date of Resigning</td>
                <td>Total years of Experience</td>
                <td>Remarks</td>
              </tr>
              {/* first row s*/}
              <tr>
                <td>
                  <input
                    type="text"
                    name="experiencehistorynameofthecompany1"
                    id="experiencehistorynameofthecompany1"
                    value={formData.experiencehistory.nameofthecompany1}
                    onChange={handleexperiencehistoryChange(
                      "nameofthecompany1"
                    )}
                    required
                  />
                  {formData.experiencehistory.nameofthecompany1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.nameofthecompany1
                    ) && (
                      <p className="error-message">
                        name of the company must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistorydesignation1"
                    id="experiencehistorydesignation1"
                    value={formData.experiencehistory.designation1}
                    onChange={handleexperiencehistoryChange("designation1")}
                    required
                  />
                  {formData.experiencehistory.designation1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.designation1
                    ) && (
                      <p className="error-message">
                        designation must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="date"
                    name="experiencehistorydateofjoining1"
                    id="experiencehistorydateofjoining1"
                    value={formData.experiencehistory.dateofjoining1}
                    onChange={handleexperiencehistoryChange("dateofjoining1")}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="experiencehistorydateofresigning1"
                    id="experiencehistorydateofresigning1"
                    value={formData.experiencehistory.dateofresigning1}
                    onChange={handleexperiencehistoryChange("dateofresigning1")}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistorytotalyearsofExperience1"
                    id="experiencehistorytotalyearsofExperience1"
                    value={formData.experiencehistory.totalyearsofExperience1}
                    onChange={handleexperiencehistoryChange(
                      "totalyearsofExperience1"
                    )}
                    required
                  />
                  {formData.experiencehistory.totalyearsofExperience1.length >
                    0 &&
                    !/^[A-Za-z0-9]*$/.test(
                      formData.experiencehistory.totalyearsofExperience1
                    ) && (
                      <p className="error-message">
                        total years of Experience must contain letters and
                        numbers.
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistoryremarks1"
                    id="experiencehistoryremarks1"
                    value={formData.experiencehistory.remarks1}
                    onChange={handleexperiencehistoryChange("remarks1")}
                    required
                  />
                  {formData.experiencehistory.remarks1.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.remarks1
                    ) && (
                      <p className="error-message">
                        remarks must contain only letters
                      </p>
                    )}
                </td>
              </tr>

              {/* second row */}

              <tr>
                <td>
                  <input
                    type="text"
                    name="experiencehistorynameofthecompany2"
                    id="experiencehistorynameofthecompany2"
                    value={formData.experiencehistory.nameofthecompany2}
                    onChange={handleexperiencehistoryChange(
                      "nameofthecompany2"
                    )}
                    required
                  />
                  {formData.experiencehistory.nameofthecompany2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.nameofthecompany2
                    ) && (
                      <p className="error-message">
                        name of the company must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistorydesignation2"
                    id="experiencehistorydesignation2"
                    value={formData.experiencehistory.designation2}
                    onChange={handleexperiencehistoryChange("designation2")}
                    required
                  />
                  {formData.experiencehistory.designation2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.designation2
                    ) && (
                      <p className="error-message">
                        designation must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="date"
                    name="experiencehistorydateofjoining2"
                    id="experiencehistorydateofjoining2"
                    value={formData.experiencehistory.dateofjoining2}
                    onChange={handleexperiencehistoryChange("dateofjoining2")}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="experiencehistorydateofresigning2"
                    id="experiencehistorydateofresigning2"
                    value={formData.experiencehistory.dateofresigning2}
                    onChange={handleexperiencehistoryChange("dateofresigning2")}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistorytotalyearsofExperience2"
                    id="experiencehistorytotalyearsofExperience2"
                    value={formData.experiencehistory.totalyearsofExperience2}
                    onChange={handleexperiencehistoryChange(
                      "totalyearsofExperience2"
                    )}
                    required
                  />
                  {formData.experiencehistory.totalyearsofExperience2.length >
                    0 &&
                    !/^[A-Za-z0-9]*$/.test(
                      formData.experiencehistory.totalyearsofExperience2
                    ) && (
                      <p className="error-message">
                        total years of Experience must contain letters and
                        numbers.
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistoryremarks2"
                    id="experiencehistoryremarks2"
                    value={formData.experiencehistory.remarks2}
                    onChange={handleexperiencehistoryChange("remarks2")}
                    required
                  />
                  {formData.experiencehistory.remarks2.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.remarks2
                    ) && (
                      <p className="error-message">
                        remarks must contain only letters
                      </p>
                    )}
                </td>
              </tr>

              {/* third row */}

              <tr>
                <td>
                  <input
                    type="text"
                    name="experiencehistorynameofthecompany3"
                    id="experiencehistorynameofthecompany3"
                    value={formData.experiencehistory.nameofthecompany3}
                    onChange={handleexperiencehistoryChange(
                      "nameofthecompany3"
                    )}
                    required
                  />
                  {formData.experiencehistory.nameofthecompany3.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.nameofthecompany3
                    ) && (
                      <p className="error-message">
                        name of the company must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistorydesignation3"
                    id="experiencehistorydesignation3"
                    value={formData.experiencehistory.designation3}
                    onChange={handleexperiencehistoryChange("designation3")}
                    required
                  />
                  {formData.experiencehistory.designation3.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.designation3
                    ) && (
                      <p className="error-message">
                        designation must contain only letters
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="date"
                    name="experiencehistorydateofjoining3"
                    id="experiencehistorydateofjoining3"
                    value={formData.experiencehistory.dateofjoining3}
                    onChange={handleexperiencehistoryChange("dateofjoining3")}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="experiencehistorydateofresigning3"
                    id="experiencehistorydateofresigning3"
                    value={formData.experiencehistory.dateofresigning3}
                    onChange={handleexperiencehistoryChange("dateofresigning3")}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistorytotalyearsofExperience3"
                    id="experiencehistorytotalyearsofExperience3"
                    value={formData.experiencehistory.totalyearsofExperience3}
                    onChange={handleexperiencehistoryChange(
                      "totalyearsofExperience3"
                    )}
                    required
                  />
                  {formData.experiencehistory.totalyearsofExperience3.length >
                    0 &&
                    !/^[A-Za-z0-9]*$/.test(
                      formData.experiencehistory.totalyearsofExperience3
                    ) && (
                      <p className="error-message">
                        total years of Experience must contain letters and
                        numbers.
                      </p>
                    )}
                </td>
                <td>
                  <input
                    type="text"
                    name="experiencehistoryremarks3"
                    id="experiencehistoryremarks3"
                    value={formData.experiencehistory.remarks3}
                    onChange={handleexperiencehistoryChange("remarks3")}
                    required
                  />
                  {formData.experiencehistory.remarks3.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.experiencehistory.remarks3
                    ) && (
                      <p className="error-message">
                        remarks must contain only letters
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 10: Employeenomination */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("employeenomination")}>
          {accordionState.employeenomination
            ? "10. Employeenomination  -"
            : "10. Employeenomination  +"}
        </h6>
        {accordionState.employeenomination && (
          <table>
            <tbody>
              <tr>
                <td>Name of the Nominee:</td>
                <td>
                  <input
                    type="text"
                    name="nominationName"
                    id="nominationName"
                    value={formData.employeenomination.name}
                    onChange={(e) =>
                      handleInputChange(
                        "employeenomination",
                        "name",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.employeenomination.name.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.employeenomination.name) && (
                      <p className="error-message">
                        Full Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Relation with the Nomininee:</td>
                <td>
                  <input
                    type="text"
                    name="NominineeRelationship"
                    id="NominineeRelationship"
                    value={formData.employeenomination.relationship}
                    onChange={(e) =>
                      handleInputChange(
                        "employeenomination",
                        "relationship",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.employeenomination.relationship.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(
                      formData.employeenomination.relationship
                    ) && (
                      <p className="error-message">
                        Full Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Age of the nominee:</td>
                <td>
                  <input
                    type="text"
                    name="nomineeAge"
                    id="nomineeAge"
                    value={formData.employeenomination.age}
                    onChange={(e) =>
                      handleInputChange(
                        "employeenomination",
                        "age",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.employeenomination.age.length > 0 &&
                    !/^[0-9]{2}$/.test(formData.employeenomination.age) && (
                      <p className="error-message">
                        age must contain exactly 2 digits
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Address of the Nominee:</td>
                <td>
                  <textarea
                    rows="3"
                    cols="30"
                    type="text"
                    name="Nomineeadd"
                    id="Nomineeadd"
                    value={formData.employeenomination.address}
                    onChange={(e) =>
                      handleInputChange(
                        "employeenomination",
                        "address",
                        e.target.value
                      )
                    }
                    required
                  />
                </td>
              </tr>
              <tr>
                <td> Phone number of the Nominee:</td>
                <td>
                  <input
                    type="text"
                    name="Nomineephno"
                    id="Nomineephno"
                    value={formData.employeenomination.mobile}
                    onChange={(e) =>
                      handleInputChange(
                        "employeenomination",
                        "mobile",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.employeenomination.mobile.length > 0 &&
                    !/^[6-9][0-9]{9}$/.test(
                      formData.employeenomination.mobile
                    ) && (
                      <p className="error-message">
                        mobile Number must contain exactly 10 digits, starting
                        with a number between 6 to 9.
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 11: Bank Details  */}

      <div className="form-section">
        <h6 onClick={() => toggleAccordion("bankDetails")}>
          {accordionState.bankDetails
            ? "11. Bank Details  -"
            : "11. Bank Details  +"}
        </h6>
        {accordionState.bankDetails && (
          <table>
            <tbody>
              <tr>
                <td>Bank Name:</td>
                <td>
                  <input
                    type="text"
                    name="nominationName"
                    id="nominationName"
                    value={formData.bankDetails.bankName}
                    onChange={(e) =>
                      handleInputChange(
                        "bankDetails",
                        "bankName",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.bankDetails.bankName.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.bankDetails.bankName) && (
                      <p className="error-message">
                        Bank Name must contain only letters
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Bank A/c No</td>
                <td>
                  <input
                    type="text"
                    name="NominineeRelationship"
                    id="NominineeRelationship"
                    value={formData.bankDetails.bankAcNo}
                    onChange={(e) =>
                      handleInputChange(
                        "bankDetails",
                        "bankAcNo",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.bankDetails.bankAcNo.length > 0 &&
                    !/^[0-9]{16}$/.test(formData.bankDetails.bankAcNo) && (
                      <p className="error-message">
                        bank A/c No must be exactly 16 characters long and
                        contain only numbers.
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td>Bank Branch</td>
                <td>
                  <input
                    type="text"
                    name="nomineeAge"
                    id="nomineeAge"
                    value={formData.bankDetails.bankBranch}
                    onChange={(e) =>
                      handleInputChange(
                        "bankDetails",
                        "bankBranch",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.bankDetails.bankBranch.length > 0 &&
                    !/^[A-Za-z\s]*$/.test(formData.bankDetails.bankBranch) && (
                      <p className="error-message">
                        age must contain exactly 10 digits
                      </p>
                    )}
                </td>
              </tr>
              <tr>
                <td> IFC Code</td>
                <td>
                  <input
                    type="text"
                    name="Nomineephno"
                    id="Nomineephno"
                    value={formData.bankDetails.ifscCode}
                    onChange={(e) =>
                      handleInputChange(
                        "bankDetails",
                        "ifscCode",
                        e.target.value
                      )
                    }
                    required
                  />
                  {formData.bankDetails.ifscCode.length > 0 &&
                    !/^[a-zA-Z0-9]{10}$/.test(
                      formData.bankDetails.ifscCode
                    ) && (
                      <p className="error-message">
                        IFSC Code must be exactly 10 characters long and contain
                        only letters and numbers.
                      </p>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Section 12: Acknowledgment */}

      <div className="form-section">
        <h2 className="Atitile">ACKNOWLEDGEMENT</h2>
        <form>
          <div>
            <label htmlFor="name">
              I{" "}
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />{" "}
              agree to the terms and conditions stated as above, and I hereby
              confirm that I will adhere to the policies of the company and
              discharge my duties to the satisfaction of the higher authorities.
            </label>
          </div>

          <div className="gap"></div>
          <div className="single-line">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="single-line left-aligned">
            <label htmlFor="signature">Employee Signature:</label>
            <input type="text" id="signature" placeholder="Sign here" />
          </div>
        </form>
      </div>

      {/* <button onClick={handlePrint}>Print</button> */}

      <button onClick={handleSubmit}>Submit</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}

      <button>Print</button>
    </div>
  );
}
