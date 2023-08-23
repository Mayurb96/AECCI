import React, {  useState, createContext } from "react";

const TableContext = createContext({
  jobRole:'',
  jobDescription:'',
  logout:'',

});


export const TableContextProvider=(props)=> {
  const [contextTable, setContextTable] = useState({
    
    jobRole:'',
    jobDescription:'',
    logout:'',
  });
  
  console.log("Updated context data:", contextTable);
  return (
    <TableContext.Provider value={{contextTable,setContextTable}}>
      {props.children}
    </TableContext.Provider>
  );
}

export default TableContext;