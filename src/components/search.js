angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
  	onUpdate: '<',
  	
  },
  controller:function(youTube){
  	//debugger
  	this.search = () => {
  		youTube.search(this.input, this.onUpdate);
  	}
  },
  templateUrl: "src/templates/search.html"

});
