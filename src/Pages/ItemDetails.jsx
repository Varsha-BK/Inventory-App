import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {

    const { id } = useParams()
    const [item, setItem] = useState(
        [
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
                PreferredVendor: "",
                Image: ""
            }
        ]
    )

    useEffect(
        () => {
            fetchItems()
        }
    )

    const fetchItems = () => {
        axios.post(`http://localhost:3001/inventory/items/${id}`)
            .then(
                (res) => {
                    setItem(res.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }

    return (
        <div className='inventory'>

            <div className="container py-3">
                <h3 style={{float:"left"}}>{item.Name}</h3>
                <a href="/inventory/items" style={{marginLeft:"35%"}}>Items</a>
                <div className="row py-3 px-3">
                    <div className="row g-3">

                        <table class="table">
                            <tbody>

                                <tr>
                                    <td>Item Name</td>
                                    <td>{item.Name}</td>
                                </tr>

                                <tr>
                                    <td>Unit</td>
                                    <td>{item.Unit}</td>
                                </tr>

                                <tr>
                                    <td>Dimensions</td>
                                    <td>{item.Dimensions}</td>
                                </tr>

                                <tr>
                                    <td>Weight</td>
                                    <td>{item.Weight}</td>
                                </tr>

                                <tr>
                                    <td>Manufacturer</td>
                                    <td>{item.Manufacturer}</td>
                                </tr>

                                <tr>
                                    <td>Brand</td>
                                    <td>{item.Brand}</td>
                                </tr>

                                <tr>
                                    <td>Selling Price</td>
                                    <td>{item.SellingPrice}</td>
                                </tr>

                                <tr>
                                    <td>Cost Price</td>
                                    <td>{item.CostPrice}</td>
                                </tr>

                                <tr>
                                    <td>Description</td>
                                    <td>{item.Description}</td>
                                </tr>

                                <tr>
                                    <td>Opening Stock</td>
                                    <td>{item.OpeningStock}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetails