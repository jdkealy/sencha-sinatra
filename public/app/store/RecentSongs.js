Ext.define('Panda.store.RecentSongs', {
    extend: 'Ext.data.Store',
    model: 'Panda.model.Song',

    // Make sure to require your model if you are
    // not using Ext JS 4.0.5
    requires: 'Panda.model.Song'
});
