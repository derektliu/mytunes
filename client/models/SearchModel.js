var SearchModel = Backbone.Model.extend({

  initialize: function() {
    this.set('input', '');
  },

  query: function() {
    console.log('get value inside searchmodel and trigger query');
    this.set('input', $('input').val());
    this.trigger('query', this);
  }

});