# Campaign Engine

A political campaign engine developed with MeteorJS and deployed with NGINX and Docker. SSL certificates remain as an example but should not
be a part of a production repository and stored separately.

For local development and testing:

	cd marlett/src
	meteor --settings ../settings.json

mLab sandbox for development purposes, by default AWSAccessKey is invalid. For production purposes you will need to change settings.json

	MONGO_URL=mongodb://admin:R33WKjSbCBzZEEAypZjbAMVQsTuAUpQDkFMKy7fNbvZVFMTX3uvyy5ubWum6Te74MNad2W6PZ8meySHQFqAkCsSZRyjGgztNXeqsRtev2FRkph2@ds061335.mongolab.com:61335/marlett meteor --settings ../settings.json