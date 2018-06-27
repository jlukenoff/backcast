var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  parse: function(data) {
    if (data.items === undefined) {
      return data;
    }
    return data.items;
  },
  
  search: function(string) {
    console.log($('input').val());
    let data = {
      // url: 'https://www.googleapis.com/youtube/v3/search',
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      videoEmbeddable: true,
      key: window.YOUTUBE_API_KEY
    };
    if (string) {
      data.q = string;
    }
    this.fetch({data: data});
  }
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
