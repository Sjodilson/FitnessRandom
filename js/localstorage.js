    function LocalStorage(){
	    var exercises = [
            {"id": 1, "name": "Russian Twist", "icon": "Howard", "url":"https://www.youtube.com/watch?v=U_HsjA0Ei1E", "Category": "Abs"},
            {"id": 2, "name": "Vertical leg crunches", "icon": "Howard", "url": "https://www.youtube.com/watch?v=gt62sf7khLU", "Category": "Abs"},
            {"id": 3, "name": "Burpees", "icon": "Howard", "url":"https://www.youtube.com/watch?v=5zrN7c6BVw8", "Category":"Full body"},
        ];    	
    	
		window.localStorage.setItem("excercises", JSON.stringify(exercises));
		
		
	};
	
	LocalStorage.prototype.addExercise = function(){
		
	};
	
	LocalStorage.prototype.getExercise = function(){
		
	};
    

