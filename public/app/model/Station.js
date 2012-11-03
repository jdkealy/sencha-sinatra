Ext.define('Panda.model.Station', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'played_date'],

    proxy: {
        type: 'ajax',
        url: 'data/stations.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
