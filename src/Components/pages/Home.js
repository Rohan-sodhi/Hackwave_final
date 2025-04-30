import { Link } from "react-router-dom"
import About from "./About"
import Ourteam from "../Layouts/Ourteam"
import Contact from "./Contact"
import Frequently from "./Frequently"
import Recentblog from "./Recentblog"
import Service from "./Service"
import Testimonials from "./Testimonials"
import ViewEvents from "../users/pages/ViewEvents"
export default function Home() {
    return(
        <>
  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>
           ByteVerse 1.0
          </h2>
          <p>
          Welcome to ByteVerse 1.0, where creativity meets technology! ByteVerse 1.0 is an exhilarating hackathon designed to bring together the brightest minds in tech to tackle real-world challenges through innovative solutions.
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to="/Register" className="btn btn-hover btn btn-info justify-conent-center py-3 px-4 me-3">
              Register Here
            </Link>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img
            src="/assets/img/hero-img.svg"
            className="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay={100}
          />
        </div>
      </div>
    </div>
    <div className="icon-boxes position-relative">
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-easel" />
              </div>
              <h4 className="title">
                <Link to="" className="stretched-link">
                  Skill Development
                </Link>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-gem" />
              </div>
              <h4 className="title">
                <Link to="" className="stretched-link">
                  Ingenious
                </Link>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-command" />
              </div>
              <h4 className="title">
                <Link to="" className="stretched-link justify-conent-center mt-4">
                  Engaging
                </Link>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-command" />
              </div>
              <h4 className="title">
                <Link to="" className="stretched-link">
                  Empowering
                </Link>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Section */}
        <About/>
       
        <Frequently/>
        <Contact/>
        {/* <Ourteam/> */}
        </>
    )
}