var PlaylistCollectionView = Backbone.View.extend({

  tagName: 'div',
  className: 'playlistCollection',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th colspan="3" class="playlistTitle">Playlists</th>').append(
      this.collection.map(function(playlist) {
        return new PlaylistCollectionEntryView({model: playlist}).render();
      })
    );
  }
});
