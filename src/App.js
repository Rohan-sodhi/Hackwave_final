import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/pages/About";
import Login from './Components/Auth/Login';
import AdminHome from "./Components/admin/AdminHome..js";
import UserHome from './Components/users/UserHome.js';
import AddEvent from "./Components/admin/events/AddEvent.js";
import AddProblem from "./Components/admin/problems/AddProblem.js";
import ManageProblem from "./Components/admin/problems/ManageProblem.js";
import Register from "./Components/Auth/Register";
import AdminMaster from "./Components/Layouts/AdminMaster";
import Master from "./Components/Layouts/Master";
import Ourteam from "./Components/Layouts/Ourteam";
import UserMaster from "./Components/Layouts/UserMaster";
import Contact from "./Components/pages/Contact";
import Frequently from "./Components/pages/Frequently";
import Home from "./Components/pages/Home";
import Recentblog from "./Components/pages/Recentblog";
import Service from "./Components/pages/Service";
import AddTheme from "./Components/admin/theme/AddTheme.js";
import ManageTheme from "./Components/admin/theme/ManageTheme.js";
import EditTheme from "./Components/admin/theme/EditTheme.js";
import EditProblem from "./Components/admin/problems/EditProblem.js";
import ManageEvent from "./Components/admin/events/MangeEvent.js";
import EditEvent from "./Components/admin/events/EditEvent.js";
import Users from "./Components/admin/pages/Users.js";
import ViewProblemStatement from "./Components/users/pages/ViewProblemStatement.js";
import ViewThemes from "./Components/users/pages/ViewThemes.js";
import ViewEvents from "./Components/users/pages/ViewEvents.js";
import ViewEventDetails from "./Components/users/pages/ViewEventDetails.js";
import ViewApplication from "./Components/users/pages/ViewApplication.js";
import AdminViewApplication from "./Components/admin/pages/AdminViewApplication.js";
import Dashboard from "./Components/admin/Dashboard.js";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Ourteam" element={<Ourteam/>}/>
        <Route path="/Frequently" element={<Frequently/>}/>
        <Route path="/Recentblog" element={<Recentblog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/problemStatement" element={<ViewProblemStatement/>}/>
        <Route path="/problemStatement/:theme" element={<ViewProblemStatement/>}/>
        <Route path="/theme" element={<ViewThemes/>}/>
        <Route path="/event" element={<ViewEvents/>}/>
        <Route path="/viewEventDetails/:id" element={<ViewEventDetails/>}/>
        <Route path="/myregistration" element={<ViewApplication/>}/>
        </Route>

        <Route path="/admin" element={<AdminMaster/>}>
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/admin/addproblem" element={<AddProblem/>}/>
        <Route path="/admin/addevent" element={<AddEvent/>}/>
        <Route path="/admin/manageproblem" element={<ManageProblem/>}/>
        <Route path="/admin/addTheme" element={<AddTheme/>}/>
        <Route path="/admin/manageTheme" element={<ManageTheme/>}/>
        <Route path="/admin/editTheme/:id" element={<EditTheme/>}/>
        <Route path="/admin/editproblem/:id" element={<EditProblem/>}/>
        <Route path="/admin/manageEvent" element={<ManageEvent/>}/>
        <Route path="/admin/editevent/:id" element={<EditEvent/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/eventApplication/:id" element={<AdminViewApplication/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}
export default App;