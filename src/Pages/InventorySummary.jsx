import React from 'react'

const InventorySummary = () => {
    return (
        <div className='reports'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Inventory Summary</h3>
                    </div>

                    <a href="/reports" style={{ marginLeft: "50%",marginTop:"-5%" }}>Reports</a>

                    <table>
                        <thead>
                            <tr style={{fontSize:"17px"}}>
                                <th scope="col">QUANTITY IN HAND</th>
                                <th scope="col">QUANTITY TO BE RECEIVED</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr style={{fontSize:"17px"}}>
                                <td>28000</td>
                                <td>24575</td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default InventorySummary