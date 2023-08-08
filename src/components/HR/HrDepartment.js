import { useState } from "react";
import background from "../../image/bg.jpg";
import empImg from '../../image/staff.png';
import employee from '../../image/employee.jpg';
import { useNavigate } from "react-router-dom";

const dummyEmployeeData = {
    employeeImg: {employee},
    employeeCode: '123',
    name: 'name name',
    designation: 'Software Engineer',
    department: 'Engineering',
    emailId: 'abc@example.com',
    date: '06-08-23',
    username: 'name',
    password: 'password',
  };

const HrDepartment = (props) => {
  const navigate=useNavigate();
  const [employeeData,setEmployeeData]=useState(null);

  const employeeDataHandler=(event)=>{
event.preventDefault();
    // fetch('/api/employees') 
    // .then((response) => response.json())
    // .then((data) => setEmployeeData(data))
    // .catch((error) => console.error('Error fetching employee data:', error));
    setTimeout(() => {
        setEmployeeData((prevData) => (prevData ? null :dummyEmployeeData));
      }, 1000);
  }
 
  const current=new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const getCurrentDayOfWeek = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // Returns an integer from 0 (Sunday) to 6 (Saturday)
    return daysOfWeek[dayOfWeek];
  };
  const currentDayOfWeek=getCurrentDayOfWeek();

  return (
    <form>
      <div className="admin-header">
        <h2 className="admin-title" style={{ marginLeft: "8%" }}>
          AECCI- Employee Report
        </h2>
        <p className="admin-text" style={{ marginLeft: "5%" }}>
          An employee report for a website is a comprehensive document that
          provides essential insights into the performance and
          <br /> activities of employees associated with AECCI. It serves as a
          valuable tool to assess the productivity, efficiency, and
          effectiveness
          <br /> of their team members.
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
          <h4 style={{ fontSize: "30apx" }}>Welcome to AECCI..!</h4>
          <h5 style={{ fontSize: "22px" }}>
            <em>
              "Our e-Platform bridges <br />
              cultures, connects economies, <br />
              and opens doors to prosperity.”
            </em>
          </h5>
          <h5 style={{ fontStyle: "italic", fontWeight: "normal" }}>
            - Shri Jaheer J.Bukhari<br></br>Honorable Chairman-AECCI
          </h5>
        </div>
        <div className="welcome">
            <div style={{display:'flex'}}>
          <h1>DASHBOARD</h1>
          
          <img
            src={empImg}
            alt="employeeImg"
            className="empImg"
            onClick={employeeDataHandler}
          />
          {employeeData && (
        <div className="employee-box">
          <img
            src={employeeData.employeeImg} 
            alt="Employee"
            className="employee-img"
          />
          <div className="employee-details">
            <p>Employee Code: {employeeData.employeeCode}</p>
            <p>Name: {employeeData.name}</p>
            <p>Designation: {employeeData.designation}</p>
            <p>Department: {employeeData.department}</p>
            <p>Email: {employeeData.emailId}</p>
            <p>Date: {employeeData.date}</p>
            <p>Username: {employeeData.username}</p>
            <p>Password: {employeeData.password}</p>
          </div>
        </div>
      )}
          </div>
          <h2 style={{fontSize:'30px'}}>Employee JD list</h2>
          
          <button className="welcome-button1" onClick={()=>navigate(-1)}>Back</button>
          <button className="welcome-button2" onClick={()=>navigate('/login')}>Logout</button>
          <div className="line1" />


          <h1 style={{marginLeft:'30%', color:'black'}}>{date} - {currentDayOfWeek }</h1>

          <div className="admin-functions">
            <div className="line1" />
            <button className="functions-button1">EXECUTIVE DIRECTOR</button>
            <button className="functions-button2">HR</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">SECRETARY</button>
            <button className="functions-button2">DIGITAL EFFORTS</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">ACCOUNTANT</button>
            <button className="functions-button2">MARKETING EXECUTIVE</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">LEGAL-1</button>
            <button className="functions-button2">LEGAL-2</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">LEGAL-3</button>
            <button className="functions-button2">LEGAL-4</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">ASST. SECRETARY</button>
            <button className="functions-button2">RECEPTIONIST</button>
            <br />
            <div className="line1" />
            <button className="functions-button1">ADMIN MANAGER</button>
            <button className="functions-button2">CO-ADMIN MANAGER</button>
            <br />
            <div className="line1" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default HrDepartment;
