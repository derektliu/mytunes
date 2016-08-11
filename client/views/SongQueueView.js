 // SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('remove add', this.render, this);
  },

  render: function() {
    // this.$el.empty();
    // this.collection.forEach(this.renderSong, this);

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  renderSong: function(song) {
    var songQueueEntryView = new SongQueueEntryView({model: song});
    return this.$el.append(songQueueEntryView.render());
  }



});
