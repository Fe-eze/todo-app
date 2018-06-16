//BEGIN

var plusSign = $("#header i");
applyShadow();
// fade out trash icon on start
//$("#list i").fadeOut();

// Change '+' icon when you hover over it
$(plusSign).hover(
	function(){
		$(this).removeClass("far");
		$(this).addClass("fas");
	},
	function(){
		$(this).removeClass("fas");
		$(this).addClass("far");
	});

// Slide down effect on Todo Input box
$(plusSign).on("click", function(){
	$("#form").slideToggle(300);
});

// hover effect on trash icon
// $("#list div i").hover(
// 	function(){
// 		$(this).fadeIn(200);
// 	},
// 	function(){
// 		$(this).fadeOut(100);
// 	});

// delete when trash is clicked
// DONE need to use delegation so new items can be deleted
$("#list").on("click", "#trash-icon", function(){
	$(this).parent().remove();
});

// add new item to end of list after you press enter
$("input").on("keypress", function(event){
	if(event.which===13){
		$("#list").append("<div><span id='trash-icon'><i class='far fa-trash-alt'></i></span><span>" + $(this).val() + "</span></div>");
		$(this).val("");
		applyShadow();
	}

});

// Strikethru effect when you click todo item
$("#list").on("click", "span", function(){
	$(this).toggleClass("strikeThrough");
});

function applyShadow(){
	$("#list div:nth-child(even)").addClass("evenShadow");
	$("#list div:nth-child(odd)").addClass("oddShadow");
}
