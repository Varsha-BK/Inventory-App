const Mongoose = require("mongoose")

const ItemGroupSchema = Mongoose.Schema(
    {
        GroupName : String,
        Description : String,
        Image : String
    }
)

const ItemGroupModel = Mongoose.model("ItemGroups",ItemGroupSchema)
module.exports = {ItemGroupModel}