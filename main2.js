document.write("----------------------------------");
document.write(" следующий пример");
document.write("----------------------------------");

var Swch = function (drzo) {

	this.drzo = drzo;

	// first variant

	if (drzo === "nice") {
		this.talk = function () {
			alert("Veri nice, good");
		                       };
	} // if
	else if (drzo === "bad") {
		this.talk = function ()
		          {
        alert("Sorry, I am bad ");  
                   };
	} //end if
	else {
		this.talk = function () {
        alert("What? ");
         };
	} //else
}  // Swch

// So, this is main cod

var fMode = prompt("nice or bad:");
var Pers = new Swch(fMode);
Pers.talk();