var Playlist = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('addToPlaylist', function(song) {
      console.log('addToPlaylist inside Playlist', song);
      this.add(song);
      console.log('new this', this);
    }, this);

    this.on('removeFromPlaylist', function(song) {
      this.remove(song);
    }, this);

    this.on('playPlaylist', function() {
      this.addToQueue();
    });

  },

  addToQueue: function() {
    console.log('addtoqueue inside playlist');
    console.log('this.collection.model', this.models);
    _.forEach(this.models, function(song) { song.enqueue(); }, this);
  }

});