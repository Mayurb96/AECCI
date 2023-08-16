import React, {  useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const useData=()=>useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [contextData, setContextData] = useState({
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

    // updateContextData:(newData,func)=>{
    //     setContextData((prevData)=>({...prevData, ...newData}),()=>{
    //        console.log(contextData);
    //         func();
    //     })
    // }
  });

  return (
    <AuthContext.Provider value={{contextData,setContextData}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;