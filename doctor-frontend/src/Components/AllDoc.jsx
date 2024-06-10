import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DocCard from './DocCard'

function AllDoc() {

    const base_url = 'https://doctor-booking-app-k53n.onrender.com/doctors'

    const [docData,setDocDaata] = useState([])

    const fetchData = async() => {
        const response = await axios.get(base_url)
        setDocDaata(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        fetchData();
    },[])
  return (
    <div>
        <DocCard data = {docData}/>
    </div>
  )
}

export default AllDoc