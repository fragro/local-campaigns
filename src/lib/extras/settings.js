Meteor.settings = {
  "public" : {
    "ga": {
      "account": orion.config.get('GA_ACCOUNT')
    }
  },
  "AWSAccessKeyId": orion.config.get('AWS_API_KEY'),
  "AWSSecretAccessKey": orion.config.get('AWS_API_SECRET')
}

Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["audio/wav"],
  maxSize: 200 * 1024 * 1024 // 10 MB (use null for unlimited).
});