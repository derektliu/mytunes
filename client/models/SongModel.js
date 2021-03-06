// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  initialize: function() {
    this.set('playCount', 0);
  },

  incrementPlayCount: function() {
    this.set('playCount', this.get('playCount') + 1);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.incrementPlayCount();
    this.trigger('play', this);
  }, 
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },

  addToCurrentPlaylist: function() {
    this.trigger('addToCurrentPlaylist', this);
  },

  removeFromCurrentPlaylist: function() {
    this.trigger('removeFromCurrentPlaylist', this);
  },
  
  addToNextPlaylist: function() {
    this.trigger('addToNextPlaylist', this); 
  }

});
