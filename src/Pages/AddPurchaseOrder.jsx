import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPurchaseOrder = () => {

    const Navigate = useNavigate()
    const [porder, setPOrder] = useState(
        {
            VendorName: "",
            Address: "",
            PurchaseOrder: "",
            Reference: "",
            Date: "",
            ExpectedDeliDate: "",
            ItemName: "",
            Amount: ""
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

        setPOrder(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const addOrder = () => {
        axios.post("http://localhost:3001/purchase/purchase-order/new", porder)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        alert("Purchase Order Added Successfully")
                        setPOrder(
                            {
                                VendorName: "",
                                Address: "",
                                PurchaseOrder: "",
                                Reference: "",
                                Date: "",
                                ExpectedDeliDate: "",
                                ItemName: "",
                                Amount: ""
                            }
                        )
                        Navigate("/purchase/purchase-order")
                    }
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

            <div className="container py-3">
                <h3>New Purchase Order</h3>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Purchase Order No.</label>
                                <input type="number"
                                    name="PurchaseOrder"
                                    id=""
                                    className="form-control"
                                    value={porder.PurchaseOrder}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vendor Name</label>
                                <input type="text"
                                    name="VendorName"
                                    id=""
                                    className="form-control"
                                    value={porder.VendorName}
                                    onChange={inputHandler}required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Delivery Address</label>
                                <textarea name="Address"
                                    id="" cols="30" rows="2"
                                    className="form-control"
                                    value={porder.Address}
                                    onChange={inputHandler}required>
                                </textarea>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Order Date</label>
                                <input type="date"
                                    name="Date"
                                    id=""
                                    className="form-control"
                                    value={porder.Date}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reference</label>
                                <input type="text"
                                    name="Reference"
                                    id=""
                                    className="form-control"
                                    value={porder.Reference}
                                    onChange={inputHandler} required/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Expected Delivery Date</label>
                                <input type="date"
                                    name="ExpectedDeliDate"
                                    id=""
                                    className="form-control"
                                    value={porder.ExpectedDeliDate}
                                    onChange={inputHandler}required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Item Name</label>
                                <select name="ItemName"
                                    id="ItemName"
                                    className='form-control'
                                    value={porder.ItemName}
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
                                <input type="number"
                                    name="Amount"
                                    id=""
                                    className="form-control"
                                    value={porder.Amount}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={addOrder} >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPurchaseOrder