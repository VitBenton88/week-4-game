$(document).ready(function() {

	var charLuke = {
		attackerImg: $('#LukeSkywalker'),
		defenderImg: $('.LukeEnemy'),
		healthPoints: 100,
		attackPower: 10,
		counterAttackPower: 15,
		isAttacker: false,
		isDefender: false,
		loss: function(){
			if (this.healthPoints == 0){
			setTimeout(function(){
				if (confirm("You Lost!") == true){
					location.reload();
					};
				}, 100);		
			};
		},	
	}

	var charObiWan = {
		attackerImg: $('#ObiWan'),
		defenderImg: $('.ObiEnemy'),
		healthPoints: 120,
		attackPower: 20,
		counterAttackPower: 18,
		isAttacker: false,
		isDefender: false,
		loss: function(){
			if (this.healthPoints == 0){
			setTimeout(function(){
				if (confirm("You Lost!") == true){
					location.reload();
					};
				}, 100);		
			};
		},
	}

	var charBobaFett = {
		attackerImg: $('#BobaFett'),
		defenderImg: $(".BobEnemy"),
		healthPoints: 80,
		attackPower: 8,
		counterAttackPower: 12,
		isAttacker: false,
		isDefender: false,
		loss: function(){
			if (this.healthPoints == 0){
			setTimeout(function(){
				if (confirm("You Lost!") == true){
					location.reload();
					};
				}, 100);		
			};
		},
	}

	var charDarthVader = {
		attackerImg: $('#DarthVader'),
		defenderImg: $(".Darthenemy"),
		healthPoints: 105,
		attackPower: 12,
		counterAttackPower: 16,
		isAttacker: false,
		isDefender: false,
		loss: function(){
			if (this.healthPoints == 0){
			setTimeout(function(){
				if (confirm("You Lost!") == true){
					location.reload();
					};
				}, 100);		
			};
		},
	}
	// ---------------- END OF CHARACTER OBJECTS ----------------

	var charList = [charLuke, charObiWan, charBobaFett, charDarthVader];
	var x = undefined;
	var y = undefined;
	// ---------------- END OF GLOBAL VARIABLES ----------------

	function attackerSelection(charObject){

			$(charObject.attackerImg).click(function(){
				$('#firstH1').html('Attacker:');
				if (charObject == charLuke){
					charObject.isAttacker = true;
					charObject.attackerImg.removeClass('unselected');
					charObject.attackerImg.addClass('THEattacker');
					$(charObiWan.defenderImg).css('display','initial');
					$(charBobaFett.defenderImg).css('display','initial');
					$(charDarthVader.defenderImg).css('display','initial');
					$(charObiWan.attackerImg).css('display','none');
					$(charBobaFett.attackerImg).css('display','none');
					$(charDarthVader.attackerImg).css('display','none');
				}
				else if (charObject == charObiWan){
					charObject.isAttacker = true;
					charObject.attackerImg.removeClass('unselected');
					charObject.attackerImg.addClass('THEattacker');
					$(charLuke.defenderImg).css('display','initial');
					$(charBobaFett.defenderImg).css('display','initial');
					$(charDarthVader.defenderImg).css('display','initial');
					$(charLuke.attackerImg).css('display','none');
					$(charBobaFett.attackerImg).css('display','none');
					$(charDarthVader.attackerImg).css('display','none');
				}
				else if (charObject == charBobaFett){
					charObject.isAttacker = true;
					charObject.attackerImg.removeClass('unselected');
					charObject.attackerImg.addClass('THEattacker');
					$(charLuke.defenderImg).css('display','initial');
					$(charObiWan.defenderImg).css('display','initial');
					$(charDarthVader.defenderImg).css('display','initial');
					$(charLuke.attackerImg).css('display','none');
					$(charObiWan.attackerImg).css('display','none');
					$(charDarthVader.attackerImg).css('display','none');
				}
				else if (charObject == charDarthVader){
					charObject.isAttacker = true;
					charObject.attackerImg.removeClass('unselected');
					charObject.attackerImg.addClass('THEattacker');
					$(charLuke.defenderImg).css('display','initial');
					$(charBobaFett.defenderImg).css('display','initial');
					$(charObiWan.defenderImg).css('display','initial');
					$(charLuke.attackerImg).css('display','none');
					$(charBobaFett.attackerImg).css('display','none');
					$(charObiWan.attackerImg).css('display','none');
				}
			});
	};

	function defenderSelection(defender){
		$(defender.defenderImg).click(function(){
			if (defender.defenderImg.hasClass('enemySelect')){
				defender.isDefender = true;
				defender.defenderImg.attr('class', 'selectedDefender');
				$(defender.defenderImg).appendTo($('#defender'));
				$(defender.defenderImg).removeClass($('#enemySelect'));
				$('button').css("display","initial");
				$('.attackerStats ').css("display","initial");
				$('.defenderStats').css("display","initial");

			};
		});	
	};

	function winCheck(defender){
		if (defender.healthPoints == 0){
			setTimeout(function(){
				if (confirm("You won!") == true){
					$('.selectedDefender').css("display","none");
					$('.attackerStats').css("display","none");
					$('.defenderStats').css("display","none");
				};
				}, 100);
			};
	};

	function attackPowerBoost(attacker){
		if (attacker == charLuke){
			attacker.attackPower +=10;
		}
		else if (attacker == charObiWan){
			attacker.attackPower +=20;
		}
		else if (attacker == charBobaFett){
			attacker.attackPower +=8;
		}
		else if (attacker == charDarthVader){
			attacker.attackPower +=12;
		};
	};

	function battle(attacker,defender){
		$('.attackerStats').html("Attacker's Attack Points:<br>" + attacker.attackPower + "<br><br>" + "Attacker's Health Points:<br>" + attacker.healthPoints);
		$('.defenderStats').html("Defender's Counter-Attack Points:<br>" + defender.counterAttackPower + "<br><br>" + "Defender's Health Points:<br>" + defender.healthPoints);


		$('button').click(function(){
			defender.healthPoints = defender.healthPoints - attacker.attackPower;
			attacker.healthPoints = attacker.healthPoints - defender.counterAttackPower;
			attackPowerBoost(attacker);
			winCheck(defender);
			attacker.loss();

		$('.attackerStats').html("Attacker's Attack Points:<br>" + attacker.attackPower + "<br><br>" + "Attacker's Health Points:<br>" + attacker.healthPoints);
		$('.defenderStats').html("Defender's Counter-Attack Points:<br>" + defender.counterAttackPower + "<br><br>" + "Defender's Health Points:<br>" + defender.healthPoints);
		});
	};

	// ---------------- END OF GLOBAL FUNCTIONS ----------------

	for (i = 0 ; i < charList.length ; i++){
		attackerSelection(charList[i]);
		defenderSelection(charList[i]);
	};

	$('.unselected').click(function(){
		for (i = 0 ; i < charList.length ; i++){
			if (charList[i].isAttacker){
				x = charList[i];
			};
		};
	});

	$('.enemySelect').click(function(){
		for (i = 0 ; i < charList.length ; i++){
			if (charList[i].isDefender){
				y = charList[i];
			};
		};
		battle(x,y);
	});
	


	//----------------END OF SCRIPT	
});
