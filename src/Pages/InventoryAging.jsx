import React from 'react'

const InventoryAging = () => {
    return (
        <div className='reports'>

            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 py-3">
                        <h3>Inventory Aging Summary</h3>
                    </div>

                    <a href="/reports" style={{ marginLeft: "50%", marginTop: "-5%" }}>Reports</a>


                    <table class="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <td>More than 30 Days</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Within 30 Days</td>
                            </tr>
                            <tr>
                                <td>With in Last Week</td>
                                <td>Samsung M 13</td>
                                <td>One Plus 11</td>
                                <td>Lenovo</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default InventoryAging