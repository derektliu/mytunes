var Playlist = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('addToPlaylist', function(song) {
      this.add(song);
    }, this);

    this.on('removeFromPlaylist', function(song) {
      this.remove(song);
    }, this);

    this.on('playPlaylist', function() {
      this.addToQueue();
    });

  },

  addToQueue: function() {
    _.forEach(this.models, function(song) { song.enqueue(); }, this);
  }

});