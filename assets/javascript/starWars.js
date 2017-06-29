$(document).ready(function() {

	var LukeImg = $('#LukeSkywalker');
	var ObiImg = $('#ObiWan');
	var BobaImg = $('#BobaFett');
	var DarthImg = $('#DarthVader');


	//----------------END OF VARIABLES

	function firstSelection(char){

		$(char).click(function(){
			$(char).css('border', '15px solid red');
			$(char).appendTo($('#enemPick'));

		});
	};

	//----------------END OF FUNCTIONS

	firstSelection(LukeImg);
	firstSelection(ObiImg);
	firstSelection(BobaImg);
	firstSelection(DarthImg);











	//----------------END OF SCRIPT	
});