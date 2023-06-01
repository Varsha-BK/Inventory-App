const Mongoose = require("mongoose")

const SalesReturnSchema = Mongoose.Schema(
    {
        ReturnNo : Number,
        SalesOrderRefNo : Number, 
        OrderDate : String,
        CustomerName : String,
        ItemName : String
    }
)

const SalesReturnModel = Mongoose.model("SalesReturns",SalesReturnSchema)
module.exports = {SalesReturnModel}