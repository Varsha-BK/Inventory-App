var Express = require("express");
var Mongoose = require("mongoose");
var Bodyparser = require("body-parser");
var Cors = require("cors");

const multer = require("multer")

const { ItemModel } = require("./Models/Item");
const { AdjustmentModel } = require("./Models/InvnAdjustment");
const { CustomerModel } = require("./Models/Customer");
const { SalesOrderModel } = require("./Models/SalesOrder");
const { InvoiceModel } = require("./Models/Invoice");
const { VendorModel } = require("./Models/Vendor");
const { PurchaseOrderModel } = require("./Models/PurchaseOrder");
const { BillModel } = require("./Models/Bills");
const { ChallanModel } = require("./Models/Challan");
const { CreditModel } = require("./Models/VendorCredit");
const { ItemGroupModel } = require("./Models/ItemGroup");
const { PackageModel } = require("./Models/Packages");
const { SalesReturnModel } = require("./Models/SalesReturns");
const { PaymentModel } = require("./Models/Payment");
const { CreditNoteModel } = require("./Models/CreditNotes");

var app = new Express();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,"../public/Images")
    },
    filename:(req,file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

app.use(Express.json())
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({ extended: false }))
app.use(Cors())


app.use(Express.static("public"));



Mongoose.set("strictQuery", true);
Mongoose.connect("mongodb+srv://varsha:varsha95@cluster0.etbicey.mongodb.net/InventoryDB?retryWrites=true&w=majority",
    { useNewURlParser: true })


app.get("/", (req, res) => {
    res.send("welcome");
})



// Add Item APi
app.post("/inventory/items/new", async (req, res) => {
    const newItem = new ItemModel(req.body)
    await newItem.save()

    try {
        res.json({ "Status": "Success", "Data": newItem })
    } catch (error) {
        res.json({ "Status": "Error", "Error": error })
    }
})


// Add New Item API 

// app.post("/inventory/items/new",upload.single("Image"),async(req,res) => {
//     var newItem = new ItemModel({
//         Type : req.body.Type,
//         Name : req.body.Name,
//         Unit : req.body.Unit,
//         Dimensions : req.body.Dimensions,
//         Weight : req.body.Weight,
//         Manufacturer : req.body.Manufacturer,
//         Brand : req.body.Brand,
//         SellingPrice : req.body.SellingPrice,
//         CostPrice : req.body.CostPrice,
//         Description : req.body.Description,
//         OpeningStock : req.body.OpeningStock,
//         RecorderPoint : req.body.RecorderPoint,
//         PreferredVendor : req.body.PreferredVendor,
//         Image : req.file.originalname
//     })
//     await newItem.save()
//     try {
//         res.json({"Status":"Success","Data":newItem})
//     } catch (error) {
//         res.json({"Status":"Error","Error":error})
//     }
// })


// View All Items Api
app.post("/inventory/items", async (req, res) => {
    try {
        var result = await ItemModel.find()
        res.send(result)
    } catch (err) {
        res.Status(500).send(err)
    }

})


// View Single Item Api
app.post("/inventory/items/:id", async (req, res) => {
    try {
        var id = req.params.id;
        var result = await ItemModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.Status(500).send(err)
    }

});



// Add Inventory Adjustment API

app.post("/inventory/inventory-adj/new", async (req, res) => {
    const newAdj = new AdjustmentModel(req.body)
    await newAdj.save()

    try {
        res.json({ "Status": "Success", "Data": newAdj })
    } catch (error) {
        res.json({ "Status": "Error", "Error": error })
    }
})



// View All Inventory Adjustment API

