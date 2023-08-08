import React,{useState,useEffect} from "react";
import background from "../../image/bg.jpg";
import "../Admin/AdminDashboard.css";
import { useNavigate } from "react-router-dom";


const HrEmployeeData = () => {
  const [formData, setFormData] = useState([]);
  const empEmailId = "hr@aecci.org.in";
  const navigate=useNavigate();

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await fetch('/api/getTableData'); 
      const data = await response.json();
      setFormData(data); 
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  return (
    <div>
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
        <div className="side-panel" style={{marginLeft:'3rem'}}>
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

    <form>
      <table>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Name of Department</th>
            <th>Name of Officer</th>
            <th>Employee ID</th>
            <th>Designation</th>
            <th>Email ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Created On</th>
            <th>Profile Picture</th>
            <th>Signature</th>
          </tr>
        </thead>
        <tbody> 
          <tr >
              <td>1</td>
              <td>abc</td>
              <td>abc</td>
              <td>123</td>
              <td>abc</td>
              <td>a@bc.co</td>
              <td>abc</td>
              <td>123</td>
              <td>1/8/23</td>
              <td>file</td>
              <td>file</td>
            </tr>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.department}</td>
              <td>{item.officerName}</td>
              <td>{item.employeeId}</td>
              <td>{item.designation}</td>
              <td>{item.emailId}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.created}</td>
              <td>{item.profilePicture}</td>
              <td>{item.signature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
    </div>
        </div>
      </div>
  );
};

export default HrEmployeeData;
