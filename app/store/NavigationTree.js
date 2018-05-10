Ext.define('kaos.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: 'Dashboard',
            iconCls: 'x-fa fa-desktop',
            rowCls: 'nav-tree-badge nav-tree-badge-new',
//            viewType: 'admindashboard',
            routeId: 'utama',           // routeId defaults to viewType
            leaf: true
        },{
            text: 'Shop',
            iconCls: 'x-fa fa-send',
            rowCls: 'nav-tree-badge nav-tree-badge-hot',
            viewType: 'email',
            // routeId: 'dashboard',
            expanded: false,
            selectable: false,
            // leaf: true
            children: [{
                text: 'Product Catalogue',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'Inventory Manager',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Inventory Manager',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Taxes and Discount',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Shipping Rules',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Coupons',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Orders',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Review and Rating',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
            text: 'Transactions',
            iconCls: 'x-fa fa-user',
            viewType: 'profile',
            leaf: true
        },{
            text: 'User Profile',
            iconCls: 'x-fa fa-search',
            viewType: 'searchresults',
            //leaf: true
            expanded: false,
            selectable: false,
            // leaf: true
            children: [{
                text: 'Manufacturer',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'Sellers',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Clients',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Staffs',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'All users',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
            text: 'Category',
            iconCls: 'x-fa fa-question',
            viewType: 'faq',
            // leaf: true
            expanded: false,
            selectable: false,
            // leaf: true
            children: [{
                text: 'Special Categories',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'All Categories',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Physical Product',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Electronics Product',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Client',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Staff',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Seller',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Manufacturer',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
            text: 'Messages',
            iconCls: 'x-fa fa-leanpub',
            expanded: false,
            selectable: false,
            //routeId: 'pages-parent',
            //id: 'pages-parent',
            children: [{
                text: 'Read Messages',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'Compose',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
            text: 'Additional Attribute',
            iconCls: 'x-fa fa-leanpub',
            expanded: false,
            selectable: false,
            //routeId: 'pages-parent',
            //id: 'pages-parent',
            children: [{
                text: 'Product Attribute',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'Query Form Fields',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Payment Form Fields',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Checkout Form Fields',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Shipping Form Fields',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Custom Form Fields',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
            text: 'Reporting',
            iconCls: 'x-fa fa-leanpub',
            expanded: false,
            selectable: false,
            //routeId: 'pages-parent',
            //id: 'pages-parent',
            children: [{
                text: 'Communication Log',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'Product Query',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'All Downloads',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'File wise downloads',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Product wise',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
            text: 'Settings',
            iconCls: 'x-fa fa-leanpub',
            expanded: false,
            selectable: false,
            //routeId: 'pages-parent',
            //id: 'pages-parent',
            children: [{
                text: 'Menu Manager',
                iconCls: 'x-fa fa-file-o',
                viewType: 'pageblank',
                leaf: true
            },{
                text: 'Global Configuration',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Permissions',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Currencies',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Statuses',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Measurement Units',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Payyment Method',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Geolocations',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },{
                text: 'Email Templates',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            }]
        },{
/*
            text: 'Widgets',
            iconCls: 'x-fa fa-flask',
            // viewType: 'widgets',
            leaf: true
        },{
            text: 'Forms',
            iconCls: 'x-fa fa-edit',
            viewType: 'forms',
            leaf: true
        },{
//*/
            text: 'Charts',
            iconCls: 'x-fa fa-pie-chart',
            viewType: 'charts',
            leaf: true
        }]
    }
});
