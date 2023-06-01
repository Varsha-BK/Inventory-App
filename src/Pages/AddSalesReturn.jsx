import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSalesReturn = () => {

  const Navigate = useNavigate()
  const [salesreturn, setSalesreturn] = useState(
    {
      ReturnNo: "",
      SalesOrderRefNo: "",
      OrderDate: "",
      CustomerName: "",
      ItemName: ""
    }
  )



  const inputHandler = (event) => {
    const { name, value } = event.target

    setSalesreturn(
      (previousState) => ({
        ...previousState,
        [name]: value
      })
    )
  }

  const addreturn = () => {
    axios.post("http://localhost:3001/sales/sales-returns/new",salesreturn)
      .then(
        (res) => {
          if (res.data.Status === "Success") {
            alert("New Sales Return Added")
            setSalesreturn({
              ReturnNo: "",
              SalesOrderRefNo: "",
              OrderDate: "",
              CustomerName: "",
              ItemName: ""
            })
          }
          Navigate("/sales/sales-returns")
        }
      )
      .catch(
        (err) => {
          console.log(err)
        }
      )
  }

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
        PreferredVendor: ""
      }
    ]
  )

  useEffect(
    () => {
      fetchItems()
    }
  )

  const fetchItems = () => {
    axios.post("http://localhost:3001/inventory/items")
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
    <div className='sales'>

      <div className="container py-3">
        <h3>New Sales Return</h3>
        <div className="row py-3 px-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" style={{ fontSize: "18px", padding: "10px" }}>
            <div className="row g-3">

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Retun No.</label>
                <input type="number"
                  name="ReturnNo"
                  id=""
                  className="form-control"
                  value={salesreturn.ReturnNo}
                  onChange={inputHandler}
                  required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Sales Order Ref. No.</label>
                <input type="number"
                  name="SalesOrderRefNo"
                  id=""
                  className="form-control"
                  value={salesreturn.SalesOrderRefNo}
                  onChange={inputHandler}
                  required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Date</label>
                <input type="date"
                  name="OrderDate"
                  id=""
                  className="form-control"
                  value={salesreturn.OrderDate}
                  onChange={inputHandler}
                  required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Customer Name</label>
                <input type="text"
                  name="CustomerName"
                  id=""
                  className="form-control"
                  value={salesreturn.CustomerName}
                  onChange={inputHandler}
                  required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Item Name</label>
                <select name="ItemName"
                  id="ItemName"
                  className='form-control '
                  value={salesreturn.ItemName}
                  onChange={inputHandler} required>
                  <option value=""></option>

                  {
                    item.map(
                      (value, key) => {
                        return <option value={value.Name}>{value.Name}</option>

                      }
                    )
                  }

                </select>

              </div>


              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={addreturn}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default AddSalesReturn