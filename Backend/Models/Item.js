const Mongoose = require("mongoose");

const ItemSchema = Mongoose.Schema(
    {
        Type : String,
        Name : String,
        ItemGroup: String,
        Unit : String,
        Dimensions : String,
        Weight : Number,
        Manufacturer : String,
        Brand : String,
        SellingPrice : Number,
        CostPrice : Number,
        Description : String,
        OpeningStock : Number,
        RecorderPoint : String,
        PreferredVendor : String
    }
)

const ItemModel = Mongoose.model("Items",ItemSchema)
module.exports = {ItemModel}