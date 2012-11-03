Ext.define('Panda.store.SearchResults', {
    extend: 'Ext.data.Store',
    requires: 'Panda.model.Station',
    model: 'Panda.model.Station',

    // Overriding the model's default proxy
    proxy: {
        type: 'ajax',
        url: 'data/searchresults.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
