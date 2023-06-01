import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PurchaseOrderDetails = () => {

    const {id} = useParams()
    const [porder,setPOrder] = useState(
        {
            VendorName: "",
            Address: "",
            PurchaseOrder: "",
            Reference: "",
            Date: "",
            ExpectedDeliDate: "",
            ItemName: "",
            Amount: ""
        }
    )

    useEffect(
        () => fetchDetails()
    )

    const fetchDetails =() => {
        axios.post(`http://localhost:3001/purchase/purchase-order/${id}`)
        .then(
            (res) => {
                setPOrder(res.data)
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
        <h3 style={{ float: "left" }}>Purchase Order Details</h3>
        <a href="/purchase/purchase-order" style={{ marginLeft: "35%" }}>Purchase Orders</a>
        <div className="row py-3 px-3">
            <div className="row g-3">

                <table class="table">
                    <tbody>

                        <tr>
                            <td>Purchase Order No.</td>
                            <td>{porder.PurchaseOrder}</td>
                        </tr>

                        <tr>
                            <td>Vendor Name</td>
                            <td>{porder.VendorName}</td>
                        </tr>

                        <tr>
                            <td>Delivery Address</td>
                            <td>{porder.Address}</td>
                        </tr>

                        <tr>
                            <td>Order Date</td>
                            <td>{porder.Date}</td>
                        </tr>

                        <tr>
                            <td>Reference</td>
                            <td>{porder.Reference}</td>
                        </tr>

                        <tr>
                            <td>Expected Delivery Date</td>
                            <td>{porder.ExpectedDeliDate}</td>
                        </tr>

                        <tr>
                            <td>Item Name</td>
                            <td>{porder.ItemName}</td>
                        </tr>

                        <tr>
                            <td>Amount</td>
                            <td>{porder.Amount}</td>
                        </tr>


                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>  )
}

export default PurchaseOrderDetails