mainMeta = function(title, url){
    Meta.set("og:title", title);
    Meta.set("og:description", "Life-long Oklahoman. Family man. Clinical Social Worker. Lover of Liberty, Equality and Opportunity. Candidate for State Representative, House District 84.");
    Meta.set("og:image", "https://s3.amazonaws.com/marlett/cover.jpg");
    Meta.set("og:url", "http://www.voteronmarlett.com" + url);
    Session.set("meta-title", title);
	if(title){
		document.title = title; 
	}
	else{
		document.title = 'Ron Marlett for HD84';	
	}
}
Meteor.autorun(function () {
	var title = Session.get("meta-title");
	if(title){
		document.title = title; 
	}
	else{
		document.title = 'Ron Marlett for HD84';	
	}
});