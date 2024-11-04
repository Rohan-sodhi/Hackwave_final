import { Link } from "react-router-dom"
export default function About() {
    return(
        <>
  {/* ======= About Us Section ======= */}
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>About Us</h2>
        <p>
          
        </p>
      </div>
      <div className="row gy-4 ">
        <div className="col-lg-6 ">
          <h3>About this website!..</h3>
          <h6>We are a team of passionate innovators and problem solvers dedicated to
           leveraging technology to address real-world challenges. Our journey 
           began with a shared vision of creating impactful solutions that can make 
           a difference in various fields, from healthcare and education to 
           environmental sustainability and beyond.</h6>
          
          <img
            src="https://th.bing.com/th/id/OIP.axqyrIbYNdlWf3K6u-jYlQHaEF?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            className="img-fluid rounded-4 mb-4"
            alt=""
          />
          
          <p>
          
          </p>
        </div>
        <div className="col-lg-6">
          <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
            Our mission is to harness the power of technology to create innovative solutions 
          that solve pressing problems and improve lives. We believe in the potential 
          of collaborative efforts, diverse perspectives, and cutting-edge technology
           to drive positive change. Through this hackathon, we aim to push the 
           boundaries of what's possible and inspire others to join us on this exciting journey.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle-fill" /> Platform for networking, learning, and sharing 
                knowledge among students, professionals, and tech enthusiasts.
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />
                Engaging and diverse challenges that push
                 the boundaries of technology and innovation.
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />Access to experienced mentors who
                 provide guidance and support throughout the event.
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />
                Opportunities to connect with like-minded individuals, 
                potential collaborators, and future employers.
              </li>
            </ul>
            <p>
            Our team is composed of individuals with diverse backgrounds and expertise, including 
          software developers, data scientists, designers, and project managers. Each member brings 
          a unique set of skills and experiences to the table, allowing us to tackle complex problems
           from multiple angles and come up with creative solutions.
              
            </p>
            <div className="position-relative mt-4">
              <img
                src="assets/img/about-2.jpg"
                className="img-fluid rounded-4"
                alt=""
              />
              <Link
                to="https://www.youtube.com/watch?v=LlqqM1a1GQI"
                className="glightbox play-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Us Section */}
  {/* ======= Clients Section ======= */}
  {/*<section id="clients" className="clients">
    <div className="container" data-aos="zoom-out">
      <div className="clients-slider swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-2.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-3.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-4.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-5.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-6.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-7.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-8.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>*/}
  {/* End Clients Section */}
  {/* ======= Stats Counter Section ======= */}
  {/*<section id="stats-counter" className="stats-counter">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4 align-items-center">
        <div className="col-lg-6">
          <img src="assets/img/stats-img.svg" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="stats-item d-flex align-items-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={232}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              
            </p>
          </div>
          
          <div className="stats-item d-flex align-items-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={521}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              <strong>Projects</strong> 
            </p>
          </div>
         
          <div className="stats-item d-flex align-items-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={453}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              <strong>Hours Of Support</strong> 
            </p>
          </div>
         
        </div>
      </div>
    </div>
  </section>*/}
  {/* End Stats Counter Section */}
  {/* ======= Call To Action Section ======= */}
  
  {/* End Call To Action Section */}
</>
    )
  }