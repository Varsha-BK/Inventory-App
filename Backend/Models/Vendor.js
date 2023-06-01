const Mongoose = require("mongoose")

const VendorSchema = Mongoose.Schema(
    {
        PrimaryContact : String,
        CompanyName : String,
        VendorName : String,
        VendorEmail : String,
        PhoneNo : Number
    }
)

const VendorModel = Mongoose.model("Vendors",VendorSchema)
module.exports = { VendorModel }