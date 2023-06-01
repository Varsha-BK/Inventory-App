import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const InvoicesDetails = () => {

    const { id } = useParams()
    const [invoices, setInvoices] = useState(
        {
            CustName: "",
            InvoiceNo: "",
            OrderNumber: "",
            InvoiceDate: "",
            DueDate: "",
            SalesPerson: "",
            ItemName:"",
            Amount:""
        }
    )

    useEffect(
        () => {
            fetchInvoices()
        }
    )

    const fetchInvoices = () => {
        axios.post(`http://localhost:3001/sales/invoices/${id}`)
            .then(
                (res) => {
                    setInvoices(res.data)
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
                <h3 style={{ float: "left" }}>Invoice</h3>
                <a href="/sales/invoices" style={{ marginLeft: "35%" }}>Invoices</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>

                                <tr>
                                    <td>Invoice No.</td>
                                    <td>{invoices.InvoiceNo}</td>
                                </tr>

                                <tr>
                                    <td>Order No.</td>
                                    <td>{invoices.OrderNumber}</td>
                                </tr>

                                <tr>
                                    <td>Item Name</td>
                                    <td>{invoices.ItemName}</td>
                                </tr>

                                <tr>
                                    <td>Amount</td>
                                    <td>{invoices.Amount}</td>
                                </tr>


                                <tr>
                                    <td>Custommer Name</td>
                                    <td>{invoices.CustName}</td>
                                </tr>

                                <tr>
                                    <td>Invoice Date</td>
                                    <td>{invoices.InvoiceDate}</td>
                                </tr>

                                <tr>
                                    <td>Due Date</td>
                                    <td>{invoices.DueDate}</td>
                                </tr>


                                <tr>
                                    <td>Sales Person</td>
                                    <td>{invoices.SalesPerson}</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>)
}

export default InvoicesDetails