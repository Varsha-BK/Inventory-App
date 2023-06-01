import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DeliveryChallandetails = () => {

    const { id } = useParams()
    const [challan, setChallan] = useState(
        {
            CustomerName: "",
            PlaceSupply: "",
            DeliveryChallan: "",
            Reference: "",
            ChallanDate: "",
            ChallanType: ""
        }
    )

    useEffect(
        () => {
            fetchChallan()
        }
    )

    const fetchChallan = () => {
        axios.post(`http://localhost:3001/sales/delivery-challans/${id}`)
            .then(
                (res) => {
                    setChallan(res.data)
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
                <h3 style={{ float: "left" }}>Challan</h3>
                <a href="/sales/delivery-challans" style={{ marginLeft: "35%" }}>Challans</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Custommer Name</td>
                                    <td>{challan.CustomerName}</td>
                                </tr>

                                <tr>
                                    <td>Place of supply</td>
                                    <td>{challan.PlaceSupply}</td>
                                </tr>

                                <tr>
                                    <td>Delivery challan</td>
                                    <td>{challan.DeliveryChallan}</td>
                                </tr>

                                <tr>
                                    <td>Reference</td>
                                    <td>{challan.Reference}</td>
                                </tr>

                                <tr>
                                    <td>Challan Date</td>
                                    <td>{challan.ChallanDate}</td>
                                </tr>

                                <tr>
                                    <td>Challan Type</td>
                                    <td>{challan.ChallanType}</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryChallandetails