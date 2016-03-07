sortVolunteerSlug = {
	"Last Contacted": "last-contacted",
	"Least Contacted": "least-contacted",
	"Order Created": "created",
	"Last Created": "last-created",
	"Never Contacted": "never-contacted",
	"County": "county",
	"--": undefined
}
filterVolunteerMap = {
	"Regional Organizers": "regional-organizer",
	"Notary": "notary",
	"Business Owner": "business-owner",
	"All Volunteers": ""
}
sortVolunteerMap = {
	"last-contacted": {last_contacted:-1},
	"least-contacted": {last_contacted:1},
	"never-contacted": {createdAt:-1},
	"created": {createdAt:1},
	"last-created": {createdAt:-1},
	"county": {county:1},
	"--": undefined
}