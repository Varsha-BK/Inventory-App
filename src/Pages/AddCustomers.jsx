import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCustomers = () => {

    const Navigate = useNavigate()

    const [customer, setCustomer] = useState(
        {
            Customer: "",
            Address: "",
            ContactPerson: "",
            Email: "",
            PhoneNo: ""
        }
    )


    const inputHandler = (event) => {
        const { name, value } = event.target;

        setCustomer(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const addCustomer = () => {
        axios.post("http://localhost:3001/sales/customers/new", customer)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        setCustomer(
                            {
                                Customer: "",
                                Address: "",
                                ContactPerson: "",
                                Email: "",
                                PhoneNo: ""
                            }
                        )
                        alert("New Customer Added")
                        Navigate("/sales/customers")
                    }
                }
            )
    }

    return (
        <div className='sales'>

            <div className="container py-3">
                <h3>New Customer</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Customer Name</label>
                                <input type="text"
                                    name="Customer"
                                    id=""
                                    className="form-control"
                                    value={customer.Customer}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="Address"
                                    id=""
                                    cols="30" rows="3"
                                    className="form-control"
                                    value={customer.Address}
                                    onChange={inputHandler} required></textarea>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Contact Person Name</label>
                                <input type="text"
                                    name="ContactPerson"
                                    id=""
                                    className="form-control"
                                    value={customer.ContactPerson}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email"
                                    name="Email"
                                    id=""
                                    className="form-control"
                                    value={customer.Email}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number"
                                    name="PhoneNo"
                                    id=""
                                    className="form-control"
                                    value={customer.PhoneNo}
                                    onChange={inputHandler} required />
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={addCustomer}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomers