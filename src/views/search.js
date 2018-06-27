var SearchView = Backbone.View.extend({
  initialize: function() {
    //should listen for form submit
    //and trigger Videos.search(userInput)
    
  },
  
  events: {
    'click button': 'handleClick'
  },
  
  handleClick: function(event) {
    this.collection.search($('input').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
