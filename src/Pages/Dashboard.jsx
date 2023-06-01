import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const Navigate = useNavigate()

    const items = () => {
        Navigate("/inventory/items")
    }

    const itemGroups = () => {
        Navigate("/inventory/item-groups")
    }

    const adjustment = () => {
        Navigate("/inventory/inventory-adj")
    }

    const salesorder = () => {
        Navigate("/sales/sales-order")
    }

    const invoice = () => {
        Navigate("/sales/invoices")
    }

    const reports = () => {
        Navigate("/reports")
    }

    return (
        <div className='dashboard'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-3">
                        <h3>Dashboard</h3>
                    </div>

                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={items} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Items</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}>Card subtitle</h6> */}
                                </div>
                            </div>


                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={itemGroups} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Item Groups</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}>Card subtitle</h6> */}
                                </div>
                            </div>


                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={adjustment} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Inventory Adjustments</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}>Card subtitle</h6> */}
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={salesorder} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Sales Order</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}>Card subtitle</h6> */}
                                </div>
                            </div>


                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={invoice} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Invoices</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}>Card subtitle</h6> */}
                                </div>
                            </div>


                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={reports} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Reports</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}>Card subtitle</h6> */}
                                </div>
                            </div>


                        </div>

                    </div>

                    

                    {/* <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  px-3 py-3">
                            <div class="card">
                                <div class="card-body">

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <h5 class="card-title">Sales Activity</h5>


                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 px-3 py-3">

                                            <div class="card" onClick={salesorder} style={{ cursor: "pointer" }}>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style={{ fontSize: "20px" }}>Sales Order</li>
                                                </ul>
                                            </div>

                                            <div class="card" onClick={salesorder} style={{ cursor: "pointer" }}>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style={{ fontSize: "20px" }}>Sales Order</li>
                                                </ul>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  px-3 py-3">
                            <div class="card" onClick={reports} style={{ cursor: "pointer" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: "center" }}>Reports</h5>
                                </div>
                            </div>


                        </div>

                    </div> */}

                </div>
            </div>
        </div>

    )
}

export default Dashboard