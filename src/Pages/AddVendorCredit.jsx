import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddVendorCredit = () => {
    
    const Navigate = useNavigate()
    const [credit,setCredit] = useState(
        {
            VendorName : "",
            CreditNotes : "",
            OrderNumber : "",
            CreditDate : ""      
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target

        setCredit(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const newVendor = () => {
        axios.post("http://localhost:3001/purchase/vendor-credit/new",credit)
        .then(
            (res) => {
                if(res.data.Status==="Success") {
                    setCredit(
                        {
                            VendorCreditNo : "",
                            VendorName : "",
                            CreditNotes : "",
                            OrderNumber : "",
                            CreditDate : "" 
                        }
                    )
                    Navigate("/purchase/vendor-credit")
                }
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
    }

  return (
    <div className='purchase'>
        
        <div className="container py-3">
                <h3>New Vendor Credit</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Credit No.</label>
                                <input type="number"
                                    name="VendorCreditNo"
                                    id=""
                                    className="form-control"
                                    value={credit.VendorCreditNo}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Name</label>
                                <input type="text"
                                    name="VendorName"
                                    id=""
                                    className="form-control"
                                    value={credit.VendorName}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Credit Notes</label>
                                <input type="text"
                                    name="CreditNotes"
                                    id=""
                                    className="form-control"
                                    value={credit.CreditNotes}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Order Number</label>
                                <input type="text"
                                    name="OrderNumber"
                                    id=""
                                    className="form-control"
                                    value={credit.OrderNumber}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Credit Date</label>
                                <input type="date"
                                    name="CreditDate"
                                    id=""
                                    className="form-control"
                                    value={credit.CreditDate}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={newVendor}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddVendorCredit