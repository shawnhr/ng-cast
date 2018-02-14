angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
  	video:'<',
  	onClick: '<'
  },
  controller:function(){
  //	this.onClick = () => {console.log(this)}
  },
  templateUrl: "/src/templates/videoListEntry.html"
});
