import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSalesOrder = () => {

  const Navigate = useNavigate()
  const [order, setOrder] = useState(
    {
      CustomerName: "",
      SalesOrder: "",
      Reference: "",
      OrderDate: "",
      ShipmentDate : "",
      ExpectedDeliDate : "",
      PaymentTerms: "",
      SalesPerson: "",
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

    setOrder(
      (previousState) => ({
        ...previousState,
        [name]: value
      })
    )
  }

  const addOrder = () => {
    axios.post("http://localhost:3001/sales/sales-order/new", order)
      .then(
        (res) => {
          if (res.data.Status === "Success") {
            alert("New Sales Order Added Successfully")
            setOrder(
              {
                CustomerName: "",
                SalesOrder: "",
                Reference: "",
                OrderDate: "",
                ShipmentDate : "",
                ExpectedDeliDate : "",
                PaymentTerms: "",
                SalesPerson: "",
                ItemName: "",
                Amount: ""
              }
            )
            Navigate("/sales/sales-order")
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
    <div className='sales'>

      <div className="container py-3">
        <h3>New Sales Order</h3>
        <div className="row py-3 px-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
            <div className="row g-3">

            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Reference No.</label>
                <input type="number"
                  name="Reference"
                  id=""
                  className="form-control"
                  value={order.Reference}
                  onChange={inputHandler} required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Sales Order#</label>
                <input type="text"
                  name="SalesOrder"
                  id=""
                  className="form-control"
                  value={order.SalesOrder}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Sales Order Date</label>
                <input type="date"
                  name="OrderDate"
                  id=""
                  className="form-control"
                  value={order.OrderDate}
                  onChange={inputHandler} required/>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Shipment Date</label>
                <input type="date"
                  name="ShipmentDate"
                  id=""
                  className="form-control"
                  value={order.ShipmentDate}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Expected Delivery Date</label>
                <input type="date"
                  name="ExpectedDeliDate"
                  id=""
                  className="form-control"
                  value={order.ExpectedDeliDate}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Customer Name</label>
                <input type="text"
                  name="CustomerName"
                  id=""
                  className="form-control"
                  value={order.CustomerName}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Payment</label>
                <input type="text"
                  name="PaymentTerms"
                  id=""
                  className="form-control"
                  value={order.PaymentTerms}
                  onChange={inputHandler}required />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Sales Person</label>
                <input type="text"
                  name="SalesPerson"
                  id=""
                  className="form-control"
                  value={order.SalesPerson}
                  onChange={inputHandler}required />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Item Name</label>
                <select name="ItemName"
                  id="ItemName"
                  className='form-control'
                  value={order.ItemName}
                  onChange={inputHandler} required>
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
                  value={order.Amount}
                  onChange={inputHandler} required/>
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

export default AddSalesOrder