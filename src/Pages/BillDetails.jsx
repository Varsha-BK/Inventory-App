import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BillDetails = () => {


    const { id } = useParams()
    const [bill, setBill] = useState(
        [
            {
                VendorName: "",
                Bill: "",
                OrderNumber: "",
                BillDate: "",
                DueDate: "",
                PaymentTerms: "",
                Reference: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchBill()
        }
    )

    const fetchBill = () => {
        axios.post(`http://localhost:3001/purchase/bills-payments/${id}`)
            .then(
                (res) => {
                    setBill(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }


    return (
        <div className='purchase'>

            <div className="container py-3">
                <h3 style={{ float: "left" }}>{bill.Bill}</h3>
                <a href="/purchase/bills-payments" style={{ marginLeft: "35%" }}>Bills</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Bill</td>
                                    <td>{bill.Bill}</td>
                                </tr>

                                <tr>
                                    <td>Order No.</td>
                                    <td>{bill.OrderNumber}</td>
                                </tr>

                                <tr>
                                    <td>Vendor Name</td>
                                    <td>{bill.VendorName}</td>
                                </tr>

                                <tr>
                                    <td>Bill Date</td>
                                    <td>{bill.BillDate}</td>
                                </tr>

                                <tr>
                                    <td>Due Date</td>
                                    <td>{bill.DueDate}</td>
                                </tr>

                                <tr>
                                    <td>Payment</td>
                                    <td>{bill.PaymentTerms}</td>
                                </tr>

                                <tr>
                                    <td>Reference</td>
                                    <td>{bill.Reference}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillDetails