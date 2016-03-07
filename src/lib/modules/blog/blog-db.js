Posts = new Meteor.Collection('posts');

if (Meteor.isServer) {
	Meteor.methods({
	  newPost: function (post) {
	    Posts.insert(post);
	  }
	  ,
	  submitPost: function(post) {

	    var additionalParams = {
	      author: author,
	      created_by: created_by,
	      createdAt: new Date()
	    }

	    _.extend(post, additionalParams);
	    post._id = Posts.insert(post);
	    return post;
	  }
	  ,  
	  editPost: function(selectedPostId, post) {
	    //console.log("this is lib method");
	    //console.log(post);

	    //var postCurr = Posts.findOne(selectedPostId);
	    //console.log("selectedPostId = "+selectedPostId);
	    //console.log(post.post.postTitle);
	    //console.log(post.post.postContent);

	    var properties = {
	    postTitle:        post.post.postTitle,
	    postContent:      post.post.postContent
	    };  

	    Posts.update({_id:selectedPostId}, {$set: properties});
	  }
	})


	Meteor.publish('thePosts', function(){
    var currentUserId = this.userId;
    console.log("publish method "+this.userId);
    //return Posts.find({author: currentUserId})
    return Posts.find()
  });
}

if (Meteor.isClient){ 
	Meteor.subscribe('thePosts');

}