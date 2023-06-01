import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPackages = () => {

    const Navigate = useNavigate()
    const [packages, setPackages] = useState(
        {
            PackageNo: "",
            ReferenceNo: "",
            CustomerName: "",
            SalesOrderRefNo: "",
            OrderDate: "",
            ShipmentDate: "",
            ExpectedDeliDate: "",
            PaymentTerms: "",
            SalesPerson: "",
            ItemName: "",
            Amount: ""
        }
    )

    const addPackage = () => {
        axios.post("http://localhost:3001/sales/packages/new",packages)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        setPackages(
                            {
                                PackageNo: "",
                                ReferenceNo: "",
                                CustomerName: "",
                                SalesOrderRefNo: "",
                                OrderDate: "",
                                ShipmentDate: "",
                                ExpectedDeliDate: "",
                                PaymentTerms: "",
                                SalesPerson: "",
                                ItemName: "",
                                Amount: ""
                            }
                        )
                        alert("New Package Added")
                        Navigate("/sales/packages")
                    }
                }
            )
    }


    const inputHandler = (event) => {
        const { name, value } = event.target

        setPackages(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const [salesorder, setOrder] = useState(
        [
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
        ]
    )

    useEffect(
        () => {
            fetchOrders()
        }
    )

    const fetchOrders = () => {
        axios.post("http://localhost:3001/sales/sales-order")
            .then(
                (res) => {
                    setOrder(res.data)
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
                <h3>New Package</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Package No.</label>
                                <input type="Number"
                                    name="PackageNo"
                                    id=""
                                    className="form-control"
                                    value={packages.PackageNo}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Sales Order Number#</label>
                                <select name="SalesOrderRefNo"
                                    id="SalesOrderRefNo"
                                    className='form-control '
                                    value={packages.SalesOrderRefNo}
                                    onChange={inputHandler} required>
                                    <option value=""></option>

                                    {
                                        salesorder.map(
                                            (value, key) => {
                                                return <option value={value.Reference}>{value.Reference}</option>

                                            }
                                        )
                                    }

                                </select>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={addPackage}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPackages