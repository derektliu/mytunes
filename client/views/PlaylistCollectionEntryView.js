var PlaylistCollectionEntryView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template('<td><%= name %></td>'),

  events: {
    'click': function() {
      // console.log('click inside Collection Entry');
      this.model.setPlaylist();
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
