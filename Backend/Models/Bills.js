const Mongoose = require("mongoose")

const BillSchema = Mongoose.Schema(
    {
        VendorName : String,
        Bill : String,
        OrderNumber : String,
        BillDate : String,
        DueDate : String,
        PaymentTerms : String,
        Reference : String,
        Status : String
    }
)

const BillModel = Mongoose.model("Bills",BillSchema)
module.exports = {BillModel}