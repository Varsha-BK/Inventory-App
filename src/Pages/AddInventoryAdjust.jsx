import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'

const AddInventoryAdjust = () => {

  const Navigate = useNavigate()
  const [adj, setAdj] = useState(
    {
      Mode: "",
      ReferenceNo: "",
      Date: "",
      Reason: "",
      Description: "",
      ItemName: "",
      Amount: "",
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

    setAdj(
      (previousState) => ({
        ...previousState,
        [name]: value
      })
    )
  }

  const addAdjustment = () => {
    axios.post("http://localhost:3001/inventory/inventory-adj/new", adj)
      .then(
        (res) => {
          console.log(res.data);
          if (res.data.Status === "Success") {
            setAdj(
              {
                Mode: "",
                ReferenceNo: "",
                AdjDate: "",
                Reason: "",
                Description: "",
                ItemName: "",
                Amount: ""
              }
            )
            alert("New Adjustment Added Successfully")
            Navigate("/inventory/inventory-adj")
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
        <h3>New Adjustments</h3>
        <div className="row py-3 px-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                <label htmlFor="" className="form-label">Mode of Adjustment</label><br />
                <select name="Mode"
                                    id="Mode"
                                    className='form-control'
                                    value={adj.Mode}
                                    onChange={inputHandler} required>
                                    <option value=""></option>
                                    <option value="Quantity">Quantity</option>
                                    <option value="Value">Value</option>
                                </select>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Reference No.</label>
                <input type="number"
                  name="ReferenceNo"
                  id=""
                  className="form-control"
                  value={adj.ReferenceNo}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Date</label>
                <input type="date"
                  name="AdjDate"
                  id=""
                  className="form-control"
                  value={adj.adjD}
                  onChange={inputHandler} required/>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Reason</label>
                <textarea name="Reason"
                  id=""
                  cols="30" rows="2"
                  className="form-control"
                  value={adj.Reason}
                  onChange={inputHandler}required></textarea>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Description</label>
                <textarea name="Description"
                  id="" cols="30" rows="2"
                  className="form-control"
                  value={adj.Description}
                  onChange={inputHandler}required></textarea>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Item Name</label>
                <select name="ItemName"
                  id="ItemName"
                  className='form-control'
                  value={adj.ItemName}
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
                <input type="text"
                  name="Amount"
                  id=""
                  className="form-control"
                  value={adj.Amount}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={addAdjustment}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddInventoryAdjust