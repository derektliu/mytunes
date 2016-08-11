// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // initialize: function() {
  //   this.on('ended', function() {
  //     console.log('inside ended');
  //     this.trigger('ended', this);
  //   }, this);
  // },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
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
  }
});
