var SearchView = Backbone.View.extend({
  initialize: function() {
    //should listen for form submit
    //and trigger Videos.search(userInput)
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
