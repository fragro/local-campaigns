mainMeta = function(title, url){
	Meta.set({
	  name: 'name',
	  property: 'og:title',
	  content: title
	});
	Meta.set({
	  name: 'name',
	  property: 'og:description',
	  content: "Life-long Oklahoman. Family man. Clinical Social Worker. Lover of Liberty, Equality and Opportunity. Candidate for State Representative, House District 84."
	});
	Meta.set({
	  name: 'name',
	  property: 'og:image',
	  content: "https://s3.amazonaws.com/marlett/cover.jpg"
	});
	Meta.set({
	  name: 'name',
	  property: 'og:url',
	  content: "http://www.voteronmarlett.com" + url
	});
    Session.set("meta-title", title);
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

fullMeta = function(title, url, desc, img){
	Meta.set({
	  name: 'name',
	  property: 'og:title',
	  content: title
	});
	Meta.set({
	  name: 'name',
	  property: 'og:description',
	  content: desc
	});
	Meta.set({
	  name: 'name',
	  property: 'og:image',
	  content: img
	});
	Meta.set({
	  name: 'name',
	  property: 'og:url',
	  content: "http://www.voteronmarlett.com" + url
	});
    Session.set("meta-title", title);
}