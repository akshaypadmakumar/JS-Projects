let add = document.getElementById("add");
let subtract = document.getElementById("subtract");

let int = document.getElementById("number");
let integer = 0;

add.addEventListener('click', function() {
	integer += 1;
	int.innerHTML = integer;
})

subtract.addEventListener('click', function() {
	integer--;
	int.innerHTML = integer;
})