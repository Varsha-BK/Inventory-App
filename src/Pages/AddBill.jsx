import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBill = () => {

    const Navigate = useNavigate()
    const [bill, setBill] = useState(
        {
            VendorName: "",
            Bill: "",
            OrderNumber: "",
            BillDate: "",
            DueDate: "",
            PaymentTerms: "",
            Reference : ""
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target;

        setBill(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const newBill = () => {
        axios.post("http://localhost:3001/purchase/bills-payments/new", bill)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        setBill(
                            {
                                VendorName: "",
                                Bill: "",
                                OrderNumber: "",
                                BillDate: "",
                                DueDate: "",
                                PaymentTerms: "",
                                Reference : ""
                            }
                        )
                        Navigate("/purchase/bills-payments")
                    }

                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }


    return (
        <div className='purchase'>

            <div className="container py-3">
                <h3>New Bill</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Name</label>
                                <input type="text"
                                    name="VendorName"
                                    id=""
                                    className="form-control"
                                    value={bill.VendorName}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bill#</label>
                                <input type="text"
                                    name="Bill"
                                    id=""
                                    className="form-control"
                                    value={bill.Bill}
                                    onChange={inputHandler}required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Order Number</label>
                                <input type="text"
                                    name="OrderNumber"
                                    id=""
                                    className="form-control"
                                    value={bill.OrderNumber}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bill Date</label>
                                <input type="date"
                                    name="BillDate"
                                    id=""
                                    className="form-control"
                                    value={bill.BillDate}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Due Date</label>
                                <input type="date"
                                    name="DueDate"
                                    id=""
                                    className="form-control"
                                    value={bill.DueDate} 
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Payment Terms</label>
                                <input type="text"
                                    name="PaymentTerms"
                                    id=""
                                    className="form-control"
                                    value={bill.PaymentTerms}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reference</label>
                                <input type="text"
                                    name="Reference"
                                    id=""
                                    className="form-control"
                                    value={bill.Reference}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={newBill}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBill