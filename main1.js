function Htest(name) {
this.fName = name;
this.metodPhow = function() 
    {
    document.write("<br>");
	document.write("Привет ,"+this.fName+"<br />");
    }
} 
var h = new Htest("Сергей");
var p = new Htest("Петр");
h.metodPhow();
p.metodPhow();