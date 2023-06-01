const Mongoose = require("mongoose")

const InvoiceSchema = Mongoose.Schema(
    {
        CustName : String,
        InvoiceNo : String,
        OrderNumber : String,
        InvoiceDate : String,
        DueDate : String,
        SalesPerson : String,
        Reference : String,
        ItemName : String,
        Amount : Number
    }
)

const InvoiceModel = Mongoose.model("Invoices",InvoiceSchema)
module.exports = {InvoiceModel}