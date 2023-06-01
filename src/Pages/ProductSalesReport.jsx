import React from 'react'

const ProductSalesReport = () => {
    return (
        <div className='reports'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Product Sales Report</h3>
                    </div>

                    <a href="/reports" style={{ marginLeft: "50%",marginTop:"-5%" }}>Reports</a>

                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th scope="col">ITEM NAME</th>
                                <th scope="col">No. of Order Placed/ Sold</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Samsung M 13</td>
                                <td>2</td>
                            </tr>

                            <tr>
                                <td>HP Laptop</td>
                                <td>2</td>
                            </tr>

                            <tr>
                                <td>School Bag</td>
                                <td>0</td>
                            </tr>

                            <tr>
                                <td>One Plus 11</td>
                                <td>1</td>
                            </tr>



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductSalesReport