import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const InvntryAdjDetails = () => {

    const { id } = useParams()
    const [adj, setAdj] = useState(
        {
            Mode: "",
            ReferenceNo: "",
            AdjDate: "",
            Reason: "",
            Description: "",
            ItemName: "",
            Amount: ""
        }
    )

    useEffect(
        () => {
            fetchDetails()
        }
    )

    const fetchDetails = () => {
        axios.post(`http://localhost:3001/inventory/inventory-adj/${id}`)
            .then(
                (res) => {
                    setAdj(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }


    return (
        <div className='inventory'>
            <div className="container py-3">
                <h3 style={{ float: "left" }}>Inventory Adjustment Details</h3>
                <a href="/inventory/inventory-adj" style={{ marginLeft: "35%" }}>Inventory Adjustments</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>

                                <tr>
                                    <td>Reference No.</td>
                                    <td>{adj.ReferenceNo}</td>
                                </tr>

                                <tr>
                                    <td>Mode</td>
                                    <td>{adj.Mode}</td>
                                </tr>

                                <tr>
                                    <td>Adjustment Date</td>
                                    <td>{adj.AdjDate}</td>
                                </tr>

                                <tr>
                                    <td>Reason</td>
                                    <td>{adj.Reason}</td>
                                </tr>

                                <tr>
                                    <td>Description</td>
                                    <td>{adj.Description}</td>
                                </tr>

                                <tr>
                                    <td>Item Name</td>
                                    <td>{adj.ItemName}</td>
                                </tr>

                                <tr>
                                    <td>Amount</td>
                                    <td>{adj.Amount}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvntryAdjDetails