var PlaylistCollection = Backbone.Collection.extend({

  model: PlaylistModel,
  currentWorkingPlaylist: new PlaylistModel(),

  // savePlaylist
  initialize: function () {
    this.on('addPlaylist', function() {
      this.add(playlist);
      // console.log('saving playlist inside Collection', playlist);
    }, this);
  },

  createNewPlaylist: function() {
    // 'currentWorkingPlaylist', new PlaylistModel();
    this.trigger('getNewSongs', this);
  },

  addToNextPlaylist: function(song) {
    this.currentWorkingPlaylist.get('playlist').add(song);
    // console.log('current working playlist', this.currentWorkingPlaylist.get('playlist'));
  },

  remove: function() {
    console.log('remove in PlaylistCollection');
    return;
  },

  addNextPlaylist: function() {
    var nextPlaylist = this.currentWorkingPlaylist;
    this.add(nextPlaylist);
    console.log(this.models);
    this.currentWorkingPlaylist = new PlaylistModel();
  }

});