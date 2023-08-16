import LoginPage from "./components/LoginPage";
import HrDashboard from "./components/HR/HRDashboard";
import HrProfile from "./components/HR/HrProfile";
import EmployeeHome from "./components/EmployeeJD/EmployeeHome";
import EmployeeJD from "./components/EmployeeJD/EmployeeJD";
import HrDepartment from "./components/HR/HrDepartment";
import HrJdList from "./components/HR/HrJdList";
import { createBrowserRouter, RouterProvider,useNavigate } from "react-router-dom";
import HrEmployeeData from "./components/HR/HrEmployeeData";
import { AuthContextProvider } from "./context";


const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/hr", element: <HrDashboard /> },
  { path: "/hr/create", element: <HrProfile /> },
  { path: "/hr/tracking", element: <HrDepartment /> },
  { path: "/hr/tracking/:employeeId/report", element: <HrJdList /> },
  { path: "/employee", element: <EmployeeHome /> },
  { path: "/employee/employeeJd", element: <EmployeeJD /> },
  {path: '/hr/employeeData',element:<HrEmployeeData/>}
]);
const App = () => {
  
  return (
  <AuthContextProvider>
  <RouterProvider router={router}></RouterProvider>;
  </AuthContextProvider>
);
};

export default App;

