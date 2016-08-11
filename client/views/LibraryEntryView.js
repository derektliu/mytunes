// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'song',
  template: _.template('<td><%= playCount %>\
    </td><td class = "artist"><%= artist %></td>\
    <td class = "title"><%= title %></td>\
    <td class = "albumArt"><img class="artwork" src= <%=artwork_url%>></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
