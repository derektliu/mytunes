// Songs.js - Defines a backbone collection class for songs.
var Library = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(data) {
    console.log('parsing', data.results);
    return data.results;
  },
  
  initialize: function () {
    this.fetch();
  },

  query: function(query) {
    query = query;
    this.fetch({
      data: `where={ "title": {"$regex": "(?i)${query}"}}`,
    });
  },

  search: function(input) {
    this.where({ title: 'Hot Like Fire'});
  }

});