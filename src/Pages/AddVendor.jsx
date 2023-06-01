import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddVendor = () => {

    const Navigate = useNavigate()

    const [vendor, setVendor] = useState(
        {
            PrimaryContact: "",
            CompanyName: "",
            VendorName: "",
            VendorEmail: "",
            PhoneNo: ""
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target

        setVendor(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const newVendor = () => {
        axios.post("http://localhost:3001/purchase/vendors/new", vendor)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        alert("Vendor Added Successfully")
                        setVendor(
                            {
                                PrimaryContact: "",
                                CompanyName: "",
                                VendorName: "",
                                VendorEmail: "",
                                PhoneNo: ""
                            }
                        )
                        Navigate("/purchase/vendors")
                    }
                }
            )
    }


    return (
        <div className='purchase'>

            <div className="container py-3">
                <h3>New Vendor</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Primary Contact</label>
                                <input type="text"
                                    name="PrimaryContact"
                                    id=""
                                    className="form-control" 
                                    value={vendor.PrimaryContact}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text"
                                    name="CompanyName"
                                    id=""
                                    className="form-control" 
                                    value={vendor.CompanyName}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Name</label>
                                <input type="text"
                                    name="VendorName"
                                    id=""
                                    className="form-control" 
                                    value={vendor.VendorName}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Email</label>
                                <input type="text"
                                    name="VendorEmail"
                                    id=""
                                    className="form-control" 
                                    value={vendor.VendorEmail}
                                    onChange={inputHandler}required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number"
                                    name="PhoneNo"
                                    id=""
                                    className="form-control" 
                                    value={vendor.PhoneNo}
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

export default AddVendor