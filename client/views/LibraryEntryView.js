// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'song',
  template: _.template('<td class="addQueue"><%= playCount %>\
    </td><td class = "addQueue artist"><%= artist %></td>\
    <td class = "addQueue title"><%= title %></td>\
    <td class = "addPlaylist albumArt"><img class="artwork" src= <%=artwork_url%>></td>'),

  events: {
    'click .addQueue': function() {
      this.model.enqueue();
    },
    
    'click .addPlaylist': function() {
      this.model.addToPlaylist();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
