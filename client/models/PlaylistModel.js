var PlaylistModel = Backbone.Model.extend({

  initialize: function(playlist) {

    this.set('name', 'Backbone Sucks');
    this.set('playlist', new CurrentPlaylist());
    this.get('playlist').on('addToCurrentPlaylist', function(song) {
      this.trigger('addToCurrentPlayList', song);
    }, this);
    // console.log('inside playlistModel', this.get('playlist'));

  },

  setPlaylist: function() {
    this.get('playlist').each(function(song) {
      console.log('original', song);
      song = song.toJSON();
      console.log('JSON', song);
      console.log('PARSE', new SongModel(song));
      this.trigger('addToCurrentPlaylist', new SongModel(song));
    }, this);
  },
  remove: function() {
    console.log('remove in playlistModel');
    return;
  }
  //   this.set('currentSong', new SongModel());
  //   this.set('songQueue', new SongQueue());
  //   this.set('search', new SearchModel());
  //   this.set('library', new Library());
  //   this.set('currentPlaylist', new CurrentPlaylist());

  //   this.get('library').on('enqueue', function(song) {
  //     this.get('songQueue').trigger('enqueue', song);
  //   }, this);

  //   this.get('library').on('play', function(song) {
  //     this.set('currentSong', song);
  //   }, this);

  //   this.get('search').on('query', function() {
  //     this.get('library').query(this.get('search').get('input'));
  //   }, this);

  //   this.get('library').on('addToCurrentPlaylist', function(song) {
  //     this.get('currentPlaylist').trigger('addToCurrentPlaylist', song);
  //   }, this);
  // }

});
