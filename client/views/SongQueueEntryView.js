// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  template: _.template('<div class="song"> \
                        <span class = "title">%-title</span>\
                        <span class = "artist">%-artist</span>\
                        </div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
