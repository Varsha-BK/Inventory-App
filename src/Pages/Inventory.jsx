import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export const Inventory = () => {
    return (
        <div className='inventory'>
            Inventory
        </div>
    )
}



export const Items = () => {

    const Navigate = useNavigate();

    const addItems = () => {
        Navigate("/inventory/items/new");
    }


    const [item, setItem] = useState([
        {
            Type: "",
            Name: "",
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
            PreferredVendor: "",
            Image: ""

        }
    ])

    useEffect(
        () => {
            fetchItems()
        }, []
    )

    const fetchItems = () => {
        axios.post("http://localhost:3001/inventory/items")
            .then(
                (res) => {
                    console.log(res.data);
                    setItem(res.data)
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
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>All Items</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={addItems}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Items
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME</th>
                                                <th scope="col">Manufacturer</th>
                                                <th scope="col">BRAND</th>
                                                <th scope="col">OPENING STOCK</th>
                                                <th scope="col">RECORDER POINT</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>

                                        {
                                            item.map(
                                                (value, key) => {
                                                    return <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href={`/inventory/items/${value._id}`}>{value.Name}</a>

                                                            </td>
                                                            <td>{value.Manufacturer}</td>
                                                            <td>{value.Brand}</td>
                                                            <td>{value.OpeningStock}</td>
                                                            <td>{value.RecorderPoint}</td>
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

export const ItemGroups = () => {

    const Navigate = useNavigate();

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
        }
    )

    const fetchGroups = () => {
        axios.post("http://localhost:3001/inventory/item-groups")
            .then(
                (res) => {
                    setGroup(res.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }


    const addItemGroup = () => {
        Navigate("/inventory/item-groups/new")
    }
    return (
        <div className='inventory'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>All Item Groups</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={addItemGroup}>+ New</button>
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Item Groups
                                </button>
                            </h2>

                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">

                                    <div className="row">

                                        {
                                            group.map(
                                                (value, key) => {
                                                    return <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 py-3">

                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h5 class="card-title">{value.GroupName}</h5>
                                                                <img src={`/Images/${value.Image}`} class="card-img-top" alt="..." height={"280px"} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                }
                                            )
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export const InventoryAdjustment = () => {

    const Navigate = useNavigate();

    const [adj, setAdj] = useState(
        [
            {
                Mode: "",
                ReferenceNo: "",
                AdjDate: "",
                Reason: "",
                Description: "",
                ItemDetails: "",
                FileUpload: ""
            }
        ])

    const addAdjustment = () => {
        Navigate("/inventory/inventory-adj/new")
    }

    useEffect(
        () => {
            fetchItems()
        }, []
    )

    const fetchItems = () => {
        axios.post("http://localhost:3001/inventory/inventory-adj")
            .then(
                (res) => {
                    console.log(res.data);
                    setAdj(res.data)
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

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Inventory Adjustments</h3>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={addAdjustment}>+ New</button>
                    </div>

                    <div class="accordion py-3 fixed" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>
                                    Inventory Adjustments
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-3">


                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">REFERENCE No.</th>
                                                    <th scope="col">DATE</th>
                                                    <th scope="col">REASON</th>
                                                    <th scope="col">DECRIPTION</th>

                                                </tr>
                                            </thead>

                                            {
                                                adj.map(
                                                    (value, key) => {
                                                        return <tbody>
                                                            <tr>
                                                                <td>
                                                                <a href={`/inventory/inventory-adj/${value._id}`}>{value.ReferenceNo}</a>
                                                                    </td>
                                                                <td>{value.AdjDate}</td>
                                                                <td>{value.Reason}</td>
                                                                <td>{value.Description}</td>
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
        </div>



    )
}
