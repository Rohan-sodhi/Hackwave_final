import { Link } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Frequently from "./Frequently"
import { useEffect, useState } from "react"

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const userId = sessionStorage.getItem("userId");
        setIsLoggedIn(!!userId);
    }, []);

    useEffect(() => {
        const targetDate = new Date('2025-08-20').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown({
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <section id="hero" className="hero">
                <div className="container position-relative">
                    <div className="row gy-5" data-aos="fade-in">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>HackWave</h2>
                            <p>
                                Welcome to HackWave, where creativity meets technology! HackWave is an exhilarating hackathon designed to bring together the brightest minds in tech to tackle real-world challenges through innovative solutions.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                {!isLoggedIn && (
                                    <Link to="/Register" className="btn btn-hover btn btn-info py-3 px-4">
                                        Register Here
                                    </Link>
                                )}
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

                {/* Countdown Timer Section */}
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="countdown-container p-4 rounded shadow-sm text-center" 
                                 style={{ 
                                     backgroundColor: '#42bfe4',
                                     border: '2px solid #42bfe4',
                                     marginBottom: '2rem',
                                     transition: 'all 0.3s ease',
                                     cursor: 'pointer'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.backgroundColor = '#008374';
                                     e.currentTarget.style.borderColor = '#008374';
                                     e.currentTarget.querySelector('h4').style.color = '#ffffff';
                                     e.currentTarget.querySelectorAll('.countdown-value').forEach(el => {
                                         el.style.color = '#ffffff';
                                     });
                                     e.currentTarget.querySelectorAll('.countdown-label').forEach(el => {
                                         el.style.color = '#ffffff';
                                     });
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                     e.currentTarget.querySelector('h4').style.color = '#ffffff';
                                     e.currentTarget.querySelectorAll('.countdown-value').forEach(el => {
                                         el.style.color = '#ffffff';
                                     });
                                     e.currentTarget.querySelectorAll('.countdown-label').forEach(el => {
                                         el.style.color = '#ffffff';
                                     });
                                 }}>
                                <h4 className="mb-4" style={{ color: '#ffffff' }}>Hackathon Starts In</h4>
                                <div className="d-flex justify-content-center gap-4">
                                    <div className="countdown-item text-center px-3">
                                        <div className="countdown-value" style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff' }}>
                                            {String(countdown.days).padStart(2, '0')}
                                        </div>
                                        <div className="countdown-label" style={{ fontSize: '16px', color: '#ffffff' }}>Days</div>
                                    </div>
                                    <div className="countdown-item text-center px-3">
                                        <div className="countdown-value" style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff' }}>
                                            {String(countdown.hours).padStart(2, '0')}
                                        </div>
                                        <div className="countdown-label" style={{ fontSize: '16px', color: '#ffffff' }}>Hours</div>
                                    </div>
                                    <div className="countdown-item text-center px-3">
                                        <div className="countdown-value" style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff' }}>
                                            {String(countdown.minutes).padStart(2, '0')}
                                        </div>
                                        <div className="countdown-label" style={{ fontSize: '16px', color: '#ffffff' }}>Minutes</div>
                                    </div>
                                    <div className="countdown-item text-center px-3">
                                        <div className="countdown-value" style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff' }}>
                                            {String(countdown.seconds).padStart(2, '0')}
                                        </div>
                                        <div className="countdown-label" style={{ fontSize: '16px', color: '#ffffff' }}>Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icon-boxes position-relative">
                    <div className="container position-relative">
                        <div className="row gy-4 mt-5">
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-easel" /></div>
                                    <h4 className="title">
                                        <Link to="" className="stretched-link">Skill Development</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-gem" /></div>
                                    <h4 className="title">
                                        <Link to="" className="stretched-link">Ingenious</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-command" /></div>
                                    <h4 className="title">
                                        <Link to="" className="stretched-link">Engaging</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-command" /></div>
                                    <h4 className="title">
                                        <Link to="" className="stretched-link">Empowering</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <About/> */}
            <Frequently/>
        </>
    )
}