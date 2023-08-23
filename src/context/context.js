import React, {  useState, createContext } from "react";

const DataContext = createContext({
  profileImage: "",
    departmentName: "",
    officerName: "",
    userName: "",
    password: "",
    date: "",
    signature: "",
    employeeId: "",
    emailId: "",
    designation: "",
    token:"",
    administrationId:"",
});


export const DataContextProvider = ({ children, initialData }) => {
  const initialContextData = JSON.parse(sessionStorage.getItem('contextData')) || {
    profileImage: "",
    departmentName: "",
    officerName: "",
    userName: "",
    password: "",
    Date: "",
    signature: "",
    employeeId: "",
    emailId: "",
    designation: "",
    token: "",
    administrationId: "",
  };
 
  const [contextData, setContextData] = useState(initialContextData);

  console.log("Updated context data:", contextData);

  return (
    <DataContext.Provider value={{ contextData, setContextData }}>
      {children}
    </DataContext.Provider>
  );
};

  
export default DataContext;