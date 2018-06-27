var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(this.renderVideo, this);
    
    return this;
  },
  
  renderVideo: function(movie) {
    this.$('.video-list').append(new VideoListEntryView({
      model: movie
    }).render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
