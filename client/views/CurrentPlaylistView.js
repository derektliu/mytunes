var CurrentPlaylistView = Backbone.View.extend({

  tagName: 'div',
  className: 'playlist',

  initialize: function() {
    this.render();
    this.collection.on('reset addToCurrentPlaylist removeFromCurrentPlaylist', this.render, this);
  },
  events: {
    'click .queuePlaylist': function() {
      this.collection.addToQueue();
    },

    'click .savePlayList': function() {
      // console.log('click saveplaylist in CurrentPlaylistView', this.collection);
      this.collection.savePlaylist();
    }
  },
  render: function() {
    this.$el.children().detach();

    this.$el.html('<th colspan="3" class="queuePlaylist">Current Playlist</th>').append(
      this.collection.map(function(song, index) {
        return new CurrentPlaylistEntryView({model: song}).render();
      })
    ).append('<tr> <td colspan="3" class = "savePlayList"> Save the Playlist</td></tr>');
  }
});
