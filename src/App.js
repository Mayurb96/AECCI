import AdminDashboard from "./components/Admin/AdminDashboard";
import LoginPage from "./components/LoginPage";
import AdminDashboardProfile from "./components/Admin/AdminDashboardProfile";
import SuperAdminDashboard from "./components/SuperAdmin/SuperAdminDashboard";
import HrDashboard from "./components/HR/HRDashboard";
import HrProfile from "./components/HR/HrProfile";
import EmployeeHome from "./components/EmployeeJD/EmployeeHome";
import EmployeeJD from "./components/EmployeeJD/EmployeeJD";
import HrDepartment from "./components/HR/HrDepartment";
import HrJdList from "./components/HR/HrJdList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HrEmployeeData from "./components/HR/HrEmployeeData";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {path: '/login' , element: <LoginPage/>},
  { path: "/hr", element: <HrDashboard /> },
  { path: "/hr/create", element: <HrProfile /> },
  { path: "/hr/tracking", element: <HrDepartment /> },
  { path: "/hr/tracking/:employeeId/report", element: <HrJdList /> },
  { path: "/employee", element: <EmployeeHome /> },
  { path: "/employee/employeeJd", element: <EmployeeJD /> },
  {path: '/hr/employeeData',element:<HrEmployeeData/>}
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

