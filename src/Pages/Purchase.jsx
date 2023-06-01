import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Purchase = () => {
    return (
        <div className='purchase'>

        </div>
    )
}

export const Vendors = () => {

    const Navigate = useNavigate()

    const [vendor, setVendor] = useState(
        [
            {
                PrimaryContact: "",
                CompanyName: "",
                VendorName: "",
                VendorEmail: "",
                PhoneNo: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchDetails()
        }, []
    )

    const fetchDetails = () => {
        axios.post("http://localhost:3001/purchase/vendors")
            .then(
                (res) => {
                    setVendor(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }

    const newVendor = () => {
        Navigate("/purchase/vendors/new")
    }

    return (
        <div className='purchase'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>All Vendors</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newVendor}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Vendors
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">CONTACT NAME</th>
                                                <th scope="col">COMPANY NAME</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>

                                        {
                                            vendor.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>{value.PrimaryContact}</td>
                                                            <td>{value.CompanyName}</td>
                                                            <td>{value.VendorEmail}</td>
                                                            <td>{value.PhoneNo}</td>
                                                            <td>
                                                                <Link to={`/purchase/vendors/edit/${value._id}`} className="btn btn-success mx-2">Edit</Link>

                                                            </td>
                                                        </tr>
                                                    </tbody>

                                                }
                                            )
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PurchaseOrder = () => {

    const Navigate = useNavigate()

    const [order, setOrder] = useState(
        [
            {
                VendorName: "",
                Address: "",
                PurchaseOrder: "",
                Reference: "",
                Date: "",
                ExpectedDeliDate: ""
            }
        ]
    )

    const newPurchaseOrder = () => {
        Navigate("/purchase/purchase-order/new")
    }

    useEffect(
        () => {
            fetchOrders()
        }, []
    )

    const fetchOrders = () => {
        axios.post("http://localhost:3001/purchase/purchase-order")
            .then(
                (res) => {
                    setOrder(res.data)
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

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>All Purchase Orders</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newPurchaseOrder}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Purchase Orders
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">PURCHASE ORDER No.</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">REFERENCE</th>
                                                <th scope="col">VENDOR NAME</th>
                                            </tr>
                                        </thead>

                                        {
                                            order.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/purchase/purchase-order/${value._id}`}>{value.PurchaseOrder}</a>
                                                            </td>
                                                            <td>{value.Date}</td>
                                                            <td>{value.Reference}</td>
                                                            <td>{value.VendorName}</td>
                                                        </tr>
                                                    </tbody>

                                                }
                                            )
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BillsPayments = () => {

    const Navigate = useNavigate()

    const [bill, setBill] = useState(
        [
            {
                VendorName: "",
                Bill: "",
                OrderNumber: "",
                BillDate: "",
                DueDate: "",
                PaymentTerms: ""
            }
        ]
    )

    const newBill = () => {
        Navigate("/purchase/bills-payments/new")
    }

    useEffect(
        () => {
            fetchBills()
        }, []
    )

    const fetchBills = () => {
        axios.post("http://localhost:3001/purchase/bills-payments")
            .then(
                (res) => {
                    setBill(res.data)
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

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>All Bills</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newBill}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Bills
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">BILL#</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">REFERENCE</th>
                                                <th scope="col">VENDOR NAME</th>
                                                <th scope="col">DUE DATE</th>
                                            </tr>
                                        </thead>

                                        {
                                            bill.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/purchase/bills-payments/${value._id}`}>{value.Bill}</a>
                                                            </td>
                                                            <td>{value.BillDate}</td>
                                                            <td>{value.Reference}</td>
                                                            <td>{value.VendorName}</td>
                                                            <td>{value.DueDate}</td>
                                                        </tr>
                                                    </tbody>

                                                }
                                            )
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const VendorCredit = () => {

    const Navigate = useNavigate()

    const [credit, setCredit] = useState(
        [
            {
                VendorCreditNo: "",
                VendorName: "",
                CreditNotes: "",
                OrderNumber: "",
                CreditDate: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchCredits()
        }, []
    )

    const fetchCredits = () => {
        axios.post("http://localhost:3001/purchase/vendor-credit")
            .then(
                (res) => {
                    setCredit(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }

    const newCredit = () => {
        Navigate("/purchase/vendor-credit/new")
    }

    return (
        <div className='purchase'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>Vendor Credits</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newCredit}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Credits
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">VENDOR CREDIT No.</th>
                                                <th scope="col">ORDER NUMBER</th>
                                                <th scope="col">CREDIT DATE</th>
                                                <th scope="col">VENDOR NAME</th>
                                            </tr>
                                        </thead>

                                        {
                                            credit.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>{value.VendorCreditNo}</td>
                                                            <td>{value.OrderNumber}</td>
                                                            <td>{value.CreditDate}</td>
                                                            <td>{value.VendorName}</td>
                                                        </tr>
                                                    </tbody>

                                                }
                                            )
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
