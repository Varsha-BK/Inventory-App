import React from 'react'

const SalesByCustomer = () => {
    return (
        <div className='reports'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Sales By Customer</h3>
                    </div>

                    <a href="/reports" style={{ marginLeft: "50%",marginTop:"-5%" }}>Reports</a>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">INVOICE COUNT</th>
                                <th scope="col">SALES</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesByCustomer