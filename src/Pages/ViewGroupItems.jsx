import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewGroupItems = () => {

    const [groupItem, setGroupItem] = useState(
        [
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
        ]
    )


    const { id } = useParams()

    useEffect(
        () => {
            fetchGroupItems()
        }, []
    )

    const fetchGroupItems = async() => {
       await axios.post(`http://localhost:3001/inventory/item/groups/${id}`)
            .then(
                (res) => {
                    setGroupItem(res.data)
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

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                    </div>

                    <div class="accordion py-3" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ fontSize: "20px" }}>

                                </button>
                            </h2>

                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">

                                    <div className="row">

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Manufacturer</th>
                                                </tr>
                                            </thead>

                                            {
                                                groupItem.map(
                                                    (value, key) => {
                                                        return <tbody>
                                                            <tr>
                                                                <td>{value.Name}</td>
                                                                <td>{value.Manufacturer}</td>
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

export default ViewGroupItems