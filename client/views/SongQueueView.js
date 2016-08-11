 // SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'div',
  className: 'queue',

  initialize: function() {
    this.render();
    this.collection.on('enqueue dequeue ended', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th colspan="3">Song Queue</th>').append(
      this.collection.map(function(song, index) {
        if (index > 0) {
          return new SongQueueEntryView({model: song}).render();
        }
      })
    );
  }
});
