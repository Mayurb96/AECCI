import "../Admin/AdminDashboard.css";
import background from '../../image/bg.jpg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCreateEmployee from "../Admin/AdminCreateEmployeeForm";

const HrProfile = (props) => {
  const navigate=useNavigate();
  const empEmailId = "hr@aecci.org.in";
  const [employeeData,setEmployeeData]=useState(null);
  const [formValues, setFormValues] = useState({
    profileImage: null,
    departmentName: '',
    officerName: '',
    employeeId: '',
    emailId: '',
    userName: '',
    password: '',
    designation: '',
    date: '',
    signature: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      profileImage: event.target.files[0],
    }));
  };

  const handleSignatureChange = (event) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      signature: event.target.files[0],
    }));
  };
 
console.log(employeeData);
  const saveEmployeeDataHandler=(enteredEmpData)=>{
    const filteredFormValues = Object.fromEntries(
      Object.entries(formValues).filter(([_, value]) => value !== null)
    )
    fetch(`http://localhost:3001/registerAdministration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredFormValues)
    })
      .then((response) =>{if (!response.ok) {
        throw new Error('Network response was not ok');
      } return response.json();
    })
      .then((data) =>setEmployeeData(data) )
      .catch((error) => console.error("Error fetching employee data:", error));
// const empData={
//   ...enteredEmpData,
//   id: Math.random().toString(),
// }
// props.onAddEmpData(empData);
navigate('/hr');
}
console.log(employeeData);



  return (
    <div>
    <form>
        <div className="admin-header" style={{ marginLeft: '2%'}}>
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
      <div className="admin-dashboard2">
        <div className="welcome">
          <h1>DASHBOARD</h1>
          <h3>Good Morning</h3>
          <p>Welcome, {empEmailId}</p>
          <button className="welcome-button1" onClick={()=>navigate(-1)}>Back</button>
          <button className="welcome-button2" onClick={()=>navigate('/login')}>Logout</button>
          <div className="line" />
        </div>
        </div>
    </form>
        
        <AdminCreateEmployee
          onSaveEmpData={saveEmployeeDataHandler}
          onCancel={()=>navigate('/hr')}
        /> 
      </div>
      
  );
};

export default HrProfile;
