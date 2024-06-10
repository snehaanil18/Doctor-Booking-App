import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
import DocReview from './DocReview';

function ViewDoc() {
   const {id} = useParams()
   console.log(id);

   const [open, setOpen] = useState(false);

   const base_url = 'https://doctor-booking-app-k53n.onrender.com/doctors'

   const [viewDocD,setViewDocD] = useState({})

   const viewDoc = async() => {
    const {data} = await axios.get(`${base_url}/${id}`)
    console.log(data); 
    setViewDocD(data)
   }

   useEffect(() => {
        viewDoc()
   },[])
  return (
    <div>
      <MDBCard alignment='center'>
        <MDBCardBody>
          <MDBCardTitle className='fs-2 text-dark'>{viewDocD.name}</MDBCardTitle>
          <MDBCardText>
            <h5 className='mt-2 text-dark'>{viewDocD.specialty} </h5><br />
            <p className='fs-5 text-dark'>{viewDocD.hospital} <br /> 
            <b>Address : </b> {viewDocD.address} <br /></p>
            <p className='fs-6'><b>Contact : </b> <br /> {viewDocD.phone} <br />{viewDocD.email}</p>
            <p><b>Consulation Timings :</b> <br /> {viewDocD.available_hours} <br />{viewDocD.available_days ? viewDocD.available_days.join(' || ') : ''}</p>
          </MDBCardText>
          <DocReview re = {viewDocD.reviews}/>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default ViewDoc