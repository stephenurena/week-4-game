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
for (var i = 0; i < arr.length; i++) {
	$("#blueRandom").val(arr[i]);
	$("#jewelRandom").val(arr[i]);
	$("#redRandom").val(arr[i]);
	$("#rubyRandom").val(arr[i]);
	console.log(arr[i]);
}


// $("#blueRandom").text(jquery.inArray(arr));
// $("#jewelRandom").val(arr);
	// // img random number
	// 	var ImgMinNumber = 20;
	// 	var ImgMaxNumber = 1;
		
	// 	var ImgRandomNumber = randomNumberFromRange(ImgMinNumber, ImgMaxNumber);
	// 		function randomNumberFromRange(min, max){
	// 			return Math.floor(Math.random()*(max-min+1)+min);
				
	// 		}
	// 		// $("#blueRandom").val(ImgRandomNumber);
	// 		// $("#jewelRandom").val(ImgRandomNumber);
	// 		// $("#redRandom").val(ImgRandomNumber);
	// 		// $("#rubyRandom").val(ImgRandomNumber);
	// 		console.log(ImgRandomNumber);
	// 		var randomArr = Array.from({length: 4}, () => Math.floor(Math.random() * 9));
	// 		console.log(randomArr);
		

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
