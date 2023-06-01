const Mongoose = require("mongoose")

const CreditSchema = Mongoose.Schema(
    {
        VendorCreditNo : Number,
        VendorName : String,
        CreditNotes : String,
        OrderNumber : String,
        CreditDate : String
    }
)

const CreditModel = Mongoose.model("Credits",CreditSchema)
module.exports = {CreditModel}