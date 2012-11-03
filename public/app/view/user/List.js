Ext.define('AM.view.user.List' ,{
  extend: 'Ext.grid.Panel',
  alias: 'widget.userlist',
  store: 'Users',

  title: 'All Users',

  initComponent: function() {
    this.columns = [
      {header: 'Name',  dataIndex: 'name',  flex: 1},
      {header: 'Email', dataIndex: 'email', flex: 1}
    ];

    this.callParent(arguments);
  }
});
var childPanel1 = Ext.create('Ext.panel.Panel', {
    title: 'Child Panel 1 ohwo wouhuw ouhuw',
    width:'500',
    hideMode: 'visibility',
    html: 'A Panel'
});

var childPanel2 = Ext.create('Ext.panel.Panel', {
    title: 'Child Panel 2',
    html: 'Another Panel'
});


Ext.define('AM.view.user.Listfoo' ,{
  extend: 'Ext.panel.Panel',
  alias: 'widget.userlistfoo',
  layout: 'column',
  items: [ childPanel1, childPanel2 ]
});
