const Mongoose = require("mongoose")

const PurchaseOrderSchema = Mongoose.Schema(
    {
        VendorName : String,
        Address : String,
        PurchaseOrder : String,
        Reference : String,
        Date : String,
        ExpectedDeliDate : String,
        ItemName : String,
        Amount : Number
    }
)

const PurchaseOrderModel = Mongoose.model("PurchaseOrders",PurchaseOrderSchema)
module.exports = {PurchaseOrderModel}