import "./AdminDashboard.css";
import info from "../../image/info.png";
import background from '../../image/bg.jpg'
import { useState } from "react";
import AdminCreateEmployee from "./AdminCreateEmployeeForm";
import { useNavigate } from "react-router-dom";

const AdminDashboardProfile = (props) => {
  const navigate=useNavigate();
  const empEmailId = "admin@aecci.org.in";
  const [showButtons,setShowButtons]=useState(false);
  const [showForm,setShowForm]=useState(false);

  const showButtonHandler = (event) => {
    event.preventDefault();
    setShowButtons((prevClick)=>!prevClick);
  };

  const saveEmployeeDataHandler=(enteredEmpData)=>{
const empData={
  ...enteredEmpData,
  id: Math.random().toString(),
}
props.onAddEmpData(empData);
setShowForm(false);
  }
  const openFormHandler=event=>{
    setShowForm(true);
    setShowButtons(false);
  }
const stopAdd=()=>{
  setShowForm(false);
}

const administrationListHandler=()=>{

}
  return (
    <form>
        <div className="admin-header" style={{ marginLeft: '2%'}}>
        <h2 className="admin-title">e-Platform - Admin</h2>
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
        <div className="admin-profile-buttons">
          <button style={{ width:'20rem'}} onClick={showButtonHandler}>ADMINISTRATION</button>
          <img src={info} alt="info" className="info-image" style={{marginRight:'40px'}} />
          <button style={{ width:'20rem'}}>CLIENT</button>
          <img src={info} alt="info" className="info-image" style={{marginRight:'50px'}}/>
          <button style={{ width:'20rem'}}>WALLET</button>
          <img src={info} alt="info" className="info-image" style={{marginRight:'50px'}}/><br/> <br/>
          </div>
          <div className="administration-buttons">
            {showButtons && (
              <div style={{ display: 'flex' }}>
              <button style={{ width:'20rem',maxHeight:'4rem',marginRight:'50px'}} onClick={openFormHandler} >Create</button>
              <button style={{ width:'20rem',maxHeight:'4rem'}} onClick={administrationListHandler}>Administration List</button>
            </div>
            )}
   
         {showForm && (
        <AdminCreateEmployee
          onSaveEmpData={saveEmployeeDataHandler}
          onCancel={stopAdd}
        /> 
      )}
        </div>
      </div>
    </form>
  );
};

export default AdminDashboardProfile;
