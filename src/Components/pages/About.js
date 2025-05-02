import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#fff'
        }}>
          <ClipLoader
            color="#000000"
            loading={loading}
            size={50}
            aria-label="Loading About Section"
          />
        </div>
      ) : (
        <>

          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>About</h2>
                <p></p>
              </div>
            </div>
          </section>


          {/* Background Image Section */}
          <section className="bg-image mt-2" style={{
            backgroundImage: 'url("/assets/img/ct_college.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '1000px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}></div>
            <div className="container position-relative" style={{ zIndex: 1 }}>
              <div className="text-center text-white">
                <h2 className="display-4 mb-4">Our Campus Life</h2>
                <p className="lead">Discover the vibrant atmosphere and innovative spirit of our institution</p>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          {/* Cards Section */}
          {/* Cards Section */}
          <section className="py-5">
            <div className="container">

              {/* Card 1 - Photo Left, Content Right */}
              <div className="row align-items-center mb-5">
                <div className="col-md-6">
                  <div className="card h-100 border border-dark rounded-4 overflow-hidden">
                    <img
                      src="/assets/img/CT-Leader.jpeg.jpg"
                      className="card-img-top"
                      alt="Campus Life"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-3">Chairman - Mr. Charanjit Singh</h2>
                  <p>The establishment stones of CT Group are laid on the epitome of scholastic pursuit and excellence. Excellence in any work can be achieved with extreme commitment, hard work, and firmness. We, at CT, have made this maxim our axiom and our way of life in every single activity in the campus. As you desire to walk your journey of life in our institutions, which has a vibrant atmosphere and a vigorous environment, be constructive, be ingenious and be committed, for you will see yourself transformed with a new learning experience and develop your progressive skills. Our highly educated, experienced and motivated staff along with committed team of management will implement the most validated methods and means of Teaching-Learning Process to provide the quality education and academic excellence.</p>
                </div>
              </div>

              {/* Card 2 - Photo Right, Content Left */}
              <div className="row align-items-center flex-md-row-reverse mb-5">
                <div className="col-md-6">
                  <div className="card h-100 border border-dark rounded-4 overflow-hidden">
                    <img
                      src="/assets/img/chairman.jpg"
                      className="card-img-top"
                      alt="Student Life"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-3">Vice Chairman - Mr. Harpreet Singh</h2>
                  <p>Vice Chairman- Mr. Harpreet Singh

                    The mission of CT Group is to provide innovative and comprehensive educational services and resources to learners from various walks of life. We strive to create a positive learning environment where everyone has the opportunity to reach their full potential. We believe in the power of education and the importance of lifelong learning, and we are committed to helping our students To achieve this, we offer a holistic approach to education, incorporating both traditional and innovative learning styles. Our learning community is open to everyone who is invested in our vision of transforming lives through education, and we are constantly working to expand the resources that we offer.</p>
                </div>
              </div>

              {/* Card 3 - Photo Left, Content Right */}
              <div className="row align-items-center mb-5">
                <div className="col-md-6">
                  <div className="card h-100 border border-dark rounded-4 overflow-hidden">
                    <img
                      src="/assets/img/manbir_new.webp"
                      className="card-img-top"
                      alt="Research Facilities"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-3">Managing Director - Dr. Manbir Singh</h2>
                  <p>Managing Director- Dr. Manbir Singh

                    In today’s volatile world where there is cutthroat competition in all fields, careers, and businesses, team CT Group is all set with sagacious vision and dreams to enhance, evolve and contribute to plunging learning outcomes in the education system. Understanding the room for monumental growth and potential in the Indian education system, we muster the courage and credibility to work around the clock. We are ready to set upcoming education benchmarks.

                    We believe the world is made up of leaders and followers. Followers follow the crowd, whereas leaders carve their paths, map their roads, and embark on success.

                    CT Group is convinced that transformational education can produce world-class leaders capable of overcoming global challenges. Our team members can cultivate such leaders. Leaders with compassion, fortitude, and intellectual prudence.

                    They will think deeply and strategically, with the tenacity to take on the toughest problems. They will create opportunities to build a brighter future for all.</p>
                </div>
              </div>

            </div>
          </section>



          <section>
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <h3>About Our College!..</h3>
                  <h6>Our college, accredited with a prestigious NAAC Grade 'A', is a recognized hub of academic excellence and innovation. It offers a comprehensive range of programs spanning from foundational undergraduate courses to advanced postgraduate and Ph.D. level studies, supporting students throughout their entire academic journey.

                    With a broad spectrum of disciplines including Engineering, Science, Commerce, Arts, and Management, the institution caters to diverse interests and career paths. Backed by modern infrastructure, highly qualified faculty, and a vibrant learning environment, the college emphasizes both academic rigor and practical exposure.

                    Committed to nurturing intellectual growth, research, and industry relevance, the college provides students with the tools and opportunities needed to excel in their chosen fields and make meaningful contributions to society.</h6>

                  <img
                    src="https://th.bing.com/th/id/OIP.axqyrIbYNdlWf3K6u-jYlQHaEF?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    className="img-fluid rounded-4 mb-4"
                    alt=""
                  />
                  <p></p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}