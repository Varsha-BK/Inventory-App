import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PackageDetails = () => {

    const { id } = useParams()

    const [packages, setPackage] = useState(
        {
            PackageNo : "",
            ReferenceNo : "",
            CustomerName : "",
            SalesOrder : "",
            OrderDate : "",
            ShipmentDate : "",
            ExpectedDeliDate : "",
            PaymentTerms : "",
            SalesPerson : "",
            ItemName : "",
            Amount : ""
            }
    )


    useEffect(
        () => {
            fetchPackages()
        }
    )

    const fetchPackages = () => {
        axios.post(`http://localhost:3001/sales/packages/${id}`)
            .then(
                (res) => {
                    setPackage(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }


    const  [salesorder,setSalesOrder] = useState(
        {
            CustomerName: "",
            SalesOrder: "",
            Reference: "",
            OrderDate: "",
            ShipmentDate: "",
            ExpectedDeliDate: "",
            PaymentTerms: "",
            SalesPerson: "",
            ItemName: "",
            Amount: ""

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
                <h3 style={{ float: "left" }}>Package Details</h3>
                <a href="/sales/packages" style={{ marginLeft: "35%" }}>Packages</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>

                                <tr>
                                    <td>Package No.</td>
                                    <td>{packages.SalesOrder}</td>
                                </tr>


                                <tr>
                                    <td>Order Date</td>
                                    <td>{packages.OrderDate}</td>
                                </tr>

                                <tr>
                                    <td>Shipment Date</td>
                                    <td>{packages.ShipmentDate}</td>
                                </tr>

                                <tr>
                                    <td>Expected Delivery Date</td>
                                    <td>{packages.ExpectedDeliDate}</td>
                                </tr>

                                <tr>
                                    <td>Customer Name</td>
                                    <td>{packages.CustomerName}</td>
                                </tr>

                                <tr>
                                    <td>Payment Terms</td>
                                    <td>{packages.PaymentTerms}</td>
                                </tr>

                                <tr>
                                    <td>Sales Person</td>
                                    <td>{packages.SalesPerson}</td>
                                </tr>

                                <tr>
                                    <td>Item Name</td>
                                    <td>{packages.ItemName}</td>
                                </tr>

                                <tr>
                                    <td>Amount</td>
                                    <td>{packages.Amount}</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageDetails