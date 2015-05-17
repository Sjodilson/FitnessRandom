var App = {

	initialize: function() {
		this.lsStore = new LocalStorage();
		this.homeView = new HomeView();
	},
	
	exercise: function(name, videourl) {
		alert(name);
		alert(videourl);
		this.excercise = new ExerciseView(name, videourl);
	}
	   
};

window.onload = function(){	    
App.initialize();
};


