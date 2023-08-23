import "../Admin/AdminDashboard.css";
import "../Admin/AdminCreateEmployee.css";
import background from "../../image/bg.jpg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/context";

const HrProfile = (props) => {
  const navigate = useNavigate();
  const { contextData} = useContext(DataContext);

  const [departmentName, setDepartment] = useState("");
  const [officerName, setOfficerName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [designation, setDesignation] = useState("");
  const [emailId, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfilePicture] = useState(null);
  const [signature, setSignature] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const empEmailId = contextData.data.emailId;
  const [employeeData, setEmployeeData] = useState({
    profileImage: "",
    departmentName: "",
    officerName: "",
    employeeId: "",
    emailId: "",
    userName: "",
    password: "",
    designation: "",
    signature: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    
  const formData = new FormData(); // Use FormData to handle multipart/form-data

  formData.append("profileImage", profileImage);
  formData.append("signature", signature);
  formData.append("departmentName", departmentName);
  formData.append("officerName", officerName);
  formData.append("employeeId", employeeId);
  formData.append("designation", designation);
  formData.append("emailId", emailId);
  formData.append("userName", userName);
  formData.append("password", password);

  fetch(`http://localhost:3001/registerAdministration`, {
    method: "POST",
    body: formData, // Send FormData as the request body
  }).then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setEmployeeData(data);
          setFormSubmitted(true);
        })
        .catch((error) => console.error("Error fetching employee data:", error));
      navigate("/hr");
  
      console.log("Form submitted:", {
        departmentName,
        officerName,
        employeeId,
        designation,
        emailId,
        userName,
        password,
        profileImage,
        signature,
      });
    setDepartment("");
    setOfficerName("");
    setEmployeeId("");
    setDesignation("");
    setEmail("");
    setUserName("");
    setPassword("");
    setProfilePicture(null);
    setSignature(null);
    setFormSubmitted(true);
  };

  return (
    <div>
      <div className="admin-header" style={{ marginLeft: "2%" }}>
        <h2 className="admin-title" style={{ marginLeft: "-1%" }}>
          e-Platform - HR
        </h2>
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
          <button className="welcome-button1" onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className="welcome-button2"
            onClick={() => navigate("/login/hr")}
          >
            Logout
          </button>
          <div className="line" />
        </div>
      </div>

      <div className="employee-form">
        <form onSubmit={formSubmitHandler}>
          <div className="employee-input">
            <label className="form-label">
              Name of Department
              <select
                value={departmentName}
                onChange={(event) => setDepartment(event.target.value)}
                required
              >
                <option value="">Select Department</option>
                <option value="Administration">Administration</option>
                <option value="CO">CO Department</option>
                <option value="HR">HR Department</option>
                <option value="Membership">Membership Department</option>
                <option value="Wings">Wings Department</option>
                <option value="Accounts">Accounts Department</option>
                <option value="Publications">Publications Department</option>
                <option value="Legal">Legal Wing</option>
                <option value="Misc">Miscelleneous</option>
              </select>
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              Name of the Officer
              <input
                type="text"
                value={officerName}
                onChange={(event) => setOfficerName(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              Employee ID
              <input
                type="text"
                value={employeeId}
                onChange={(event) => setEmployeeId(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              Designation
              <select
                value={designation}
                onChange={(event) => setDesignation(event.target.value)}
                required
              >
                <option value="">Select Designation</option>
                <option value="EXECUTIVE DIRECTOR">EXECUTIVE DIRECTOR</option>
                <option value="HR">HR</option>
                <option value="SECRETARY">SECRETARY</option>
                <option value="DIGITAL EFFORTS">DIGITAL EFFORTS</option>
                <option value="ACCOUNTANT">ACCOUNTANT</option>
                <option value="MARKETING EXECUTIVE">MARKETING EXECUTIVE</option>
                <option value="LEGAL-1">LEGAL-1</option>
                <option value="LEGAL-2">LEGAL-2</option>
                <option value="LEGAL-3">LEGAL-3</option>
                <option value="LEGAL-4">LEGAL-4</option>
                <option value="ASST. SECRETARY">ASST. SECRETARY</option>
                <option value="RECEPTIONIST">RECEPTIONIST</option>
                <option value="Wings">ADMIN MANAGER</option>
                <option value="CO-ADMIN MANAGER">CO-ADMIN MANAGER</option>
              </select>
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              Email ID
              <input
                type="email"
                value={emailId}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              User Name
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              Upload Profile Picture
              <input
                type="file"
                onChange={(event) => setProfilePicture(event.target.files[0])}
               required
              />
            </label>
          </div>
          <div className="employee-input">
            <label className="form-label">
              UPLOAD FILE - Signature
              <input
                type="file"
                onChange={(event) => setSignature(event.target.files[0])}
                required
              />
            </label>
          </div>

          {formSubmitted && <p>Form submitted successfully!</p>}

          <button type="submit" style={{ marginLeft: "5%" }}>
            Create
          </button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default HrProfile;
