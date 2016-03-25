Template.main_layout.rendered = function(){
	var title = Session.get("meta-title");
	if(title){
		document.title = title; 
	}
	else{
		document.title = 'Ron Marlett for HD84';	
	}
}