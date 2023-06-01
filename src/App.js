import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import { Inventory, InventoryAdjustment, ItemGroups, Items } from "./Pages/Inventory";
import { CreditNotes, Customers, DeliveryChallans, Invoices, Packages, PaymentReceived, Sales, SalesOrder, SalesReturns } from "./Pages/Sales";
import { BillsPayments, Purchase, PurchaseOrder, VendorCredit, Vendors } from "./Pages/Purchase";
import Reports from "./Pages/Reports";
import AddItems from "./Pages/AddItems";
import AddItemGroup from "./Pages/AddItemGroup";
import AddInventoryAdjust from "./Pages/AddInventoryAdjust";
import AddCustomers from "./Pages/AddCustomers";
import EditCustomer from "./Pages/EditCustomer";
import AddSalesOrder from "./Pages/AddSalesOrder";
import AddInvoice from "./Pages/AddInvoice";
import AddPaymentRec from "./Pages/AddPaymentRec";
import AddVendor from "./Pages/AddVendor";
import EditVendor from "./Pages/EditVendor";
import AddPurchaseOrder from "./Pages/AddPurchaseOrder";
import AddBill from "./Pages/AddBill";
import AddVendorCredit from "./Pages/AddVendorCredit";
import AddChallan from "./Pages/AddChallan";
import AddSalesReturn from "./Pages/AddSalesReturn";
import ViewGroupItems from "./Pages/ViewGroupItems";
import SalesByItems from "./Pages/SalesByItems";
import SalesByCustomer from "./Pages/SalesByCustomer";
import InventorySummary from "./Pages/InventorySummary";
import InventoryAging from "./Pages/InventoryAging";
import ProductSalesReport from "./Pages/ProductSalesReport";
import ItemDetails from "./Pages/ItemDetails";
import SalesOrderDetails from "./Pages/SalesOrderDetails";
import InvntryAdjDetails from "./Pages/InvntryAdjDetails";
import CustomerDetails from "./Pages/CustomerDetails";
import DeliveryChallandetails from "./Pages/DeliveryChallandetails";
import InvoicesDetails from "./Pages/InvoicesDetails";
import AddPackages from "./Pages/AddPackages";
import PackageDetails from "./Pages/PackageDetails";
import PurchaseOrderDetails from "./Pages/PurchaseOrderDetails";
import BillDetails from "./Pages/BillDetails";
import AddCreditNote from "./Pages/AddCreditNote";


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/inventory" exact element={<Inventory />} />
        <Route path="/inventory/items" exact element={<Items />} />
        <Route path="/inventory/item-groups" exact element={<ItemGroups/>}/>
        <Route path="/inventory/inventory-adj" exact element={<InventoryAdjustment/>}/>
        <Route path="/sales" exact element={<Sales/>}/>
        <Route path="/sales/customers" exact element={<Customers/>}/>
        <Route path="/sales/sales-order" exact element={<SalesOrder/>}/>
        <Route path="/sales/packages" exact element={<Packages/>}/>
        <Route path="/sales/delivery-challans" exact element={<DeliveryChallans/>}/>
        <Route path="/sales/invoices" exact element={<Invoices/>}/>
        <Route path="/sales/payment-received" exact element={<PaymentReceived/>}/>
        <Route path="/sales/sales-returns" exact element={<SalesReturns/>}/>
        <Route path="/sales/credit-notes" exact element={<CreditNotes/>}/>
        <Route path="/purchase" exact element={<Purchase/>}/>
        <Route path="/purchase/vendors" exact element={<Vendors/>}/>
        <Route path="/purchase/purchase-order" exact element={<PurchaseOrder/>}/>
        <Route path="/purchase/bills-payments" exact element={<BillsPayments/>}/>
        <Route path="/purchase/vendor-credit" exact element={<VendorCredit/>}/>
        <Route path="/reports" exact element={<Reports/>}/>
        <Route path="/inventory/items/new" exact element={<AddItems/>}/>
        <Route path="/inventory/item-groups/new" exact element={<AddItemGroup/>}/>
        <Route path="/inventory/inventory-adj/new" exact element={<AddInventoryAdjust/>}/>
        <Route path="/sales/customers/new" exact element={<AddCustomers/>}/>
        <Route path="/sales/customers/edit/:id" exact element={<EditCustomer/>}/>
        <Route path="/sales/sales-order/new" exact element={<AddSalesOrder/>}/>
        <Route path="/sales/invoices/new" exact element={<AddInvoice/>}/>
        <Route path="/sales/payment-received/new" exact element={<AddPaymentRec/>}/>
        <Route path="/purchase/vendors/new" exact element={<AddVendor/>}/>
        <Route path="/purchase/vendors/edit/:id" exact element={<EditVendor/>}/>
        <Route path="/purchase/purchase-order/new" exact element={<AddPurchaseOrder/>}/>
        <Route path="/purchase/bills-payments/new" exact element={<AddBill/>}/>
        <Route path="/purchase/vendor-credit/new" exact element={<AddVendorCredit/>}/>
        <Route path="/sales/delivery-challans/new" excat element={<AddChallan/>}/>
        <Route path="/sales/sales-returns/new" exact element={<AddSalesReturn/>}/>
        <Route path="/inventory/item-groups/:id" exact element={<ViewGroupItems/>}/>
        <Route path="/reports/salesitems" exact element={<SalesByItems/>}/>
        <Route path="/reports/salescustomer" exact element={<SalesByCustomer/>}/>
        <Route path="/reports/inventorysummary" exact element={<InventorySummary/>}/>
        <Route path="/reports/inventoryaging" exact element={<InventoryAging/>}/>
        <Route path="/reports/productsales" exact element={<ProductSalesReport/>}/>
        <Route path="/inventory/items/:id" exact element={<ItemDetails/>}/>
        <Route path="/sales/sales-order/:id" exact element={<SalesOrderDetails/>}/>
        <Route path="/inventory/inventory-adj/:id" exact element={<InvntryAdjDetails/>}/>
        <Route path="/sales/customers/:id" exact element={<CustomerDetails/>}/>
        <Route path="/sales/delivery-challans/:id" exact element={<DeliveryChallandetails/>}/>
        <Route path="/sales/invoices/:id" exact element={<InvoicesDetails/>}/>
        <Route path="/sales/packages/new" exact element={<AddPackages/>}/>
        <Route path="/sales/packages/:id" exact element={<PackageDetails/>}/>
        <Route path="/purchase/purchase-order/:id" exact element={<PurchaseOrderDetails/>}/>
        <Route path="/purchase/bills-payments/:id" exact element={<BillDetails/>}/>
        <Route path="/sales/credit-notes/new" exact element={<AddCreditNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
