import React from 'react'

const Reports = () => {
  return (
    <div className='reports'>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-3">
            <h3>Reports</h3>
          </div>
          <div className="row">
            <div className="col col 12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <h4>Sales</h4>
              <a href="/reports/salesitems">Sale by Item/Customers</a><br/>
              {/* <a href="/reports/salescustomer">Sale by Customer</a> */}
            </div>

            <div className="col col 12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <h4>Inventory</h4>
              <a href="/reports/inventorysummary">Inventory Summary</a><br />
              <a href="/reports/inventoryaging">Inventory Aging Summary</a><br />
              <a href="/reports/productsales">Product Sales Report</a>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Reports