function oblicz(){
	var a = +document.getElementById("dystans").value;
    var b = +document.getElementById("spalanie").value;
    var wynik = a * (b/100);
    document.getElementById("wynik").innerHTML= "Potrzebujesz:  "+ wynik +" litrów paliwa";
}