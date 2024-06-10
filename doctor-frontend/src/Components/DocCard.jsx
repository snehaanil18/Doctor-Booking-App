import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DocCard({ data }) {
    console.log(data);
    return (

        <div>
            <div className="row m-3">
                {data.map(n =>
                    <div className="col d-flex p-3">
                        <Link to={`/doctors/${n.id}`}>
                            <MDBCard className='border' style={{width: '400px'}}>
                                <MDBCardBody>
                                    <MDBCardTitle>{n.name}</MDBCardTitle>
                                    <MDBCardText>
                                        <p>
                                            <b>Speciality : </b> {n.specialty} <br />
                                            <b>Hospital : </b> {n.hospital} <br />
                                            <b>Rating : </b> {n.rating}
                                        </p>
                                    </MDBCardText>
                                    <div className='text-center'>
                                    <MDBBtn>Book Appointment</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>

                    </div>
                )}
            </div>
        </div>
    )
}

export default DocCard