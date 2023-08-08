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
import React, { useState, useEffect, Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HrEmployeeData from "./components/HR/HrEmployeeData";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {path: '/login' , element: <LoginPage/>},
  { path: "/hr", element: <HrDashboard /> },
  { path: "/hr/create", element: <HrProfile /> },
  { path: "/hr/tracking", element: <HrDepartment /> },
  { path: "/hr/tracking/report", element: <HrJdList /> },
  { path: "/employee", element: <EmployeeHome /> },
  { path: "/employee/employeeJd", element: <EmployeeJD /> },
  {path: '/hr/employeeData',element:<HrEmployeeData/>}
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

//      {/* <AdminDashboard/> */}
//       {/* <AdminDashboardProfile/> */}
//       {/* <HrDashboard/> */}
//       {/* <HrProfile/> */}
//       {/* <LoginPage/> */}
//       {/* <SuperAdminDashboard/> */}
//       {/* <EmployeeHome/> */}
//       {/* <EmployeeJD/> */}
//       {/* <HrDepartment/> */}
//       {/* <HrJdList/> */}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Navigate, Link, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import EmployeeHome from './components/EmployeeJD/EmployeeHome';
// import HrDashboard from './components/HR/HRDashboard';
// import EmployeeJd from './components/EmployeeJD/EmployeeJD';
// import HrProfile from './components/HR/HrProfile';
// import HrDepartment from './components/HR/HrDepartment';
// import HrJdList from './components/HR/HrJdList';
// import EmployeeJD from './components/EmployeeJD/EmployeeJD';

// const App = () => {
//   const [authenticatedUser, setAuthenticatedUser] = useState(
//     JSON.parse(localStorage.getItem('authenticatedUser')) || null
//   );

//   const handleLogin = (user) => {
//     localStorage.setItem('authenticatedUser', JSON.stringify(user));
//     setAuthenticatedUser(user);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('authenticatedUser');
//     setAuthenticatedUser(null);
//   };

//   return (
// //     <Router>
// //       <nav>
// //         {authenticatedUser ? (
// //           <>
// //             <Link to="/">Home</Link>
// //             <button onClick={handleLogout}>Logout</button>
// //           </>
// //         ) : (
// //           <Link to="/login">Login</Link>
// //         )}
// //       </nav>
// // <Routes>

// //       {/* <Route exact path="/login" element= {authenticatedUser ? (
// //           authenticatedUser.role === 'employee' ? (
// //             <Navigate to="/login/employee" />
// //           ) : (
// //             <Navigate to="/login/HR" />
// //           )
// //         ) : (
// //           <Navigate to="/login" />
// //         )}> */}
// // {/*
// //       </Route> */}
// //       {/* <Route path="/login" element={<LoginPage onLogin={handleLogin(authenticatedUser)}/>} >
// //       {/* <Route path="employee" element={<EmployeeHome authenticatedUser={authenticatedUser} />} />

// //       <Route path="HR" element={<HrDashboard authenticatedUser={authenticatedUser} />}/> */}
// //       </Route>
// //       */}
// //       {/* <Route path="/createAnotherOne/:employeeId">
// //         <EmployeeJd authenticatedUser={authenticatedUser} />
// //       </Route>
// //       <Route path="/hrProfile">
// //         <HrProfile authenticatedUser={authenticatedUser} />
// //       </Route>
// //       <Route path="/hrDepartment">
// //         <HrDepartment authenticatedUser={authenticatedUser} />
// //       </Route>
// //       <Route path="/getWantedAdministrationList/:normalEmployee">
// //         <HrJdList authenticatedUser={authenticatedUser} />
// //       </Route> */}
// //       </Routes>
// //     </Router>

// // <Router>
// //   <Routes>
// //   <Route path='/' element={<LoginPage onLogin={handleLogin}/>}>
// //     <Route path='emplyoee' element={<EmployeeHome/>}/>
// //     <Route path='Hr' element={<HrDashboard/>}/>
// //     </Route>
// //   </Routes>
// // </Router>
//           <HrJdList/>

//   );
// };

// export default App;
