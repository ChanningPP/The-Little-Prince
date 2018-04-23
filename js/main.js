$(document).ready(function(){
	//change font size
	$("#large").click(function(){
		$("section p").css("font-size", "2.0em");
		$("section blockquote").css("font-size", "2.2em");
		$("section h1").css("font-size", "2.5em");
		
		
	});
	
	$("#normal").click(function(){
		$("section p").css("font-size", "1.0em");
		$("section blockquote").css("font-size", "1.2em");
		$("section h1").css("font-size", "1.5em");
		
	});
	
	$("#small").click(function(){
		$("section p, blockquote, h1").css("font-size", "0.7em");
	});
	
	//Fading effect	
	$("#dynamic1").click(function(){
		$("#panel1").fadeToggle("slow");
	});
	
	$("#dynamic2").click(function(){
		$("#panel2").fadeToggle("slow");
	});
	
	//paragraph number
	$("#number").click(function(){
		var paragraphs = $('section p');
		for(var i=0; i < paragraphs.length; i++){
			var paraNumber = 1+i;
			$(paragraphs[i]).prepend(paraNumber + ". ");
		}
	});
});