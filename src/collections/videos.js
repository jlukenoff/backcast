var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search'
  /*initialize: function(videoData) {

  }*/
  /*
  parseVideoData: function(videoData) {
    this.add(videoData.map(function(singleVideo, index) {
      var vid = new Video(singleVideo);
      if (index === 0) {
        vid.set({selected: true});
      }
      return vid;
    }));*/
  
  //should have a search method that takes a search term
  //make an ajax request to Youtube API based on search term
  //it should reset collection with new video data

});
