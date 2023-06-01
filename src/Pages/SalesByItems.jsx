import React from 'react'

const SalesByItems = () => {
    return (
        <div className='reports'>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Sales By Items</h3>
                    </div>

                    <a href="/reports" style={{ marginLeft: "50%",marginTop:"-5%" }}>Reports</a>

                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th scope="col">Ref No.</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Expected Delivery Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Samsung M 13</td>
                                <td>2023-05-01</td>
                                <td>Customer-1</td>
                                <td>2023-05-24</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>HP Laptop</td>
                                <td>2023-05-02</td>
                                <td>Customer-2</td>
                                <td>2023-05-20</td>
                            </tr>

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesByItems