import { Link } from "react-router-dom";
export default function AdminFooter() {
    return(
        <>
        <>
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
     
    </div>
    <div className="container mt-4">
      <div className="copyright">
        ©Copyright{" "}
        <strong>
          <span>HackWave</span>
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