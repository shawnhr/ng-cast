angular.module('video-player')
.component('videoList', {
  // TODO
  bindings:{
  	videos: '<',
  	//pass onClick all the way down to videoEntry 
  	onClick: '<'
  },
  controller: function(){
  },
  templateUrl: "src/templates/videoList.html"
});
