import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./LIT.png";

import "./Navbar.css";

import Userinfo from "../Userinfo/Userinfo";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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

  return (
    <div className="main">
      <header className="header">
        <div className="logo-nav">
          <div className="logo-img">
            <img className="logo-image" src={logo} alt="logo" />
          </div>
        </div>
        <nav className="navbar">
          <div className="content-navbar">
            <div className="text">
              <div className="company-name-homepage">
                Welcome to L-IT TRULY SERVICES PVT LTD
              </div>
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                HR Lap &#x25BE;
                <ul className="dropdown-list">
                  <li className="list-items1 submenu">
                    Employee Lap
                    <ul className="sub-dropdown-list rsm">
                      <li className="sub-list-items1 black">
                        <Link to={"/home/employeeRegistation"}>
                          Registration
                        </Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={"/home/employeeSearch"}>Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={"/home/employeeManagement"}>Management</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="list-items2 submenu">
                    Internship Lap
                    <ul className="sub-dropdown-list rsm">
                      <li className="sub-list-items1 sub-list-items-1">
                        <Link to={"/home/internRegistation"}>Registration</Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={"/home/internSearch"}> Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={"/home/internManagement"}>Management</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                BDM &#x25BE;
                <ul className="dropdown-list">
                  <li className="list-items1 submenu">
                    Vendor Lap
                    <ul className="sub-dropdown-list">
                      <li className="sub-list-items1 black">
                        <Link to={"/home/venderRegistration"}>
                          Registration
                        </Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={"/home/venderSearch"}>Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={"/home/venderManagement"}> Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-items2 submenu">
                    Client Lap
                    <ul className="sub-dropdown-list rsm">
                      <li className="sub-list-items1">
                        <Link to={"/home/clientRegistration"}>
                          Registration
                        </Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={"/home/clientSearch"}>Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={"/home/clientMangement"}>Management</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                Finance Lap
                <ul className="dropdown-list">
                  <li className="list-items1">
                    <Link to={"/home/financeRegister"}> Registration</Link>{" "}
                  </li>
                  <li className="list-items2">
                    <Link to={"/home/financeSearch"}>Search</Link>
                  </li>
                  <li className="list-items3">
                    <Link to={"/home/financeMangement"}>Management</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                CO-Work & Asset &#x25BE;
                <ul className="dropdown-list">
                  <li className="list-items1 submenu">
                    Asset lap
                    <ul className="sub-dropdown-list rsm">
                      <li className="sub-list-items1 black">
                        <Link to={"/home/assetsRegistration"}>
                          Registration
                        </Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={""}>Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={""}>Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-items2 submenu">
                    CO-Work Lap
                    <ul className="sub-dropdown-list rsm">
                      <li className="sub-list-items1 sub-list-items-1">
                        <Link to={"/home/co-wRegistration"}>Registration</Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={"/home/clientSearch"}>Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={"/home/clientMangement"}>Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-items3 submenu">
                    Infrastructure
                    <ul className="sub-dropdown-list rsm">
                      <li className="sub-list-items1">
                        <Link to={"/home/clientRegistration"}>
                          Registration
                        </Link>
                      </li>
                      <li className="sub-list-items2">
                        <Link to={"/home/clientSearch"}>Search</Link>
                      </li>
                      <li className="sub-list-items3">
                        <Link to={"/home/clientMangement"}>Management</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                IT Recruitment Lap
                <ul className="dropdown-list">
                  <li className="list-items1">
                    <Link to={"/home/itlapregister"}> Registration</Link>
                  </li>
                  <li className="list-items2">
                    <Link to={"/home/itsearch"}> Search</Link>
                  </li>
                  <li className="list-items3">
                    <Link to={"/home/itsearch"}> Management</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                Requirement
                <ul className="dropdown-list">
                  <li className="list-items1">
                    <Link to={"/home/addRequirement"}>Add Requirement</Link>
                  </li>
                  <li className="list-items2">
                    <Link to={"/home/requirementSearch"}> Search</Link>
                  </li>
                  <li className="list-items3">
                    <Link to={"/home/requirementManagement"}> Management</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="user-icon">
          <div className="div4">
            <Userinfo />
          </div>
        </div>
      </header>
    </div>
    // <div className="main">
    //   <div className="div1">
    //     <img
    //       src="https://littuss.com/wp-content/uploads/2022/09/LIT-TRULY-LOGO.png"
    //       alt="logo"
    //       className="img"
    //     />
    //   </div>
    //   <div className="main1">
    //     <div className="div2">
    //       <h3>Welcome to L-IT TRULY SERVICES PVT LTD</h3>
    //     </div>
    //     <div className="div3">
    //       <nav className="navbar">
    //         <li className="nav-list">
    //           <li className="nav-item">
    //             HR Lap
    //             <li className="dropdown">
    //               <li className="sub-item-1">
    //                 Vendor Lap
    //                 <li className="nested-dropdown1">
    //                   <li className="sub-item1">
    //                     <Link to={"/home/venderRegistration"}>
    //                       Registration
    //                     </Link>
    //                   </li>
    //                   <li className="sub-item2">
    //                     <Link to={"/home/venderSearch"}>Search</Link>
    //                   </li>
    //                   <li className="sub-item3">
    //                     <Link to={"/home/venderManagement"}>Management</Link>
    //                   </li>
    //                 </li>
    //               </li>

    //               <li className="sub-item-2">
    //                 Client Lap{" "}
    //                 <li className="nested-dropdown2">
    //                   <li className="sub-item1">
    //                     <Link to={"/home/clientRegistration"}>
    //                       Registration
    //                     </Link>
    //                   </li>
    //                   <li className="sub-item2">
    //                     <Link to={"/home/clientSearch"}>Search</Link>
    //                   </li>
    //                   <li className="sub-item3">
    //                     <Link to={"/home/clientMangement"}>Management</Link>
    //                   </li>
    //                 </li>
    //               </li>

    //               <li className="sub-item-3">
    //                 Internship Lap{" "}
    //                 <li className="nested-dropdown3">
    //                   <li className="sub-item1">
    //                     <Link to={"/home/internRegistation"}>Registration</Link>
    //                   </li>
    //                   <li className="sub-item2">
    //                     <Link to={"/home/internSearch"}> Search</Link>
    //                   </li>
    //                   <li className="sub-item3">
    //                     <Link to={"/home/internManagement"}>Management</Link>
    //                   </li>
    //                 </li>
    //               </li>
    //             </li>
    //           </li>
    //           <li className="nav-item">
    //             Employee Lap
    //             <li className="dropdown">
    //               <li className="sub-item1">
    //                 <Link to={"/home/employeeRegistation"}> Registration</Link>
    //               </li>
    //               <li className="sub-item2">
    //                 <Link to={"/home/employeeSearch"}>Search</Link>
    //               </li>
    //               <li className="sub-item3">
    //                 <Link to={"/home/employeeManagement"}> Management</Link>
    //               </li>
    //             </li>
    //           </li>
    //           <li className="nav-item">
    //             Finance Lap
    //             <li className="dropdown">
    //               <li className="sub-item11">
    //                 <Link to={"/home/financeRegister"}> Registration</Link>
    //               </li>
    //               <li className="sub-item22">
    //                 <Link to={"/home/financeSearch"}>Search</Link>
    //               </li>
    //               <li className="sub-item33">
    //                 <Link to={"/home/financeMangement"}>Management</Link>
    //               </li>
    //             </li>
    //           </li>

    //           <li className="nav-item">
    //             Asset lap
    //             <li className="dropdown">
    //               {/* <li className="sub-item-4"><Link to={"/home/assetsRegistration"}>Registration</Link>
    //               </li> */}

    //               <li className="sub-item11">
    //                 <Link
    //                   to={"/home/assetsRegistration"}
    //                   style={{ marginLeft: "-8px" }}
    //                 >
    //                   {" "}
    //                   Registration
    //                 </Link>
    //               </li>

    //               <li className="sub-item-5">Search </li>

    //               <li className="sub-item-6">Management </li>
    //             </li>
    //           </li>

    //           <li className="nav-item">
    //             CO-W Lap
    //             <li className="dropdown">
    //               <li className="sub-item1">
    //                 <Link to={"/home/co-wRegistration"}>Registration</Link>
    //               </li>
    //               <li className="sub-item2">
    //                 <Link to={"/home/clientSearch"}>Search</Link>
    //               </li>
    //               <li className="sub-item3">
    //                 <Link to={"/home/clientMangement"}>Management</Link>
    //               </li>
    //             </li>
    //           </li>

    //           <li className="nav-item">
    //             IT Recruitment Lap
    //             <li className="dropdown">
    //               <li className="sub-item1">
    //                 <Link to={"/home/itlapregister"}> Registration</Link>
    //               </li>
    //               <li className="sub-item2">
    //                 <Link to={"/home/itsearch"}> Search</Link>
    //               </li>
    //               <li className="sub-item3">
    //                 <a href="#"> Management</a>
    //               </li>
    //             </li>
    //           </li>

    //           <li className="nav-item">
    //             Requirement
    //             <li className="dropdown" id="requirement">
    //               <li className="sub-item30">
    //                 <Link to={"/home/addRequirement"}>Add Requirement</Link>
    //               </li>
    //               <li className="sub-item31">
    //                 <Link to={"/home/requirementSearch"}> Search</Link>
    //               </li>
    //               <li className="sub-item32">
    //                 <Link to={"/home/requirementManagement"}> Management</Link>
    //               </li>
    //             </li>
    //           </li>
    //         </li>
    //       </nav>
    //     </div>
    //   </div>
    //   <div className="div4">
    //     <Userinfo />
    //   </div>
    // </div>
  );
};

export default Navbar;
