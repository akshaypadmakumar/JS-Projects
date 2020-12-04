// Variables
let pluralNoun = document.querySelector('#plu');
let adjective = document.querySelector('#adj');
let presentTenseVerb = document.querySelector('#pre')
let noun = document.querySelector('#noun');
let story = document.querySelector('#result');
let button = document.querySelector('#button');
let result = '';

//Filling in
function resultf() {
	result = 'There are too many ' + pluralNoun.value + ' on this ' + adjective.value + ', I screamed. Somebody has to ' + presentTenseVerb.value + ' on the ' + noun.value + ' to solve this problem.';
	alert(result);
}

button.addEventListener('click', function() {
	resultf();
})



