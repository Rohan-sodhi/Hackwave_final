import { Link } from "react-router-dom";
export default function Footer() {
    return(
        <>
        <>
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <Link to="/" className="logo d-flex align-items-center">
            <span className="text-info">Hackwave</span>
          </Link>
          <p>
           
          </p>
          <div className="social-links d-flex mt-4">
            <Link to="#" className="twitter">
              <i className="bi bi-twitter" />
            </Link>
            <Link to="#" className="facebook">
              <i className="bi bi-facebook" />
            </Link>
            <Link to="#" className="instagram">
              <i className="bi bi-instagram" />
            </Link>
            <Link to="https://www.linkedin.com/in/rohan-sodhi-63b549330/" className="linkedin">
              <i className="bi bi-linkedin" />
            </Link>
            <Link to="https://github.com/" className="github">
              <i className="bi bi-github" />
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4 className="text-info">Useful Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/event">Events</Link>
            </li>
            <li>
              <Link to="#">Terms of Events</Link>
            </li>
            <li>
              <Link to="#">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4 className="text-info">Our Services</h4>
          <ul>
            <li>
              <Link to="https://www.interaction-design.org/literature/topics/web-design#:~:
              text=Web%20design%20involves%20creating%20the,translate%20the%20designs%20to%20code.">Web Design</Link>
            </li>
            <li>
              <Link to="https://www.webfx.com/web-development/glossary/what-is-web-development/#:~:
              text=Web%20development%20is%20the%20process,develop%20websites%20and%20web%20applications.">Web Development</Link>
            </li>
            <li>
              <Link to="https://www.productfocus.com/product-management-basics/what-is-product-management/#:~:
              text=Product%20management%20is%20the%20job,what's%20technically%20and%20operationally%20possible.">Product Management</Link>
            </li>
            {/*<li>
              <Link to="#">Marketing</Link>
            </li>*/}
            <li>
              <Link to="https://www.interaction-design.org/literature/topics/graphic-design#:~:
              text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience.">Graphic Design</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 className="text-info">Contact Us</h4>
          <p>
            +91 83600-20881 <br />
            INDIA , IND 144001
            <br />
             <br />
            <br />
            <br />
            <strong>Email:</strong> rohansodhi66@gmail.com
            <br />
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        ©Copyright{" "}
        <strong>
          <span>Hackwave</span>
        </strong>
        
      </div>
      
      <div className="credits">
        Designed by <h6 className="text-info">Rohan</h6>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/* End Footer */}
  <Link
    to="#"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </Link>
  
</>

        </>
    )
}