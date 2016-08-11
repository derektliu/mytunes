var SearchView = Backbone.View.extend({
  
  tagName: 'div',
  template: _.template('Search: <input/><input type="submit"/>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html(this.template);
  }

});
