import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPaymentRec = () => {
    
    const Navigate = useNavigate()
    const [payment,setPayment] = useState(
        {
            PaymentNo : "",
            PaymentDate : "",
            PaymentMode : "",
            Customer : "",
            Amount : ""    
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target

        setPayment(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const addPayment = () => {
        axios.post("http://localhost:3001/sales/payment-received/new",payment)
        .then(
            (res) => {
                if(res.data.Status==="Success"){
                    setPayment(
                        {
                            PaymentNo : "",
                            PaymentDate : "",
                            PaymentMode : "",
                            Customer : "",
                            Amount : ""                    
                        }
                    )
                    alert("New Payment Added")
                    Navigate("/sales/payment-received")
                }
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
                <h3>New Payment</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Payment No.</label>
                                <input type="number"
                                    name="PaymentNo"
                                    id=""
                                    className="form-control"
                                    value={payment.PaymentNo}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Payment Date</label>
                                <input type="date"
                                    name="PaymentDate"
                                    id=""
                                    className="form-control"
                                    value={payment.PaymentDate}
                                    onChange={inputHandler} />
                                    
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Payment Mode</label>
                                <input type="text"
                                    name="PaymentMode"
                                    id=""
                                    className="form-control"
                                    value={payment.PaymentMode}
                                    onChange={inputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Customer</label>
                                <input type="text"
                                    name="Customer"
                                    id=""
                                    className="form-control"
                                    value={payment.Customer}
                                    onChange={inputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Amount</label>
                                <input type="number"
                                    name="Amount"
                                    id=""
                                    className="form-control"
                                    value={payment.Amount}
                                    onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={addPayment}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPaymentRec