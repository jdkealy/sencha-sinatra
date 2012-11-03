Ext.define('Panda.controller.Song', {
    refs: [{
        ref: 'songInfo',
        selector: 'songinfo'
    }, {
        ref: 'recentlyPlayedScroller',
        selector: 'recentlyplayedscroller'
    }],
    stores: ['RecentSongs'],
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'recentlyplayedscroller': {
                selectionchange: this.onSongSelect
            }
        });

        this.application.on({
            stationstart: this.onStationStart,
            scope: this
        });
    },
    onSongSelect: function(selModel, selection) {
        this.getSongInfo().update(selection[0]);
    },
    onRecentSongsLoad: function(songs, request) {
        var store = this.getRecentSongsStore(),
            selModel = this.getRecentlyPlayedScroller().getSelectionModel();

        selModel.select(store.last());
    },
    onStationStart: function(station) {
        var store = this.getRecentSongsStore();

        store.load({
            callback: this.onRecentSongsLoad,
            params: {
                station: station.get('id')
            },
            scope: this
        });
    }
});
