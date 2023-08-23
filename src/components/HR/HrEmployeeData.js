import React, { useState, useEffect, useContext } from "react";
import background from "../../image/bg.jpg";
import "../Admin/AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/context";
import ImageModal from '../util/imageModal';
import { getAuthHrToken,logout } from "../util/auth";

const HrEmployeeData = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { contextData } = useContext(DataContext);

  const hrToken=getAuthHrToken();

  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchFormData = () => {
      fetch(
        `http://localhost:3001/getAllEmpData/${contextData.data.employeeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` +hrToken,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFormData(data);
          setLoading(false);
        })
        .catch((error) =>
          console.error("Error fetching employee data:", error)
        );
    };
    fetchFormData();
  }, []);

  console.log("form data", formData);

  return (
    <div>
      <div className="admin-header">
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
      <div className="line" />
      <div className="admin-dashboard">
        <div className="side-panel" style={{ marginLeft: "3rem" }}>
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
          <h1>DASHBOARD</h1>
          <h3>Good Morning</h3>
          <p>Welcome, {contextData.data.emailId}</p>
          <button className="welcome-button1" onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className="welcome-button2"
            onClick={() =>{
              logout(); 
              navigate("/login/hr")}}
          >
            Logout
          </button>
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
                  <th>Created On</th>
                  <th>Profile Picture</th>
                  <th>Signature</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(formData.data) &&
                  !loading &&
                  formData.data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.departmentName}</td>
                      <td>{item.officerName}</td>
                      <td>{item.employeeId}</td>
                      <td>{item.designation}</td>
                      <td>{item.emailId}</td>
                      <td>{item.userName}</td>
                      <td>{new Date(item.Date).toLocaleDateString()}</td>
                      <td>
                        <img
                          src={item.profileImage}
                          alt={`Profile ${item.userName}`}
                          style={{ width: "5rem", height: "5rem" }}
                          onClick={() => openModal(item.profileImage)}
                        />
                      </td>
                      <td>
                        <img
                          src={item.signature}
                          alt={`Signature ${item.userName}`}
                          style={{ width: "5rem", height: "5rem" }}
                          onClick={() => openModal(item.signature)}
                        />
                      </td>
                    </tr>
                  ))}
                {!Array.isArray(formData) && !loading && (
              <tr>
                <td colSpan="11">No data available.</td>
              </tr>
            )}
                {loading && (
                  <tr>
                    <td colSpan="11">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
            <ImageModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      imageUrl={selectedImageUrl}
    />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HrEmployeeData;
