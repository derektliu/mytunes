// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  className: 'app',

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.searchView = new SearchView({model: this.model.get('search')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistView = new PlaylistView({collection: this.model.get('playlist')});



    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:search', function(model) {
      console.log('app view saw it');
      // this.playerView.setSong(model.get('currentSong'));
    }, this);
    
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.searchView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      this.playlistView.$el
    ]);
  }

});
