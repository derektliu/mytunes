var CurrentPlaylist = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('addToCurrentPlaylist', function(song) {
      this.add(song);
    }, this);

    this.on('removeFromCurrentPlaylist', function(song) {
      this.remove(song);
    }, this);

    this.on('playPlaylist', function() {
      this.addToQueue();
    });

  },

  addToQueue: function() {
    _.forEach(this.models, function(song) { song.enqueue(); }, this);
  },

  savePlaylist: function() {

    _.forEach(this.models, function(song) { song.addToNextPlaylist(); }, this);
    this.reset();
    this.trigger('doneWithPlaylist', this);
    // _.forEach(this.models, function(song) { song.removeFromCurrentPlaylist(); }, this);
    
    // console.log('saveplaylist in CurrentPlaylist', this);
  }

  // clearPlaylist: function() {
  //   console.log('clearing current playlist');
  //   console.log('this is our songs', this.models);
  //   // debugger;

  //   for (var i = 0; i < this.models.length; i++) {
  //     console.log('song removed', this.models[0]);
  //     this.remove(this.models[0]);
  //   }
  // }

});