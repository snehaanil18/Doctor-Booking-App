import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#' className='text-light '>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nHUNemyXLL2urM5Hz6kuXHN4QarryXpVUA&usqp=CAU'
                            height='30'
                            alt=''
                            loading='lazy'
                            className='me-3'
                        />
                        MedCo.
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header