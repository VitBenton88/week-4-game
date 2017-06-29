$(document).ready(function() {

	var LukeImg = $('#LukeSkywalker');
	var ObiImg = $('#ObiWan');
	var BobaImg = $('#BobaFett');
	var DarthImg = $('#DarthVader');


	//----------------END OF VARIABLES

	function firstSelection(char){

		$(char).click(function(){
			if (char = LukeImg){
				$(ObiImg).addClass('enemySelect');
				$(BobaImg).addClass('enemySelect');
				$(DarthImg).addClass('enemySelect');
				$(ObiImg).appendTo($('#enemPick'));
				$(BobaImg).appendTo($('#enemPick'));
				$(DarthImg).appendTo($('#enemPick'));
			};
		});
	};

	//----------------END OF FUNCTIONS

	firstSelection(LukeImg);
	firstSelection(ObiImg);
	firstSelection(BobaImg);
	firstSelection(DarthImg);


	//----------------END OF SCRIPT	
});