/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('kaos.view.main.Main', {
    // extend: 'Ext.tab.Panel',
    extend: 'Ext.container.Viewport',
    // xtype: 'app-main',

    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree'
        // 'Ext.plugin.Viewport',
        // 'Ext.window.MessageBox',

        // 'kaos.view.main.MainController',
        // 'kaos.view.main.MainModel',
        // 'kaos.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',
    // ui: 'navigation',

    // tabBarHeaderPosition: 1,
    // titleRotation: 0,
    // tabRotation: 0,

    // header: {
    //     layout: {
    //         align: 'stretchmax'
    //     },
    //     title: {
    //         bind: {
    //             text: '{name}'
    //         },
    //         flex: 0
    //     },
    //     iconCls: 'fa-th-list'
    // },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },
/*
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
//*/

/*
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
//*/
    items: [{
        xtype: 'toolbar',
        cls: 'sencha-dash-dash-headerbar shadow',
        height: 64,
        itemId: 'headerBar',
        items: [{
            xtype: 'component',
            reference: 'senchaLogo',
            cls: 'sencha-logo',
            html: '<div class="main-logo"><img src="resources/images/company-logo.png">Kaosmologi</div>',
            width: 250
        },{
            margin: '0 0 0 8',
            ui: 'header',
            iconCls: 'x-fa fa-navicon',
            handler: 'onToggleNavigationSize',
            text: 'coba tambah html'
        }]
    },{
        xtype: 'maincontainerwrap',
        id: 'main-view-detail-wrap',
        reference: 'mainContainerWrap',
        flex:1,
        items: [{
            xtype: 'treelist',
            reference: 'navigationTreeList',
            itemId: 'navigationTreeList',
            ui: 'navigation',
            store: 'NavigationTree',
            width: 250,
            expanderFirst: false,
            expanderOnly: false,
            listeners: {
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        },{
            xtype: 'container',
            flex: 1,
            reference: 'mainCardPanel',
            cls: 'sencha-dash-right-main-container',
            itemId: 'contentPanel',
            layout: {
                type: 'card',
                anchor: '100%'
            }
        }]
    }]
/*
    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
//*/
});
