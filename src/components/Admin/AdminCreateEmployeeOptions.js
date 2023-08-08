import React, { useState } from "react";
import './AdminCreateEmployeeOptions.css'

const AdminCreateEmployeeOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="options">
        <div className="Departments2">
      <div className="publication">
        <h3>If publications</h3>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Daily Newsletter"
            checked={selectedOption === "Daily Newsletter"}
            onChange={handleChange}
          />
          <label htmlFor="Daily Newsletter">Daily Newsletter</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Weekly Newsletter"
            checked={selectedOption === "Weekly Newsletter"}
            onChange={handleChange}
          />
          <label htmlFor="Weekly Newsletter">Weekly Newsletter</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Quarterly Newsletter"
            checked={selectedOption === "Quarterly Newsletter"}
            onChange={handleChange}
          />
          <label htmlFor="Quarterly Newsletter">Quarterly Newsletter</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Designing"
            checked={selectedOption === "Designing"}
            onChange={handleChange}
          />
          <label htmlFor="Designing">Designing</label>
        </div>
      </div>
      <div className="HR">
        <h3>If HR</h3>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Recruit candidates"
            checked={selectedOption === "Recruit candidates"}
            onChange={handleChange}
          />
          <label htmlFor="Recruit candidates">Recruit candidates</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Hire the right employees"
            checked={selectedOption === "Hire the right employees"}
            onChange={handleChange}
          />
          <label htmlFor="Hire the right employees">
            Hire the right employees
          </label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Conduct disciplinary actions"
            checked={selectedOption === "Conduct disciplinary actions"}
            onChange={handleChange}
          />
          <label htmlFor="Conduct disciplinary actions">
            Conduct disciplinary actions
          </label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Update policies"
            checked={selectedOption === "Update policies"}
            onChange={handleChange}
          />
          <label htmlFor="Update policies">Update policies</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Maintain employee records"
            checked={selectedOption === "Maintain employee records"}
            onChange={handleChange}
          />
          <label htmlFor="Maintain employee records">
            Maintain employee records
          </label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="On Boarding New Employees"
            checked={selectedOption === "On Boarding New Employees"}
            onChange={handleChange}
          />
          <label htmlFor="On Boarding New Employees">
            On Boarding New Employees
          </label>
        </div>
      </div>
      </div>
      <div className="Departments2">
      <div className="CO-Department">
        <h3>If CO Department</h3>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Billing"
            checked={selectedOption === "Billing"}
            onChange={handleChange}
          />
          <label htmlFor="Billing">Billing</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Document Checking"
            checked={selectedOption === "Document Checking"}
            onChange={handleChange}
          />
          <label htmlFor="Document Checking">Document Checking</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="e-platform"
            checked={selectedOption === "e-platform"}
            onChange={handleChange}
          />
          <label htmlFor="e-platform">e-platform</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Attestation"
            checked={selectedOption === "Attestation"}
            onChange={handleChange}
          />
          <label htmlFor="Attestation">Attestation</label>
        </div>
      </div>
      <div className="Accounts">
        <h3>If Accounts department</h3>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Tally"
            checked={selectedOption === "Tally"}
            onChange={handleChange}
          />
          <label htmlFor="Tally">Tally</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Payment Follow Up"
            checked={selectedOption === "Payment Follow Up"}
            onChange={handleChange}
          />
          <label htmlFor="Payment Follow Up">Payment Follow Up</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Ledger"
            checked={selectedOption === "Ledger"}
            onChange={handleChange}
          />
          <label htmlFor="Ledger">Ledger</label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="department"
            value="Billing"
            checked={selectedOption === "Billing"}
            onChange={handleChange}
          />
          <label htmlFor="Billing">Billing</label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminCreateEmployeeOptions;
