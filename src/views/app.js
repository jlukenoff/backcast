var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(collection = exampleVideoData) {
    this.videos = new Videos(collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    
    this.player = new VideoPlayerView({
      collection: this.videos,
      model: this.videos.at(0),
      el: this.$('.player')
    }).render();
    
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    
    return this;
    
  },

  template: templateURL('src/templates/app.html')

});
