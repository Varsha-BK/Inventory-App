const Mongoose = require("mongoose")

const PackageSchema = Mongoose.Schema(
    {
        PackageNo : Number,
        ReferenceNo : Number,
        CustomerName : String,
        SalesOrderRefNo : String,
        OrderDate : String,
        ShipmentDate : String,
        ExpectedDeliDate : String,
        PaymentTerms : String,
        SalesPerson : String,
        ItemName : String,
        Amount : Number
    }
)

const PackageModel = Mongoose.model("Packages",PackageSchema)
module.exports = {PackageModel}