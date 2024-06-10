import React from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBRow,
    MDBBtn,
    MDBCol
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div>
            <MDBCard background='dark' className='text-white border border-dark'>
                <MDBCardImage overlay src='https://c3a2x9v5.rocketcdn.me/wp-content/uploads/2021/11/banner-portrait-female-optometrist-doctor-medical-mask-ophthalmology-clinic_34-1030x492.jpeg' height={'400px'} alt='...' />
                <MDBCardOverlay>
                    <div className='position-absolute ms-5 top-50 start-0 translate-middl text-center text-dark'>
                    <MDBCardTitle className='fs-2' >MedCo</MDBCardTitle>
                    <MDBCardText className='ms-4'>Connecting you to trusted healthcare, one click at a time</MDBCardText></div>
                </MDBCardOverlay>
            </MDBCard>
            <div className="mt-5 text-center">
            <h1>ONLINE APPOINTMENT SCHEDULING PLATFORM</h1>
            <p>Online Appointment, Phone-in Appointment, Walk-in Appointment with Token</p>
        </div>
        <div className='m-5'>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://media.istockphoto.com/id/1131216472/vector/medical-concept-with-hospital-building-in-flat-style.jpg?s=612x612&w=0&k=20&c=ZJWER7L9PiYS6U8Fmzi3UKrp7JhUZHlyyQOfUc9o71s='
            alt='...'
            position='top'
            height={'250px'}
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center text-success'>DOCTOR NEAR ME</MDBCardTitle>
            <MDBCardText className='mt-3'>
            Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg'
            alt='...'
            position='top'
            height={'250px'}
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center text-success'>KNOW YOUR DOCTOR</MDBCardTitle>
            <MDBCardText className='mt-3'>
            Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://img.freepik.com/premium-vector/making-appointment-with-doctor-flat-concept-vector-illustration_151150-12192.jpg'
            alt='...'
            position='top'
            height={'250px'}
          />
          <MDBCardBody>
            <MDBCardTitle className='text-center text-success'>BOOK CONFIRMED APPOINTMENT</MDBCardTitle>
            <MDBCardText className='mt-3'>
            Avoid endless back and forth communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling, schedule next consultation with token.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    <div className='mb-3'>
        <h1 className='text-center'>Book your doctor</h1>
        <Link to={'/doctors'}>
        <MDBCard className="text-center" style={{ width: '940px', margin: 'auto', height: '250px' }}>
          <MDBCardBody>
            <MDBRow className='g-0'>
                
              <MDBCol md='4'>
                <MDBCardImage src='https://t3.ftcdn.net/jpg/03/67/62/24/360_F_367622414_caYXN5n4chd9XjDbMAFi5BnaHgRTsRzK.jpg'  alt='...' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>Find a Doctor</MDBCardTitle>
                  <MDBCardText>
                  Find experienced doctors across all specialties
                  
                  </MDBCardText>
                  <MDBBtn className='btn btn-success'>Find</MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </Link>
        </div>
</div>
    )
}

export default Banner