/***    FRONTEND.JS Pseudocode    ***/
    //nope. This is your job!
$(document).ready(function(){
	console.log("JS IS LINKED");
	$("#getDataBtn").on("click", function(){
		$.ajax({
			url:"/getMyData",
			method: "GET"
		}).done(function(res){
			Console.log(res);
			$("#dataTable").html(" ");
			let dataToInsert="";
			for(let i =0; i <res.length; i++){
				dataToInsert+="<tr>"+"<td>"+res[i].first_name + "</td>" + "<td>"+res[i].last_name + "</td>"+ "<td>"+res[i].age + "</td>"
			}
		});// end done
		$("#table").hml(dataToInsert)
	}); //end click
});    //end ready