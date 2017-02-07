//GLOBAL Variables
// ======================================================================================



var numberInputs = { //keep in mind, you may have to add more attributes
	wins: "",
	losses: "",
	totalScore: "",
	genNumber: "",
	firstSelection: "",
	secondSelection: "",


	reset: function() {  // keep in mind, you may have to reset more things
		this.totalScore = "";
		this.genNumber = "";
	},

	compute: function() {


	},

	updateNumber: function(newNumber) {

	},


};

$(document).ready(function() {
	//range and function for initial random number selection
		var genMinNumber = 50;
		var genMaxNumber = 10;

		var randomNumber = randomNumberFromRange(genMinNumber, genMaxNumber);
			function randomNumberFromRange(min, max){
				return Math.floor(Math.random()*(max-min+1)+min);
				
			}
			$("#genNumber").html(randomNumber);

			console.log(randomNumber); //remove console.log when complete
			

//generate random array function
var arr = []
while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*(20-1+1)+1);
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
$(".numberBtn").each(function (i) {
	$(this).val(arr[i]);
})



//Numbers
	$("button").on("click", function() {
		//range for initial random number selection
		// var minNumber = 100;
		// var maxNumber = 20;

		// var randomNumber = randomNumberFromRange(minNumber, maxNumber);
		// 	function randomNumberFromRange(min, max){
		// 		return Math.floor(Math.random()*(max-min+1)+min);
		// 	}
		// 	console.log(randomNumber);

	})
});




//Functions (reusable blocks of code)
// ======================================================================================









//Main process
// ======================================================================================