app.post("/inventory/inventory-adj",async(req,res) => {
    try {
        var result = await AdjustmentModel.find()
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})


// View Single Adjustment API

app.post("/inventory/inventory-adj/:id",async(req,res) => {
    try {
        var id = req.params.id;
        var result = await AdjustmentModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.Status(500).send(err)
    }
})



// Add new Customer API

app.post("/sales/customers/new", async (req, res) => {
    const newCustomer = new CustomerModel(req.body);
    await newCustomer.save()

    try {
        res.json({ "Status": "Success", "Data": newCustomer })
    } catch (err) {
        res.json({ "Status": "Error", "Error": err })
    }
})



// View All Customers API

app.post("/sales/customers", async (req, res) => {
    try {
        var customers = await CustomerModel.find()
        res.send(customers)
    } catch (err) {
        res.Status(500).send(err)
    }
})



// View Single Customer API

app.post("/sales/customers/:id", async (req, res) => {
    try {
        var id = req.params.id
        var result = await CustomerModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.status(500).send(err)

    }
})



// Edit Customer API

app.post("/sales/customers/edit/:id", async (req, res) => {
    try {
        var id = req.params.id
        var data = req.body
        await CustomerModel.findByIdAndUpdate({ _id: id },data)
        res.json({"Status":"Success","Data":data})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// Add new Sales Order API

app.post("/sales/sales-order/new",async(req,res) => {
    const newOrder = new SalesOrderModel(req.body)
    await newOrder.save()
    try {
        res.json({"Status":"Success","Data":newOrder})
    } catch (err) {
        res.json({"Status":"Error","Error":err})
    }
})



// View All Sales Order API

app.post("/sales/sales-order",async(req,res) => {
    try {
        var orders = await SalesOrderModel.find()
        res.send(orders)
    } catch (error) {
        res.Status(500).send(error)
    }
})

// View Single Sales Order

app.post("/sales/sales-order/:id",async(req,res) => {
    try {
        var id = req.params.id
        var result = await SalesOrderModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }

})



// Add New Invoice API

app.post("/sales/invoices/new",async(req,res) => {
    const newInvoice = new InvoiceModel(req.body)
    await newInvoice.save()
    try {
        res.json({"Status":"Success","Data":newInvoice})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// View All Invoices

app.post("/sales/invoices",async(req,res) => {
    try {
       var invoices = await InvoiceModel.find() 
       res.send(invoices)
    } catch (error) {
        res.Status(500).send(error)
    }
})


// View Single Invoice

app.post("/sales/invoices/:id",async(req,res) => {
    try {
        var id = req.params.id
        var result = await InvoiceModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})



// Add New Vendor API

app.post("/purchase/vendors/new",async(req,res) => {
    const newVendor = new VendorModel(req.body)
    await newVendor.save()

    try {
        res.json({"Status":"Success","Data":newVendor})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// View All Vendors API

app.post("/purchase/vendors",async(req,res) => {
    const vendors = await VendorModel.find()

    try {
        res.send(vendors)
    } catch (error) {
        res.Status(500).send(error)
    }
})



// View A Sinlge Vendor API

app.post("/purchase/vendors/:id",async(req,res) => {
    try {
        var id = req.params.id
        var result = await VendorModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})



// Edit Vendor API

app.post("/purchase/vendors/edit/:id", async (req, res) => {
    try {
        var id = req.params.id
        var data = req.body
        await VendorModel.findByIdAndUpdate({ _id: id },data)
        res.json({"Status":"Success","Data":data})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// Add New Purchase Order API

app.post("/purchase/purchase-order/new",async(req,res) => {
    const newPurOrder = new PurchaseOrderModel(req.body)
    await newPurOrder.save()

    try {
        res.json({"Status":"Success","Data":newPurOrder})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// View All Purchase Order API

app.post("/purchase/purchase-order",async(req,res) => {
    const purOrders = await PurchaseOrderModel.find()
    try {
        res.send(purOrders)
    } catch (error) {
        res.status(500).send(error)
    }
})

// View Single Purchase Order

app.post("/purchase/purchase-order/:id",async(req,res) => {
    try {
        var id = req.params.id
        var result = await PurchaseOrderModel.findById({ _id: id })
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})



// Add New Bill API

app.post("/purchase/bills-payments/new",async(req,res) => {
    const newBill = new BillModel(req.body)
    await newBill.save()

    try {
        res.json({"Status":"Success","Data":newBill})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// View All Bills

app.post("/purchase/bills-payments",async(req,res) => {
    const bills = await BillModel.find()
    try {
       res.send(bills) 
    } catch (error) {
        res.status(500).send(error)
    }
})

// View Single Bill

app.post("/purchase/bills-payments/:id",async(req,res) => {
    try {
        var id = req.params.id
        var result = await BillModel.findById({ _id: id })
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }

})



// Add New Delivery Challan API

app.post("/sales/delivery-challans/new",async(req,res) => {
    var newChallan = new ChallanModel(req.body)
    await newChallan.save()

    try {
        res.json({"Status":"Success","Data":newChallan})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// View All Challans API

app.post("/sales/delivery-challans",async(req,res) => {
    try {
        var challans = await ChallanModel.find() 
       res.send(challans)
    } catch (error) {
        res.status(500).send(error)
    }
})


// View Single Challan API

app.post("/sales/delivery-challans/:id",async(req,res) => {
    try {
        var id = req.params.id
        var result = await ChallanModel.findById({ _id: id })
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})



// Add New Vendor Credit API

app.post("/purchase/vendor-credit/new",async(req,res) => {
    var newCredit = new CreditModel(req.body)
    await newCredit.save()
    try {
        res.json({"Status":"Success","Data":newCredit})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})


// View All Credit Notes

app.post("/purchase/vendor-credit",async(req,res) => {
    try {
       var credits = await CreditModel.find() 
       res.send(credits)
    } catch (error) {
        res.status(500).send(error)
    }
})



// Add New Item Group API

app.post("/inventory/item-groups/new",upload.single("Image"),async(req,res) => {
    var newGroup = new ItemGroupModel({
        GroupName : req.body.GroupName,
        Description : req.body.Description,
        Image : req.file.originalname
    })
    await newGroup.save()
    
    try {
        res.json({"Status":"Success","Data":newGroup})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})



// View All Item Group API

app.post("/inventory/item-groups",async(req,res) => {
    try {
        var itemGroups = await ItemGroupModel.find()
        res.send(itemGroups)
    } catch (error) {
        res.status(500).send(error)
    }
})


// View Single Item Group

app.post("/inventory/item-groups/:id",async(req,res) => {
    try {
       var id = req.params.id
       var result = await ItemGroupModel.findById({_id:id})
       res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})


// Add New Package

app.post("/sales/packages/new",async(req,res) => {
    var newPackage = new PackageModel(req.body)
    await newPackage.save()
    try {
        res.json({"Status":"Success","Data":newPackage})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }

})

// View All Packages

app.post("/sales/packages",async(req,res) => {
    try {
        var result = await PackageModel.find()
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})


// View Single Package

app.post("/sales/packages/:id",async(req,res) => {
    try {
        var id = req.params.id
        var packages = await PackageModel.findById({_id:id})
        var refNo = packages.SalesOrderRefNo
        var result = await SalesOrderModel.findOne({Reference:refNo})
        res.send(result)
     } catch (error) {
         res.status(500).send(error)
     }
 })

 

// Add New Sales Returns 

app.post("/sales/sales-returns/new",async(req,res) => {
    var newReturn = new SalesReturnModel(req.body)
    await newReturn.save()
    try {
        res.json({"Status":"Success","Data":newReturn}) 
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})


// View All Sales Returns

app.post("/sales/sales-returns",async(req,res) => {
    try {
        var returns = await SalesReturnModel.find()
        res.send(returns)
    } catch (error) {
        res.status(500).send(error)
    }
})

// View A Single Sales Return

app.post("/sales/sales-returns/:id",async(req,res) => {
    try {
        var id = req.params.id
        var salesorder = await SalesOrderModel.findById({_id:id})
        var refNo = salesorder.Reference

        var result = await SalesReturnModel.findOne({SalesOrderRefNo:refNo})
        res.send(result)
     } catch (error) {
         res.status(500).send(error)
     }

})


// Add A New Payment

app.post("/sales/payment-received/new",async(req,res) => {
    var newPayment = new PaymentModel(req.body)
    await newPayment.save()
    try {
        res.json({"Status":"Success","Data":newPayment})
    } catch (error) {
        res.json({"Status":"Error","Error":error})
    }
})


// View All Payments

app.post("/sales/payment-received",async(req,res) => {
    try {
        var payments = await PaymentModel.find()
        res.send(payments)
    } catch (error) {
        res.status(500).send(error)
    }
})


// Add New Credit Note

app.post("/sales/credit-notes/new",async(req,res) => {
    var newCredit = new CreditNoteModel(req.body)
    await newCredit.save()
    try {
        res.json({"Status":"Success","Data":newCredit})
    } catch (error) {
      res.json({"Status":"Error","Error":error})  
    }
})


// View All Credit Notes

app.post("/sales/credit-notes",async(req,res) => {
    try {
        var creditNotes = await CreditNoteModel.find()
        res.send(creditNotes)
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(3001, (req, res) => {
    console.log("Server Started");
})
