import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCreditNote = () => {

    const Navigate = useNavigate()

    const [creditNote,setCreditnote] = useState(
        {
            CreditNoteNo : "",
            InvoiceNo : "",
            CreditDate : "",
            Reason : "",
            Customer : "",
            Amount : ""    
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target;

        setCreditnote(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const addCreditNote = () => {
        axios.post("http://localhost:3001/sales/credit-notes/new",creditNote)
        .then((
            (res) => {
                if(res.data.Status==="Success"){
                    setCreditnote({
                        CreditNoteNo : "",
                        InvoiceNo : "",
                        CreditDate : "",
                        Reason : "",
                        Customer : "",
                        Amount : ""                
                    })
                    alert("New Credit Note Added")
                    Navigate("/sales/credit-notes")
                }

            }
        ))
    }

  return (
    <div className='sales'>

    <div className="container py-3">
        <h3>New Credit Note</h3>
        <div className="row py-3 px-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{ fontSize: "18px", padding: "10px" }}>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Credit No.</label>
                        <input type="number"
                            name="CreditNoteNo"
                            id=""
                            className="form-control"
                            value={creditNote.CreditNoteNo}
                            onChange={inputHandler} required/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Invoice No.</label>
                        <input type="text"
                            name="InvoiceNo"
                            id=""
                            className="form-control"
                            value={creditNote.InvoiceNo}
                            onChange={inputHandler} required/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Date</label>
                        <input type="date"
                            name="CreditDate"
                            id=""
                            className="form-control"
                            value={creditNote.CreditDate}
                            onChange={inputHandler} required/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Reason</label>
                        <textarea name="Reason"
                                    id=""
                                    cols="30" rows="3"
                                    className="form-control"
                                    value={creditNote.Reason}
                                    onChange={inputHandler}
                                    required></textarea>

                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Customer</label>
                        <input type="text"
                            name="Customer"
                            id=""
                            className="form-control"
                            value={creditNote.Customer} 
                            onChange={inputHandler} required/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Amount</label>
                        <input type="number"
                            name="Amount"
                            id=""
                            className="form-control"
                            value={creditNote.Amount}
                            onChange={inputHandler} required/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={addCreditNote}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  )
}

export default AddCreditNote