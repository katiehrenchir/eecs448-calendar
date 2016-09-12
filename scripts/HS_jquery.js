/*
	Created by Erin Coots - 9/12/16
	Hide and show elements of calendar
*/

$(document).ready(function(){
    $("#month").click(function(){
        $("#year").hide();
    });
    $("#week").click(function(){
        $("#year").hide();
    });
	$("#day").click(function(){
		$("#year").hide();
	});
});