import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted '>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className='text-light'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>
                                <h6 className='text-uppercase fw-bold mb-4 text-light'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    MedCO
                                </h6>
                                <p className='text-wrap'>
                                Your streamlined solution for hassle-free doctor appointments. MedCO connects you with trusted healthcare professionals, providing a user-friendly experience for personalized, transparent, and convenient healthcare. Your well-being, simplified.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-light'>Patient care</h6>
                                <p  className='text-reset'>
                                Medical Value Travel
                                </p>
                                <p>
                                Video Consultation
                                </p>
                                <p>
                                Book an Appointment
                                </p>
                                <p>
                                Frequently Asked Questions
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-light'>MULTISPECIALITY</h6>
                                <p>
                                Physical Medicine & Rehabilitation
                                </p>
                                <p>
                                Internal Medicine
                                </p>
                                <p>
                                Endocrinology & Diabetology
                                </p>
                                <p>
                                Emergency Medicine
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@medco.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer