import React from 'react'
import { Link } from 'react-router-dom'
export default function UserHome(){
 return(
    <>
{/* ======= Hero Section ======= */}
<section id="hero" className="hero">
<div className="container position-relative">
  <div className="row gy-5" data-aos="fade-in">
    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
      <h2>
       Welcome to Hackwave
      </h2>
      <p>
      Welcome to Hackwave, where creativity meets technology! Hackwave is an exhilarating hackathon designed to bring together the brightest minds in tech to tackle real-world challenges through innovative solutions.
      </p>
    </div>
    <div className="col-lg-6 order-1 order-lg-2">
      <img
        src="/assets/img/hackathon 2.png"
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
              Ingeniouus
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
</>
)
}