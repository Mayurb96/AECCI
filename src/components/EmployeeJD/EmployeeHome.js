import { useState } from "react";
import background from "../../image/bg.jpg";
import empImg from "../../image/staff.png";
import employee from "../../image/employee.jpg";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import { useParams } from "react-router-dom";

// const dummyEmployeeData = {
//   employeeImg: { employee },
//   employeeCode: "123",
//   name: "name name",
//   designation: "Software Engineer",
//   department: "Engineering",
//   emailId: "abc@example.com",
//   date: "06-08-23",
//   username: "name",
//   password: "password",
// };

const EmployeeHome = (props) => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);

  const { contextData } = useData();
 
  console.log(contextData);
  const params = useParams();

 const profileImage=contextData.profileImage;
  const departmentName=contextData.departmentName;
  const officerName=contextData.officerName;
  const userName=contextData.userName;
  const password=contextData.password;
  const date=contextData.date;
  const signature=contextData.signature;
  const employeeId=contextData.employeeId;
  const emailId=contextData.emailId;
  const designation=contextData.designation;
 

  const employeeDataHandler = (event) => {
    event.preventDefault();
    console.log(employeeId);
    console.log(params.employeeId);

    setEmployeeData({
      profileImage: profileImage,
    departmentName: departmentName,
    officerName:officerName,
    userName:userName,
    password: password,
    date: date,
    signature: signature,
    employeeId: employeeId,
    emailId: emailId,
    designation: designation,

    });
    fetch(`http://localhost:3001/getMyaccount/${employeeId}?employeeId=${params.employeeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       // "Authorization": `Bearer aeccisecurity`, // Replace with the actual authentication token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployeeData(data);
      })
      .catch((error) => console.error("Error fetching employee data:", error));

    setTimeout(() => {
      setEmployeeData((prevData) => (prevData ? null : employeeData));
    }, 1000);
  };

  const openJdHandler = (event) => {
    event.preventDefault();
    navigate("/employee/employeeJd");
    fetch(`http://localhost:3001/createEmployeeJd/${employeeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ employeeId: employeeId }),
    })
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
      .catch((error) => console.error("Error fetching employee data:", error));
  };

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
          <div style={{ display: "flex" }}>
            <h1>DASHBOARD</h1>

            <img
              src={empImg}
              alt="employeeImg"
              className="empImg"
              onClick={employeeDataHandler}
            />
            {/* {employeeData && (
              <div className="employee-box">
                <img
                  src={profileImage}
                  alt="Employee"
                  className="employee-img"
                />
                <div className="employee-details">
                  <p>Employee Code: {employeeId}</p>
                  <p>Name: {officerName}</p>
                  <p>Designation: {designation}</p>
                  <p>Department: {departmentName}</p>
                  <p>Email: {emailId}</p>
                  <p>Date: {date}</p>
                  <p>Username: {userName}</p>
                  <p>Password: {password}</p>
                </div>
              </div>
            )} */}
            {contextData && (
  <div className="employee-details">
    <p>Employee Code: {contextData.employeeId}</p>
    <p>Name: {contextData.officerName}</p>
    <p>Designation: {contextData.designation}</p>
    <p>Department: {contextData.departmentName}</p>
    <p>Email: {contextData.emailId}</p>
    <p>Date: {contextData.date}</p>
    <p>Username: {contextData.userName}</p>
    <p>Password: {contextData.password}</p>
  </div>
)}
          </div>
          <h3>Good Morning</h3>
          <p>Welcome, {emailId}</p>

          <button className="welcome-button1" onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className="welcome-button2"
            onClick={() => navigate("/")}
          >
            Logout
          </button>

          <div className="admin-functions">
            <div className="admin-functions">
              <div className="line1" />
              <button className="functions-button1">DUMMY</button>
              <button className="functions-button2">DUMMY</button>
              <br />
              <div className="line1" />
              <button className="functions-button1">DUMMY</button>
              <button className="functions-button2">DUMMY</button>
              <br />
              <div className="line1" />
              <button className="functions-button1">DUMMY</button>

              <button className="functions-button2" onClick={openJdHandler}>
                CREATE YOUR DAILY REPORT
              </button>
              <div className="line1" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmployeeHome;
