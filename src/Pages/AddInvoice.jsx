import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddInvoice = () => {

    const Navigate = useNavigate()
    const [inv, setInv] = useState(
        {
            CustName: "",
            InvoiceNo: "",
            OrderNumber: "",
            InvoiceDate: "",
            DueDate: "",
            SalesPerson: "",
            ItemName:"",
            Amount:""
        }
    )


    const [items, setItems] = useState([{
        Type: "",
        Name: "",
        ItemGroup: "",
        Unit: "",
        Dimensions: "",
        Weight: "",
        Manufacturer: "",
        Brand: "",
        SellingPrice: "",
        CostPrice: "",
        Description: "",
        OpeningStock: "",
        RecorderPoint: "",
        PreferredVendor: "",
        Image: ""
    }])


    useEffect(
        () => {
            fetchItems()
        }, []
    )

    const fetchItems = () => {
        axios.post("http://localhost:3001/inventory/items")
            .then(
                (res) => {
                    setItems(res.data)
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

        setInv(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const newInvoice = () => {
        axios.post("http://localhost:3001/sales/invoices/new", inv)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        alert("Invoice Added")
                        setInv(
                            {
                                CustName: "",
                                InvoiceNo: "",
                                OrderNumber: "",
                                InvoiceDate: "",
                                DueDate: "",
                                SalesPerson: "",
                                ItemName: "",
                                Amount:""
                            }
                        )
                        Navigate("/sales/invoices")
                    }
                }
            )
    }


    return (
        <div className='sales'>

            <div className="container py-3">
                <h3>New Invoice</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Customer Name</label>
                                <input type="text"
                                    name="CustName"
                                    id=""
                                    className="form-control"
                                    value={inv.CustName}
                                    onChange={inputHandler}required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Invoice#</label>
                                <input type="Number"
                                    name="InvoiceNo"
                                    id=""
                                    className="form-control"
                                    value={inv.InvoiceNo}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Order Number#</label>
                                <input type="number"
                                    name="OrderNumber"
                                    id=""
                                    className="form-control"
                                    value={inv.OrderNumber}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Invoice Date</label>
                                <input type="date"
                                    name="InvoiceDate"
                                    id=""
                                    className="form-control"
                                    value={inv.InvoiceDate}
                                    onChange={inputHandler} required/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Due Date</label>
                                <input type="date"
                                    name="DueDate"
                                    id=""
                                    className="form-control"
                                    value={inv.DueDate}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Sales Person</label>
                                <input type="text"
                                    name="SalesPerson"
                                    id=""
                                    className="form-control"
                                    value={inv.SalesPerson}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Item Name</label>
                                <select name="ItemName"
                                    id="ItemName"
                                    className='form-control'
                                    value={inv.ItemName}
                                    onChange={inputHandler}required>
                                    <option value=""></option>

                                    {
                                        items.map(
                                            (value, key) => {
                                                return <option value={value.Name}>{value.Name}</option>
                                            }
                                        )
                                    }

                                </select>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Amount</label>
                                <input type="Number"
                                    name="Amount"
                                    id=""
                                    className="form-control"
                                    value={inv.Amount}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={newInvoice}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInvoice