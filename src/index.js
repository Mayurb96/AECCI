import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import Modal from "react-modal";
import { DataContextProvider } from "./context/context";
import { JdContextProvider } from "./context/jd-context";

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialData ={
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
  token:"",
  administrationId:"",
};

const initialJdData =  {
  employeeJdId:'',
  employeeName:'',
  Designation:'',
  today:'',
  timeIn:'',
  preparedBy:'',
};
root.render(
  <DataContextProvider initialData={initialData}>
    <JdContextProvider intialJdData={initialJdData}>
      <App />
    </JdContextProvider>
  </DataContextProvider>
);
