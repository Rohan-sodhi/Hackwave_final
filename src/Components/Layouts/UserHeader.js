import React from "react";
import { Link } from "react-router-dom";

export default function UserHeader(){
  const mobileNavShow = document?.querySelector('.mobile-nav-show');
  const mobileNavHide = document?.querySelector('.mobile-nav-hide');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow?.classList.toggle('d-none');
    mobileNavHide?.classList.toggle('d-none');
  }
    return(
    <>
<header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>
        Hackwave<span>.</span>
        </h1>
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Category">Category</Link>
          </li>
          <li>
            <Link to="/Problem">Problem Statement</Link>
          </li>
          <li>
            <Link to="/Service">Events</Link>
          </li>
          <li className="dropdown">
    <Link to="/">Account</Link>
    <ul className="dropdown-menu">
      <li><Link to="/">History</Link></li>
      <li><Link to="/">Profile</Link></li>
      <li><Link to="/">Logout</Link></li>
    </ul>
  </li>
          
          <li>
            <Link to="/Login" className="btn btn-hover btn btn-danger content-justify-center text-white py-3 px-4 me-3">Login</Link>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"  onClick={mobileNavToogle}/>
      {/* <ul>
        <li>
          <a className="nav-link active" aria-current="page" href="/"Home/>
        </li>
      </ul> */}
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  {/* End Header */}
  {/* End Header */}
    </>

    )
}