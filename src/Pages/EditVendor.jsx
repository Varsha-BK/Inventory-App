import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditVendor = () => {

    const Navigate = useNavigate()

    const [edit, setEdit] = useState(
        {
            PrimaryContact: "",
            CompanyName: "",
            VendorName: "",
            VendorEmail: "",
            PhoneNo: ""
        }
    )

    const { id } = useParams()

    useEffect(
        () => {
            fetchVendors()
        }, []
    )


    const fetchVendors = async () => {
        await axios.post(`http://localhost:3001/purchase/vendors/${id}`)
            .then(
                (res) => {
                    setEdit(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }


    const inputHandler = (event) => {
        const { name, value } = event.target

        setEdit(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const update = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/purchase/vendors/edit/${id}`, edit)
            .then(
                (res) => {
                    alert("Update Successfully")
                    setEdit(res.data)
                    Navigate("/purchase/vendors")

                }
            )
    }


    return (
        <div className='purchase'>

            <div className="container py-3">
                <h3>Update Vendor</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Primary Contact</label>
                                <input type="text"
                                    name="PrimaryContact"
                                    id=""
                                    className="form-control"
                                    value={edit.PrimaryContact}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text"
                                    name="CompanyName"
                                    id=""
                                    className="form-control"
                                    value={edit.CompanyName}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Name</label>
                                <input type="text"
                                    name="VendorName"
                                    id=""
                                    className="form-control"
                                    value={edit.VendorName}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Email</label>
                                <input type="text"
                                    name="VendorEmail"
                                    id=""
                                    className="form-control"
                                    value={edit.VendorEmail}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number"
                                    name="PhoneNo"
                                    id=""
                                    className="form-control"
                                    value={edit.PhoneNo}
                                    onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={update}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditVendor