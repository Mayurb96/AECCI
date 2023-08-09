import background from "../../image/bg.jpg";
import calender from "../../image/calender.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './HrJdList.css'
import { useState,useEffect } from "react";
import EmployeeJD from "../EmployeeJD/EmployeeJD";
import { useNavigate } from "react-router-dom";


const HrJdList = ({ employeeId }) => {
  
  const [timer, setTimer] = useState(1800);
  const [tableData, setTableData] = useState([]); 
  const [jobRole, setJobRole] = useState('');
  const [description, setDescription] = useState('');
  const [timeExpired,setTimeExpired]=useState(false);
  const [extensions,setExtensions]=useState(0);
 

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
      window.alert('Timer reached 0!');
      setTimeExpired(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
  };

  const handleEndTask = () => {
    setTableData((prevData) => [...prevData, { jobRole, description }]);
    setJobRole('');
    setDescription('');
    setTimer(1800);
  };
  const startTimeHandler=(event)=>{
    event.preventDefault();
    setTimer(5);
    setTimeExpired(false);
    
  }
  const handleExtendTimer = () => {
    if (extensions <=2) {
      setTimer(6);
      setExtensions((prevExtensions) => prevExtensions + 1);
      setTimeExpired(false);
    }
  }
 
  const current=new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const showTime = current.getHours()  + ':' + current.getMinutes()  + ":" + current.getSeconds();
  const navigate=useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [userRole, setUserRole] = useState(""); // Initialize with an appropriate default value


  // useEffect(() => {
  //   fetchTableData();
  // }, []);
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const formattedDate = selectedDate ? selectedDate.toISOString().split('T', 1)[0] : '';
        const response = await fetch(
          `http://localhost:3001/getWantedAdministrationList/${employeeId}?date=${formattedDate}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ); 
        const data = await response.json();
        setTableData(data); 
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };
  
    fetchTableData(); // Call the function immediately inside useEffect
    }, [employeeId, selectedDate]);
  

  // const fetchTableData = async () => {
  //   try {
  //     const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
  //     const response = await fetch(
  //       `http://localhost:3001/getWantedAdministrationList/${employeeId}?date=${formattedDate}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ); 
  //     const data = await response.json();
  //     setTableData(data); 
  //   } catch (error) {
  //     console.error('Error fetching table data:', error);
  //   }
  // };
  const employeeCode = 52;

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    fetch(`http://localhost:3001/getWantedAdministrationList/${employeeCode}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: { employeeId: employeeCode},
    })
      .then((response) => response.json())
      .then((data) => {setEmployeeData(data)
      setUserRole(data.role)})
      .catch((error) => console.error("Error fetching employee data:", error));

  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const filteredTableData = tableData.filter(item => {
    const itemDate = new Date(item.date); // Assuming startTime is in a Date format
    return (
      selectedDate &&
      itemDate.getDate() === selectedDate.getDate() &&
      itemDate.getMonth() === selectedDate.getMonth() &&
      itemDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  

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
          <div style={{ display: "block" }}>
            <h1>DASHBOARD</h1>
            <h2 style={{ fontSize: "30px" }}>DIGITAL EFFORTS</h2>

            <img
              src={calender}
              alt="date"
              className="calender-logo"
              onClick={() => {
                document.getElementById("datepicker-input").click();
              }}
              style={{
                width: "120px",
                marginTop:'-25%',
                marginLeft: "90%",
                marginBottom: "1.5%",
                cursor: "pointer",
              }}
            />
            <DatePicker
              id="datepicker-input"
              wrapperClassName="date-picker"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              popperPlacement="left"
              showPopperArrow={false}
              placeholderText="Select a date"
            />

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
              class="attachment-large size-large"
              alt="aecci-logo"
              srcset="https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1024x780.png 1024w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-300x228.png 300w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-768x585.png 768w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-1536x1169.png 1536w, https://www.aecci.org.in/wp-content/uploads/2023/08/1234546-2048x1559.png 2048w"
              sizes="(max-width: 400px) 100vw, 400px"
              style={{ marginLeft: "5%" }}
            />
          </div>
          <div className="line1" />
        
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
        <tbody style={{ height:'8rem'}}>
      
          {filteredTableData.map((item, index) => (
            <tr key={index}>
              <td>{item.startTime}</td>
              <td>{item.jobRole}</td>
              <td>{item.description}</td>
              <td>{item.endTime}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

      </div>
            
          </div>
        </div>
      </div>
    </form>
  );
};
export default HrJdList;
