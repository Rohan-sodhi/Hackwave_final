import { Link, useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase"
import { useEffect } from "react"

export default function Header() {
  const location = useLocation();
  const mobileNavShow = document?.querySelector('.mobile-nav-show');
  const mobileNavHide = document?.querySelector('.mobile-nav-hide');

  // Reset mobile navigation when route changes
  useEffect(() => {
    document.querySelector('body').classList.remove('mobile-nav-active');
    mobileNavShow?.classList.remove('d-none');
    mobileNavHide?.classList.add('d-none');
  }, [location.pathname]);

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
      <Link to="/" className="logo d-flex align-items-center">
        {/* <img src="/assets/img/Your paragraph text.png" alt="ByteVerse Logo" style={{ maxHeight: '50px', marginRight: '10px' }} /> */}
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
            <Link to="/theme">Themes</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Sponsors">Sponsors</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
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