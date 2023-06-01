const Mongoose = require("mongoose")

const CustomerSchema = Mongoose.Schema(
    {
        Customer : String,
        Address : String,
        ContactPerson : String,
        Email : String,
        PhoneNo : Number
    }
)

const CustomerModel = Mongoose.model("Customers",CustomerSchema)
module.exports = {CustomerModel}