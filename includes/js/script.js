/*

My Custom JS
============

Author:  Mahmood
Updated: August 2016
Notes:	 testing website with bootstrap3

*/

$(function(){
	
	$('#alertMe').click(function(e){
		e.preventDefault();
		$('#successAlert').slideDown();
	});
	
	$('a.pop').click(function(e){
		e.preventDefault();
	});
	
	$('a.pop').popover();
	$('[rel="tooltip"]').tooltip();
});
