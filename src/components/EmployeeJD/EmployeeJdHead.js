import { useState, useEffect } from "react";
import background from "../../image/bg.jpg";
import empImg from "../../image/staff.png";
import employee from "../../image/employee.jpg";
import "./EmployeeJD.css";
import { useNavigate } from "react-router-dom";

const dummyEmployeeData = {
  employeeImg: { employee },
  employeeCode: "123",
  name: "name name",
  designation: "Software Engineer",
  department: "Engineering",
  emailId: "abc@example.com",
  date: "06-08-23",
  username: "name",
  password: "password",
};

const EmployeeJdHead = () => {
  const navigate=useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const employeeCode = 52;

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    fetch(`/api/employees/${employeeCode}`)
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
      .catch((error) => console.error("Error fetching employee data:", error));
  };

  const employeeDataHandler = (event) => {
    event.preventDefault();
    // fetch('/api/employees')
    // .then((response) => response.json())
    // .then((data) => setEmployeeData(data))
    // .catch((error) => console.error('Error fetching employee data:', error));
    setTimeout(() => {
      setEmployeeData((prevData) => (prevData ? null : dummyEmployeeData));
    }, 1000);
  };


  return (
    <div >
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
          <div style={{ display: "flex" }}>
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

          <button className="welcome-button1" onClick={()=>navigate(-1)}>Back</button>
          <button className="welcome-button2" onClick={()=>navigate('/login')}>Logout</button>
          <div className="line1" />
          <div className="employee-info">
            <div
              className="employee-details"
              style={{ display: "block", textAlign: "left" }}
            >
              <h3>EMPLOYEE CODE: 52</h3>
              <div className="line2" />
              <h3>EMPLOYEE NAME: Vinuth Kumar</h3>
              <div className="line2" />
              <h3>DESIGNATION: Digital Efforts</h3>
              <div className="line2" />
              <h3>REPORTING: Mr.Harish</h3>              
            </div>
            {/* {employeeData ? (
        <div className="employee-details">
          <p>EMPLOYEE CODE: {employeeData.employeeCode}</p>
          <div className="line1" />
          <p>EMPLOYEE NAME: {employeeData.employeeName}</p>
          <div className="line1" />
          <p>DESIGNATION: {employeeData.designation}</p>
          <div className="line1" />
          <p>REPORTING: {employeeData.reporting}</p>
          <div className="line1" />
        </div>
      ) : (
        <p>Loading employee data...</p>
      )} */}
            <img
              src="https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1024x780.png"
              class="attachment-large size-large"
              alt="aecci-logo"
              srcset="https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1024x780.png 1024w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-300x228.png 300w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-768x585.png 768w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1536x1169.png 1536w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-2048x1559.png 2048w"
              sizes="(max-width: 400px) 100vw, 400px"
              style={{ marginLeft: "5%" }}
            />
          </div>
          <div className="line1" />
        </div>
      </div>
 
    </div>
  );
};

export default EmployeeJdHead;
