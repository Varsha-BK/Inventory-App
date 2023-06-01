import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";


export const SidebarData = [
{
	title: "Dashboard",
	path: "/",
	icon: <AiIcons.AiTwotoneDashboard />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />
},
{
	title: "Inventory",
	// path: "/inventory",
	icon: <MdIcons.MdInventory/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Items",
		path: "/inventory/items",
		cName: "sub-nav"
	},
	{
		title: "Item Group",
		path: "/inventory/item-groups",
		cName: "sub-nav"
	},
	{
		title: "Inventory Adjustment",
		path: "/inventory/inventory-adj",
	},
	],
},
{
	title: "Sales",
	// path: "/sales",
	icon: <AiIcons.AiOutlineAreaChart />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Customers",
		path: "/sales/customers",
	},
	{
		title: "Sales Order",
		path: "/sales/sales-order",
	},	
    {
		title: "Packages",
		path: "/sales/packages",
	},
	{
		title: "Delivery Challans",
		path: "/sales/delivery-challans",
	},
    {
		title: "Invoices",
		path: "/sales/invoices",
	},
	{
		title: "Payment Received",
		path: "/sales/payment-received",
	},
	{
		title: "Sales Returns",
		path: "/sales/sales-returns",
	},
	{
		title: "Credit Notes",
		path: "/sales/credit-notes",
	}

	],
},
{
	title: "Purchase",
	// path: "/purchase",
	icon: <AiIcons.AiOutlineShoppingCart/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Vendors",
		path: "/purchase/vendors",
		cName: "sub-nav"
	},
	{
		title: "Purchase Order",
		path: "/purchase/purchase-order",
		cName: "sub-nav"
	},
	{
		title: "Bills & Payments",
		path: "/purchase/bills-payments",
	},
    {
		title: "Vendor Credit",
		path: "/purchase/vendor-credit",
	}

	],
},
{
	title: "Reports",
	path: "/reports",
	icon: <IoIcons.IoIosPaper />,
},
];
