import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function DocReview({ re }) {
    console.log(re);
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                REVIEW
            </Button>
            <div style={{ minHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {re?.map((n, index) => (
                    <Collapse in={open} className='border m-2' key={index} dimension="width">
                        <div id="example-collapse-text">
                            <Card body style={{ width: '400px' , height:'230px' }}>
                                <p>
                                    <b>Patient Name: </b>{n.patient_name} <br />
                                    <b>Date : </b> {n.date} <br />
                                    <b>Review : </b> {n.comments} <br />
                                    <b>Rating : </b> {n.rating}
                                </p>
                            </Card>
                        </div>
                    </Collapse>
                ))}
            </div>
        </div>
    )
}

export default DocReview