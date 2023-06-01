const Mongoose = require("mongoose")

const CreditNoteSchema = Mongoose.Schema(
    {
        CreditNoteNo : Number,
        InvoiceNo : Number,
        CreditDate : String,
        Reason : String,
        Customer : String,
        Amount : Number
    }
)

const CreditNoteModel = Mongoose.model("Creditnotes",CreditNoteSchema)
module.exports = {CreditNoteModel}