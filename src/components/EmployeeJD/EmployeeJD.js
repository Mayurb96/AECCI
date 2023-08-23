import { useState, useEffect, useContext } from "react";
import background from "../../image/bg.jpg";
import empImg from "../../image/staff.png";
import "./EmployeeJD.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/context";
import JdContext from "../../context/jd-context";
import TableContext from "../../context/table-context";
import {getAuthToken} from "../util/auth";

const EmployeeJD = () => {
  const { contextData } = useContext(DataContext);

  const { contextJd,setContextJd } = useContext(JdContext);
  const { contextTable,setContextTable}=useContext(TableContext);

  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const [userRole, setUserRole] = useState(""); 
  const token=getAuthToken();
  const [showNext,setShowNext]=useState(false);

  useEffect(() => {
    const fetchEmployeeData = () => {
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
    };
    fetchEmployeeData();
  },[]);

  const employeeDataHandler = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/getMyaccount/${contextData.data.administrationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ` +token,
      },
    })
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))

      .catch((error) => console.error("Error fetching employee data:", error));
  };

  const initialTimer = parseInt(localStorage.getItem('timer') || '1800', 10);
  const [timer, setTimer] = useState(initialTimer);

  const [tableData, setTableData] = useState({});
  const [timeIn,setTimeIn]=useState(null);
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [timeExpired, setTimeExpired] = useState(false);
  const [extensions, setExtensions] = useState(0);
  const [logOut,setLogOut]=useState(null);

  const [entries, setEntries] = useState([]);


  useEffect(()=>{
    localStorage.setItem('timer', timer.toString());
  },[timer])

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

  useEffect(()=>{
    setTimeIn(new Date().toLocaleTimeString()); 
  },[])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  };

   
  const handleExtendTimer = (event) => {
    event.preventDefault();
    if (extensions <= 2) {
      setTimer(900);
      setExtensions((prevExtensions) => prevExtensions + 1);
      setTimeExpired(false);
        }
  };

  const nextTaskHandler = (event) => {
    event.preventDefault();
    const endTime= null;
    const newTask = {
      timeIn,
      jobRole:jobRole,
      jobDescription:jobDescription,
      logOut:endTime,
    };
    setEntries((prevEntries) => [...prevEntries]); 
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
      .then((data) => {// Assuming the API response contains a unique ID for the new row.
        setTableData((prevData) => ({
          ...prevData,
        }));
      
      })
      .catch((error) => console.error("Error fetching employee data:", error));
      setJobRole("");
      setJobDescription("");
     setTimeIn(new Date().toLocaleTimeString()); 
    setTimer(1800);
    setTimeExpired(false);
    setLogOut(null);
    setShowNext(!showNext);

  };

  const current = new Date();
  const jdDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;


    const handleEndTask = (event) => {
      event.preventDefault();

     const endTime= new Date().toLocaleTimeString();

      const newTask = {
        timeIn,
        jobRole:jobRole,
        jobDescription:jobDescription,
        logOut:endTime,
      };

  console.log(newTask);
  setEntries((prevEntries) => [...prevEntries, newTask]);

      fetch(
        `http://localhost:3001/logOutJd/${contextData.data.administrationId}/${contextJd.data.employeeJdId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` +token,
          },
          body: JSON.stringify(newTask),
          
        }
      )
        .then((response) => {
          console.log(response);
          if (response.ok) {
            console.log(response);
            return response.json(); 
          } else {
            throw new Error("Error logging out JD"); 
           
          }
        })
        .then((data) => {
          const newTableRowId = data.id;
          console.log(data)
          setTableData((prevData) => ({ ...prevData, [newTableRowId]: newTask }));;           
                        })
        .catch((error) => console.error("Error fetching employee data:", error));
  
    setShowNext(!showNext);
      setTimeIn(null);
      setJobRole("");
      setJobDescription("");
      setTimer(1800);
      setLogOut("");
        };

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

          <button className="welcome-button1" onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className="welcome-button2"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
          <div className="line1" />
          <div className="employee-info">
            <div
              className="employee-details"
              style={{ display: "block", textAlign: "left" }}
            >
              {employeeData ? (
                <div className="employee-details">
                  <h3>EMPLOYEE CODE: {contextData.data.employeeId}</h3>
                  <div className="line1" />
                  <h3>EMPLOYEE NAME: {contextData.data.officerName}</h3>
                  <div className="line1" />
                  <h3>DESIGNATION: {contextData.data.designation}</h3>
                  <div className="line1" />
                  <h3>REPORTING: Executive Director</h3>
                </div>
              ) : (
                <p>Loading employee data...</p>
              )}
            </div>
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
                <td>{jdDate}</td>
                <td>
                  {timeIn}
                </td>
                <td>
                  <textarea
                    type="text"
                    value={jobRole}
                    className="table-input1"
                    onChange={(e) => setJobRole(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    value={jobDescription}
                    className="table-input2"
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                  />
                </td>
                <td>{logOut}</td>
                <td>{formatTime(timer)}</td>
                <td>
                  {!timeExpired && extensions <= 2 && (
                    <button onClick={handleEndTask}>End</button>
                  )}
                {showNext && <button onClick={nextTaskHandler}>NEXT</button>}

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
               {entries.map((item, index) => (
                <tr key={index}>
                  <td>{jdDate}</td>
                  <td>{item.timeIn}</td>
                  <td>{item.jobRole}</td>
                  <td>{item.jobDescription}</td>
                  <td>{item.logOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => <p>You have successfully submitted the JD for Today</p>}
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
