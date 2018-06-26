var VideoListView = Backbone.View.extend({
  initialize: function() {

    this.collection.on('sync', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this)
    return this;
  },
  
  renderVideo: function(movie) {
    var videoView = new VideoListEntryView({model: movie});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
