Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'stationsList',
        selector: 'stationslist'
    }],
    stores: ['Stations'],
    init: function() {
        this.control({
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    onNewStationSelect: function(field, selection) {
        var selected = selection[0],
            store = this.getStationsStore(),
            list = this.getStationsList();

        if (selected && !store.getById(selected.get('id'))) {
            // If the newly selected station does not exist in our station store we add it
            store.add(selected);
        }

        // We select the station in the Station list
        list.getSelectionModel().select(selected);
    },
    onLaunch: function() {
        // Use the automatically generated getter to get the store
        var stationsStore = this.getStationsStore();
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },
    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        stationsList.getSelectionModel().select(0);
    },
    onStationSelect: function(selModel, selection) {
      this.application.fireEvent('stationstart', selection[0]);
    }
});
