import React from "react";
import background from "../../image/bg.jpg";
import "../Admin/AdminDashboard.css";

const SuperAdminDashboard = (props) => {
  const empEmailId = "superadmin@aecci.org.in";

  return (
    <form>
      <div className="admin-header">
        <h2 className="admin-title" style={{ marginLeft:'1%'}}>e-Platform - SuperAdmin</h2>
        <p className="admin-text">
          In order to maintain the efficiency and consistency of our expedited
          digital service, it is imperative that officers promptly review and
          <br />
          authorize the documents uploaded on the e-platform within a maximum
          time frame of 10 minutes, without any unnecessary delays. Officers
          <br />
          must carefully review all the instructions given before approving any
          documents. This will help us provide a seamless experience for our
          <br />
          members and enhance the overall effectiveness of our services.
        </p>
        <img src={background} alt="background" className="background-image" />
      </div>
      <div className="line" />
      <div className="admin-dashboard">
        <div className="side-panel">
          <img
            style={{ width: "240px", height: "300px" }}
            src="https://www.aecci.org.in/wp-content/uploads/2023/07/Chairman.png"
            alt="person"
            className="person-image"
            loading="lazy"
          />
          <h4 style={{fontSize:'30px'}}>Welcome to AECCI..!</h4>
          <h5 style={{fontSize:'22px'}}><em>"Our e-Platform bridges <br/>cultures, connects economies, <br/>and opens doors to prosperity.”</em></h5>
          <h5 style={{ fontStyle: "italic", fontWeight:"normal" }}>
          - Shri Jaheer J.Bukhari<br></br>Honorable Chairman-AECCI
          </h5>
        </div>
        <div className="welcome">
          <h1>DASHBOARD</h1>
          <h3>Good Morning</h3>
          <p>Welcome, {empEmailId}</p>
          <button className="welcome-button1">Back</button>
          <button className="welcome-button2">Logout</button>

          <div className="admin-functions">
            <div className="line1" />
            <button className="functions-button1">PROFILE</button>
            <button className="functions-button2">SERVICES</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">THE WINGS</button>
            <button className="functions-button2">EVENTS & SEMINARS</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">PUBLICATIONS</button>
            <button className="functions-button2">HR DEPARTMENT</button>
            <br />
            <div className="line1" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SuperAdminDashboard;
