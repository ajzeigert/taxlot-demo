var fs = require('fs');
var _ = require('lodash');
var Papa = require('papaparse');

fs.readFile('Owners_Table.csv', 'utf8', function(err, data){
	var owners = Papa.parse(data, {
		header: true,
		dynamicTyping: true
	});
	var ownerCount = _.countBy(owners, function(value){
		return value.NAME;
	});
	console.log(owners);
})
