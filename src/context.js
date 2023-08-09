import React, {  useState, createContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [contextData, setContextData] = useState({
    profileImage: "profileImage",
    departmentName: "departmentName",
    officerName: "officerName",
    userName: "userName",
    password: "password",
    date: "date",
    signature: "signature",
    employeeId: "employeeId",
    emailId: "emailId",
    designation: "designation",

    updateContextData:(newData,func)=>{
        setContextData((prevData)=>({...prevData, ...newData}),()=>{
           console.log(contextData);
            func();
        })
    }
  });

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;