import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Sales = () => {
    return (
        <div className='sales'>
        </div>
    )
}

export const Customers = () => {

    const Navigate = useNavigate()

    const [customer, setCustomer] = useState(
        [
            {
                Customer: "",
                Address: "",
                ContactPerson: "",
                Email: "",
                PhoneNo: ""
            }
        ])

    const newCustomer = () => {
        Navigate("/sales/customers/new")
    }

    useEffect(
        () => {
            fetchCustomers()
        }, []
    )

    const fetchCustomers = () => {
        axios.post("http://localhost:3001/sales/customers")
            .then(
                (res) => {
                    setCustomer(res.data)
                }
            )
    }

    return (
        <div className='sales'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Customers</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newCustomer}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Customers
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">CUSTOMER NAME</th>
                                                <th scope="col">CONTACT PERSON</th>
                                                <th scope="col">EMAIL</th>
                                                <th scope="col">PHONE NUMBER</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>

                                        {
                                            customer.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/sales/customers/${value._id}`}>{value.Customer}</a>
                                                            </td>
                                                            <td>{value.ContactPerson}</td>
                                                            <td>{value.Email}</td>
                                                            <td>{value.PhoneNo}</td>
                                                            <td>
                                                                <Link to={`/sales/customers/edit/${value._id}`} className="btn btn-success mx-2">Edit</Link>

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

export const SalesOrder = () => {

    const Navigate = useNavigate()
    const [order, setOrder] = useState(
        [
            {
                CustomerName: "",
                SalesOrder: "",
                Reference: "",
                OrderDate: "",
                PaymentTerms: "",
                DeliveryMethod: "",
                SalesPerson: "",
                ItemName: "",
                Quantity: ""
            }
        ])

    const newSalesOrder = () => {
        Navigate("/sales/sales-order/new")
    }

    useEffect(
        () => {
            fetchOrders()
        }, []
    )

    const fetchOrders = () => {
        axios.post("http://localhost:3001/sales/sales-order")
            .then(
                (res) => {
                    setOrder(res.data)
                }
            )

    }

    return (
        <div className='sales'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>All Sale Orders</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newSalesOrder}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Sales Orders
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">REFERENCE No.</th>
                                                <th scope="col">ORDER DATE</th>
                                                <th scope="col">CUSTOMER NAME</th>
                                                <th scope="col">ITEM NAME</th>

                                            </tr>
                                        </thead>

                                        {
                                            order.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/sales/sales-order/${value._id}`}>{value.Reference}</a>
                                                            </td>
                                                            <td>{value.OrderDate}</td>
                                                            <td>{value.CustomerName}</td>
                                                            <td>{value.ItemName}</td>
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



export const Packages = () => {

    const [packages, setPackage] = useState(
        [
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
        ]
    )

    const Navigate = useNavigate()

    const newPackage = () => {
        Navigate("/sales/packages/new")
    }

    useEffect(
        () => {
            fetchPackages()
        }
    )

    const fetchPackages = () => {
        axios.post("http://localhost:3001/sales/packages")
            .then(
                (res) => {
                    setPackage(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }

    const [order, setOrder] = useState(
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
        }, []
    )

    const fetchOrders = () => {
        axios.post("http://localhost:3001/sales/sales-order")
            .then(
                (res) => {
                    setOrder(res.data)
                }
            )

    }




    return (
        <div className='sales'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>Packages</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newPackage}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Packages
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">PACKAGE NO.</th>
                                                <th scope="col">SALES ORDER Ref No.</th>
                                            </tr>
                                        </thead>

                                        {
                                            packages.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/sales/packages/${value._id}`}>{value.PackageNo}</a>
                                                            </td>
                                                            <td>{value.SalesOrderRefNo}</td>
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

export const DeliveryChallans = () => {

    const Navigate = useNavigate()

    const [challan, setChallan] = useState(
        [
            {
                CustomerName: "",
                PlaceSupply: "",
                DeliveryChallan: "",
                Reference: "",
                ChallanDate: "",
                ChallanType: ""
            }
        ])

    useEffect(
        () => {
            fetchChallans()
        }
    )

    const fetchChallans = () => {
        axios.post("http://localhost:3001/sales/delivery-challans")
            .then(
                (res) => {
                    setChallan(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }

    const newChallan = () => {
        Navigate("/sales/delivery-challans/new")
    }

    return (
        <div className='sales'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>Delivery Challans</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newChallan}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Delivery Challans
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">CHALLAN#</th>
                                                <th scope="col">CHALLAN DATE</th>
                                                <th scope="col">CUSTOMER NAME</th>
                                                <th scope="col">PLACE OF SUPPLY</th>
                                            </tr>
                                        </thead>

                                        {
                                            challan.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/sales/delivery-challans/${value._id}`}>{value.DeliveryChallan}</a>
                                                            </td>
                                                            <td>{value.ChallanDate}</td>
                                                            <td>{value.CustomerName}</td>
                                                            <td>{value.PlaceSupply}</td>
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

export const Invoices = () => {

    const Navigate = useNavigate()

    const [inv, setInv] = useState(
        [
            {
                CustName: "",
                InvoiceNo: "",
                OrderNumber: "",
                InvoiceDate: "",
                DueDate: "",
                SalesPerson: ""
            }
        ])

    useEffect(
        () => {
            fetchInvoices()
        }, []
    )

    const fetchInvoices = () => {
        axios.post("http://localhost:3001/sales/invoices")
            .then(
                (res) => {
                    setInv(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )

    }

    const newInvoice = () => {
        Navigate("/sales/invoices/new")
    }



    return (
        <div className='sales'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>All Invoices</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newInvoice}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Invoices
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">INVOICE NO.</th>
                                                <th scope="col">CUSTOMER NAME</th>
                                                <th scope="col">INVOICE DATE</th>
                                                <th scope="col">DUE DATE</th>
                                            </tr>
                                        </thead>

                                        {
                                            inv.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/sales/invoices/${value._id}`}>{value.InvoiceNo}</a>
                                                            </td>
                                                            <td>{value.CustName}</td>
                                                            <td>{value.InvoiceDate}</td>
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

export const PaymentReceived = () => {

    const Navigate = useNavigate()

    const [payment, setPayment] = useState(
        [
            {
                PaymentNo: "",
                PaymentDate: "",
                PaymentMode: "",
                Customer: "",
                Amount: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchPayments()
        }
    )

    const fetchPayments = () => {
        axios.post("http://localhost:3001/sales/payment-received")
            .then(
                (res) => {
                    setPayment(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }

    const newPayment = () => {
        Navigate("/sales/payment-received/new")
    }

    return (
        <div className='sales'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>All Received Payments</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newPayment}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Received Payments
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">PAYMENT No.</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">CUSTOMER</th>
                                                <th scope="col">AMOUNT</th>
                                                <th scope="col">PAYMENT MODE</th>
                                            </tr>
                                        </thead>

                                        {
                                            payment.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>{value.PaymentNo}</td>
                                                            <td>{value.PaymentDate}</td>
                                                            <td>{value.Customer}</td>
                                                            <td>{value.Amount}</td>
                                                            <td>{value.PaymentMode}</td>
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

export const SalesReturns = () => {

    const Navigate = useNavigate()
    const [salesreturn, setSalesReturn] = useState(
        [
            {
                ReturnNo: "",
                SalesOrderRefNo: "",
                OrderDate: "",
                CustomerName: "",
                ItemName: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchReturns()
        }
    )

    const fetchReturns = () => {
        axios.post("http://localhost:3001/sales/sales-returns")
            .then(
                (res) => {
                    setSalesReturn(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }

    const newReturn = () => {
        Navigate("/sales/sales-returns/new")
    }

    return (
        <div className='sales'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>Sales Returns</h3>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={newReturn}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Sales Returns
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">RETURN No.</th>
                                                <th scope="col">SALES ORDER Ref No.</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">CUSTOMER</th>
                                                <th scope="col">ITEM NAME</th>
                                            </tr>
                                        </thead>

                                        {
                                            salesreturn.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>{value.ReturnNo}</td>
                                                            <td>{value.SalesOrderRefNo}</td>
                                                            <td>{value.OrderDate}</td>
                                                            <td>{value.CustomerName}</td>
                                                            <td>{value.ItemName}</td>
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

export const CreditNotes = () => {

    const Navigate = useNavigate()

    const addCredit = () => {
        Navigate("/sales/credit-notes/new")
    }

    const [creditNote, setCreditnote] = useState(
        [
            {
                CreditNoteNo: "",
                InvoiceNo: "",
                CreditDate: "",
                Reason: "",
                Customer: "",
                Amount: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchCreditNotes()
        }
    )

    const fetchCreditNotes = () => {
        axios.post("http://localhost:3001/sales/credit-notes")
            .then(
                (res) => {
                    setCreditnote(res.data)
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

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-3">
                        <h3>Credit Notes</h3>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={addCredit}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Credit Notes
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">


                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">CREDIT NOTE No.</th>
                                                <th scope="col">INVOICE No.</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">REASON</th>
                                                <th scope="col">CUSTOMER</th>
                                                <th scope="col">AMOUNT</th>
                                            </tr>
                                        </thead>

                                        {
                                            creditNote.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>{value.CreditNoteNo}</td>
                                                            <td>{value.InvoiceNo}</td>
                                                            <td>{value.CreditDate}</td>
                                                            <td>{value.Reason}</td>
                                                            <td>{value.Customer}</td>
                                                            <td>{value.Amount}</td>
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
