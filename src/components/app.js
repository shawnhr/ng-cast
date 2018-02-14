angular.module('video-player')

.component('app', {
  // TODO
    controller: function($window){
    	//var that = this;
  	// this.videos = $window.exampleVideoData;
  	// this.selectedVideo = this.videos[0];

  	// this.selectVideo = function(video) {
  	// 	//selectedVideo=video;
  	// 	this.selectedVideo = video;
  	// }.bind(this)
  	
  	this.selectVideo = (video) => {
  		this.selectedVideo = video;
  	}
  
  this.update = (videos) => {
  	this.videos = videos;
  	this.selectedVideo = this.videos[0];
  }
  this.update($window.exampleVideoData);
},
  templateUrl: "src/templates/app.html"
});
