const Mongoose = require("mongoose")

const ChallanSchema = Mongoose.Schema(
    {
        CustomerName : String,
        PlaceSupply : String,
        DeliveryChallan : String,
        Reference : String,
        ChallanDate : String,
        ChallanType : String
    }
)

const ChallanModel = Mongoose.model("Challans",ChallanSchema)
module.exports = {ChallanModel}
