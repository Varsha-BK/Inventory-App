const Mongoose = require("mongoose")

const AdjustmentSchema = Mongoose.Schema(
    {
        Mode :String,
        ReferenceNo : Number,
        AdjDate : String,
        Reason : String,
        Description : String,
        ItemName : String,
        Amount : String,
    }
)

const AdjustmentModel = Mongoose.model("Adjustments",AdjustmentSchema)
module.exports = {AdjustmentModel}