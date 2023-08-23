import { useContext, useState, useEffect } from "react";
import background from "../../image/bg.jpg";
import empImg from "../../image/staff.png";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/context";
import JdContext from "../../context/jd-context";
import { getAuthToken } from "../util/auth";

const EmployeeHome = (props) => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const [showEmployeeData, setShowEmployeeData] = useState(false);

  const { contextData } = useContext(DataContext);
  const { contextJd,setContextJd } = useContext(JdContext);

  const showEmployeeDataHandler = () => {
    console.log("image clicked");
    setShowEmployeeData(!showEmployeeData);
  };

    const token=getAuthToken();

  useEffect(() => {
    if (showEmployeeData) {
      fetch(
        `http://localhost:3001/getMyaccount/${contextData.data.administrationId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` +token,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setEmployeeData(data);
        })
        .catch((error) =>
          console.error("Error fetching employee data:", error)
        );
    }
  }, [showEmployeeData, contextData.data.administrationId,token]);

  const [timer, setTimer] = useState(1800);
  const [tableData, setTableData] = useState([]);
  const [startTime,setStartTime]=useState(null)
  const [jobRole, setJobRole] = useState("");
  const [description, setDescription] = useState("");
  const [timeExpired, setTimeExpired] = useState(false);
  const [endTime,setEndTime]=useState(null);


  const openJdHandler = (event) => {
    event.preventDefault();
    navigate("/employee/employeeJd");
    fetch(
      `http://localhost:3001/createEmployeeJd/${contextData.data.administrationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         "Authorization": `Bearer ` +token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setContextJd(data);
        sessionStorage.setItem('contextJd', JSON.stringify(data));
        console.log(data);
        console.log(data.data.timeIn);
      const newTask = {
        startTime, 
        jobRole,
        description,
        endTime: endTime, 
      };
        setStartTime(new Date().toLocaleTimeString());
          setTableData((prevData) => [...prevData, newTask]); 
          
          setJobRole("");
          setDescription("");
          setTimer(1800);
        })
        .catch((error) => console.error("Error fetching employee data:", error));
  
      setTimer(1800);
      setTimeExpired(false);
    };
     

  console.log(contextJd);

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
              onClick={showEmployeeDataHandler}
            />

            {employeeData && (
              <div className="employee-box">
                <img
                  src={contextData.data.profileImage}
                  alt="Employee"
                  className="employee-img"
                />
                <div className="employee-details">
                  <p>Employee Code: {contextData.data.employeeId}</p>
                  <p>Name: {contextData.data.officerName}</p>
                  <p>Designation: {contextData.data.designation}</p>
                  <p>Department: {contextData.data.departmentName}</p>
                  <p>Email: {contextData.data.emailId}</p>
                  <p>Date: {contextData.data.Date}</p>
                  <p>Username: {contextData.data.userName}</p>
                </div>
              </div>
            )}
          </div>
          <h3>Good Morning</h3>
          <p>Welcome, {contextData.data.emailId}</p>

          <button className="welcome-button1" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="welcome-button2" onClick={() => navigate("/")}>
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

// fetch(
      //   `http://localhost:3001/thirtyMin/${contextData.data.employeeId}/${contextJd.data.employeeJdId}`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       // "Authorization": `Bearer ` +token,
      //     },
      //     body: {
      //       employeeId: contextData.data.employeeId,
      //       jdId: contextJd.data.employeeJdId,
      //     },
      //   }
      // )