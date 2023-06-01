import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddItems = () => {

    const Navigate = useNavigate()


    const [item, setItem] = useState(
        {
            Type: "",
            Name: "",
            ItemGroup: "",
            Unit: null,
            Dimensions: null,
            Weight: null,
            Manufacturer: "",
            Brand: "",
            SellingPrice: null,
            CostPrice: null,
            Description: "",
            OpeningStock: null,
            RecorderPoint: "",
            PreferredVendor: ""
        }
    )

    const [group, setGroup] = useState(
        [
            {
                GroupName: "",
                Description: "",
                Image: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchGroups()
        }, []
    )

    const fetchGroups = () => {
        axios.post("http://localhost:3001/inventory/item-groups")
            .then(
                (res) => {
                    setGroup(res.data)
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

        setItem(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }



    const addItem = () => {
        console.log(item);
        axios.post("http://localhost:3001/inventory/items/new", item)
            .then(
                (res) => {
                    console.log(res.data);
                    if (res.data.Status === "Success") {
                        alert("Item Added Successfully")
                        setItem(
                            {
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
                            }
                        )
                        Navigate("/inventory/items")
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
        <div className='inventory'>
            <div className="container py-3">
                <h3>New Item</h3>
                <div className="row py-3 px-3">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                                <label htmlFor="" className="form-label">Type</label><br />
                                <select name="Type"
                                    id="Type"
                                    className='form-control'
                                    value={item.Type}
                                    onChange={inputHandler} required>
                                    <option value=""></option>
                                    <option value="Goods">Goods</option>
                                    <option value="Services">Services</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Item Name</label>
                                <input type="text"
                                    name="Name"
                                    id="" className="form-control"
                                    value={item.Name}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Item Group</label>
                                <select name="ItemGroup"
                                    id="ItemGroup"
                                    className='form-control'
                                    value={item.ItemGroup}
                                    onChange={inputHandler} required>
                                    <option value=""></option>

                                    {
                                        group.map(
                                            (value, key) => {
                                                return <option value={value.GroupName}>{value.GroupName}</option>
                                            }
                                        )
                                    }

                                </select>
                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Unit</label>
                                <input type="text"
                                    name="Unit"
                                    id=""
                                    className="form-control"
                                    value={item.Unit}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Dimension</label>
                                <input type="text"
                                    name="Dimensions"
                                    id=""
                                    className="form-control"
                                    value={item.Dimensions}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text"
                                    name="Weight"
                                    id=""
                                    className="form-control"
                                    value={item.Weight}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Manufacturer</label>
                                <input type="text"
                                    name="Manufacturer"
                                    id=""
                                    className="form-control"
                                    value={item.Manufacturer}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text"
                                    name="Brand"
                                    id=""
                                    className="form-control"
                                    value={item.Brand}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Selling Price</label>
                                <input type="text"
                                    name="SellingPrice"
                                    id=""
                                    className="form-control"
                                    value={item.SellingPrice}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Cost Price</label>
                                <input type="text"
                                    name="CostPrice"
                                    id=""
                                    className="form-control"
                                    value={item.CostPrice}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text"
                                    name="Description"
                                    id=""
                                    className="form-control"
                                    value={item.Description}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Opening Stock</label>
                                <input type="text"
                                    name="OpeningStock"
                                    id=""
                                    className="form-control"
                                    value={item.OpeningStock}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Recorder Point</label>
                                <input type="text"
                                    name="RecorderPoint"
                                    id=""
                                    className="form-control"
                                    value={item.RecorderPoint}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Preferred Vendor</label>
                                <input type="text"
                                    name="PreferredVendor"
                                    id=""
                                    className="form-control"
                                    value={item.PreferredVendor}
                                    onChange={inputHandler} required />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={addItem}>Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems