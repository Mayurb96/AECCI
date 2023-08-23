import React, {  useState, createContext } from "react";

const JdContext = createContext({
  employeeJdId:'',
  employeeName:'',
  Designation:'',
  today:'',
  timeIn:'',
  preparedBy:'',

});


export const JdContextProvider = ({ children, initialJdData }) => {
  const initialContextJd = JSON.parse(sessionStorage.getItem('contextJd')) || {
    employeeJdId:'',
    employeeName:'',
    Designation:'',
    today:'',
    timeIn:'',
    preparedBy:'',
  };

  const [contextJd,setContextJd]=useState(initialContextJd)
  console.log("Updated context data:", contextJd);
  return (
    <JdContext.Provider value={{contextJd,setContextJd}}>
      {children}
    </JdContext.Provider>
  );
}

export default JdContext;