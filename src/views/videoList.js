var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.collection.on('change', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.collection.forEach(function(model) {
      debugger;
      model.render();
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
