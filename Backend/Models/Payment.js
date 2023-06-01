const Mongoose = require("mongoose")

const PaymentSchema = Mongoose.Schema(
    {
        PaymentNo : String,
        PaymentDate : String,
        PaymentMode : String,
        Customer : String,
        Amount : Number
    }
)

const PaymentModel = Mongoose.model("Payments",PaymentSchema)
module.exports = {PaymentModel}