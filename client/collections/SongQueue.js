// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songData) {
    if (Array.isArray(songData)) {
      for (var i = 0; i < songData; i++) {
        var newSong = new this.model(songData[i]);
        this.add(newSong);
      }
    } else if (songData) {
      var newSong = new this.model(songData);
      this.add(newSong);
    }

    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.models[0]);
      if (this.models.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('enqueue', function(song) {
      console.log('inside Songqueue enqueue');
      this.add(song);
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },

  playFirst: function() {
    this.models[0].play();
  }

});