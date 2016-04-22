function Flas(s,d) {

	this.s = s;
	this.d = d;

	this.show = function () {
		document.write("<br />");
		document.write("("+this.s+","+this.d+")<br>");
	}
}
Flas.MaxPointRes = 100;
Flas.getOrigin = function() {
	return new Flas(1450,20)
}
Flas.dronElem = function() {
	return new Flas(20,20)
}
Flas.dronZelem = function() {
	return new Flas(42,45)
}
var p1 = new Flas(150,100);
p1.show();
p1.s = 150;
p1.d = 295;
p1.show();

var p2 = new Flas(300,500);
p2.show();

Flas.MaxPointRes = 10;
Flas.getOrigin().show();
Flas.dronElem().show();
Flas.dronZelem().show();
Flas.dronElem().show()+dronZelem().show();