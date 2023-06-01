const Mongoose = require("mongoose")

const SalesOrderSchema = Mongoose.Schema(
    {
        CustomerName : String,
        SalesOrder : String,
        Reference : Number,
        OrderDate : String,
        ShipmentDate : String,
        ExpectedDeliDate : String,
        PaymentTerms : String,
        SalesPerson : String,
        ItemName : String,
        Amount : Number
    }
)

const SalesOrderModel = Mongoose.model("SalesOrders",SalesOrderSchema)
module.exports = {SalesOrderModel}