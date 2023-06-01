import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CustomerDetails = () => {

    const {id} = useParams()
    const [customer,setCustomer] = useState(
        {
            Customer : "",
            Address : "",
            ContactPerson : "",
            Email : "",
            PhoneNo : ""
        }
    )

    useEffect(
        () => {
            fetchDetails()
        }
    )

    const fetchDetails = () => {
        axios.post(`http://localhost:3001/sales/customers/${id}`)
        .then(
            (res) => {
                setCustomer(res.data)
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }
        )
    }

  return (
    <div className='sales'>
    <div className="container py-3">
        <h3 style={{ float: "left" }}>{customer.Customer}</h3>
        <a href="/sales/customers" style={{ marginLeft: "35%" }}>Customers</a>
        <div className="row py-3 px-3">
            <div className="row g-3">

                <table class="table">
                    <tbody>
                        <tr>
                            <td>Company Name</td>
                            <td>{customer.Company}</td>
                        </tr>

                        <tr>
                            <td>Address</td>
                            <td>{customer.Address}</td>
                        </tr>

                        <tr>
                            <td>Contact Person</td>
                            <td>{customer.ContactPerson}</td>
                        </tr>

                        <tr>
                            <td>Email</td>
                            <td>{customer.Email}</td>
                        </tr>

                        <tr>
                            <td>Phone Number</td>
                            <td>{customer.PhoneNo}</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
)
}

export default CustomerDetails