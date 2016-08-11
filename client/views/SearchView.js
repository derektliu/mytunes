var SearchView = Backbone.View.extend({
  
  tagName: 'form',
  template: _.template('<div class="search">Search:</div>\
    <div class = "search2">\
    <input class="textInput" type="text"/>\
    <input type="submit" class="submit" value="Search">\
    </div>'),

  events: {
    'submit': function(e) {
      e.preventDefault();
      console.log('go to searchmodel');
      this.model.query();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html(this.template);
  }

});
