$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text'").keypress(function(e){
	if(e.which === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + toDoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
    $("input[type='text'").fadeToggle()
});


