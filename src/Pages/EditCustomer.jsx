import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCustomer = () => {

    const [edit, setEdit] = useState(
        {
            Customer: "",
            Address: "",
            ContactPerson: "",
            Email: "",
            PhoneNo: ""
        }
    )

    const Navigate = useNavigate();
    const { id } = useParams()


    useEffect(
        ()=>{
            fetchDetails()
        },[]
    )

    const fetchDetails = async() =>{
        await axios.post(`http://localhost:3001/sales/customers/${id}`)
        .then(
            (res)=>{
                setEdit(res.data)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
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

    const updateCustomer = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/sales/customers/edit/${id}`, edit)
            .then(
                (res) => {
                    alert("Updated Successfully")
                    setEdit(res.data)
                    Navigate("/sales/customers")
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }


    return (
        <div className='sales'>

            <div className="container py-3">
                <h3>Update Customer</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Customer Name</label>
                                <input type="text"
                                    name="Customer"
                                    id=""
                                    className="form-control"
                                    value={edit.Customer}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="Address"
                                    id=""
                                    cols="30" rows="3"
                                    className="form-control"
                                    value={edit.Address}
                                    onChange={inputHandler}></textarea>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Contact Person Name</label>
                                <input type="text"
                                    name="ContactPerson"
                                    id=""
                                    className="form-control"
                                    value={edit.ContactPerson}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email"
                                    name="Email"
                                    id=""
                                    className="form-control"
                                    value={edit.Email}
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
                                <button className="btn btn-primary" onClick={updateCustomer}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCustomer