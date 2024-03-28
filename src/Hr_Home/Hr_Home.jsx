import React from "react";
import SideBar from "../SideBar/SideBar";
import MainBar from "../MainBar/MainBar";
import "./Hr_Home.css";
import Navbar from "../Navbar/Navbar";

const Hr_Home = () => {
  return (
    <div className="main-body">
      <div className="alpha-page">
        <Navbar />
        <SideBar />
        <section className="abc">
          <article className="main-page">
            <MainBar />
          </article>
        </section>
      </div>
    </div>
  );
};

export default Hr_Home;
