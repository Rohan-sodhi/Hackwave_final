import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Sponsors() {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setLoad(false);
        }, 3000); // 2 seconds loading time
    }, []);

    return (
        <section id="sponsors" className="sponsors section-bg py-5">
            {load ? (
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    minHeight: '60vh' 
                }}>
                    <ClipLoader
                        color="#000000"
                        loading={load}
                        size={50}
                        aria-label="Loading Sponsors"
                    />
                </div>
            ) : (
                <div className="container">
                    <header className="section-header text-center mb-5">
                        <h2 style={{ color: '#000000', fontSize: '32px', fontWeight: 'bold' }}>Our Sponsors</h2>
                        <p className="mt-3">Proudly Supported By Industry Leaders</p>
                    </header>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {/* Sponsor 1 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm" 
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/tech_corp.jpg" alt="TechCorp Logo" className="mb-3" style={{ maxWidth: '200px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>TechCorp</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Platinum Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 2 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/innovation_lab.jpg" alt="InnovateLabs Logo" className="mb-3" style={{ maxWidth: '250px', borderRadius: '5%'}} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>InnovateLabs</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Gold Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 3 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/stats-img.svg" alt="CloudNet Logo" className="mb-3" style={{ maxWidth: '150px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>CloudNet</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Gold Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 4 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/dev_solution.jpeg" alt="DevSolutions Logo" className="mb-3" style={{ maxWidth: '150px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>DevSolutions</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Silver Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 5 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/byte_works.jpeg" alt="ByteWorks Logo" className="mb-3" style={{ maxWidth: '150px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>ByteWorks</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Silver Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 6 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/code_craft.jpeg" alt="CodeCraft Logo" className="mb-3" style={{ maxWidth: '150px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>CodeCraft</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Bronze Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 7 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/data_pro.jpg" alt="DataPro Logo" className="mb-3" style={{ maxWidth: '150px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>DataPro</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Bronze Sponsor</p>
                                </div>
                            </div>
                        </div>

                        {/* Sponsor 8 */}
                        <div className="col">
                            <div className="card h-100 shadow-sm"
                                 style={{ 
                                     transition: 'all 0.3s ease-in-out',
                                     cursor: 'pointer',
                                     border: '1px solid #42bfe4',
                                     backgroundColor: '#42bfe4'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.backgroundColor = '#009786';
                                     e.currentTarget.style.borderColor = '#009786';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.backgroundColor = '#42bfe4';
                                     e.currentTarget.style.borderColor = '#42bfe4';
                                 }}>
                                <div className="card-body text-center">
                                    <img src="/assets/img/ai_tech.jpg" alt="AITech Logo" className="mb-3" style={{ maxWidth: '150px', borderRadius: '5%' }} />
                                    <h5 className="card-title" style={{ color: '#ffffff' }}>AITech</h5>
                                    <p className="card-text" style={{ color: '#ffffff' }}>Bronze Sponsor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}