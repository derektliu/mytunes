var PlaylistEntryView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
