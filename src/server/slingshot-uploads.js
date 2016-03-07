Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  bucket: "fundraiser-album",
  acl: "public-read",

  authorize: function () {
    //Deny uploads if user is not logged in.
    return true;
  },

  key: function (file, metaContext) {
  	console.log(metaContext);
    return metaContext.genre + '/' + slugify(metaContext['band-name']) + '/' + file.name;
  }
});