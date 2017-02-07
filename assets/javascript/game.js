//GLOBAL Variables
// ======================================================================================



var numberInputs = { //keep in mind, you may have to add more attributes
	wins: "",
	losses: "",
	totalScore: "",
	genNumber: "",
	firstNumber: [""],
	
	secondSelection: "",


	reset: function() {  // keep in mind, you may have to reset more things
		this.totalScore = "";
		this.genNumber = "";
	},

	compute: function(i) {
		return parseInt(this.firstNumber[i]);


	},

	updateNumber: function(newNumber) {
		this.firstNumber += newNumber;
		console.log(this.firstNumber);
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
console.log(arr);
var firstSelection = [];

//Numbers
	$(".numberBtn").on("click", function(i) {
		// numberInputs.updateNumber($(this).val());
		firstSelection.push(randomnumber[i]);
		console.log(firstSelection);
        
      
    });
});




//Functions (reusable blocks of code)
// ======================================================================================









//Main process
// ======================================================================================
