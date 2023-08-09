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

const EmployeeJD = () => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const [userRole, setUserRole] = useState(""); // Initialize with an appropriate default value

  const employeeId = 52;
  const jdId = 123;

  useEffect(() => {
  

  const fetchEmployeeData = () => {
    fetch(`http://localhost:3001/getMyaccount/${employeeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeId: employeeId },
    })
      .then((response) => response.json())
      .then((data) => {setEmployeeData(data);
      setUserRole(data.role)})
      .catch((error) => console.error("Error fetching employee data:", error));
  };
  fetchEmployeeData();
}, [employeeId]);

  const employeeDataHandler = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/getMyaccount/${employeeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeId: employeeId },
    })
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
      
      .catch((error) => console.error("Error fetching employee data:", error));

    setTimeout(() => {
      setEmployeeData((prevData) => (prevData ? null : dummyEmployeeData));
    }, 1000);
  };

  const [timer, setTimer] = useState(1800);
  const [tableData, setTableData] = useState([]);
  const [jobRole, setJobRole] = useState("");
  const [description, setDescription] = useState("");
  const [timeExpired, setTimeExpired] = useState(false);
  const [extensions, setExtensions] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
      window.alert("Timer reached 0!");
      setTimeExpired(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  };

  const handleEndTask = () => {
    const endTime = new Date(); // Get the current time as the end time
  const newTask = {
    startTime: showTime, // Start time captured earlier
    jobRole,
    description,
    endTime: endTime.toLocaleTimeString(), // Format end time as a string
  };
    fetch(`http://localhost:3001/logOutJd/${employeeId}/${jdId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeId: employeeId, jdId: jdId },
    })
      .then((response) => { if (response.ok) {
        return response.json(); // Parse response data if successful
      } else {
        throw new Error("Error logging out JD"); // Handle error if not successful
      }})
      .then((data) => {  
        setTableData((prevData) => [...prevData, newTask]); // Add newTask to tableData
        setJobRole("");
        setDescription("");
        setTimer(1800);
      })
      .catch((error) => console.error("Error fetching employee data:", error));

    setTableData((prevData) => [...prevData, { jobRole, description }]);
    setJobRole("");
    setDescription("");
    setTimer(1800);
  };
  const startTimeHandler = (event) => {
    event.preventDefault();
    const startTime = new Date(); // Get the current time as the end time
  const newTask = {
    startTime: startTime.toLocaleTimeString(), // Start time captured earlier
    jobRole,
    description,
    endTime: showTime, // Format end time as a string
  };
    fetch(`http://localhost:3001/thirtyMin/${employeeId}/${jdId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeId: employeeId, jdId:jdId },
    })
      .then((response) => { if (response.ok) {
        return response.json(); // Parse response data if successful
      } else {
        throw new Error("Error logging out JD"); // Handle error if not successful
      }})
      .then((data) => {  
        setTableData((prevData) => [...prevData, newTask]); // Add newTask to tableData
        setJobRole("");
        setDescription("");
        setTimer(1800);
      })
      .catch((error) => console.error("Error fetching employee data:", error));

    setTimer(1800);
    setTimeExpired(false);
  };
  const handleExtendTimer = () => {
    fetch(`http://localhost:3001/fifteenMin/${employeeId}/${jdId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeId: employeeId, jdId:jdId },
    })
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error("Error fetching employee data:", error));

    if (extensions <= 2) {
      setTimer(900);
      setExtensions((prevExtensions) => prevExtensions + 1);
      setTimeExpired(false);
    }
  };

  const nextTaskHandler=(event)=>{
    event.preventDefault();
    fetch(`http://localhost:3001/createAnotherOne/${employeeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeID: employeeId },
    })
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error("Error fetching employee data:", error));

    setTimer(1800);
    setTimeExpired(false);
  }

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const showTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();

  return (
    <div>
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

          <button className="welcome-button1" onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className="welcome-button2"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
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
            {employeeData ? (
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
            )}
            <img
              src="https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1024x780.png"
              className="attachment-large size-large"
              alt="aecci-logo"
              srcSet="https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1024x780.png 1024w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-300x228.png 300w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-768x585.png 768w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1536x1169.png 1536w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-2048x1559.png 2048w"
              sizes="(max-width: 400px) 100vw, 400px"
              style={{ marginLeft: "5%" }}
            />
          </div>
          <div className="line1" />
        </div>
      </div>
      <form>
        <div className="employee-table">
          <table>
            <thead>
              <tr>
                <th>DATE</th>
                <th>START TIME</th>
                <th>JOB ROLE</th>
                <th>DESCRIPTION</th>
                <th>END TIME</th>
                <th>TIME LEFT</th>
                <th>END TASK</th>
              </tr>
            </thead>
            <tbody style={{ height: "8rem" }}>
              <tr>
                <td>{date}</td>
                <td>
                  {showTime}{" "}
                  <button
                    onClick={startTimeHandler}
                    style={{ marginTop: "15px" }}
                  >
                    START
                  </button>
                </td>
                <td>
                  <textarea
                    type="text"
                    value={jobRole}
                    className="table-input"
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    value={description}
                    className="table-input"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td>{showTime}</td>
                <td>{formatTime(timer)}</td>
                <td>
                  {!timeExpired && extensions <= 2 && (
                    <button onClick={handleEndTask}>End</button>
                  )}
                  {timeExpired && (
                    <div>
                      {extensions < 2 ? (
                        <button onClick={handleExtendTimer}>Extend</button>
                      ) : (
                        <button disabled>Extend</button>
                      )}
                      {extensions < 2 && (
                        <button onClick={handleEndTask}>End</button>
                      )}
                      {extensions >= 2 && (
                        <button onClick={handleEndTask} disabled>
                          End
                        </button>
                      )}
                      {!timeExpired && extensions <= 2 && userRole === "Hr" && (
  <button onClick={handleEndTask}>End</button>
)}
{timeExpired && userRole === "Hr" && (
  <div>
    {extensions < 2 ? (
      <button onClick={handleExtendTimer}>Extend</button>
    ) : (
      <button disabled>Extend</button>
    )}
    {extensions < 2 && (
      <button onClick={handleEndTask}>End</button>
    )}
    {extensions >= 2 && (
      <button onClick={handleEndTask} disabled>
        End
      </button>
    )}
  </div>
)}

                    </div>
                  )}
                </td>
              </tr>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.startTime}</td>
                  <td>{item.jobRole}</td>
                  <td>{item.description}</td>
                  <td>{item.endTime}</td>
                  <td>{formatTime(timer)}</td>
                  
                  <td>
                    <button onClick={nextTaskHandler}>
                      NEXT BLOCK
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => console.log("SUBMIT", tableData)}
            style={{ marginLeft: "18%", marginTop: "30px" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeJD;
