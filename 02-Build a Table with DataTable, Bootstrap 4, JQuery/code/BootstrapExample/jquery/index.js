var table;
var urlUsers = "https://jsonplaceholder.typicode.com/users";
function initTableData() {
	//Fixed data
	/*
	var data = [
    		{
    			"id": 3,
    			"name": "Clementine Bauch",
    			"email": "Nathan@yesenia.net",
    			"address": "Douglas Extension Suite 847",
    			"phone": "1-463-123-4447",
    		},
    		{
    			"id": 4,
    			"name": "Chelsey Dietrich",
    			"email": "Lucio_Hettinger@annie.ca",
    			"address": "Skiles Walks Suite 351",
    			"phone": "(254)954-1289",
    		},
    		{
    			"id": 5,
    			"name": "Chelsey Dietrich 22",
    			"email": "Lucio_Hettinger@annie.ca22",
    			"address": "Skiles Walks Suite 351 22",
    			"phone": "(254)954-1289",
    		}
    	];
    */
    //Data from an URL ?
    $.get(urlUsers, function(responseData) {
    	//Mofify "responseData" before showing ?
    	var modifiedUsers = responseData.map(eachUser => {
    		return {
    			id: eachUser.id,
    			name: eachUser.name,
  				email: eachUser.email,
  				address: `${eachUser.address.street}, ${eachUser.address.suite}, ${eachUser.address.city}`,
  				phone: eachUser.phone
    		};
    	});
    	table = $('#users').DataTable({
    	"processing": true,
    	data: modifiedUsers,
    	columns:[
    		{ data: 'id' },		
    		{ data: 'name' },
    		{ data: 'email' },
    		{ data: 'address' },
    		{ data: 'phone' }
    	]
    	});
    }).fail(function() {
    	alert( "Cannot get data from URL" );
    });
}

$(document).ready(function (){
	initTableData();
	$("#list-header").on({
		mouseenter: function() {
			$(this).css("background-color", "lightgray");
		},
		mouseleave: function(){
        	$(this).css("background-color", "lightblue");
    	}, 
	});
	$("#btnReloadData").on("click", function(){
		//alert("reload data...")
		table.ajax.reload();
	});
});




