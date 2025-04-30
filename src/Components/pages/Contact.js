import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
            {/* <p>
              Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
              nihil id ratione ea sunt quis dolorem dolore earum
            </p> */}
          </div>

          {/* Add a flex container to display the two sections horizontally with space */}
          <div className="row gx-lg-0 gy-4 d-flex justify-content-between">
            <div className="col-lg-4">
              <div className="info-container d-flex flex-column align-items-start justify-content-start gap-4 p-4 border shadow-sm">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h4>Location:</h4>
                    <Link
                      to="https://maps.app.goo.gl/QVeix1ZCy76iefAv7"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#444444',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseOver={(e) => e.target.style.color = '#008374'}
                      onMouseOut={(e) => e.target.style.color = '#444444'}
                    >
                      <p>CT Group of Institutions Shahpur, Jalandhar</p>
                    </Link>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h4>Email:</h4>
                    <p>hackathonsingh@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0" />
                  <div>
                    <h4>Call:</h4>
                    <p>62840-27120</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>


            {/* Second column for another contact info */}
            <div className="col-lg-4">
              <div className="info-container d-flex flex-column align-items-start justify-content-start p-4 border shadow-sm">
                <div className="info-item d-flex">
                  <div>
                    <h4>Head Co-ordinators: Ms. Preet Saini and Dr. Ankita Gupta</h4>
                    <i className="bi bi-phone flex-shrink-0" />
                    <p>Contact: - 94170-04246 &<br /> 94785-39300</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  {/* <i className="bi bi-envelope flex-shrink-0" /> */}
                  <div>
                    <h4>Developer Team: Rohan Sodhi</h4>
                    <i className="bi bi-phone flex-shrink-0" />
                    <p>Contact :- 83600-20881</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <div>
                    <h4>Marketing & PR Team: Varun</h4>
                    <i className="bi bi-phone flex-shrink-0" />
                    <p>Contact :- 80544-36024</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-container d-flex flex-column align-items-start justify-content-start p-4 border shadow-sm">
                <div className="info-item d-flex">
                  <div>
                    <h4>Registration Team: Himanshu Sodhi and Arun</h4>
                    <i className="bi bi-phone flex-shrink-0" />
                    <p>Contact : - 62840-27120 & <br /> 62844-45269</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <div>
                    <h4>Technical Support: Madhav and Arun</h4>
                    <i className="bi bi-phone flex-shrink-0" />
                    <p>Contact : - 98722-75894 &<br /> 62844-45269</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <div>
                    <h4>Help Desk: Kashish</h4>
                    <i className="bi bi-phone flex-shrink-0" />
                    <p>Contact : - 87077-73540</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

