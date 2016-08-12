var SearchModel = Backbone.Model.extend({

  initialize: function() {
    this.set('input', '');
  },

  query: function() {
    this.set('input', $('input').val());
    this.trigger('query', this);
  }

});