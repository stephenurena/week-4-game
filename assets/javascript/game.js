//game obj
////===================================================================================================================
var game = {
	wins: 0,
	losses: 0,
	gemArr: [],
	guessValue: 0,
	

	//generates a random number for the game
	randomNumber: (Math.floor(Math.random()*(120-19+1)+19)),

	reset: function(){
		this.guessValue = 0;
		$("#guessTotal").html(this.guessValue);
		this.randomNumber = Math.floor(Math.random()*(120-19+1)+19);
		$("#genNumber").html(game.randomNumber);
		
	},

	start: function(){
		$("#genNumber").html(game.randomNumber);
		//generates an array of four random numbers for the gem values
		while(this.gemArr.length < 4) {
			var gemRamNum = Math.floor(Math.random()*(12-1+1)+1);
			if(this.gemArr.indexOf(gemRamNum) > -1) continue;
			this.gemArr[this.gemArr.length] = gemRamNum;
		};
	},

	win: function(){
		this.wins++;
		$("#wins").html(game.wins);
		$("#winLoss").html("<h2>You won!</h2>");
		$("#winLoss").append('<img class="img-thumbnail" src="assets/images/yes.jpg" alt="yes" />');
		var win = new Audio("assets/Sound/win.wav");
		win.play();
	
	},
	lose: function(){
		this.losses++;
		$("#losses").html(game.losses);
		$("#winLoss").html("<h2>You lost!</h2>");
		$("#winLoss").append('<img class="img-thumbnail" src="assets/images/lossJordan.jpg" alt="cryingJordan" />');
		var win = new Audio("assets/Sound/horn.mp3");
		win.play();
	}
}
//event handlers
//===================================================================================================================
$(document).ready(function() {
	game.start()
	
	//will assign random values from game.gemArr to buttons
	$(".numberBtn").each(function (i) {
		$(this).val(game.gemArr[i]);
	})

	$(".numberBtn").on("click", function(){
		game.guessValue += parseInt(this.value);
		$("#guessTotal").html(game.guessValue);
		if(game.guessValue === game.randomNumber){
			game.win();
			game.reset();
			
		}else if(game.guessValue > game.randomNumber){
			game.lose();
			game.reset();
			$(".numberBtn").each(function (i) {
				$(this).val(game.gemArr[i]);
			})
		}
	})
	
})