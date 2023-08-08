import React from "react";
import background from "../../image/bg.jpg";
import "../Admin/AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const HrDashboard = (props) => {
  const empEmailId = "hr@aecci.org.in";
  const navigate=useNavigate();

  return (
    <form>
      <div className="admin-header">
        <h2 className="admin-title" style={{marginLeft:'-1%'}}>e-Platform - HR</h2>
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
          <h4 style={{fontSize:'30apx'}}>Welcome to AECCI..!</h4>
          <h5 style={{fontSize:'22px'}}><em>"Our e-Platform bridges <br/>cultures, connects economies, <br/>and opens doors to prosperity.”</em></h5>
          <h5 style={{ fontStyle: "italic", fontWeight:"normal" }}>
          - Shri Jaheer J.Bukhari<br></br>Honorable Chairman-AECCI
          </h5>
        </div>
        <div className="welcome">
          <h1>DASHBOARD</h1>
          <h3>Good Morning</h3>
          <p>Welcome, {empEmailId}</p>
          <button className="welcome-button1" onClick={()=>navigate(-1)}>Back</button>
          <button className="welcome-button2" onClick={()=>navigate('/login')}>Logout</button>
          <div className="line1" />

          <div className="admin-functions">
            <div className="line1" />
            <button className="functions-button1" onClick={()=>navigate('/hr/create')}>CREATE EMPLOYEE DETAILS</button>
            <button className="functions-button2" >EMPLOYEE LIST</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">SERVICES</button>
            <button className="functions-button2">HR SUPPORT WING</button>
            <br />
            <div className="line1" />
             <button className="functions-button1" onClick={()=>navigate('/employee/employeeJd')}>CREATE DAILY REPORT</button>
            <button className="functions-button2" onClick={()=>navigate('/hr/tracking')}>EMPLOYMENT TRACKING</button>
           
            <br />
            <div className="line1" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default HrDashboard;
