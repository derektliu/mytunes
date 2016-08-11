// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
