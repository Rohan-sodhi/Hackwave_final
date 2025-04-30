import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase"
export default function Header() {
  const mobileNavShow = document?.querySelector('.mobile-nav-show');
  const mobileNavHide = document?.querySelector('.mobile-nav-hide');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow?.classList.toggle('d-none');
    mobileNavHide?.classList.toggle('d-none');
  }
  const userId=sessionStorage.getItem("userId")
  const nav=useNavigate()
  const logout=()=>{
    if(window.confirm("Do you really want to Logout?")){
        toast.success("Logout Successfully!!")
        auth.signOut()
        sessionStorage.clear()
        nav("/login")
    }
  }
    return(
        <>
         <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>
        ByteVerse 1.0<span>.</span>
        </h1>
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/theme">Themes</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          {/* <li>
            <Link to="/problemStatement">Problem Statement</Link>
          </li> */}
          
          {
            !!userId && 
            <li>
              <Link to="/myregistration">Application</Link>
            </li>
          }
          <li>
            {!userId?
            <Link to="/Login" className="btn btn-hover btn btn-info content-justify-center text-white py-3 px-4 me-3">Login</Link>
            :
            <a href="#" className="btn btn-hover btn btn-info content-justify-center text-white py-3 px-4 me-3" onClick={logout}>Logout</a>
            }
          </li>
        </ul>
      </nav>
      {/* .navbar */}
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"  onClick={mobileNavToogle}/>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  {/* End Header */}
  {/* End Header */}
        </>
    )
}