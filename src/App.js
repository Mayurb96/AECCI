import LoginPage from "./components/LoginPage";
import HrDashboard from "./components/HR/HRDashboard";
import HrProfile from "./components/HR/HrProfile";
import EmployeeHome from "./components/EmployeeJD/EmployeeHome";
import EmployeeJD from "./components/EmployeeJD/EmployeeJD";
import HrDepartment from "./components/HR/HrDepartment";
import HrJdList from "./components/HR/HrJdList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HrEmployeeData from "./components/HR/HrEmployeeData";
import HrLoginPage from './components/HrLogin';


const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> }, //done
  { path: "/login/hr", element: <HrLoginPage /> }, //done
  { path: "/hr", element: <HrDashboard /> }, //done
  { path: "/hr/create", element: <HrProfile /> }, //done
  { path: "/hr/tracking", element: <HrDepartment /> },
  { path: "/hr/tracking/:employeeId/report", element: <HrJdList /> },
  { path: "/employee", element: <EmployeeHome /> }, //done
  { path: "/employee/employeeJd", element: <EmployeeJD /> },
  {path: '/hr/employeeData',element:<HrEmployeeData/>} //done
]);
const App = () => {
  
  return (
  
  <RouterProvider router={router}></RouterProvider>
);
};

export default App;

