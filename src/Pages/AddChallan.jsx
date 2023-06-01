import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddChallan = () => {

    const Navigate = useNavigate()

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

    const inputHandler = (event) => {
        const { name, value } = event.target;

        setChallan(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const newChallan = () => {
        axios.post("http://localhost:3001/sales/delivery-challans/new",challan)
        .then(
            (res) => {
                if(res.data.Status==="Success"){
                    setChallan(
                        {
                            CustomerName: "",
                            PlaceSupply: "",
                            DeliveryChallan: "",
                            Reference: "",
                            ChallanDate: "",
                            ChallanType: ""                  
                        }
                    )
                    Navigate("/sales/delivery-challans")
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
        <div className='sales'>

            <div className="container py-3">
                <h3>New Delivery Challan</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Customer Name</label>
                                <input type="text"
                                    name="CustomerName"
                                    id=""
                                    className="form-control"
                                    value={challan.CustomerName}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place of Supply</label>
                                <input type="text"
                                    name="PlaceSupply"
                                    id=""
                                    className="form-control"
                                    value={challan.PlaceSupply}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Delivery Challan#</label>
                                <input type="text"
                                    name="DeliveryChallan"
                                    id=""
                                    className="form-control" 
                                    value={challan.DeliveryChallan}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reference</label>
                                <input type="text"
                                    name="Reference"
                                    id=""
                                    className="form-control"
                                    value={challan.Reference}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Delivery Challan Date</label>
                                <input type="date"
                                    name="ChallanDate"
                                    id=""
                                    className="form-control" 
                                    value={challan.ChallanDate}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Challan Type</label>
                                <input type="text"
                                    name="ChallanType"
                                    id=""
                                    className="form-control"
                                    value={challan.ChallanType}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={newChallan}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddChallan