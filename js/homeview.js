function HomeView(){
	var html =  '<ul data-role="listview" data-inset="true" data-filter="true">';
	
	var obj = JSON.parse(window.localStorage.excercises);
	
	for (var i = 0; i < obj.length; i++){
		var listId = obj[i].id;
		var listName = obj[i].name;
		var listUrl = obj[i].url;
		
		
		var list = '<li id="' + listId + '"><a href="#">' + listName  + '</a></li>';
		html += list;
		$('.mainview').on('click', '#' + listId, function(){
			
			console.log(listName + ' ' + listUrl);
  			App.exercise(listName, listUrl);
		});
	}
	
	html += '</ul>';
	
	$( ".mainview" ).append(html).enhanceWithin();
	
}
