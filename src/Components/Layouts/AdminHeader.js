import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
export default function AdminHeader(){
  const mobileNavShow = document?.querySelector('.mobile-nav-show');
  const mobileNavHide = document?.querySelector('.mobile-nav-hide');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow?.classList.toggle('d-none');
    mobileNavHide?.classList.toggle('d-none');
  }
  const nav=useNavigate()
  const logout=()=>{
      if(window.confirm("Do you really want to Logout?")){
          auth.signOut()
          sessionStorage.clear()
          toast.success("Logout Successfully")
          nav("/login")
      } 
  }
    return(
    <>
    <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="/admin" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <Link to="/">
        <h1>
        Hackwave<span>.</span>
        </h1>
        </Link>
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Themes</Link>
            <ul className="dropdown-menu">
              <li><Link to="/admin/addTheme">Add</Link></li>
              <li><Link to="/admin/manageTheme">Manage</Link></li>
            </ul>
          </li>
         
              {/* <li className="dropdown">
              <Link to="/admin/manageproblem">Problem Statement</Link>
              <ul className="dropdown-menu">
                <li><Link to="/admin/addproblem">Add</Link></li>
                <li><Link to="/admin/manageproblem">Manage</Link></li>
              </ul>
            </li> */}
  
  <li className="dropdown">
    <Link >Event</Link>
    <ul className="dropdown-menu">
      <li><Link to="/admin/addevent">Add</Link></li>
      <li><Link to="/admin/manageEvent">Manage</Link></li>
    </ul>
  </li>
         
  <li>
    <Link to="/admin/users">Users</Link>
  </li>

          <li>
            
            <a href="#" onClick={logout} className="btn btn-hover btn btn-danger content-justify-center text-white py-3 px-4 me-3">Logout</a>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={mobileNavToogle}/>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  {/* End Header */}
  {/* End Header */}

    </>

    )
}