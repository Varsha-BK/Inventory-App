import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddItemGroup = () => {

    const Navigate = useNavigate()

    const [GroupName, setGroupname] = useState("")
    const [Description, setDescription] = useState("")
    const [Image, setImage] = useState("")
    const setMessage = useState("")

    const onChangeFile = (e) => {
        setImage(e.target.files[0])
    }

    const changeOnClick = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("GroupName",GroupName)
        formData.append("Description",Description)
        formData.append("Image",Image)
    
        axios.post("http://localhost:3001/inventory/item-groups/new",formData)
        .then(
            (res) => {
                if(res.data.Status==="Success"){
                    alert("New Item Group Added Successfully")
                    setMessage(res.data)
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
                <h3 style={{float:"left"}}>New Item Group</h3>
                <a href="/inventory/item-groups" style={{marginLeft:"250px"}}>Iterm Groups</a>
                <div className="row py-3 px-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                        <div className="row g-3">

                            <form onSubmit={changeOnClick} encType="multipart/form-data">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Item Group Name</label>
                                    <input type="text"
                                        name="GroupName"
                                        id=""
                                        className="form-control"
                                        value={GroupName}
                                        onChange={(e) => setGroupname(e.target.value)} required/>
                                </div>


                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <input type="text"
                                        name="Description"
                                        id=""
                                        className="form-control"
                                        value={Description}
                                        onChange={(e) => setDescription(e.target.value)} required/>
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Image / Document</label>
                                    <input type="file"
                                        filename="Image"
                                        id=""
                                        className="form-control"
                                        defaultValue={Image}
                                        onChange={onChangeFile} required/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary">Add Item Group</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItemGroup