var PlaylistView = Backbone.View.extend({

  tagName: 'div',
  className: 'playlist',

  initialize: function() {
    this.render();
    this.collection.on('addToPlaylist removeFromPlaylist', this.render, this);
  },
  events: {
    'click .queuePlaylist': function() {
      console.log('click to queuePlaylist inside playlistView');
      this.collection.addToQueue();
    }
  },
  render: function() {
    this.$el.children().detach();

    this.$el.html('<th colspan="3" class="queuePlaylist">Current Playlist</th>').append(
      this.collection.map(function(song, index) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});
