import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 
const SalesOrderDetails = () => {

    const {id} = useParams()

    const [salesOrder,setSalesOrder] = useState(
        {
            CustomerName : "",
            SalesOrder : "",
            Reference : "",
            OrderDate : "",
            ShipmentDate : "",
            ExpectedDeliDate : "",      
            PaymentTerms : "",
            SalesPerson : "",
            ItemName : "",
            Amount : "",
    
        }
    )

    useEffect(
        () => {
            fecthOrders()
        }
    )

    const fecthOrders = () => {
        axios.post(`http://localhost:3001/sales/sales-order/${id}`)
        .then(
            (res) => {
                setSalesOrder(res.data)
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
                <h3 style={{ float: "left" }}>Sales Order Details</h3>
                <a href="/sales/sales-order" style={{ marginLeft: "35%" }}>Sales Order List</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>


                                <tr>
                                    <td>Sales Order</td>
                                    <td>{salesOrder.SalesOrder}</td>
                                </tr>

                                <tr>
                                    <td>Reference No.</td>
                                    <td>{salesOrder.Reference}</td>
                                </tr>

                                <tr>
                                    <td>Order Date</td>
                                    <td>{salesOrder.OrderDate}</td>
                                </tr>

                                <tr>
                                    <td>Shipment Date</td>
                                    <td>{salesOrder.ShipmentDate}</td>
                                </tr>

                                <tr>
                                    <td>Expected Delivery Date</td>
                                    <td>{salesOrder.ExpectedDeliDate}</td>
                                </tr>

                                <tr>
                                    <td>Customer Name</td>
                                    <td>{salesOrder.CustomerName}</td>
                                </tr>

                                <tr>
                                    <td>Payment Terms</td>
                                    <td>{salesOrder.PaymentTerms}</td>
                                </tr>

                                <tr>
                                    <td>Sales Person</td>
                                    <td>{salesOrder.SalesPerson}</td>
                                </tr>

                                <tr>
                                    <td>Item Name</td>
                                    <td>{salesOrder.ItemName}</td>
                                </tr>

                                <tr>
                                    <td>Amount</td>
                                    <td>{salesOrder.Amount}</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesOrderDetails