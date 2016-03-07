//filter, sort, and other db modifiers
getVolunteerSort = function(sort){
	return sortVolunteerMap[sort];
}	
getVolunteerFilter = function(filter){
	return filterVolunteerMap[filter];
}
getVolunteerSortSlug = function(filter){
	return sortVolunteerSlug[filter];
}