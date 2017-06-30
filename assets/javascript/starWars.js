$(document).ready(function() {

	var LukeImg = $('#LukeSkywalker');
	var ObiImg = $('#ObiWan');
	var BobaImg = $('#BobaFett');
	var DarthImg = $('#DarthVader');
	var enemeyPicks = $('.enemySelect');
	var theAttacker = $('#attacker');
	var theDefender = $('#selectedDefender');
	var CharList = [LukeImg, ObiImg, BobaImg, DarthImg];
	var LukeImgDefender = $(".LukeEnemy");
	var ObiImgDefender = $(".ObiEnemy");
	var BobaImgDefender = $(".BobEnemy");
	var DarthImgDefender = $(".Darthenemy");
	var DefendCharList = [LukeImgDefender, ObiImgDefender, BobaImgDefender, DarthImgDefender];


	//----------------END OF VARIABLES

	function charSelection(char){

		$(char).click(function(){

			if (char == LukeImg){
				LukeImg.removeClass('unselected');
				LukeImg.attr('id', 'attacker');
				$(".ObiEnemy").css('display','initial');
				$(".BobEnemy").css('display','initial');
				$(".Darthenemy").css('display','initial');
				$(ObiImg).css('display','none');
				$(BobaImg).css('display','none');
				$(DarthImg).css('display','none');
			}
			else if (char == ObiImg){
				ObiImg.removeClass('unselected');
				ObiImg.attr('id', 'attacker');
				$(".LukeEnemy").css('display','initial');
				$(".BobEnemy").css('display','initial');
				$(".Darthenemy").css('display','initial');
				$(LukeImg).css('display','none');
				$(BobaImg).css('display','none');
				$(DarthImg).css('display','none');
			}
			else if (char == BobaImg){
				BobaImg.removeClass('unselected');
				BobaImg.attr('id', 'attacker');
				$(".LukeEnemy").css('display','initial');
				$(".ObiEnemy").css('display','initial');
				$(".Darthenemy").css('display','initial');
				$(LukeImg).css('display','none');
				$(ObiImg).css('display','none');
				$(DarthImg).css('display','none');
			}
			else if (char == DarthImg){
				DarthImg.removeClass('unselected');
				DarthImg.attr('id', 'attacker');
				$(".LukeEnemy").css('display','initial');
				$(".ObiEnemy").css('display','initial');
				$(".BobEnemy").css('display','initial');
				$(LukeImg).css('display','none');
				$(ObiImg).css('display','none');
				$(BobaImg).css('display','none');
			}
			$('#firstH1').html("Attacker:");
		});	
	};

		function defendSelection(defender){

			$(defender).click(function(){
				if (defender.hasClass('enemySelect')){
					defender.attr('id', 'selectedDefender');
					$(defender).appendTo($('#defender'));
					$(defender).removeClass($('#enemySelect'));
					$('#enemPick').css("display","none");
				};
			});	
		};


	//----------------END OF FUNCTIONS

	for (i = 0 ; i < CharList.length ; i++){
		charSelection(CharList[i]);
		defendSelection(DefendCharList[i]);
	};

	//----------------END OF SCRIPT	
});