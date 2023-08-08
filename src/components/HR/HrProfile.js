import "../Admin/AdminDashboard.css";
import background from '../../image/bg.jpg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCreateEmployee from "../Admin/AdminCreateEmployeeForm";

const HrProfile = (props) => {
  const navigate=useNavigate();
  const empEmailId = "hr@aecci.org.in";

 

  const saveEmployeeDataHandler=(enteredEmpData)=>{
const empData={
  ...enteredEmpData,
  id: Math.random().toString(),
}
props.onAddEmpData(empData);
navigate('/hr');
}
 


  return (
    <form>
        <div className="admin-header" style={{ marginLeft: '2%'}}>
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
      <div className="admin-dashboard2">
        <div className="welcome">
          <h1>DASHBOARD</h1>
          <h3>Good Morning</h3>
          <p>Welcome, {empEmailId}</p>
          <button className="welcome-button1" onClick={()=>navigate(-1)}>Back</button>
          <button className="welcome-button2" onClick={()=>navigate('/login')}>Logout</button>
          <div className="line" />
        </div>
        
        <AdminCreateEmployee
          onSaveEmpData={saveEmployeeDataHandler}
          onCancel={navigate('/hr')}
        /> 
      
      </div>
    </form>
  );
};

export default HrProfile;
