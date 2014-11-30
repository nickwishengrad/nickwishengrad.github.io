// JavaScript Document
$(document).ready(function() {


//click on social buttons
// if popup is hidden
//		show popup
// else
//		hide popup

$('#rightcontent').click(function() {
	if ($("#popup").css('display') == 'none') {
		setTimeout(function() {
			$("#popup").show();
		}, 0);		
	} else {
		$("#popup").hide();
}
})


// setTimeout(function () {
//       $("#popup").show();
//     }, 20);

//click on cancel or confirm
//	close the popup

$('#buttoncontainter').click(function() {
	
	setTimeout(function() {
	$("#popup").hide();
	}, 500);

})

//if you click confirm, the next time you open the popup, you will be thanked

$("#confirm").click(function(){
  $("#popuptext").text("Thank you for sharing!");
});

$("#confirm").click(function(){
	setTimeout(function() {
	$("#confirm").hide();
	$("#buttoncontainter").css('width', 135)
	$("#cancel").text("Close")
	}, 501);


	
});





  
 //add class "highlight" when hover over the row  
 $('table tbody tr').hover(function() {               
	$(this).addClass('highlight');  
}, function() {  
	$(this).removeClass('highlight');  
});  


// $("#news").click(function() {
// 	$('html, body').animate({
// 		'scrollTop': ($.attr(this, window)
// }, 650);
// })
  
$("#news").click(function() {
	$('html, body').animate({
		'scrollTop': '650'
        }, 650);
});




});  


// $('html, body').animate({
// scrollTop: $( $.attr(this, 'href')).offset().top
// }, 300);


//$("#id").css("display", "none");
//$("#id").css("display", "block");

// $('#icon').hover(function() {



//smooth scroll ...why doesn't any of this work?

// $("#news").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#newsect").offset().top
//     }, 2000);
// });

// $("#topbar").on("click", function( e ) {
// 	e.preventDefault();
// 	$("body, html").animate({ 
// 		scrollTop: $( $(this).attr('href') ).offset().top 
// 	}, 600);
// });

// $('#topbar').offset()
// 650 px (height) --> News
// 1337 px --> tour
// 2036 px --> contact






